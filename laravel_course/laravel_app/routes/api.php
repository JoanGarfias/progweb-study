<?php

use App\Http\Controllers\BackendController;
use App\Http\Controllers\QueriesController;
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

Route::get("/products", [QueriesController::class, 'get']);
Route::get("/products/{id}", [QueriesController::class, 'getById']);

Route::get("/query/method/names", [QueriesController::class, 'getNames']);
Route::get("/query/method/search/{name}/{price}", [QueriesController::class, "searchName"]);
