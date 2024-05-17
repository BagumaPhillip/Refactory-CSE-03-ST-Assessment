function validateForm() {
    // Retrieve form input values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var course = document.getElementById('course').value;
    var entryScheme = document.getElementById('entryScheme').value;
    var intake = document.getElementById('intake').value;
    var sponsorship = document.getElementById('sponsorship').value;
    var date = document.getElementById('date').value;
    var residence = document.getElementById('residence').value;


    // Reset error messages
    document.getElementById('firstnameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('courseError').textContent = '';
    document.getElementById('entryError').textContent = '';
    document.getElementById('intakeError').textContent = '';
    document.getElementById('sponsorError').textContent = '';
    document.getElementById('dateError').textContent = '';
    document.getElementById('residenceError').textContent = '';



    var isValid = true;

    // Validate name field
    if (firstName.trim() === '') {
        document.getElementById('firstnameError').textContent = 'Name is required';
        isValid = false;
    }
    
    // Validate  location field
    if (lastName.trim() === '') {
        document.getElementById('lastNameError').textContent = 'required';
        isValid = false;
    }
    
    // Validate dob field
    if (course.trim() === '') {
        document.getElementById('courseError').textContent = 'required';
        isValid = false;
    }
    
    // Validate gender field
    if (entryScheme.trim() === '') {
        document.getElementById('entryError').textContent = 'required';
        isValid = false;
    }
    
    // Validate nextOfKin field
    if (intake.trim() === '') {
        document.getElementById('intakeError').textContent = 'required';
        isValid = false;
    }
    
    // Validate nin field
    if (sponsorship.trim() === '') {
        document.getElementById('sponsorError').textContent = 'required';
        isValid = false;
    }
    
    // Validate recommender field
    if (date.trim() === '') {
        document.getElementById('dateError').textContent = 'required';
        isValid = false;
    }
    
    // Validate education field
    if (residence.trim() === '') {
        document.getElementById('residenceError').textContent = 'required';
        isValid = false;
    }
    
    return isValid;
}


