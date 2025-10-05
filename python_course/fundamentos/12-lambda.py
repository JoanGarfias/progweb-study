# son funciones anonimas
# solo necesitan parametros y una operación


add = lambda a, b: a + b
multiply = lambda a,b: a*b

print(add(10, 25))
print(multiply(2, 4))

# Cuadrado de un numero
# map es para mapear/transformar cada elemento
numbers = range(11)
squared_numbers = list(map(lambda x: x**2, numbers))
print(squared_numbers)

#Numeros pares
# filter es para filtrar contenido de una lista
numbers = range(11)
even_numbers = list(filter(lambda x: x%2==0, numbers))
print(even_numbers)
