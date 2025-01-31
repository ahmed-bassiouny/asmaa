const scriptURL = 'https://script.google.com/macros/s/AKfycbw7z8D3J7GQAjPlcAyTp7xdLJHuooT2KiEPfBdPxgDL1JA2jyj3MnKIQJPRZf8SEs_Y/exec'

const form = document.forms['data-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("شكرا لك تم ارسال طلبك بنجاح وسيتم التواصل معك قريبا" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})