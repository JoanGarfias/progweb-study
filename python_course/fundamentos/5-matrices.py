a = [
    [1, 2, 3],
    [3, 4, 5],
    [5, 6, 7]
]

b = [
    [1, 2, 3],
    [3, 4, 5],
    [5, 6, 7]
]

c = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

for i in range(len(a)):
    for j in range(len(a)):
        c[i][j] = a[i][j] + b[i][j]
    print(c[i])

print(type(a))
