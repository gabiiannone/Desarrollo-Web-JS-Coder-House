const $form = document.querySelector(`#form1`)
const $buttonMail = document.querySelector(`#valiMail`)

	$form.addEventListener(`submit`, enviarMessage)


	function enviarMessage(event) {
		event.preventDefault()
		const form = new FormData(this)
		console.log(form.get(`name`))
		console.log(form.get(`email`))
		$buttonMail.setAttribute(`href`, `mailto:succugardenhome@gmail.com?subject= nombre ${form.get(`name`)} correo ${form.get(`email`)}=&body= ${form.get(`message`)}`)
		$buttonMail.click()
        

	}





