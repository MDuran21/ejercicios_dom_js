/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const countriesList = document.createElement('ul')
for (const country of countries) {
  const countryItem = document.createElement('li')
  countryItem.textContent = country
  countriesList.appendChild(countryItem)
}
document.body.appendChild(countriesList)

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const elementRemove = document.querySelector('.fn-remove-me')
elementRemove.remove()

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const printHere = document.querySelector('[data-function="printHere"]')
const carsList = document.createElement('ul')
for (const car of cars) {
  const carItem = document.createElement('li')
  carItem.textContent = car
  carsList.appendChild(carItem)
}
printHere.appendChild(carsList)

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen. */
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const country of countries2) {
  const countryDiv = document.createElement('div')
  const countryTitle = document.createElement('h4')
  const countryImage = document.createElement('img')
  countryTitle.textContent = country.title
  countryImage.src = country.imgUrl
  countryDiv.appendChild(countryTitle)
  countryDiv.appendChild(countryImage)
  document.body.appendChild(countryDiv)
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs. */
const removeLastButton = document.createElement('button')
removeLastButton.textContent = 'Eliminar último elemento'
removeLastButton.addEventListener('click', () => {
  const divs = document.querySelectorAll('div')
  const lastDiv = divs[divs.length - 1]
  if (lastDiv) {
    lastDiv.remove()
  }
})
document.body.appendChild(removeLastButton)
/* He tenido que buscar porque no me funcionaba de la forma anterior, al hacerlo con lastChild no me eliminaba el último div, ya que al añadir el botón se añadía un nuevo div al final. */

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */

const divs = document.querySelectorAll('div')
divs.forEach((div) => {
  const removeButton = document.createElement('button')
  removeButton.textContent = 'Eliminar este elemento'
  removeButton.addEventListener('click', () => {
    div.remove()
  })
  div.appendChild(removeButton)
})
