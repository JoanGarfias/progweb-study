# 🐘 **Interfaces en PHP**

## 📌 ¿Qué es una interfaz?

En PHP, una **interfaz** es un **contrato** que especifica qué métodos una clase debe implementar.  
- **No** define cómo se implementan los métodos, solo los declara.  
- **No** puede contener propiedades.  
- Permite que diferentes clases compartan el mismo contrato aunque no estén relacionadas entre sí.

---

## ✅ **Características de las interfaces**

- Se declaran con la palabra clave `interface`.
- Los métodos definidos en una interfaz son siempre **públicos** y no tienen cuerpo.
- Una clase implementa una interfaz usando la palabra clave `implements`.
- Una clase puede **implementar múltiples interfaces**, lo que permite una especie de herencia múltiple de contratos.

---

## 🔥 **Ejemplo básico de interfaces**

```php
// Definimos un contrato
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

// Clase que usa el contrato
class Checkout {
    private PaymentMethod $payment;

    public function __construct(PaymentMethod $payment) {
        $this->payment = $payment;
    }

    public function processOrder(float $amount) {
        echo "Procesando orden...<br>";
        $this->payment->pay($amount);
    }
}

// --- USO ---
$order1 = new Checkout(new PayPal());
$order1->processOrder(100);

$order2 = new Checkout(new CreditCard());
$order2->processOrder(200);
