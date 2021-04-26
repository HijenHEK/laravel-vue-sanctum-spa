<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    //
    use VerifiesEmails;

    /**
     * Mark the authenticated user's email address as verified.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */

    public function verify(Request $request)
    {
        if (
            !hash_equals((string) $request->route('id'), (string) $request->user()->getKey())
            || !hash_equals((string) $request->route('hash'), sha1($request->user()->getEmailForVerification()))
        ) {

            return response()->json(['message' => 'Verification error ! Try again'], 500);
        }

        if ($request->user()->hasVerifiedEmail()) {
            return response()->json(['message' => 'already verified !'], 200);
        }

        if ($request->user()->markEmailAsVerified()) {
            return response()->json(['message' => 'email verified successfully !'], 200);
        }

        return response()->json(['verified' => true]);
    }


    /**
     * Resend the email verification notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     */
    public function resend(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json(['message' => 'already verified !'], 200);
        }

        $request->user()->sendEmailVerificationNotification();
        return response()->json(['message' => 'verification email has been resent !', 200]);
    }
}
