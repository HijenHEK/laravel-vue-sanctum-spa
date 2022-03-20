<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //

    public function __invoke(Request $request)
    {
        if(auth()->check()){
            return response()->json(auth()->user());
        }
    }
}
