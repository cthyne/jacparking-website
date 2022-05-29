// const btn = document.querySelector('button')
// const inputs = document.querySelector('form')
// btn.addEventListener('click', () => {

    // const name = (inputs.elements["name"].value).trim()
    // const email = (inputs.elements["email"].value).trim()
    // const msg = (inputs.elements["message"].value.trim())
    // const phone = (inputs.elements["phone"].value).trim()
    // if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
    //     alert("All fields are mandatory")
    //     return
    // }

  

function sendEmail(){
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "388677995ecedb",
        Password : "e9503d9762b3e9",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}