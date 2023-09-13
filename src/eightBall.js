const eightBall = () => {
  const randomNumber = Math.floor(Math.random() * 8);
  console.log(randomNumber);
  
  let eightBallNumber = '';
  
  switch(randomNumber) {
    case 1:
      eightBallNumber = 'It is certain';
      break;
    case 2:
      eightBallNumber = 'It is decidely so';
      break;
    case 3:
      eightBallNumber = 'Reply hazy try again';
      break;
    case 4:
      eightBallNumber = 'Cannot predict now';
      break;
    case 5:
      eightBallNumber = 'Do not count on it';
      break;
    case 6:
      eightBallNumber = 'My sources say no';
      break;
    case 7:
      eightBallNumber = 'Outlook not so good';
      break;
    case 8:
      eightBallNumber = 'Signs point to yes';
      break;
  };

  console.log(eightBallNumber);
  return eightBallNumber;
}

module.exports = eightBall;