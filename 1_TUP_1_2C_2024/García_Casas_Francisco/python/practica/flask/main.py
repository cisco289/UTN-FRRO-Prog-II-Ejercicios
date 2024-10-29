from flask import Flask, jsonify, request
#! ERROR
#!Exception has occurred: ModuleNotFoundError
#!No module named 'flask'
#* solucion? -> "pip uninstall flask && python -m pip install flask" 




#endpoint; "puerta" a la que los usuarios pueden "tocar" para obtener algo (Usuarios y sus solicitudes).
@app.route('/users/<user_id>')    #defino endpoint "/" raiz de la app (http://localhost:9999/).
def get_user(user_id):
    user = {"id": user_id, "name" : "test", "telefono": "346565123"}
    #/user/
    query= request.args.get("query")
    if query:
        user["query"] = query
    return jsonify(user), 200
app = Flask (__name__)       # creo la aplicacion
if __name__ == "__main__":  # ejecuto la app
    app.run(debug=True)    # muestra errores y reinicia cuando se hacen cambios

# Flask es una herramienta para crear aplicaciones web con Python.
# Endpoint es una URL en tu aplicación que puede recibir solicitudes y devolver respuestas.

# Get -> information
# Post -> information
# Put -> information
# delete -> information