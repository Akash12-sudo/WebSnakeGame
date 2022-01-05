import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

const scoreElement = document.getElementById('score')
const score = scoreElement.innerHTML
console.log(score)

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    let newScore = parseInt(scoreElement.innerHTML)
    newScore += 10
    scoreElement.innerHTML = newScore
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }

  return newFoodPosition
}
