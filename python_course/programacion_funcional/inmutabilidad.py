def sumar(x, y):
    return x + y

def aplicar_funcion(func, x, y):
    return func(x, y)

resultado = aplicar_funcion(sumar, 3, 9)

print(resultado)
