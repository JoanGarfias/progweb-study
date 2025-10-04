def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplicacion(a, b):
    return a * b

def division(a, b):
    return a / b

def potencia(a, b):
    return a ** b

def raiz_cuadrada(a):
    return a ** 0.5

def getInputs(cant):
    num1 = float(input("Ingrese el primer número: "))
    num2 = None
    if(cant == 2):
        num2 = float(input("Ingrese el segundo número: "))
        return num1, num2
    else:
        return num1

print("Calculadora en python")
print("1. Suma")
print("2. Resta")
print("3. Multiplicación")
print("4. División")
print("5. Potencia")
print("6. Raíz cuadrada")
print("7. Salir")
opcion = int(input("Ingrese una opción: "))

if(opcion == 1): #Suma
    num1, num2 = getInputs(2)
    print("El resultado es:", suma(num1, num2))
elif(opcion == 2): #Resta
    num1, num2 = getInputs(2)
    print("El resultado es:", resta(num1, num2))
elif(opcion == 3): #Producto
    num1, num2 = getInputs(2)
    print("El resultado es:", multiplicacion(num1, num2))
elif(opcion == 4): #División
    num1, num2 = getInputs(2)
    if(num2 != 0):
        print("El resultado es:", division(num1, num2))
    else:
        print("Error: División por cero")
elif(opcion == 5): #Potencia
    num1 = getInputs(1)
    print("El numero elevado al cuadrado es:", potencia(num1, 2))
elif(opcion == 6): #Raíz cuadrada
    num1 = getInputs(1)
    print("La raiz cuadrada es: ", raiz_cuadrada(num1))
elif(opcion == 7): #Salir
    print("Saliendo...")
elif(opcion == 8):
    print("Opción inválida")
