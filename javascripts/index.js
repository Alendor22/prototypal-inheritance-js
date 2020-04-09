const getDiv = () => document.querySelector('div#main');

let player = new Player(50, 25, 'Some Really neat image', 9, { str: 25, health: 5 }, 'Scooter');

let enemy = new Enemy(15, 20, 'Some terrifyingly awesome image', { str: 5, health: 25 }, 'Tiger King', 'Tiger King Sword');

document.addEventListener('DOMContentLoaded', function () {
  player.action('Attack');

  setTimeout(function () {
    enemy.action('Defend');
  }, 5000);
})