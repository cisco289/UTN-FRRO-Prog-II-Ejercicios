// Clase Estudiante
class Estudiante {
    constructor(nombre, edad, nota) {
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }
    presentarse() {
        return `${this.nombre} (${this.edad} años) - Nota: ${this.nota}`;
    }
}

// Clase Curso
class Curso {
    constructor(nombre, profesor) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    listarEstudiantes() {
        return this.estudiantes.map((est, index) => `
            ${est.presentarse()} 
            <button onclick="editarEstudiante(${index}, '${this.nombre}')">Editar</button>
            <button onclick="eliminarEstudiante(${index}, '${this.nombre}')">Eliminar</button>
        `).join('<br>');
    }

    obtenerPromedio() {
        let totalNotas = this.estudiantes.reduce((total, est) => total + est.nota, 0);
        return (this.estudiantes.length > 0) ? (totalNotas / this.estudiantes.length).toFixed(2) : 'N/A';
    }
}

// Arreglo para almacenar los cursos
let cursos = [];

// DOM elements
const formCurso = document.getElementById('form-curso');
const formEstudiante = document.getElementById('form-estudiante');
const cursoEstudianteSelect = document.getElementById('curso-estudiante');
const listaCursos = document.getElementById('lista-cursos');

// Función para validar datos
function validarDatos(nombre, edad, nota) {
    if (!nombre || edad <= 0 || nota < 0 || nota > 10) {
        alert("Por favor, ingrese datos válidos.");
        return false;
    }
    return true;
}

// Evento para agregar un curso
formCurso.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombreCurso = document.getElementById('nombre-curso').value;
    const profesorCurso = document.getElementById('profesor-curso').value;

    const nuevoCurso = new Curso(nombreCurso, profesorCurso);
    cursos.push(nuevoCurso);

    formCurso.reset();
    actualizarCursosSelect();
    mostrarCursos();
    guardarEnLocalStorage();
});

// Evento para agregar un estudiante
formEstudiante.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombreEstudiante = document.getElementById('nombre-estudiante').value;
    const edadEstudiante = parseInt(document.getElementById('edad-estudiante').value);
    const notaEstudiante = parseFloat(document.getElementById('nota-estudiante').value);
    const cursoIndex = cursoEstudianteSelect.value;

    if (validarDatos(nombreEstudiante, edadEstudiante, notaEstudiante)) {
        const nuevoEstudiante = new Estudiante(nombreEstudiante, edadEstudiante, notaEstudiante);
        cursos[cursoIndex].agregarEstudiante(nuevoEstudiante);
        formEstudiante.reset();
        mostrarCursos();
        guardarEnLocalStorage();
    }
});

// Función para editar estudiante
function editarEstudiante(index, cursoNombre) {
    const curso = cursos.find(c => c.nombre === cursoNombre);
    const estudiante = curso.estudiantes[index];

    document.getElementById('nombre-estudiante').value = estudiante.nombre;
    document.getElementById('edad-estudiante').value = estudiante.edad;
    document.getElementById('nota-estudiante').value = estudiante.nota;

    // Eliminar el estudiante para que no se duplique
    curso.estudiantes.splice(index, 1);
    mostrarCursos();
}

// Función para eliminar estudiante
function eliminarEstudiante(index, cursoNombre) {
    const curso = cursos.find(c => c.nombre === cursoNombre);
    curso.estudiantes.splice(index, 1);
    mostrarCursos();
    guardarEnLocalStorage();
}

// Función para actualizar el select de cursos
function actualizarCursosSelect() {
    cursoEstudianteSelect.innerHTML = '';
    cursos.forEach((curso, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.textContent = curso.nombre;
        cursoEstudianteSelect.appendChild(option);
    });
}

// Función para mostrar los cursos y estudiantes
function mostrarCursos() {
    listaCursos.innerHTML = '';
    cursos.forEach((curso) => {
        let cursoDiv = document.createElement('div');
        cursoDiv.classList.add('curso');
        
        cursoDiv.innerHTML = `
            <h3>Curso: ${curso.nombre} (Profesor: ${curso.profesor})</h3>
            <p>Promedio: ${curso.obtenerPromedio()}</p>
            <div>${curso.listarEstudiantes()}</div>
        `;
        
        listaCursos.appendChild(cursoDiv);
    });
}

// Función para guardar en Local Storage (opcional)
function guardarEnLocalStorage() {
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

// Función para cargar desde Local Storage (opcional)
function cargarDesdeLocalStorage() {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos'));
    if (cursosGuardados) {
        cursos = cursosGuardados.map(curso => {
            const nuevoCurso = new Curso(curso.nombre, curso.profesor);
            curso.estudiantes.forEach(est => {
                nuevoCurso.agregarEstudiante(new Estudiante(est.nombre, est.edad, est.nota));
            });
            return nuevoCurso;
        });
        actualizarCursosSelect();
        mostrarCursos();
    }
}

// Cargar cursos al iniciar
cargarDesdeLocalStorage();