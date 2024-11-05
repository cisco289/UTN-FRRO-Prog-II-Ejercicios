#si la primer condicion no se cumple "elif" agrega una condicion mas.
ingreso_mensual = 10000
gasto_mensual = 4000
if ingreso_mensual >= 10000:            #condicion principal 
    print("tenes mas de 1000 dolares")
    if ingreso_mensual - gasto_mensual < 0:
        print("tenes deficit(menor a cero)")
    elif ingreso_mensual - gasto_mensual > 3000:
        print("estas bien")
    else:
        print("estas gastando bastante")
    
elif ingreso_mensual > 10000:
    print("'tenes mas de 10000' estas sobrado")

elif ingreso_mensual > 500:
    print ("no tenes 1000 dolares")