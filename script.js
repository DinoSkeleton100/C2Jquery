$(document).ready(function() {

    const englishTranslate = [
        "English",
        "Dutch",
        "Gender:",
        "man",
        "woman",
        "Name:"
    ];

    const dutchTranslate = [
        "Engels",
        "Nederlands",
        "Geslacht:",
        "man",
        "vrouw",
        "Naam:"
    ];

    //language knoppen en vertalen
    $('#englishButton').on('click', function() {
        for (var i = 0; i < englishTranslate.length; i++) {
            $('[data-languageTranslateId='+i+']').text(englishTranslate[i]);
        }
    });

    $('#dutchButton').on('click', function() {
        for (var i = 0; i < dutchTranslate.length; i++) {
            $('[data-languageTranslateId='+i+']').text(dutchTranslate[i]);
        }
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
});