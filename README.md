# Memory Game

## Overview
Memory Game is a card-matching game that tests your memory. The goal is to find all matching pairs of cards as quickly as possible.

## Features
- Random card placement on each game start.
- Flip animations for cards.
- A timer that tracks how long it takes to complete the game.
- At the end you get the total time taken result

## How to Play
1. **Flip Cards**: Click on a card to flip it and reveal its image.
2. **Find Matches**: Click on another card to find its match. If the two cards match, they remain flipped. If not, they will flip back over.
3. **Game Over**: The game ends when all pairs are matched. A message will display the total time taken to complete the game.

## Game Setup
- **Card Array**: Cards are stored in an array with pairs having the same name.
- **Shuffling**: The card array is shuffled at the start of each game to randomize the card positions.
- **Flipping Logic**: Click events manage card flipping, matching, and mismatching.

## Technologies Used
- **HTML**: For the structure of the game.
- **Tailwind CSS**: For styling the game.
- **JavaScript**: For game logic, including card flipping, matching, and timer functionality.

## Customization
- You can customize the game by changing the images in the `cardArray` within the JavaScript section.
- Adjust styles using Tailwind CSS classes or add your own custom CSS.


