let numeros = [1, 5, 245, 235, 235, 43, 5, 346, 436, 432]

// console.log(numeros.sort((a, b) => a - b));

// Inputs de datos personales
const inputNombre = document.querySelector('#nombre')
const inputDNI = document.querySelector('#dni')
const inputDivision = document.querySelector('#division')
const inputTutor = document.querySelector('#tutor')
const inputTelefono = document.querySelector('#telefono')

// Input de Notas
const inputNota1 = document.getElementById('nota1')
const inputNota2 = document.getElementById('nota2')
const inputNota3 = document.getElementById('nota3')
const inputNota4 = document.getElementById('nota4')

// Container
const formulario = document.querySelector('#bandera-ciudad')
const listAlumnos = document.querySelector('.lista-alumnos')
const containerDatos = document.querySelector('.datos__container')

window.onload = function () {
  const p = document.createElement('p')
  p.classList.add('h3')
  p.innerHTML = `Agrega al menos <strong>tres</strong> alumnos para obtener un resultado`
  listAlumnos.appendChild(p)
}

// Classes
class Alumnos {
  constructor() {
    this.alumnos = []
    this.puestos = [1]
  }

  agregarAlumno(alumno) {
    this.alumnos = [...this.alumnos, alumno]
    this.calcPromedio(this.alumnos)
    this.elegirPuestos(this.alumnos)
  }

  calcPromedio(alumnos) {
    // console.log(alumnos)
    alumnos.map(alumno => {
      // console.log(alumno)
      const { nota1, nota2, nota3, nota4 } = alumno
      const values = [
        parseInt(nota1),
        parseInt(nota2),
        parseInt(nota3),
        parseInt(nota4),
      ]
      let sum = values.reduce((previous, current) => (current += previous))
      let promedio = sum / values.length
      // console.log(promedio)
      alumno.promedio = promedio
    })
  }

  elegirPuestos(alumnos) {
    alumnos.sort(function (a, b) {
      return b.promedio - a.promedio
    })
    // ui.mostarAlumnos(alumnos)

    ui.mostarAlumnos(alumnos)
  }
}

class UI {
  mostrarAlerta(mensaje, tipo) {
    const divMensaje = document.createElement('div')
    divMensaje.classList.add('alert')

    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger')
    } else {
      divMensaje.classList.add('alert-success')
    }

    divMensaje.textContent = mensaje

    formulario.insertBefore(divMensaje, containerDatos)

    // Quitar la alerta
    setTimeout(() => {
      divMensaje.remove()
    }, 5000)
  }

  mostarAlumnos(alumnos) {
    console.log(alumnos[0].nombre)

    if (alumnos.length >= 3) {
      this.limpiarHTML()
      for (let i = 0; i < alumnos.length; i++) {
        const divAlumnos = document.createElement('div')
        divAlumnos.classList.add('alert', 'alert-light')
        divAlumnos.innerHTML += `
              <p class="ref"><span class="badge badge-info">Nombre:</span> <strong>${alumnos[i].nombre}</strong></p>
              <p><span class="badge badge-info">DNI:</span> <strong>${alumnos[i].dni}</strong></p>
              <p><span class="badge badge-info">División:</span> <strong>${alumnos[i].division}</strong></p>
              <p><span class="badge badge-info">Tutor:</span> <strong>${alumnos[i].tutor}</strong></p>
              <p><span class="badge badge-info">Teléfono:</span> <strong>${alumnos[i].telefono}</strong></p>
              <p><span class="badge badge-info">Promedio:</span> <strong>${alumnos[i].promedio}</strong></p>
            `
        listAlumnos.appendChild(divAlumnos)
      }
    }
  }

  limpiarHTML() {
    while (listAlumnos.firstChild) {
      listAlumnos.removeChild(listAlumnos.firstChild)
    }
  }
}

const ui = new UI()
const administrarAlumnos = new Alumnos()

eventListeners()
function eventListeners() {
  // Inputs datos personales
  inputNombre.addEventListener('change', leerDatos)
  inputDNI.addEventListener('change', leerDatos)
  inputDivision.addEventListener('change', leerDatos)
  inputTutor.addEventListener('change', leerDatos)
  inputTelefono.addEventListener('change', leerDatos)

  // Inputs de notas
  inputNota1.addEventListener('change', leerDatos)
  inputNota2.addEventListener('change', leerDatos)
  inputNota3.addEventListener('change', leerDatos)
  inputNota4.addEventListener('change', leerDatos)

  formulario.addEventListener('submit', nuevoAlumno)
}

const alumnoObj = {
  nombre: '',
  dni: '',
  division: '',
  tutor: '',
  telefono: '',
  nota1,
  nota2,
  nota3,
  nota4,
}

// function showNotas() {}

function leerDatos(e) {
  alumnoObj[e.target.name] = e.target.value
}

function nuevoAlumno(e) {
  e.preventDefault()

  const { nombre, dni, division, tutor, telefono, nota1, nota2, nota3, nota4 } =
    alumnoObj

  if (
    nombre === '' ||
    dni === '' ||
    division === '' ||
    tutor === '' ||
    telefono === '' ||
    isNaN(nota1) ||
    isNaN(nota2) ||
    isNaN(nota3) ||
    isNaN(nota4)
  ) {
    ui.mostrarAlerta('Todos los campos son obligatorios', 'error')

    return
  }

  ui.mostrarAlerta('Alumno agregado correctamente')
  administrarAlumnos.agregarAlumno({ ...alumnoObj })
}
