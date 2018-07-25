<?php

namespace App\Http\Controllers;

use App\Classes\web\About;
use App\Classes\web\Archiv;
use App\Classes\web\Awards;
use App\Classes\web\Results;

use App\Classes\sba\Common;

class WebContentController extends Controller
{
    /**
     * Diese Methode ermittelt gibt den Content für die "Ueber Uns" zurueck.
     * @author Sebastian Koers
     * @return
     */
    public static function about() {
      $about = About::select(
        array(
          'id',
          'headline',
          'content'
        )
      );
      return $about;
    }
    
    /**
     * Diese Methode ermittelt gibt den Content für das "Archiv" zurueck.
     * @author Sebastian Koers
     * @return
     */
    public static function archiv() {
      $archiv = Archiv::select(
        '*',
        array(
          'date_created_OP<' => date('Y-m-d H:i:s', (mktime(0, 0, 0, date("m"), 1,  date("Y"))))
        )
      );
    }
    
    /**
     * Diese Methode ermittelt gibt den Content für die "News" zurueck.
     * @author Sebastian Koers
     * @return
     */
    public static function news() {
      $archiv = Archiv::select(
        '*',
        array(
          'date_created_OP>=' => date('Y-m-d H:i:s', (mktime(0, 0, 0, date("m"), 1,  date("Y"))))
        )
      );
    }
    
    /**
     * Diese Methode ermittelt gibt den Content für die "Koenige" zurueck.
     * @author Sebastian Koers
     * @return
     */
    public static function awards() {
      $awards = Awards::select(
        array(
          'firstname',
          'lastname',
          'year_start',
          'year_end'
        )
      ); 
    }
    
    /**
     * Diese Methode ermittelt gibt den Content für die "Ergebnisse" zurueck.
     * @author Sebastian Koers
     * @return
     */
    public static function results() {
      $results = Results::select(
        array(
          'firstname',
          'lastname',
          'result',
          'typ'
        )
      );  
    }
}
