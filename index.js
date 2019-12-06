var contact = document.getElementById('contact')
var input_name = document.getElementById('input_name')
var input_phone = document.getElementById('input_phone')
var input_submit = document.getElementById('input_submit')
input_submit.onclick = handleSubmit

var data = []

function renderContacts() {
  contact.innerHTML = ''

  data.forEach(function(item) {
    contact.innerHTML += `
      <div class="contact__item">
        <p class="contact__name">${item.name}</p>
        <p class="contact__phone">${item.phone}</p>
      </div>
    `
  })
}

function fetchContacts() {
  var xhttp = new XMLHttpRequest()
  xhttp.open('GET', 'https://aka-contact-backend.herokuapp.com/contact')
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      data = JSON.parse(xhttp.responseText)
      renderContacts()
    }
  }
  xhttp.send()
}

function handleSubmit() {
  var xhttp = new XMLHttpRequest()
  xhttp.open('POST', 'https://aka-contact-backend.herokuapp.com/contact')
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      fetchContacts()
      resetInput()
    }
  }
  xhttp.setRequestHeader('Content-Type', 'application/json')
  xhttp.send(
    JSON.stringify({ name: input_name.value, phone: input_phone.value })
  )
}

function resetInput() {
  input_name.value = ''
  input_phone.value = ''
}

fetchContacts()
