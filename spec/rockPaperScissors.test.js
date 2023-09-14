const playGame = require('../src/rockPaperScissors.js');

describe('Rock, Paper, Scissors playGame function', () => {
  it('should return an error if an invalid input is provided', () => {
    expect(playGame('test')).toEqual("Please choose rock, paper, or scissors!");
  });

  it('should let the user win if they enter bomb', () => {
    expect(playGame('bomb')).toContain("You won with a bomb you cheat!");
  });

  it('should return what the user threw in the game outcome', () => {
    expect(playGame('scissors')).toContain("You threw: scissors");
    expect(playGame('paper')).toContain("You threw: paper");
    expect(playGame('rock')).toContain("You threw: rock");
  });
});