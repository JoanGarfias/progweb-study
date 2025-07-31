<?php

/**
 * Qué son las interfaces
 * Es un contrato
 * No tiene metodos que son implementados, y tampoco tiene propiedades
 * SOLO tienen metodos por implementar
 * 
 * Es parte de la base de arquitectura de software
 * Para que puedas trabajar con las clases implementando las interfaces.
 */

// Contrato: cualquier clase que implemente PaymentMethod debe tener pay()
interface PaymentMethod {
    public function pay(float $amount);
}

// Implementación concreta 1
class PayPal implements PaymentMethod {
    public function pay(float $amount) {
        echo "Pagando $amount con PayPal<br>";
    }
}

// Implementación concreta 2
class CreditCard implements PaymentMethod {
    public function pay(float $amount) {
        echo "Pagando $amount con Tarjeta de Crédito<br>";
    }
}

// Clase que usa el contrato (no sabe cuál método de pago es)
class Checkout {
    private PaymentMethod $payment;

    public function __construct(PaymentMethod $payment) {
        $this->payment = $payment;
    }

    public function processOrder(float $amount) {
        echo "Procesando orden...<br>";
        $this->payment->pay($amount); // PHP ejecuta el pay() de la clase real
    }
}

// --- USO ---
$order1 = new Checkout(new PayPal());
$order1->processOrder(100);

$order2 = new Checkout(new CreditCard());
$order2->processOrder(200);
