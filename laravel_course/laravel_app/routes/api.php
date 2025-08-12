<?php

use App\Http\Controllers\BackendController;
use App\Http\Controllers\QueriesController;
use App\Http\Controllers\ProductController;
use App\Http\Middleware\CheckValueInHeader;
use App\Http\Middleware\LogRequest;
use App\Http\Middleware\UppercaseName;
use Illuminate\Support\Facades\Route;

Route::get("/test", function() {
    return "El backend funciona correctamente";
});


/**Debe cumplir ciertos requisitos definidos en la documentación de Laravel
 * ya que los API resources en los controladores deben tener ciertas funciones.
 * https://laravel.com/docs/12.x/controllers
 */

Route::apiResource("/products", ProductController::class)
    ->middleware(["checkvalue:17,pato", UppercaseName::class, LogRequest::class]);

Route::get("/backend", [BackendController::class, 'get'])
    ->middleware("checkvalue:15,pato");

Route::get("/backend/{id}", [BackendController::class, 'get']);
Route::get("/persons", [BackendController::class, 'getAll']);
Route::get("/persons/{id}", [BackendController::class, 'getPerson']);

Route::post("/persons", [BackendController::class, 'create']);
Route::put("/persons/{id}", [BackendController::class, 'update']);
Route::delete("/persons/{id}", [BackendController::class, 'delete']);

//Route::get("/products", [QueriesController::class, 'get']);
//Route::get("/products/{id}", [QueriesController::class, 'getById']);

Route::get("/query/method/names", [QueriesController::class, 'getNames']);
Route::get("/query/method/search/{name}/{price}", [QueriesController::class, "searchName"]);

Route::get("/query/method/searchString/{value}", [QueriesController::class, "searchString"]);
Route::get("/query/method/searchProductNameDesc/{value}", [QueriesController::class, "searchProductPerNameDesc"]);


Route::post("/query/method/advancedSearch", [QueriesController::class, "advancedSearch"]);
Route::get("/query/method/join", [QueriesController::class, 'join']);
Route::get("/query/method/groupby", [QueriesController::class, 'groupBy']);

