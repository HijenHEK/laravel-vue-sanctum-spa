<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        $user = $request->user();
        $request->validate([
            'password' => 'required|min:6|max:255|confirmed',
        ]);
        $user->update(['password' => Hash::make($request->password)]);
        return response()->json([
            'status_code' => 204,
            'message' => 'password updated successfully .'
        ]);
    }
}
