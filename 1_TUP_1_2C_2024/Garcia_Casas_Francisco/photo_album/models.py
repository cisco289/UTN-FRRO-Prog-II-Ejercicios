# models.py
#En este archivo, creamos el modelo Photo con los campos que mencionaste.
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Photo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    image_filename = db.Column(db.String(100), nullable=False)
    image_url = db.Column(db.String(200), nullable=False)
