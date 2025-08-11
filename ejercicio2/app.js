/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */

const divVacio = document.createElement('div')
document.body.appendChild(divVacio)

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */

const divConP = document.body.insertAdjacentHTML(
  'beforeend',
  '<div><p></p></div>'
)

/* No se si lo querías así pero otras maneras las encontraba muy largas*/

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

const divCon6P = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  divCon6P.appendChild(p)
}
document.body.appendChild(divCon6P)

/* 2.4 Inserta dinamicamente con javascript en un html una p con el 
    texto 'Soy dinámico!'. */

const pDinamico = document.createElement('p')
pDinamico.textContent = 'Soy dinámico!'
document.body.appendChild(pDinamico)

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */

const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

/* 2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
document.body.appendChild(ul)
for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

const elementosEliminar = document.querySelectorAll('.fn-remove-me')
elementosEliminar.forEach((elemento) => {
  elemento.remove()
})

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
    Recuerda que no solo puedes insertar elementos con .appendChild. */

const divs = document.querySelectorAll('div')
const pEnMedio = document.createElement('p')
pEnMedio.textContent = 'Voy en medio!'
divs[0].insertAdjacentElement('afterend', pEnMedio)

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */

const divsInsertar = document.querySelectorAll('.fn-insert-here')
divsInsertar.forEach((div) => {
  const pDentro = document.createElement('p')
  pDentro.textContent = 'Voy dentro!'
  div.appendChild(pDentro)
})
