<?php

/**
 *  Ciclos
 *  
 *  for(i=0; i < N; i++)
 *  foreach($array as $valor)
 *  while(condicion)
 *  do while(condicion)
 */





//CICLO FOR

echo "CICLO FOR <br><br>";
$suma = 0;
for($i = 0; $i < 100; $i++){
    $suma += $i;
}
echo "El valor de la suma del 0 al 100 es de {$suma} <br><br>";



//CICLO WHILE - mostrando todos los multiplos de 2 (del 2 hasta el 100)
echo "CICLO WHILE <br><br>";
$multiplo = 2;
while($multiplo <= 100){
    echo "{$multiplo},";
    $multiplo += 2;
}
echo "<br><br>";

//CICLO FOREACH
echo "CICLO FOREACH <br><br>";
$futbolistas = [
    [
        'nombre' => 'Lionel Messi',
        'edad' => 36,
        'posicion' => 'Delantero'
    ],
    [
        'nombre' => 'Cristiano Ronaldo',
        'edad' => 38,
        'posicion' => 'Delantero'
    ],
    [
        'nombre' => 'Neymar Jr.',
        'edad' => 31,
        'posicion' => 'Delantero'
    ]
];

foreach($futbolistas as $futbolista){
    echo "Futbolista: {$futbolista['nombre']} <br>";
    echo "Edad: {$futbolista['edad']} <br>";
    echo "Posición: {$futbolista['posicion']} <br><br><br><br>";
}

?>