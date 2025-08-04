<?php

/**
 * INMUTABILIDAD
 * 
 * - Es la propiedad de un objeto cuyos valores no cambian después de su creación.
 * - En lugar de modificar el objeto actual, se devuelve una nueva instancia con el nuevo estado.
 * - Beneficios:
 *    1) Evita efectos secundarios.
 *    2) Facilita el razonamiento del código y depuración.
 *    3) Compatible con el diseño de funciones puras.
 * - Cuándo usar:
 *    - Cuando quieres seguridad, consistencia y facilidad de prueba.
 *    - Ejemplo: valores de coordenadas, fechas, configuraciones, etc.
 */

class Location {
    private float $x;
    private float $y;

    public function __construct(float $x, float $y){
        $this->x = $x;
        $this->y = $y;
    }

    public function getX(): float{
        return $this->x;
    }

    public function getY(): float{
        return $this->y;
    }

    /**
     * Método inmutable: no cambia el objeto actual,
     * sino que devuelve uno nuevo con el nuevo estado.
     */
    public function move(float $nx, float $ny): Location{
        return new Location($this->x + $nx, $this->y + $ny);
    }
}

$location = new Location(10, 20);
echo "Ubicación original: ({$location->getX()}, {$location->getY()})<br>";

// No modificamos la ubicación original; se crea una nueva instancia
$newLocation = $location->move(5, -10);
echo "Nueva ubicación: ({$newLocation->getX()}, {$newLocation->getY()})<br>";
