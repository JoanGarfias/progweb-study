<?php
    /* Un array contiene un gruupo de datos relacionados
     * 
     *  count() es una función que nos permite contar la cantidad de elementos de un array
     */

    $estudiantes = [    'Joan',
                        'Carlos',
                        'Ana',
                        'Maria',
                        'Luis'
                    ];
    $estudiantesCount = count($estudiantes);

    echo "El primer estudiante es: {$estudiantes[0]} <br>";
    echo json_encode($estudiantes);
    echo "<br>Hay {$estudiantesCount} estudiantes registrados <br>";
    echo "<br><br>";

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

    print_r($productos);
    echo "<br><br>";
    echo json_encode($productos);
    

?>