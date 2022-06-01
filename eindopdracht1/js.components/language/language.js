//engelse versie
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
    "Okay, I'll try again!",
    "Succeeded!",
    "Comments:"
];


//nederlandse versie
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
    "Oke, ik probeer het opnieuw!",
    "Voltooid!",
    "Opmerkingen:"
];

//vertaal knoppen en vertalen
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