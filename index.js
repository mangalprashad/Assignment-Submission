let cards = [
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:1,
        status:"closed"
    },
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/7c/70/3f/7c703ff95934b0094c5be9994f1998c5.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/7c/70/3f/7c703ff95934b0094c5be9994f1998c5.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://starbaseatlanta.com/wp-content/uploads/smab71976.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://starbaseatlanta.com/wp-content/uploads/smab71976.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/111121/Baby-Groot-Profile-HD-Tip-iphone-8-wallpaper-ilikewallpaper_com_750.jpg",
        value:5,
        status:"closed"
    },
    {   image:"https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/111121/Baby-Groot-Profile-HD-Tip-iphone-8-wallpaper-ilikewallpaper_com_750.jpg",
        value:5,
        status:"closed"
    },
]
console.log(cards);
//durnsten shuffling algorithm
let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardCopy=cards;

function displayCards(data){

    let cardsString="";
    data.forEach(function(card,index){
        cardsString+=`

            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let val1=null,val2=null;
let score=0;
let cardCount=1;
function openCard(index){

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;
        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            /*score=0;
            val1=null;
            val2=null;
            cardCount=1;
            document.getElementById('score').innerText="0";
            cards=cardCopy;*/
            alert("Game Over");
            location.reload();
        }
    }
    displayCards(cards);
}