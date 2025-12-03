# React Tac Toe

### Introduction

Project built from the React website documentation but with modifications and some improvements.
The React doc tic tac toe (RTT) has no styling. 
I added some simple styling, hover and opacity animations.

## Minor improvements
Aside from the basic UI decoration, I have added alerts and a restart game button. 
Users can restart the game once you reach a standstill which happens often with skilled Tic Tac Toe players

**React-hot-toast** was used for as the library for the window alerts. 

When a player wins a Lottie animation is played utilzing useState **setPlay(true)** The Lottie container also reset once a user resets the game to allow the Lottie container to re-render and replay. 

The app has no backend and no local storage. Which leads to future improvements...

## Possible Future Updates
- Add a leaderboard
- Add named players
- Add Websockets for online playing vs opponents
- Better X & O marking with possible animations