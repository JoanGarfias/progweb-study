<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckValueInHeader
{
    public function handle(Request $request, Closure $next, $number, $some): Response
    {
        if($request->header("token") !== "123456"){
            return response()->json([
                "message" => "Acceso denegado $number $some"
            ], 403);
        }

        return $next($request);
    }
}
