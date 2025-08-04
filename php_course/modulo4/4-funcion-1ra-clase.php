<?php

/**
 * FUNCIONES DE PRIMER ORDEN
 *
 * - En PHP, las funciones pueden ser asignadas a variables.
 * - Pueden pasarse como argumento a otra función.
 * - Pueden devolverse como resultado de una función.
 */

// 1. Asignar una función a una variable (closure)
$square = function(int $n): int {
    return $n * $n;
};

echo "El cuadrado de 4 es: " . $square(4) . "<br>"; // 16


// 2. Pasar una función como argumento
function apply(callable $fn, array $numbers): array {
    $result = [];
    foreach ($numbers as $n) {
        $result[] = $fn($n); // ejecuta la función pasada
    }
    return $result;
}

$nums = [1, 2, 3, 4];
$squared = apply($square, $nums);

echo "Números al cuadrado: " . implode(', ', $squared) . "<br>";


// 3. Devolver una función desde otra función
function multiplier(int $factor): callable {
    return function(int $n) use ($factor): int {
        return $n * $factor;
    };
}

$double = multiplier(2);
echo "5 multiplicado por 2 es: " . $double(5) . "<br>";
