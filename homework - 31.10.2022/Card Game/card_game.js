
let player_score = 0
let computer_score = 0

while (computer_score < 5 && player_score < 5) {

    let player_card = Math.floor((Math.random()* 14-1) +2) 
    let computer_card = Math.floor((Math.random()* 14-1) +2)

    if (computer_card < player_card) {
        console.log(`player won: ${check_cards(player_card)}, computer card: ${check_cards(computer_card)} `);
        player_score++ 
        console.log(`player score: ${player_score}, computer score: ${computer_score}`);   
    }

    else if (computer_card > player_card) {
        console.log(`player card: ${check_cards(player_card)}, computer won: ${check_cards(computer_card)} `);
        computer_score++
        console.log(`player score: ${player_score}, computer score: ${computer_score}`);
    }
    
    else {
        console.log(`Draw: player card: ${check_cards(player_card)}, computer card: ${check_cards(computer_card)} `);
        console.log(`player score: ${player_score}, computer score: ${computer_score}`);
    }
}

    if (computer_score == 5) {
        console.log('computer won the game');
    }
    else {
        console.log('player won the game');
    }

function check_cards(card_number){

    switch (card_number) {
        case 11 : return ('J');
        case 12 : return ('Q');
        case 13 : return ('K');
        case 14 : return ('A');
        default:
            return card_number;
    }
}
