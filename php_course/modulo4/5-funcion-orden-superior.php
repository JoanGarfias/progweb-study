<?php

/**
 * FUNCIONES DE ORDEN SUPERIOR (Higher-Order Functions)
 * 
 * - Son funciones que pueden recibir otras funciones como parámetros,
 *   y/o devolver funciones como resultado.
 * - Este patrón es típico de la programación funcional y permite:
 *      1) Reutilizar lógica sin duplicar código.
 *      2) Hacer el código más flexible y expresivo.
 *      3) Componer comportamientos dinámicamente.
 *
 * En PHP, se logra mediante el uso de "callables" (funciones, closures, arrow functions).
 */

// ✅ Ejemplos de funciones anónimas (closures) que realizan operaciones:
$suma = function(float $a, float $b): float {
    return $a + $b;
};

$mul = function(float $a, float $b): float {
    return $a * $b;
};

/**
 * ✅ show: FUNCIÓN DE ORDEN SUPERIOR
 * 
 * - Recibe como primer argumento una función ($fn) que debe ser "callable".
 * - Ejecuta la función pasada con los parámetros $a y $b.
 * - Muestra el resultado y también lo retorna.
 */
function show(callable $fn, float $a, float $b): float {
    $resultado = $fn($a, $b); // ejecuta la función recibida
    echo "Resultado: {$resultado}<br>";
    return $resultado;
}

// ▶️ Uso de la función de orden superior con distintas funciones:
echo "<strong>Sumando:</strong><br>";
show($suma, 3, 5);

echo "<br><strong>Multiplicando:</strong><br>";
show($mul, 3, 5);




//Otro ejempl


$square = function(float $n): float{
    return $n * $n;
};

$double = function(float $n): float{
    return $n * 2;
};

$increment = function(float $n): float{
    return $n + 1;
};

function appyToArray(callable $fn, array $array): array{
    $newArray = [];
    $counter = 0;
    foreach($array as $elem){
        $newArray[$counter] = $fn($elem);
        $counter++;
    }
    return $newArray;
}

$numbers = [1, 2, 3, 4, 5];
echo "<br><strong>Aplicando funciones a un array:</strong><br>";

$squaredNumbers = appyToArray($square, $numbers);
echo "Cuadrados: " . implode(", ", $squaredNumbers) . "<br>";

$doubledNumbers = appyToArray($double, $numbers);
echo "Dobles: " . implode(", ", $doubledNumbers) . "<br>";

$incrementedNumbers = appyToArray($increment, $numbers);
echo "Incrementados: " . implode(", ", $incrementedNumbers) . "<br>";


