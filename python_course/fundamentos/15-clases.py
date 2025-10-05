class Person:
    # es el constructor
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def getName(self):
        return self.name
    def getAge(self):
        return self.age
    def greet(self):
        print(f"Hola {self.name} tiene {self.age} años ")

pepe = Person("Joan", 19)
pepe.greet()
