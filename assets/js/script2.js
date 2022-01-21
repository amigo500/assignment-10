const btn = document.querySelector('#btn');


btn.addEventListener('click', getApi);


function getApi() {
    const urI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
    const div = document.querySelector('#cardDiv');
    let img = document.createElement('img');
    img.className = 'card-img-top bg-dark';
    img.setAttribute('alt', 'Image form deck of cards');
    const header = document.createElement('h2');
    header.className = ('bg-secondary text-center text-warning my-4');

    fetch(urI)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.cards[0]);
            console.log(data.cards[0].image);
            console.log(data.cards[0].suit);
            console.log(data.cards[0].value);
            const val = data.cards[0];
            let imgUrl = data.cards[0].image;
            img.setAttribute('src', imgUrl);

            div.innerHTML = '';
            header.innerHTML = `The ${val.value.toLowerCase()} of ${val.suit.toLowerCase()}`;
            div.appendChild(header);
            div.appendChild(img);


        })
        .catch(err => console.log(` Error: ${err}`));
}