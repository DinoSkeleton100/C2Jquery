$(document).ready(function() {

    //language knoppen en vertalen
    $('#englishButton').on('click', function() {

    });

    $('#dutchButton').on('click', function() {

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