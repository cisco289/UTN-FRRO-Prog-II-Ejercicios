# config.py
#Este archivo manejará la configuración básica, como la conexión a la base de datos.

import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = 'tu_clave_secreta_aqui'
    SQLALCHEMY_DATABASE_URI = f'sqlite:///{os.path.join(BASE_DIR, "photo_album.db")}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
