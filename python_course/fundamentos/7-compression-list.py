# COMPRESION LIST
# expresion for item in iterable if condition

# todos los numeros pares del 1 al 10 elevados al cuadrado
squares = [x**2 for x in range(1, 11) if x % 2 == 0]

print(squares)

celsius = [10, 330, 210, 55, 22]
fahrenheit = [(9.0/5.0*c)+32 for c in celsius]
print(fahrenheit)
