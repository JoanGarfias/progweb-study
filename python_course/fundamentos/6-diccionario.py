numbers = {
    1: "uno",
    2: "dos",
    3: "tres",
    4: "cuatro",
    5: "cinco",
    6: "seis",
    7: "siete",
    8: "ocho",
    9: "nueve",
    10: "diez"
}

print(numbers[5])

person = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "email": "john@example.com"
}


print(person)
del person["email"]
print(person)
clavesPersonas = person.keys()
valoresPersonas = person.values()
print(clavesPersonas)
print(valoresPersonas)

#Crea una tupla
pares = person.items()
print(pares)
