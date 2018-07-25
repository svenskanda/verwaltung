<?php
  namespace App\Classes\sba;
  
  class Common {
    public function _construct() {}
    
    public function generateUid($prefix = '', $entropy = false) {
      return uniqid($prefix, $entropy);
    }
    
    public function checkMail($email) {
      return (is_string($email) && filter_var($email, FILTER_VALIDATE_EMAIL));
    }
    
    public function hashPassword($password) {
      $return = false;
      if(is_string($password)) {
        $return = password_hash($password, PASSWORD_BCRYPT);
      }
      return $return;
    }
    
  }
?>