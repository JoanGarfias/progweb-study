<?php

/**
 * Una función pura en PHP es aquella que cumple:
 * 
 * 1) Para el mismo conjunto de entradas (input) siempre devuelve el mismo resultado (output).
 * 2) No produce efectos secundarios: no modifica variables externas, no cambia objetos,
 *    no escribe en archivos, no altera el estado global, etc.
 */

class Counter{
    public int $count = 0;
}

$counter = new Counter();

/**
 * ❌ NO ES FUNCIÓN PURA:
 * 
 * - Modifica el estado del objeto recibido ($counter->count++).
 * - Tiene efectos secundarios porque el objeto externo cambia después de llamarla.
 */
function show(Counter $counter): string {
    $counter->count++;
    return "El contador es: " . $counter->count . "<br>";
}

/**
 * ✅ FUNCIÓN PURA:
 * 
 * - Para los mismos parámetros siempre devuelve el mismo resultado.
 * - No altera ningún objeto ni variable fuera de su alcance.
 */
function add(float $a, float $b): float {
    return $a + $b;
}

/**
 * ✅ También es una función pura:
 * - Solo usa su parámetro y devuelve un string sin modificar nada externo.
 */
function showPure(float $count): string {
    return "El contador es: " . $count . "<br>";
}

// Uso: incrementamos manualmente el contador sin efectos secundarios.
$counter->count = add($counter->count, 1);
echo showPure($counter->count);

$counter->count = add($counter->count, 1);
echo showPure($counter->count);

$counter->count = add($counter->count, 1);
echo showPure($counter->count);

$counter->count = add($counter->count, 1);
echo showPure($counter->count);
