
const cardArray = [
  { name: 'rainbow', img: 'https://toigingiuvedep.vn/wp-content/uploads/2022/04/hinh-anh-meme-cheems-doi-mu-noel.jpg' },
  { name: 'rainbow', img: 'https://toigingiuvedep.vn/wp-content/uploads/2022/04/hinh-anh-meme-cheems-doi-mu-noel.jpg' },
  { name: 'star', img: 'https://blogchiasekienthuc.com/wp-content/uploads/2022/11/anh-meme-meo-hai-huoc-de-thuong-16.jpg' },
  { name: 'star', img: 'https://blogchiasekienthuc.com/wp-content/uploads/2022/11/anh-meme-meo-hai-huoc-de-thuong-16.jpg' },
  { name: 'circle', img: 'https://trinhvantuyen.com/wp-content/uploads/2022/05/www_tiengdong_com-meme-cho-cuoi.jpg' },
  { name: 'circle', img: 'https://trinhvantuyen.com/wp-content/uploads/2022/05/www_tiengdong_com-meme-cho-cuoi.jpg' },
  { name: 'heart', img: 'https://gamehow.net/upload/suckhoe_post/images/2025/02/10/2976/anh-meme-mewing-5.jpg' },
  { name: 'heart', img: 'https://gamehow.net/upload/suckhoe_post/images/2025/02/10/2976/anh-meme-mewing-5.jpg' }
];

// Xáo trộn mảng
cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// Tạo board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'https://tse3.mm.bing.net/th/id/OIP.6grYlBQ-FimzaHgSOCorLgHaEo?pid=Api&P=0&h=220'); // ảnh mặt sau
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}

// Kiểm tra trùng khớp
function checkMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].setAttribute('src', 'https://cdn.photoroom.com/v1/assets-cached.jpg?path=backgrounds_v3/white/Photoroom_white_background_extremely_fine_texture_only_white_co_c02f37e8-3df8-45c4-946a-66c897f65b8c.jpg'); // ảnh trống
    cards[optionTwoId].setAttribute('src', 'https://cdn.photoroom.com/v1/assets-cached.jpg?path=backgrounds_v3/white/Photoroom_white_background_extremely_fine_texture_only_white_co_c02f37e8-3df8-45c4-946a-66c897f65b8c.jpg');
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'https://cdn.photoroom.com/v1/assets-cached.jpg?path=backgrounds_v3/white/Photoroom_white_background_extremely_fine_texture_only_white_co_c02f37e8-3df8-45c4-946a-66c897f65b8c.jpg');
    cards[optionTwoId].setAttribute('src', 'https://cdn.photoroom.com/v1/assets-cached.jpg?path=backgrounds_v3/white/Photoroom_white_background_extremely_fine_texture_only_white_co_c02f37e8-3df8-45c4-946a-66c897f65b8c.jpg');
  }

  cardsChosen = [];
  cardsChosenId = [];
  scoreDisplay.textContent = 'Score: ' + cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    scoreDisplay.textContent = '🎉 Chúc mừng! Bạn đã thắng!';
  }
}

// Lật thẻ
function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

createBoard();
