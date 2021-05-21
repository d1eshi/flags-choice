const nombre = document.querySelector('#test-nombre')
const promedio = document.querySelector('#test-promedio')
const form = document.querySelector('#test-form')

nombre.addEventListener('change', leerDatos)
promedio.addEventListener('change', leerDatos)
form.addEventListener('submit', nuevoAlumno)

const objAlumnos = {
  nombre: '',
  id: Date.now(),
  promedio,
}

function leerDatos(e) {
  objAlumnos[e.target.name] = e.target.value
}

function nuevoAlumno(e) {
  e.preventDefault()

  console.log('Enviando form...')
  agregarAlumno({ ...objAlumnos })
}

let alumnos = []
function agregarAlumno(nuevoAlumno) {
  // Guardar y no sobreescribir alumnos
  alumnos = [...alumnos, nuevoAlumno]
  // const resultado = alumnos.filter(alumno => [0].promedio)
  alumnos.forEach(function (elemento, indice, array) {
    const resultado = [elemento.promedio]
    let resOrdenado = []
    resOrdenado = [  alumDesordenados.push(el)
        // console.log(alumDesordenados[1].promedio)
        for (let i = 0; i < alumDesordenados.length; i++) {
          const element = alumDesordenados[i]
          console.log(element)
        }
        // Comprombamos  si el valor existe en el objeto
        // if (!(el in myObj)) {
        //   // si no existe creamos ese valor y lo añadimos al array final, y si sí existe no lo añadimos
        //   myObj[el] = true
        //   puestosLimpios.push(el)
        // }
      })

      // console.log(this.puestos)
      // console.log(puestosLimpios.sort((a, b) => b - a))
      // ui.mostarAlumnos(puestosLimpios) resultado.sort()]
    console.log(resOrdenado + 'ordenado')
    console.log(resOrdenado.length)
  })
}
