var contact = document.getElementById('contact')
var input_name = document.getElementById('input_name')
var input_phone = document.getElementById('input_phone')
var input_submit = document.getElementById('input_submit')
input_submit.onclick = handleSubmit

var data = [
  {
    name: 'M. Nindra Zaka',
    phone: '085335473895'
  },
  {
    name: 'Raka Ardianata',
    phone: '085331247098'
  },
  {
    name: 'Budi',
    phone: '087564326777'
  }
]

function handleSubmit() {
  data.push({ name: input_name.value, phone: input_phone.value })
  input_name.value = ''
  input_phone.value = ''
  renderContacts()
}

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

renderContacts()
