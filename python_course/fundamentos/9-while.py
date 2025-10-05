import random
#escribir solamente los numeros pares del 2 al 100
# i = 2

# while(i < 100):
#     print(i)
#     i += 2


# adivina el numero aleatorio

def isWinner(num, aleatorio):
    return num == aleatorio

numAleatorio = random.randint(0, 100)
intentos = 5
print("Adivina el número aleatorio", numAleatorio)

while(intentos > 0):
    num = int(input("Ingresa un número: "))

    if(isWinner(num, numAleatorio)):
        print("Has ganado!")
        break
    elif numAleatorio < num:
        print("El numero es menor")
    elif numAleatorio > num:
        print("El numero es mayor")

    intentos-=1

    if(intentos == 0):
        print("has perdido!")
    else:
        print("Te quedan ", intentos, " intentos")
