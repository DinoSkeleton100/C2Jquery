$(document).ready(function() {
    
    $('genderForm').change(function() {
        alert(changes);
        if ($('genderForm').val() == woman) {
            $('.man').addClass('woman');
            $('.man').removeClass('man');
        }
    });

});