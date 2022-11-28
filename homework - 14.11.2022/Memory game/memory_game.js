//html selctors
const section = document.querySelector('section')
const playerMatches =document.querySelector('span')
let matches = 0
playerMatches.textContent = matches

//card images
const getData = () => [
    {imgSrc: 'images/snorlax.jpeg', name: 'snorlax' },
    {imgSrc: 'images/ash.jpeg', name: 'ash' },
    {imgSrc: 'images/char.jpeg', name: 'char' },
    {imgSrc: 'images/greninja.jpeg', name: 'greninja' },
    {imgSrc: 'images/jigglypuff.jpeg' , name: 'jigglypuff' },
    {imgSrc: 'images/mewtwo.jpg' , name: 'mewtwo' },
    {imgSrc: 'images/balba.jpg' , name: 'balbasour' },
    {imgSrc: 'images/eevee.jpg', name: 'eevee' },
    {imgSrc: 'images/snorlax.jpeg', name: 'snorlax' },
    {imgSrc: 'images/ash.jpeg', name: 'ash' },
    {imgSrc: 'images/greninja.jpeg', name: 'greninja'},
    {imgSrc: 'images/char.jpeg', name: 'char' },
    {imgSrc: 'images/eevee.jpg', name: 'eevee' },
    {imgSrc: 'images/jigglypuff.jpeg' , name: 'jigglypuff' },
    {imgSrc: 'images/mewtwo.jpg' , name: 'mewtwo' },
    {imgSrc: 'images/balba.jpg' , name: 'balbasour' },]

//random cards
const randomCards = () => {
    const cardImages = getData()
    cardImages.sort(() => Math.random() - 0.5);
    return cardImages
}



const cardGenerator = () => {
    const cardImages = randomCards()

    cardImages.forEach((item) => {
        //creatinng elements
        const card = document.createElement("div");
        const front = document.createElement("img");
        const back = document.createElement("img");
        //creating class
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back'; 
        //attach the images
        front.src = item.imgSrc;
        back.src = 'images/images.jpeg'
        card.setAttribute('name', item.name);
        //attach the elements
        section.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', (e)=> {
            card.classList.toggle('toggleCard');
            checkCards(e)
        })
    });

}


const checkCards = (e) => {
    const clickedCards = e.target;
    clickedCards.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");

    if(flippedCards.length === 2) {
        if( 
            flippedCards[0].getAttribute("name") ===
            flippedCards[1].getAttribute("name") )
             {
                flippedCards.forEach ((card) => {
                    card.classList.remove("flipped")
                    card.style.pointerEvents = 'none'
                })
                matches++
                playerMatches.textContent = matches

                if (matches === 8) {
                    restart();
                }
        }
        else {
            flippedCards.forEach ((card) => {
                card.classList.remove("flipped")
                setTimeout(() => {
                    card.classList.remove("toggleCard")
                }, 1000);
            });

        }
        
    }
    
}

const restart = () => {

    let face = document.querySelectorAll(".face")
    let cards = document.querySelectorAll(".card");
    cards.forEach((item) => {
        setTimeout(() => {
            item.classList.remove("toggleCard");
            item.classList.remove("flipped");            
        }, 800);

    })
    matches = 0
    playerMatches.textContent = matches
    let cardImages = randomCards()
}

cardGenerator()