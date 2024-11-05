from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FileField, SubmitField
from wtforms.validators import DataRequired, Length

class PhotoForm(FlaskForm):
    title = StringField('Título', validators=[DataRequired(), Length(max=100)])
    description = TextAreaField('Descripción', validators=[Length(max=200)])
    image = FileField('Imagen', validators=[DataRequired()])
    submit = SubmitField('Guardar')
