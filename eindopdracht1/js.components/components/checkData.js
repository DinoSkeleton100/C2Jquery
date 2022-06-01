    //patterns for regex
    const patternOnlyLetters = /^([a-zA-Z]|\s)+$/;
    const patternZipcode = /^(\d){4}(\s)?([a-zA-Z]){2}$/;
    const patternAdress = /^(.)*(\d)+$/;
    const patternCity = /^([a-zA-Z])+([a-zA-Z]|\d)+$/;
    const patternDate = /^([0-2][0-9]|3[0-1])(-| )(0[1-9]|1[0-2])(-| )(19[0-9]{2}|20[0-9]{2})$/;

    //submit button >> checking regex
    var alertBoxTrigger = false;
    $('#submit').on('click', function() {
        alertBoxTrigger = false; //resetting
        //checking name
        var inputName = $('#inputName').val();
        if (patternOnlyLetters.test(inputName) == false) {
            $('#inputName').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputName').removeClass('failedRegex');
        }

        //checking Adress
        var inputAdress = $('#inputAdress').val();
        if (patternAdress.test(inputAdress) == false) {
            $('#inputAdress').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputAdress').removeClass('failedRegex');
        }

        //checking City
        var inputCity = $('#inputCity').val();
        if (patternCity.test(inputCity) == false) {
            $('#inputCity').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputCity').removeClass('failedRegex');
        }

        //checking Zipcode
        var inputZipcode = $('#inputZipcode').val();
        if (patternZipcode.test(inputZipcode) == false) {
            $('#inputZipcode').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputZipcode').removeClass('failedRegex');
        }

        //checking Date
        var inputDate = $('#inputDate').val();
        if (patternDate.test(inputDate) == false) {
            $('#inputDate').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputDate').removeClass('failedRegex');
        }

        //checking Nationality
        var inputNationality = $('#inputNationality').val();
        if (patternOnlyLetters.test(inputNationality) == false) {
            $('#inputNationality').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputNationality').removeClass('failedRegex');
        }

        //checking Job
        var inputJob = $('#inputJob').val();
        if (patternOnlyLetters.test(inputJob) == false) {
            $('#inputJob').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputJob').removeClass('failedRegex');
        }

        //alertbox popup > button to dissapear
        if (alertBoxTrigger == true) {
            $('#alertWindow').removeClass('hidden');
            $('#doneText').fadeOut();
        } else {
            $('#doneText').fadeIn();
        }
        $('#alertButton').on('click', function() {
            $('#alertWindow').addClass('hidden');
        });