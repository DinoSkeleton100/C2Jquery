$(document).ready(function() {
    //hiding textage text so it can animate when date of birth is calculated
    $('#textAge').hide();

    const englishTranslate = [
        "English",
        "Dutch",
        "Gender:",
        "man",
        "woman",
        "Name:",
        "Adress:",
        "City:",
        "Zipcode:",
        "Date of birth:",
        "Nationality:",
        "Job:",
        "Submit",
        "Not all of the fields have been filled in correctly!",
        "Okay, I'll try again!"
    ];

    const dutchTranslate = [
        "Engels",
        "Nederlands",
        "Geslacht:",
        "man",
        "vrouw",
        "Naam:",
        "Adres:",
        "Woonplaats:",
        "Postcode:",
        "Geboortedatum:",
        "Nationaliteit:",
        "Beroep:",
        "Invullen",
        "Niet alle velden zijn correct ingevuld!",
        "Oke, ik probeer het opnieuw!"
    ];

    //language knoppen en vertalen
    $('#englishButton').on('click', function() {
        $('.langBox').hide(1000);
        $('.formBox').slideUp(1000, function() {
            for (var i = 0; i < englishTranslate.length; i++) {
                $('[data-languageTranslateId='+i+']').text(englishTranslate[i]);
            }
        });
        $('.formBox').slideDown(1000);
        $('.langBox').show(1000);
    });

    $('#dutchButton').on('click', function() {
        $('.langBox').hide(1000);
        $('.formBox').slideUp(1000, function() {
            for (var i = 0; i < dutchTranslate.length; i++) {
                $('[data-languageTranslateId='+i+']').text(dutchTranslate[i]);
            }
        });
        $('.formBox').slideDown(1000);
        $('.langBox').show(1000);
    });

    //gender en kleurverandering >>
    $('#womanButton').on('click', function() {
        $('.man').addClass('woman');
        $('.man').removeClass('man');
        $('body').css('background-color','rgb(118, 68, 138)');
    });

    $('#manButton').on('click', function() {
        $('.woman').addClass('man');
        $('.woman').removeClass('woman');
        $('body').css('background-color','rgb(14, 102, 85)');
    });
    //<<

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
        //testing name
        var inputName = $('#inputName').val();
        if (patternOnlyLetters.test(inputName) == false) {
            $('#inputName').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputName').removeClass('failedRegex');
        }

        //testing Adress
        var inputAdress = $('#inputAdress').val();
        if (patternAdress.test(inputAdress) == false) {
            $('#inputAdress').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputAdress').removeClass('failedRegex');
        }

        //testing City
        var inputCity = $('#inputCity').val();
        if (patternCity.test(inputCity) == false) {
            $('#inputCity').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputCity').removeClass('failedRegex');
        }

        //testing Zipcode
        var inputZipcode = $('#inputZipcode').val();
        if (patternZipcode.test(inputZipcode) == false) {
            $('#inputZipcode').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputZipcode').removeClass('failedRegex');
        }

        //testing Date
        var inputDate = $('#inputDate').val();
        if (patternDate.test(inputDate) == false) {
            $('#inputDate').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputDate').removeClass('failedRegex');
        }

        //testing Nationality
        var inputNationality = $('#inputNationality').val();
        if (patternOnlyLetters.test(inputNationality) == false) {
            $('#inputNationality').addClass('failedRegex');
            alertBoxTrigger = true;
        } else {
            $('#inputNationality').removeClass('failedRegex');
        }

        //testing Job
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
        }
        $('#alertButton').on('click', function() {
            $('#alertWindow').addClass('hidden');
        });



    });

    //calculating date and showing it

    // $('#inputDate').on('input', function() {
    $('#inputDate').on('change', function() {
        var inputDateTemp = $('#inputDate').val();
        if (patternDate.test(inputDateTemp) == true) {
            // alert("jes");
            $('#textAge').text(inputDateTemp);
            $('#textAge').fadeIn(500);
        } else {
            $('#textAge').fadeOut(500);
        }
    });




});