# intercambiar filas por columnas en una matriz

a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


tr = [[row[i] for row in a] for i in range(len(a[0]))]
print(tr)


# modo normal

trn = []

for i in range(len(a[0])):
    trn_row = []
    for row in a:
        trn_row.append(row[i])
    trn.append(trn_row)

print(trn)
