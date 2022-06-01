$('#inputDate').on('change', function() {
    var inputDateTemp = $('#inputDate').val();
    if (patternDate.test(inputDateTemp) == true) {

        //for calculating age
        const d = new Date();
        var currentYear = d.getFullYear();
        var currentMonth = d.getMonth();
        currentMonth++; // month gaat van 0 - 11 dus + 1
        var currentDay = d.getDate();

        // dd-mm-yyyy
        // 0123456789
        var inputYear = inputDateTemp.substring(6, 10);
        var inputMonth = inputDateTemp.substring(3, 5);
        var inputDay = inputDateTemp.substring(0, 2);

        //calculating age
        var age = currentYear - inputYear;
        if ((currentMonth - inputMonth) < 1) {
            if (currentMonth - inputMonth == 0) {
                if (currentDay - inputDay < 0) {
                    age--;
                }
            } else {
                age--;
            }
        }

        $('#textAge').text(age);
        $('#textAge').fadeIn(500);
    } else {
        $('#textAge').fadeOut(500);
    }
});