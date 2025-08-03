<?php

/**
 * El poliformismo es un concepto de la programación orientada a objetos que 
 * permite que diferentes clases implementen el mismo método de manera diferente. 
 * 
 */

class Persona{
    public string $nombre;
    public string $apellido;
    public float $estatura;
    public float $peso;

    public function __construct(string $nombre, string $apellido, float $estatura, float $peso){
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->estatura = $estatura;
        $this->peso = $peso;
    }

    public function calcularIMC(): float{
        return ($this->peso / ($this->estatura * $this->estatura) ) + 1;
    }
}

class Doctor extends Persona{
    public string $especialidad;

    public function __construct(string $nombre, string $apellido, float $estatura, float $peso, string $especialidad){
        parent::__construct($nombre, $apellido, $estatura, $peso);
        $this->especialidad = $especialidad;
    }

    public function calcularIMC(): float{
        return $this->peso / ($this->estatura * $this->estatura);
    }
}

$carlos = new Persona("Carlos", "Gomez", 1.70, 72.0);
$carlosDoctor = new Doctor("Carlos Dr.", "Perez", 1.70, 72.0, "Cardiología");

echo "IMC de Carlos: " . $carlos->calcularIMC() . "<br>";
echo "IMC de Carlos Doctor: " . $carlosDoctor->calcularIMC() . "<br>";