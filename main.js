km.addEventListener('click', event => {
  event.preventDefault()

  let result = document.getElementById('result')
  let metros = parseFloat(document.getElementById('metros').value)
  let converter = Number('')
  let flag = document.getElementById('flag')

  var numero = parseInt(metros)
  if (Number.isNaN(numero)) metros = 0

  flag.style.opacity = 1
  setTimeout(function () {
    flag.style.opacity = 0
  }, 1200)

  flag.classList.add('show')

  converter = parseFloat(metros / 1000)
  result.innerHTML = converter + ' Km'
})

hm.addEventListener('click', event => {
  event.preventDefault()

  let result = document.getElementById('result')
  let metros = parseFloat(document.getElementById('metros').value)
  let converter = Number('')
  let flag = document.getElementById('flag')

  var numero = parseInt(metros)
  if (Number.isNaN(numero)) metros = 0

  flag.style.opacity = 1
  setTimeout(function () {
    flag.style.opacity = 0
  }, 1200)

  flag.classList.add('show')

  converter = parseFloat(metros / 100)
  result.innerHTML = converter + ' hm'
})

dam.addEventListener('click', event => {
  event.preventDefault()

  let result = document.getElementById('result')
  let metros = parseFloat(document.getElementById('metros').value)
  let converter = Number('')
  let flag = document.getElementById('flag')

  var numero = parseInt(metros)
  if (Number.isNaN(numero)) metros = 0

  flag.style.opacity = 1
  setTimeout(function () {
    flag.style.opacity = 0
  }, 1200)

  flag.classList.add('show')

  converter = parseFloat(metros / 10)
  result.innerHTML = converter + ' dam'
})

dm.addEventListener('click', event => {
  event.preventDefault()

  let result = document.getElementById('result')
  let metros = parseFloat(document.getElementById('metros').value)
  let converter = Number('')
  let flag = document.getElementById('flag')

  var numero = parseInt(metros)
  if (Number.isNaN(numero)) metros = 0

  flag.style.opacity = 1
  setTimeout(function () {
    flag.style.opacity = 0
  }, 1200)

  flag.classList.add('show')

  converter = parseFloat(metros * 10)
  result.innerHTML = converter + ' dm'
})

cm.addEventListener('click', event => {
  event.preventDefault()

  let result = document.getElementById('result')
  let metros = parseFloat(document.getElementById('metros').value)
  let converter = Number('')
  let flag = document.getElementById('flag')

  var numero = parseInt(metros)
  if (Number.isNaN(numero)) metros = 0

  flag.style.opacity = 1
  setTimeout(function () {
    flag.style.opacity = 0
  }, 1200)

  flag.classList.add('show')

  converter = parseFloat(metros * 100)
  result.innerHTML = converter + ' cm'
})

mm.addEventListener('click', event => {
  event.preventDefault()

  let result = document.getElementById('result')
  let metros = parseFloat(document.getElementById('metros').value)
  let converter = Number('')
  let flag = document.getElementById('flag')

  var numero = parseInt(metros)
  if (Number.isNaN(numero)) metros = 0

  flag.style.opacity = 1
  setTimeout(function () {
    flag.style.opacity = 0
  }, 1200)

  flag.classList.add('show')

  converter = parseFloat(metros * 1000)
  result.innerHTML = converter + ' mm'
})
