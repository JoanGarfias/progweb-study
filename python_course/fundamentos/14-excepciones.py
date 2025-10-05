try:
    divisor = int(input("Ingresa un numero divisor: "))
    resultado = 100/divisor
    print(resultado)
    #Hay más excepciones, no solo la división por cero
except ZeroDivisionError as e:
    print("El divisor no puede ser cero", e)
except ValueError as e:
    print("El valor ingresado no es válido", e)
