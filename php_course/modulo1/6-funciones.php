<?php

/**
 *  array_filter() es una función que toma un array y lo filtra
 * el criterio para filtrar se define mediante una función de callback (anonima) 
 * 
 */

$productos = [
    [
        'nombre' => 'Laptop',
        'precio' => 120.5,
    ],
    [
        'nombre' => 'Mouse',
        'precio' => 15.99,
    ],
    [
        'nombre' => 'Teclado',
        'precio' => 25.75,
    ],
    [
        'nombre' => 'Monitor',
        'precio' => 200.0,
    ]
];

$productosFiltrados = array_filter(
    $productos, function($product){
        return $product['precio'] > 50;
    }
);

print_r($productosFiltrados);