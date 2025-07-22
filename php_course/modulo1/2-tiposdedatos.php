<?php

/**
 * Tipso de datos en PHP
 * 
 *  null
 *  int
 *  float
 *  string
 *  boolean
 *  array
 */

//Tipo de dato String
$nombre = 'Joan';
echo "Hola, mi nombre es $nombre <br>";
echo var_dump($nombre);
echo "<br><br><br><br>";

//Tipo de dato numero
$edad = 20;
echo " Tengo $edad años. <br>";
echo var_dump($edad);
echo "<br><br><br><br>";

//Tipo de dato float
$precio = 12.677;
echo "El precio del producto es ${precio} <br>";
echo var_dump($precio);
echo "<br><br><br><br>";


//Tipo de dato booleano
$esEstudiante = true;
echo " ¿Soy estudiante? " . ($esEstudiante ? 'Sí' : 'No') . ".<br>";
echo var_dump($esEstudiante);
echo "<br><br><br><br>";

//Tipo de dato array
$materias = ['PHP', 'JavaScript', 'HTML', 'CSS'];
echo " Mis materias son: " . implode(', ', $materias) . ".<br>";
echo var_dump($materias);

$tarea = null;
echo "<br><br> La variable tarea es: " . var_dump($tarea);

?>