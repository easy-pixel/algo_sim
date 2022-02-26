/*This is used as a fun way to navigate the site, as the user can use the 
character Dubby to jump from article to article instead of scrolling.
However, the button to spawn Dubby is hidden.*/

//Canvas Variables
const canvas = document.querySelector('canvas');
const context = getContext('2d');

//Make canvas take up full screen
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientWidth;

//Player
class Player {
  constructor(){
    this.position = {
      x: 100,
      y: 100
    }
    this.width = 100;
    this.height = 100;
  }
  draw() {
    context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

//Player Variable
const player = new Player();
player.draw;