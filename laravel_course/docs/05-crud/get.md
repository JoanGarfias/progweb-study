```php
    //GET con Paginado
    public function index(Request $request){
        //Cuantos registros quieres por pagina
        $perPage = $request->query("per_page", 10);
        //Que pagina quieres
        $page = $request->query("page", 0);
        //Apartir de qué registro haremos la solicitud
        $offset = $page * $perPage;

        /**
         * El skip es para omitir los primeros N registros
         * El take() indica cuantos riegistros debe regresar
         */
        $products = Product::skip($offset)
                    ->take($perPage)
                    ->get();

        return response()->json(
            $products
        );
    }
```