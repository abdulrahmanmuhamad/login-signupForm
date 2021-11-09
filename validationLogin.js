    const form = document.getElementById('form');
    let username = document.getElementById('name');
    let password = document.getElementById('password');
    let emailFlag=false;
    let passwordFlag=false;

    form.addEventListener('submit', e => {
      if(checkInputs()==false)
        e.preventDefault();
      }
      });

    function checkInputs() {
    	// trim to remove the whitespaces
      const emailValue = email.value;
    	const passwordValue = password.value;

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
        emailFlag=true;
    	}
      return emailFlag&passwordFlag;
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
