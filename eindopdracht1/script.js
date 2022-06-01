$(document).ready(function() {

    //aanmaken arrays
    var leftList = [];
    var rightList = [];
    var selectedNumber;
    var selectedList;
    var WordId;
    
    //toevoeg knop
    //input in linker array
    // en linker array woord weergegeven
    $('#addButton').click('on', function() {
        var newWord = $('#addTextBox').val();
        leftList[leftList.length] = newWord;

        //has to be redone after every update >>>>
        // display left box
        $('#contentBoxLeft').empty();
        for(var i = 0; i < leftList.length; i++) {
            $('#contentBoxLeft').append('<div class="word" data-list="left" data-number="'+i+'">'+leftList[i]+'</div>');
         };

         //display right box
         $('#contentBoxRight').empty();
         for(var i = 0; i < rightList.length; i++) {
             $('#contentBoxRight').append('<div class="word" data-list="right" data-number="'+i+'">'+rightList[i]+'</div>');
          };

        //woord selecteren
        $('.word').click('on', function() {
            $('.selectedWord').removeClass('selectedWord');
            $(this).toggleClass('selectedWord');
            WordId = $(this).attr('id');
            selectedList = $(this).attr('data-list');
            selectedNumber = $(this).attr('data-number');
        });
        // <<<<

    });

    //move to the right button
    $('#toRightButton').click('on', function() {

        if($('.word').hasClass('selectedWord') && selectedList == "left") {

            //move item to other array and delete other
            rightList.push(leftList[selectedNumber]);
            leftList.splice(selectedNumber, 1);

            //has to be redone after every update >>>>
            // display left box
            $('#contentBoxLeft').empty();
            for(var i = 0; i < leftList.length; i++) {
                $('#contentBoxLeft').append('<div class="word" data-list="left" data-number="'+i+'">'+leftList[i]+'</div>');
            };

            //display right box
            $('#contentBoxRight').empty();
            for(var i = 0; i < rightList.length; i++) {
                $('#contentBoxRight').append('<div class="word" data-list="right" data-number="'+i+'">'+rightList[i]+'</div>');
            };

            //woord selecteren
            $('.word').click('on', function() {
                $('.selectedWord').removeClass('selectedWord');
                $(this).toggleClass('selectedWord');
                WordId = $(this).attr('id');
                selectedList = $(this).attr('data-list');
                selectedNumber = $(this).attr('data-number');
            });
            // <<<<
        };
    });

    //move to the left button
    $('#toLeftButton').click('on', function() {

        if($('.word').hasClass('selectedWord') && selectedList == "right") {

            //move item to other array and delete other
            leftList.push(rightList[selectedNumber]);
            rightList.splice(selectedNumber, 1);

            //has to be redone after every update >>>>
            // display left box
            $('#contentBoxLeft').empty();
            for(var i = 0; i < leftList.length; i++) {
                $('#contentBoxLeft').append('<div class="word" data-list="left" data-number="'+i+'">'+leftList[i]+'</div>');
            };

            //display right box
            $('#contentBoxRight').empty();
            for(var i = 0; i < rightList.length; i++) {
                $('#contentBoxRight').append('<div class="word" data-list="right" data-number="'+i+'">'+rightList[i]+'</div>');
            };

            //woord selecteren
            $('.word').click('on', function() {
                $('.selectedWord').removeClass('selectedWord');
                $(this).toggleClass('selectedWord');
                WordId = $(this).attr('id');
                selectedList = $(this).attr('data-list');
                selectedNumber = $(this).attr('data-number');
            });
            // <<<<
        };
    });

});