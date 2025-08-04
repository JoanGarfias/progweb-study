<?php

$const = 1;

$sum = function(float $a, float $b) use ($const) : float{
    return $a + $b + $const;
};

echo "La suma de 5 y 3 es: " . $sum(5, 3) . "<br>";