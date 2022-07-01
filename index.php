<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css?<?php echo time(); ?>">
    <title>TicTacToe</title>
</head>

<body>
    <div class="central">
        <h1>TicTacToe</h1>
        <div id="tabuleiro">
            <div class="espaco" id="espaco1"></div>
            <div class="espaco" id="espaco2"></div>
            <div class="espaco" id="espaco3"></div>
            <div class="espaco" id="espaco4"></div>
            <div class="espaco" id="espaco5"></div>
            <div class="espaco" id="espaco6"></div>
            <div class="espaco" id="espaco7"></div>
            <div class="espaco" id="espaco8"></div>
            <div class="espaco" id="espaco9"></div>
        </div>
        <div class="mensagemGanhador"></div>
        <div>
            <h3>Escolha com qual simbolo começar:</h3>
            <div class="simbolos">
                <button class="simbolo">X</button>
                <button class="simbolo">O</button>
                <input type="hidden" class="simboloDaVez" value="">
            </div>
        </div>
        <div>
            <button class="reset">RESETAR</button>
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="index.js?<?php echo time(); ?>"></script>

</html>