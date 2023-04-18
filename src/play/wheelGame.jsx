import React from 'react';
import { Button } from 'react-bootstrap';
import './wheelGame.css';

export function WheelGame(props) {
  const userName = props.userName;
  const [score, setScore] = React.useState(0);


  return (
    <div className='game'>
      <div className='button-container'>
        <img src='/image.png' alt='Give it a spin!' className='center' />
        <div className='controls center'>
          <div className='game-name'>Spin</div>
          <div className='score center'>{score}</div>
          <Button variant='primary' onClick={() => setScore(0)}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}