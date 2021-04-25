<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerificationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('guest')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', RegisterController::class);
    Route::post('/forgot-password', ForgotPasswordController::class);
    Route::post('/reset-password', ResetPasswordController::class);
});


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/verify-email/{id}/{hash}', [VerificationController::class, 'verify']);
    Route::post('/verify-resend', [VerificationController::class, 'resend']);
    Route::patch('/profile', ProfileController::class);
    Route::patch('/password', PasswordController::class);
    Route::get('/user', UserController::class);
    Route::post('/logout', [AuthController::class, 'logout']);
});
