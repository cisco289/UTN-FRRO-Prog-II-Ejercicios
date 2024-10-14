
#random is a variable generator ()
from random import randint

def genera(a = None):
    a = randint(1,100)
    return a

print(genera())
print(genera())
print(genera())