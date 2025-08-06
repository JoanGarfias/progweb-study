<?php

use App\Http\Controllers\BackendController;
use Illuminate\Support\Facades\Route;


Route::get("/test", function() {
    return "El backend funciona correctamente";
});

Route::get("/backend", [BackendController::class, 'get']);
Route::get("/backend/{id}", [BackendController::class, 'get']);
Route::get("/persons", [BackendController::class, 'getAll']);
Route::get("/persons/{id}", [BackendController::class, 'getPerson']);

Route::post("/persons", [BackendController::class, 'create']);
Route::put("/persons/{id}", [BackendController::class, 'update']);
Route::delete("/persons/{id}", [BackendController::class, 'delete']);
