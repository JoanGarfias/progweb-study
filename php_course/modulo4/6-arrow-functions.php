<?php

/**
 * ARROW FUNCTIONS (Funciones Flecha) en PHP
 *
 * - Introducidas en PHP 7.4.
 * - Son una forma más concisa de declarar funciones anónimas.
 * - Se escriben con la sintaxis: fn (parámetros) => expresión;
 * - Retornan automáticamente el valor de la expresión (no es necesario usar 'return').
 * - Capturan variables del ámbito externo por 'valor' automáticamente (no requieren 'use').
 * - No tienen su propio 'scope' para $this, igual que las closures.
 *
 * ➤ Ventajas:
 *   1) Código más limpio y compacto.
 *   2) Útiles para callbacks, operaciones simples y programación funcional.
 *
 * ➤ Limitación:
 *   - Solo pueden contener una expresión (no permiten múltiples sentencias).
 */

// ✅ Ejemplo: arrow function que suma dos números
$sum = fn (float $a, float $b): float => $a + $b;

echo "La suma de 5 y 3 es: " . $sum(5, 3);
