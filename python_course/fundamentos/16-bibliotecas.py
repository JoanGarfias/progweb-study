class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.available = True

    # prestar libro
    def borrow(self):
        if self.available:
            self.available = False
            print("El libro ha sido prestado")
        else:
            print(f"El libro {self.title} no está disponible")
    #devolver libro
    def return_book(self):
        self.available = True
        print(f"El libro {self.title} ha sido devuelto")

class User:
    def __init__(self, name, user_id):
        self.name = name
        self.user_id = user_id
        self.borrowed_books = []

    def borrow_book(self, book):
        if book.available:
            book.borrow()
            self.borrowed_books.append(book)
        else:
            print(f"El libro {book.name} no está disponible")
    def return_book(self, book):
        if book in self.borrowed_books:
            book.return_book()
            self.borrowed_books.remove(book)
        else:
            print(f"El libro {book.title} no está en la lista de prestados")


class Library:
    def __init__(self):
        self.books = []
        self.users = []

    def add_book(self, book):
        self.books.append(book)
        print(f"El libro ha {book.title} ha sido agregado")

    def register_user(self, user):
        self.users.append(user)
        print(f"El usuario {user.name} ha sido registrado")

    def show_available_books(self):
        for book in self.books:
            if book.available == True:
                print(f"Libro: {book.title} autor: {book.author}")

book1 = Book("Stranger Things", "P. Amet")
book2 = Book("Back to the future", "Emmet Brown")

user1 = User("Pepe", "101")

library = Library()

library.add_book(book1)
library.add_book(book2)
library.register_user(user1)

library.show_available_books()

user1.borrow_book(book1)

library.show_available_books()
