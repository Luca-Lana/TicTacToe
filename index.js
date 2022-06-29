$('.resetar').click(function() {
    $('.simbolo').removeAttr('disabled');
    $('.simboloDaVez').val('');
    $('.espaco').each(function() {
        $(this).text('').css('border', '');
    })
    $('.mensagemGanhador').text('');
})

//escolher por qual simbolo começar 
$('.simbolo').click(function() {
    let simbolo = $(this).text();
    $('.simboloDaVez').val(simbolo);
    $('.simbolo').attr('disabled', 'disabled');
})

$('.espaco').click(function() {

    if($('.mensagemGanhador').text() != ''){
        return
    }   

    if($('.simboloDaVez').val() != '' && $(this).text() == ''){
        let simbolo = $('.simboloDaVez').val();
        if(simbolo == 'X'){
            $('.simboloDaVez').val('O');
        }else{
            $('.simboloDaVez').val('X');
        }
        $(this).text(simbolo);

        if(checarVitoria()){
            $('.mensagemGanhador').text('PARABENS VOCE GANHOU!')
        }

       
    }
})

function checarVitoria() {
    //HORIZONTAL
    if($('#espaco1').text() != '' && $('#espaco1').text() == $('#espaco2').text() && $('#espaco1').text() == $('#espaco3').text()){
        $('#espaco1').css('border','3px solid greenyellow');
        $('#espaco2').css('border','3px solid greenyellow');
        $('#espaco3').css('border','3px solid greenyellow');
        return true;
    }

    if($('#espaco4').text() != '' && $('#espaco4').text() == $('#espaco5').text() && $('#espaco4').text() == $('#espaco6').text()){
        $('#espaco4').css('border','3px solid greenyellow');
        $('#espaco5').css('border','3px solid greenyellow');
        $('#espaco6').css('border','3px solid greenyellow');
        return true;
    }

    if($('#espaco7').text() != '' && $('#espaco7').text() == $('#espaco8').text() && $('#espaco7').text() == $('#espaco9').text()){
        $('#espaco7').css('border','3px solid greenyellow');
        $('#espaco8').css('border','3px solid greenyellow');
        $('#espaco9').css('border','3px solid greenyellow');
        return true;
    }

    //HORIZONTAL
    if($('#espaco1').text() != '' && $('#espaco1').text() == $('#espaco4').text() && $('#espaco1').text() == $('#espaco7').text()){
        $('#espaco1').css('border','3px solid greenyellow');
        $('#espaco4').css('border','3px solid greenyellow');
        $('#espaco7').css('border','3px solid greenyellow');
        return true;
    }

    if($('#espaco2').text() != '' && $('#espaco2').text() == $('#espaco5').text() && $('#espaco2').text() == $('#espaco8').text()){
        $('#espaco2').css('border','3px solid greenyellow');
        $('#espaco5').css('border','3px solid greenyellow');
        $('#espaco8').css('border','3px solid greenyellow');
        return true;
    }

    if($('#espaco3').text() != '' && $('#espaco3').text() == $('#espaco6').text() && $('#espaco3').text() == $('#espaco9').text()){
        $('#espaco3').css('border','3px solid greenyellow');
        $('#espaco6').css('border','3px solid greenyellow');
        $('#espaco9').css('border','3px solid greenyellow');
        return true;
    }

    //diagonal
    if($('#espaco1').text() != '' && $('#espaco1').text() == $('#espaco5').text() && $('#espaco1').text() == $('#espaco9').text()){
        $('#espaco1').css('border','3px solid greenyellow');
        $('#espaco5').css('border','3px solid greenyellow');
        $('#espaco9').css('border','3px solid greenyellow');
        return true;
    }

    if($('#espaco3').text() != '' && $('#espaco3').text() == $('#espaco5').text() && $('#espaco3').text() == $('#espaco7').text()){
        $('#espaco3').css('border','3px solid greenyellow');
        $('#espaco5').css('border','3px solid greenyellow');
        $('#espaco7').css('border','3px solid greenyellow');
        return true;
    }
}


