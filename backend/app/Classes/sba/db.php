<?php

namespace App\Classes\sba;

class DB {
	
	public static $db_con = null;
	
	public static function connection() {
		require_once(str_replace('public', 'app', $_SERVER['DOCUMENT_ROOT']) . '\configs.php');
		$tmp_db = new \mysqli($db_auth['host'], $db_auth['username'], $db_auth['password'], $db_auth['table']);
		self::$db_con = (!$tmp_db ? null : $tmp_db);
	}
	
	public static function select($felder = '*', $filter = array(), $direction = 'DESC') {
		
		if(is_null(self::$db_con)) {
			self::connection();
		}
		
		$felder_string = is_string($felder) ? $felder : '';
		$filter_string = '';
		$join_string = '';
		$called_class_without_ns =  substr(strrchr(get_called_class(), "\\"), 1);
		$called_class = get_called_class();
		$table_name = strtolower($called_class_without_ns);
		$table_alias = substr($table_name, 0, 3);
		$return_data = array();
		
		// zusammensetzen der Felder
		if(is_array($felder) && !empty($felder)) {
			foreach($felder as $feld) {
			  $felder_string.= ($felder_string === '' ? '': ',');
			  if(is_array($called_class::$joins) && !empty($called_class::$joins) && isset($called_class::$joins[$feld])) {
				if(isset($called_class::$joins[$feld]['select'])) {
				   $felder_string.=  $called_class::$joins[$feld]['select'] . ' AS `' . $feld . '`';
				   $join = str_replace('<\\AL\\>', '`'.$table_alias.'`', $called_class::$joins[$feld]['join']);
				   $join_string.= ' ' . $join;
				}
			  } else {
				$felder_string.= '`' . $table_alias . '`.`' . $feld . '`';
			  }
			}
		}
		
		// Ggf. Filter zusammensetzen
		foreach($filter as $key => $value) {
		  $filter_string = ($filter_string === '' ? 'WHERE' : 'AND');
		  if(is_string($value)) {
			if(strpos($value, ',')) {
			  $tmp_string = '(';
			  $tmp = explode(',', $value);
			  foreach($tmp as $tmp_value) {
				$tmp_string.= ($tmp_string === '' ? '' : 'OR') . '`'.$table_alias.'`.`'.$key.'` = ';
				$tmp_string.= (is_numeric($tmp_value) ? $tmp_value : '"'.$tmp_value.'"');
			  }
			  $tmp_string.= ')';
			  $filter_string.= $tmp_string;
			} else {
			  $filter_string.= '`' . $table_alias . '`.`' . $key . '`' . (strpos($value, '%') ? ' LIKE ' : ' = ') . '"' . $value . '"';
			}
		  } else {
			$operator = '=';
			if(strpos($key, '_OP') !== false) {
			  $key = $key.split('_OP');
			  $key = $key[0];
			  $operator = $key[1];
			}
			$filter_string.= '`' . $table_alias . '`.`' . $key . '` ' . $operator . ' ' . $value;
		  }
		}
		
		$query = 'SELECT ' . $felder_string . ' FROM `' . $table_name . '` AS `' . $table_alias . '`' . ($filter_string !== '' ? ' ' . $filter_string : '') .
		  ($join_string !== '' ? $join_string : '');
		  
		if(!is_null(self::$db_con)) {
			$result = self::$db_con->query($query);
			if($result) {
				while($row = $result->fetch_assoc()) {
				  $return_data[] = $row;
				}
			}
		}
		
		return $return_data;
	}
	
	public static function insert($hinzufuegen_felder = array()) {
		$return = false;
		$value_string = '';
		$felder_string = '';
		$called_class = substr(strrchr(get_called_class(), "\\"), 1);
		$table_name = strtolower($called_class);
		$table_alias = substr($table_name, 0, 3);
		
		if(!empty($hinzufuegen_felder)) {
			foreach($hinzufuegen_felder as $feld => $value) {
				$felder_string.= ($felder_string !== '' ? ',' : '') . '`' . $feld . '`';
				$value_string.= ($value_string !== '' ? ',' : '') . (is_string($value) ? '"'. $value .'"' : $value);
			}
			
			$query = 'INSERT INTO `' . $table_name . '` (' . $felder_string . ') VALUES (' . $value_string . ')';
			
			if(!is_null(self::$db_con)) {
			  self::$db_con->query($query);
			  $return = self::$db_con->insert_id;
			}
		} 
		
		return $return;
	}
}
?>