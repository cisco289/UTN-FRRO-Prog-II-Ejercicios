#Crear lista con "list()"
lista = list(["Francisco", "Garcia Casas", 20, True])

#Devuelve cantidad de elementos de la lista
cantidadElementos = len(lista)

#agrega un elemento a la lista
lista.append("Firmat")

#agrega un elemento a la lista en un indice especifico. # Posicion 2
lista.insert(2, "Santa Fe")

#agrega varios elementos a la lista
lista.extend([False, 2024])

#Elimina la posicion seleccionada = en este caso eliminaria "Francisco"
lista.pop(0)  # -1; elimina el ultimo, -2; anteultim0...etc

print(lista)  
