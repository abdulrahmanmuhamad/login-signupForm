    const form = document.getElementById('form');
    let username = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    let nameFlag=false;
    let emailFlag=false;
    let passwordFlag=false;
    let password2Flag=false;

    form.addEventListener('submit', e => {
    	if(checkInputs()==false)
      {
        e.preventDefault();
      }
    });

    function checkInputs() {
    	// trim to remove the whitespaces
    	const usernameValue = username.value;
    	const emailValue = email.value;
    	const passwordValue = password.value;
    	const password2Value = password2.value;

    	if(usernameValue === '') {
    		setErrorFor(username, 'Username cannot be blank');
    	} else {
    		setSuccessFor(username);
        nameFlag=true;
    	}

    	if(emailValue === '') {
    		setErrorFor(email, 'Email cannot be blank');
    	} else if (!isEmail(emailValue)) {
    		setErrorFor(email, 'Not a valid email');
    	} else {
    		setSuccessFor(email);
        emailFlag=true;
      }

    	if(passwordValue === '') {
    		setErrorFor(password, 'Password cannot be blank');
    	} else {
    		setSuccessFor(password);
        passwordFlag=true;
      }

    	if(password2Value === '') {
    		setErrorFor(password2, 'Password2 cannot be blank');
    	} else if(passwordValue !== password2Value) {
    		setErrorFor(password2, 'Passwords does not match');
    	} else{
    		setSuccessFor(password2);
        password2Flag=true;
      }
      return nameFlag&emailFlag&passwordFlag&password2Flag;
    }

    function setErrorFor(input, message) {
    	const formControl = input.parentElement;
    	const small = formControl.querySelector('small');
    	small.innerText = message;
      formControl.className = 'form-control error';

    }

    function setSuccessFor(input) {
    	const formControl = input.parentElement;
    	formControl.className = 'form-control success';
    }

    function isEmail(email) {
    	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
