import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainScene from './Scenes/MainScene';
import * as Phaser from 'phaser';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    //roundPixels: true,
    parent: 'phaser-content',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade'
    },
    scene: [MainScene],
    scale: {
        parent: 'phaser-content',
        mode: Phaser.Scale.RESIZE,
        width: window.innerWidth,
        height: window.innerHeight
    }
};

var main = new Phaser.Game(config);

var socket = socketCluster.connect();

      socket.on('error', function (err) {
        console.error(err);
      });

      socket.on('connect', function () {
        console.log('Socket is connected');
      });

      socket.on('random', function (data) {
        console.log('Received "random" event with data: ' + data.number);
      });

      var sampleChannel = socket.subscribe('sample');

      sampleChannel.on('subscribeFail', function (err) {
        console.error('Failed to subscribe to the sample channel due to error: ' + err);
      });

      sampleChannel.watch(function (num) {
        console.log('Sample channel message:', num);
      });