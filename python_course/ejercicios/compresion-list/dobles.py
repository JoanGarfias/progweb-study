nums = [1, 2, 3, 4, 5]

#forma optimizada
dobles = [n*2 for n in nums]
print(dobles)

#no lo recomiendo
#doblesv2 = [nums[i]*2 for i in range(0, len(nums))]
#print(doblesv2)

#si una palabra tiene menos de 5 letras, debe guardarse
#*CORTA
palabras = ["python", "flask", "django", "java", "c"]

palabrasFiltrado = [str if len(str) >= 5 else "*CORTA" for str in palabras]
print(palabrasFiltrado)


matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

listaPlana = [num for row in matriz for num in row]
print(listaPlana)
