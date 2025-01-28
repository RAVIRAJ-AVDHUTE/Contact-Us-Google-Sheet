const scriptURL='https://script.google.com/macros/s/AKfycby2VoLkqZampk0_3Xq2MZPsJByPEmIxPjjRFrUfes-jljpHSyl_UjeeMvQJwko3E0R2/exec'

const form=document.forms['contact-form']

form.addEventListener('submit',e=> {
e.preventDefault()
fetch(scriptURL,{method:'POST', body:new FormData(form)})
.then(response => alert("Thank you! your form is submitted successfully."))
.then(()=> {window.location.reload(); })
.catch(error => console.error('Error!' , error.message))
})
