const getUserChoice = (userInput) => {
  //userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    return 'Error'
  };
};
  
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2: 
      return 'scissors'
  };
};
  
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  };

  if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    };
  };

  if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    };
  };

  if (userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    };
  };

  if(userChoice === 'bomb') {
    return 'You won with a bomb you cheat!'
  }
};

const playGame = (user) => {
  const userChoice = getUserChoice(user.toLowerCase());
  if (userChoice === 'Error') {
    return 'Please choose rock, paper, or scissors!';
  };
  const computerChoice = getComputerChoice();
  const userMove = `You threw: ${userChoice}`;
  const computerMove = `The computer threw: ${computerChoice}`;
  const result = determineWinner(userChoice, computerChoice);
  return `${userMove}\n${computerMove}\n${result}`;
};

module.exports = getComputerChoice;
module.exports = playGame;