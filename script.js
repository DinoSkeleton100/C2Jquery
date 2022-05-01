$(document).ready(function() {

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
        "Submit"
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
        "Invullen"
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


    //submit button >> checking regex
    $('#submit').on('click', function() {

        //testing name
        var inputName = $('#inputName').val();
        // alert(inputName);
        // alert(patternOnlyLetters.test(inputName));
        if (patternOnlyLetters.test(inputName) == false) {
            $('#inputName').addClass('failedRegex')
        } 

    });

});