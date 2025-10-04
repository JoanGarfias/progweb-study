#Es como un array
nombre = "Pepesech"

print("El nombre es:", nombre)

#len() devuelve la longitud de la cadena
print("El nombre tiene", len(nombre), "caracteres")

print("El nombre comienza con la letra", nombre[0])


#concatenar

apellido = "Potaxio"
nombreCompleto = nombre + " " + apellido + " "
print(nombreCompleto)
print("El nombre 5 veces: ", nombreCompleto*5)


# metodos de string

print("Nombre en minusculas: ", nombreCompleto.lower())
print("Nombre en mayusculas: ", nombreCompleto.upper())
print("Usando .capitalize: ", nombreCompleto.capitalize())
print("Usando .casefold: ", nombreCompleto.casefold())
