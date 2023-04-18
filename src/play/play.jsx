import React from 'react';

import { Players } from './players';
import { WheelGame } from './wheelGame';

export function Play(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <WheelGame userName={props.userName} />
    </main>
  );
}
