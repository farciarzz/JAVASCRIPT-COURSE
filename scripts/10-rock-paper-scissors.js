
let score = JSON.parse(localStorage.getItem
('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

updateScoreElement();

//console.log(JSON.parse(localStorage.getItem('score')));

function pickComputerMove()
{
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3)
  {
    computerMove = 'rock';
  }
  else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3)
  {
    computerMove = 'paper';
  }
  else if(randomNumber >= 2 / 3 && randomNumber < 1)
  {
    computerMove = 'scissors';
  }

  return computerMove;
}

function playGame(playerMove){
  const computerMove = pickComputerMove();

  let result = '';
  
  if (playerMove == 'scissors')
  {
    if (computerMove == 'rock'){
      result = 'You lose.'
    }
    else if (computerMove == 'paper')
    {
      result = 'You win.'
    }
    else if (computerMove == 'scissors')
    {
      result = 'Tie.';
    } 
  }
  else if (playerMove == 'paper')
  {
    if (computerMove == 'rock'){
      result = 'You win.'
    }
    else if (computerMove == 'paper')
    {
      result = 'Tie.'
    }
    else if (computerMove == 'scissors')
    {
      result = 'You Lose.';
    }
  }
  else if (playerMove == 'rock')
  {
    if (computerMove == 'rock'){
      result = 'Tie.'
    }
    else if (computerMove == 'paper')
    {
      result = 'You lose.'
    }
    else if (computerMove == 'scissors')
    {
      result = 'You win.';
    }
  }

  if (result === 'You win.')
  {
    score.wins += 1;
  }
  else if (result === 'You Lose.')
  {
    score.losses += 1;
  }
  else if (result === 'Tie.')
  {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score))

  document.querySelector('.js-result')
    .innerHTML =  `${result}`;

  document.querySelector('.js-moves')
    .innerHTML =  `You 
<img src="images/${playerMove}.png"
class="move-icon">
<img src="images/${computerMove}.png"
class="move-icon">
Computer`;

  updateScoreElement();

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  Wins: ${score.wins}. Loses: ${score.losses}. Tie: ${score.ties}`);

}

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}. Loses: ${score.losses}. Tie: ${score.ties}`;
}

console.log('hello'.length);
console.log('hello.'.toUpperCase());

const object1 = {
  message: 'hello'
}

const object2 = object1;

object1.message = 'Good job';
console.log(object1);

console.log(object2);

const object3 = {
  message: 'Good job'
};

console.log(object3 === object2);
console.log(object2 === object1);

const object4 = {
  message: 'Good job',
  price: 809
};

const message2 = object4.message;
const { message, price } = object4;
console.log(message);
console.log(price);

const object5 = {
  //message: message
  message,
  // method: function function1(){
  //   console.log('method');
  // }
  method() {
    console.log('methodjupi');
  }

};

console.log(object5);
object5.method();