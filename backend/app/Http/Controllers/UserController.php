<?php

namespace App\Http\Controllers;

use App\Classes\sba\User;
use App\Classes\sba\Password;
use App\Classes\sba\Address;

use App\Classes\sba\Common;

class UserController extends Controller
{
    
    public static function loginUser() {
        $username = isset($_POST['username']) ? $_POST['username'] : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';
    }
    
    public static function registerUser() {
      
      $return = array(
        'success' => false,
        'fehlermeldungen' => array()
      );
      
      $username = isset($_POST['username']) ? $_POST['username'] : '';
      $password = isset($_POST['password']) ? $_POST['password'] : '';
      $zip_code = isset($_POST['zip_code']) ? $_POST['zip_code'] : '';
      $city = isset($_POST['zip_code']) ? $_POST['zip_code'] : '';
      $country = isset($_POST['country']) ? $_POST['country'] : '';
      $street = isset($_POST['street']) ? $_POST['street'] : '';
      $house_number = isset($_POST['house_number']) ? $_POST['house_number'] : '';
      $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : '';
      $lastname = isset($_POST['lastname']) ? $_POST['lastname'] : '';
      $datum_agb = isset($_POST['accept_agb']) ? $_POST['accept_agb'] : '0000-00-00 00:00:00';
      $datum_datenschutz = isset($_POST['accept_datenschutz']) ? $_POST['accept_datenschutz'] : '0000-00-00 00:00:00';
      
      
      if($username !== '' && $password !== '' && $zip_code !== '' && $city !== ''
        && $country !== '' && $street !== '' && $house_number !== '' && $firstname !== '' && $lastname !== ''
      ) {
        $adress_id = Adress::insert(
          array(
            'firstname' => $firstname,
            'lastname' => $lastname,
            'street' => $street,
            'house_number' => $house_number,
            'zip' => $zip,
            'city' => $city,
            'country' => $country
          )
        );
        
        $password_id = Password::insert(
          array(
            'hash' => $password
          )
        );
        
        if($password_id !== false && $adress_id !== false) {
            $user_id = User::insert(
              array(
                'username' => $username,
                'password_id' => $adress_id,
                'adress_id' => $password_id,
                'last_login' => '0000-00-00 00:00:00',
                'accept_agb' => $datum_agb,
                'accept_datenschutz' => $datum_datenschutz,
                'rolle_ids' => ''
              )
            );
        }
      } else {
        if($username === '') {
          $return['fehlermeldungen'][] = 'Benutzername muss ausgefüllt sein.';  
        }
        if($password === '') {
          $return['fehlermeldungen'][] = 'Passwort muss ausgefüllt sein.';  
        }
        if($zip_code === '') {
          $return['fehlermeldungen'][] = 'PLZ muss ausgefüllt sein.';  
        }
        if($city === '') {
          $return['fehlermeldungen'][] = 'Stadt muss ausgefüllt sein.';  
        }
        if($country === '') {
          $return['fehlermeldungen'][] = 'Land muss ausgefüllt sein.';  
        }
        if($house_number === '') {
          $return['fehlermeldungen'][] = 'Hausnummer muss ausgefüllt sein.';  
        }
        if($firstname === '') {
          $return['fehlermeldungen'][] = 'Vorname muss ausgefüllt sein.';  
        }
        if($lastname === '') {
          $return['fehlermeldungen'][] = 'Nachname muss ausgefüllt sein.';  
        }
        if($street === '') {
          $return['fehlermeldungen'][] = 'Strasse muss ausgefüllt sein.';  
        }
      }
      
      return $_GET;
    }
}
