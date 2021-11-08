    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    var flag=false;
    form.addEventListener('submit', e => {
    	e.preventDefault();

    	checkInputs();
    });

    function checkInputs() {
    	// trim to remove the whitespaces
    	const usernameValue = username.value.trim();
    	const emailValue = email.value.trim();
    	const passwordValue = password.value.trim();
    	const password2Value = password2.value.trim();

    	if(usernameValue === '') {
    		setErrorFor(username, 'Username cannot be blank');
        flag=false;
    	} else {
    		setSuccessFor(username);
        flag=true;
    	}

    	if(emailValue === '') {
    		setErrorFor(email, 'Email cannot be blank');
        flag=false;
    	} else if (!isEmail(emailValue)) {
    		setErrorFor(email, 'Not a valid email');
        flag=false;
    	} else {
    		setSuccessFor(email);
        flag=true;
      }

    	if(passwordValue === '') {
    		setErrorFor(password, 'Password cannot be blank');
        flag=false;
    	} else {
    		setSuccessFor(password);
        flag=true;
      }

    	if(password2Value === '') {
    		setErrorFor(password2, 'Password2 cannot be blank');
        flag=false;
    	} else if(passwordValue !== password2Value) {
    		setErrorFor(password2, 'Passwords does not match');
        flag=false;
    	} else{
    		setSuccessFor(password2);
        flag=true;
      }
      return flag;
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
