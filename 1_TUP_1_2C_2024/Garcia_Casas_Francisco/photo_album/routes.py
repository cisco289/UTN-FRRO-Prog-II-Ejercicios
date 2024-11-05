import os
from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.utils import secure_filename
from models import db, Photo
from forms import PhotoForm

main_bp = Blueprint('main', __name__)

UPLOAD_FOLDER = 'static/uploads/'

@main_bp.route('/')
def index():
    photos = Photo.query.all()
    return render_template('index.html', photos=photos)

@main_bp.route('/add', methods=['GET', 'POST'])
def add_photo():
    form = PhotoForm()
    if form.validate_on_submit():
        file = form.image.data
        filename = secure_filename(file.filename)
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)
        new_photo = Photo(
            title=form.title.data,
            description=form.description.data,
            image_filename=filename,
            image_url=filepath
        )
        db.session.add(new_photo)
        db.session.commit()
        flash('Foto añadida con éxito.')
        return redirect(url_for('main.index'))
    return render_template('photo_form.html', form=form)

@main_bp.route('/edit/<int:photo_id>', methods=['GET', 'POST'])
def edit_photo(photo_id):
    photo = Photo.query.get_or_404(photo_id)
    form = PhotoForm(obj=photo)
    if form.validate_on_submit():
        if form.image.data:
            file = form.image.data
            filename = secure_filename(file.filename)
            filepath = os.path.join(UPLOAD_FOLDER, filename)
            file.save(filepath)
            photo.image_filename = filename
            photo.image_url = filepath
        photo.title = form.title.data
        photo.description = form.description.data
        db.session.commit()
        flash('Foto actualizada con éxito.')
        return redirect(url_for('main.index'))
    return render_template('photo_form.html', form=form, photo=photo)

@main_bp.route('/delete/<int:photo_id>', methods=['POST'])
def delete_photo(photo_id):
    photo = Photo.query.get_or_404(photo_id)
    db.session.delete(photo)
    db.session.commit()
    flash('Foto eliminada con éxito.')
    return redirect(url_for('main.index'))
