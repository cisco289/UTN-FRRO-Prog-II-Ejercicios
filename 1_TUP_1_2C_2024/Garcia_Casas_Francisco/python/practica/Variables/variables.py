#Variables: Espacios reservados en la memoria. Estas se declaran y se definen (son modificables)


print("ingrese nombre")
#defino var con camelCase
nombreCompleto = "francisco garcia casas"

#defino var con snake_case (recomendada)
nombre_completo_de_tu_padre = "Gerardo Garcia De la Cruz"

#concateno con +
bienvenida = "hola " + " como estas?"

#concatenar con f-string
bienvenida = f"hola {nombreCompleto} como estas?"

#operadores de pertenencia (in / not in)
print("francisco garcia casas" in bienvenida)
print("francisco garcia casas" not in bienvenida)

print(bienvenida)



a = 4
b = 5
c = a + b   
print (c)


num = 10
num += 1
num -= 2
print (num)

