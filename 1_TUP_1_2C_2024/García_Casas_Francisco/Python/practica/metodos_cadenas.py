
cadena1 = "TextoenCadena"

#convertir a minuscula #*ideal para preguntas de (si/no)
minusc = cadena1.lower()

#primera letra en mayuscula: #*nombres 
primerLMayuscula = cadena1.capitalize()

#buscamos una cadena en otra cadena (muestra Nro de posicion especificado), si no coincide devuelve -1
busquedaFind = cadena1.find("C")

#byscamos cadenas en otras cadenas, si no coincide lanza una excepcion
busquedaIndex = cadena1.index("x")

#si es un texto que contiene numeros devuelve true, sino false
esNumerico = cadena1.isnumeric()

#si es alfa numerico devuelve true, sino flase
esAlfaNum = cadena1.isalpha()

#cuenta cuantas veces aparece ese caracter
contarCoincidencias = cadena1.count()


print(esAlfaNum)  #!llama la variable que quieras corroborar.