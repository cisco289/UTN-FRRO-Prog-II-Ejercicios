#listas se pueden modificar
lista = ["Francisco", "Garcia Casas", 20, 1.80]
lista[1] = "Gomez" #!Modifico elemento de posicion 3 ("Garcia Casas -> Gomez")
lista 
#tuplas no se pueden modificar
tupla = ()

#conjuntos (no se pueden llamar los elementos por indice y no almacena datos duplicados), solo se puede recorrer con un bucle 
conjuntos = {"francisco", "garcia casas", 1.80}

#diccionario
diccionario = {
    'nombre' : "francisco",
    'apellido': "garcia Casas",
    'edad': 20, 
    'altura': 1.80,
    'peso': 80
}
print(diccionario ['altura']) #!llamo al elemento 

