# app.py
#Este archivo inicializará Flask, la configuración, y la base de datos.
from flask import Flask
from config import Config
from models import db

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

with app.app_context():
    db.create_all()

from routes import main_bp
app.register_blueprint(main_bp)

if __name__ == '__main__':
    app.run(debug=True)
