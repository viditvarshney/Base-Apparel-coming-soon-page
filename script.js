const form = document.querySelector('form');
const email = document.querySelector('input');



form.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailValue = email.value;
    
    // check if the email entered is Valid!

    if(!validateEmail(emailValue)) {

        form.classList.add('error');
        form.classList.remove('success');

    } else {
        form.classList.remove('error');
        form.classList.add('success');
    }
    emailValue = '';

})


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };