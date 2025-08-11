/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click */

const btnToClick = document.createElement('button')
btnToClick.id = 'btnToClick'
btnToClick.textContent = 'Click Me'
document.body.appendChild(btnToClick)
btnToClick.addEventListener('click', (event) => {
  console.log('Button clicked:', event)
})

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

const focus = document.querySelector('.focus')
focus.addEventListener('focus', () => {
  console.log(focus.value)
})

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

const input = document.querySelector('.value')
input.addEventListener('input', () => {
  console.log(input.value)
})

/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. */

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const ul = document.createElement('ul')
albums.forEach((album) => {
  const li = document.createElement('li')
  li.textContent = album
  ul.appendChild(li)
})
document.body.appendChild(ul)
