<?php

namespace App\Http\Controllers;

class SessionController extends Controller
{
    
    public function __construct() {
        
    }
    
    public function generateSession() {
        return array(
          'test' => 'tt'
        );
    }
}
