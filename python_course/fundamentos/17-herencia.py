class Persona:
    def __init__(self, nombre, edad, peso, altura):
        self.nombre = nombre
        self.edad = edad
        self.peso = peso
        self.altura = altura

    def getIMC(self):
        return (1.0 * self.peso) / (self.altura**2)

class Materia:
    def __init__(self, nombre, area):
        self.nombre = nombre
        self.area = area

class Alumno(Persona):
    def __init__(self, nombre, edad, peso, altura, promedio):
        super().__init__(nombre, edad, peso, altura)
        self.promedio = promedio

class Profesor(Persona):
    def __init__(self, nombre, edad, peso, altura, materias, alumnos):
        super().__init__(nombre, edad, peso, altura)
        self.materias = materias
        self.alumnos = alumnos


materias = [
    Materia("Pre-cálculo", "Matemáticas"),
    Materia("Cálculo Diferencial", "Matemáticas"),
    Materia("Cálculo Vectorial", "Matemáticas"),
    Materia("Mecánica de Fluidos", "Física"),
    Materia("Arquitectura de Computadoras", "Informática"),
]

alumnos = [
    Alumno("Pepe", 19, 73.5, 1.69, 7.9),
    Alumno("Sech", 17, 71.5, 1.75, 9.2),
    Alumno("Potaxio", 18, 65.5, 1.62, 8.5)
]

profesor1 = Profesor("Juan", 35, 80.5, 1.65, materias, alumnos)
print(profesor1.getIMC())
