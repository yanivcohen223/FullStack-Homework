const game_data = { }

function initGame() {
    game_data.symbol_pos = [" ", " ", " ",
                            " ", " ", " ",
                            " ", " ", " "]
    game_data.winningConditions = [
                                  [0, 1, 2],
                                  [3, 4, 5],
                                  [6, 7, 8],
                                  [0, 3, 6],
                                  [1, 4, 7],
                                  [2, 5, 8],
                                  [0, 4, 8],
                                  [2, 4, 6]
                                          ]
    game_data.vs_player = false
    game_data.vs_computer = false
} 

function select_symbol(a) {
    game_data.current_player = a
    $('#turn').text(`player's ${game_data.current_player} turn`)
    $('.symbol').attr('disabled', true);
    $('.button').attr('disabled', false);
}

function game_vs_computer () {
    game_data.current_player = 'X'
    game_data.computer = 'O'
    $('.symbol').attr('disabled', true);
    $('.button').attr('disabled', false);
    game_data.vs_player = true
}

function computerTurn(){
    do {position = Math.floor(Math.random()*9) + 1} 
    
    while( game_data.symbol_pos[position - 1] != " ") {
    
        if ( game_data.symbol_pos[position - 1] == " " ){
            $(`#bt${position}`).text(game_data.computer)
            game_data.symbol_pos[position - 1] = game_data.computer
        }
    }
}

function changePlayer () {
    game_data.current_player = ( game_data.current_player == 'X') ? 'O' : 'X'; 
    $('#turn').text(`player's ${game_data.current_player} turn`)
}

function who_won() {
    let round_won = false
        for (let i = 0; i < game_data.winningConditions.length; i++) {
            const condition = game_data.winningConditions[i];
            const cellA = game_data.symbol_pos[condition[0]]
            const cellB = game_data.symbol_pos[condition[1]]
            const cellC = game_data.symbol_pos[condition[2]]

            if (cellA == " " || cellB == " " || cellC == " ") {
                continue;
            }

            if (cellA == cellB && cellB == cellC) {
                round_won = true;
                for(let i = 1; i <= 9; i++ ){
                    $('.button').attr('disabled', true);
                } 
                break;
            }  
        }

        if (round_won) {
           return $('#who_won').text(` player ${game_data.current_player} won the game!`)
        }

        else if (board_is_full()) {
            $('#who_won').text('its a Draw!');
        }

        else {
            if (game_data.vs_computer == true) {
                computerTurn()
            }

            else {
            changePlayer();
            }
        }     
}

function board_is_full() {
    for (let e of game_data.symbol_pos) {
        if (e == " ")
            return false
    }
    return true;
}

function symbol_place(i) {
    if (!game_data.vs_player) {
        if (!board_is_full()) {
            if (game_data.current_player == undefined) {
                return alert ('choose symbol');
            }
            if (game_data.symbol_pos[i-1] != " ") {
               alert ('cant put that here')
               
            }
    
            else {
                $('#cannot_play').text(' ')
                game_data.symbol_pos[i - 1] = `${game_data.current_player}`
                $(`#${event.target.id}`).text(`${game_data.current_player}`)
               
                    if ( who_won('X')) {
                        game_data.vs_player = true;
                    }
                    else {
                        changePlayer()
                        if ( who_won('O')) {
                            game_data.vs_player = true;
                        }
                    }
            }
        }
    }
    if (!game_data.vs_computer) {
        if(!board_is_full() && game_data.symbol_pos[i - 1] == " "){
            game_data.symbol_pos[i - 1] = game_data.current_player 
            $(`#bt${i}`).text(game_data.current_player) 
            if (who_won(game_data.current_player)){
                $(`#who_won`).text('you won the game')
                game_data.vs_computer = true;
            }
           else if(board_is_full()){
            if(!who_won(game_data.player) && !who_won(game_data.computer)){
                $(`#who_won`).text('its a tie, really?')
                game_data.vs_computer = true;
               }
           }
            else {
                computerTurn()
                if (who_won(game_data.computer)){
                    $(`#who_won`).text(`the machine is better than you?`)
                    game_data.vs_computer = true;
                }
            }
        }  
    }   
}

function restart() {
    initGame()
    $('.symbol').attr('disabled', false);
    $('.button').text(" ");
    $('.button').attr('disabled', true);
    $('#who_won').text('who won?');
    $('#turn').text(" ")
}

initGame()