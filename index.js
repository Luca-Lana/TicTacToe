$('.reset').click(function() {
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
        simbolo == 'X' ? $('.simboloDaVez').val('O') : $('.simboloDaVez').val('X');
        $(this).text(simbolo);
        checarVitoria()       
    }
})

function checarVitoria() {
    let condicoesVitoria = [
        [1,2,3], [4,5,6], [7,8,9],
        [1,4,7], [2,5,8], [3,6,9],
        [1,5,9], [3,5,7]
    ];

    condicoesVitoria.forEach(function(condicao) {
        let campo1            = $(`#espaco${condicao[0]}`).text();

        if(campo1 != '' && $(`#espaco${condicao[1]}`).text() == campo1 && $(`#espaco${condicao[2]}`).text() == campo1){
            $(`#espaco${condicao[0]}`).css('border','3px solid greenyellow');
            $(`#espaco${condicao[1]}`).css('border','3px solid greenyellow');
            $(`#espaco${condicao[2]}`).css('border','3px solid greenyellow');
            $('.mensagemGanhador').text(`O JOGADOR "${campo1}" GANHOU!!`);
        }
    });
}