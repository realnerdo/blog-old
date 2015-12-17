<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Thujohn\Twitter\Facades\Twitter;

class LoginController extends Controller
{
    public function index(Request $request)
    {
        if($request->session()->has('credentials')):
            if($request->session()->get('credentials')->id == '53294337'):
                return redirect('admin');
            endif;
        else:
            return view('login');
        endif;
    }

    public function login(Request $request)
    {
        $sign_in_twitter = true;
        $force_login = false;

        Twitter::reconfig(['token' => '', 'secret' => '']);
        $token = Twitter::getRequestToken(route('twitter.callback'));

        if(isset($token['oauth_token_secret'])):
            $url = Twitter::getAuthorizeURL($token, $sign_in_twitter, $force_login);

            $request->session()->put('oauth_state', 'start');
            $request->session()->put('oauth_request_token', $token['oauth_token']);
            $request->session()->put('oauth_request_token_secret', $token['oath_token_secret']);

            return redirect($url);
        endif;

        return route('twitter.error');
    }

    public function callback(Request $request)
    {
        if($request->session()->has('oauth_request_token')):

            $request_token = [
                'token' => $request->session()->get('oauth_request_token'),
                'secret' => $request->session()->get('oauth_request_token_secret')
            ];

            Twitter::reconfig($request_token);

            $oauth_verifier = false;

            if($request->has('oauth_verifier'))
                $oauth_verifier = $request->input('oauth_verifier');

            $token = Twitter::getAccessToken($oauth_verifier);

            if(!isset($token['oauth_token_secret']))
                return route('twitter.login')->with('flash_error', 'We could not log you in on Twitter.');

            $credentials = Twitter::getCredentials();

            if(is_object($credentials) && !isset($credentials->error)):
                $request->session()->put('access_token', $token);
                $request->session()->put('credentials', $credentials);

                return redirect('login')
                    ->with('flash_notice', 'Congrats! You\'ve successfully signed in!');
            endif;

            return route('twitter.error')
                    ->with('flash_error', 'Crab! Something went wrong while signing you up!');
        endif;
    }

    public function error()
    {
        # code...
    }

    public function logout(Request $request)
    {
        $request->session()->forget('access_token');
        $request->session()->forget('credentials');
        $request->session()->flush();

        return redirect('/')
                ->with('flash_notice', 'You\'ve successfully logged out!');
    }
}
