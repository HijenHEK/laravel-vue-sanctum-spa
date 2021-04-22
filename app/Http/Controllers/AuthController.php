<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //

    public function Login(Request $request)
    {

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'status_code' => 500,
                'token_type' => 'Unauthorized , The provided credentials are incorrect.'
            ]);
        }

        $token = Auth::user()->createToken('auth-token')->plainTextToken;

        return response()->json([
            'status_code' => 200,
            'access_token' => $token,
            'token_type' => 'Bearer'

        ]);
    }


    public function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        Auth::guard('web')->logout();
        return response()->json([
            'status_code' => '200',
            'message' => 'logged out successfully'
        ]);
    }
}
