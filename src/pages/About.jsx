import { useState } from 'react';
import reactLogo from '../assets/react.svg';
export const About = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <img src='/vite.svg' className='logo' alt='Vite logo' />

        <img src={reactLogo} className='logo react' alt='React logo' />
      </div>
      <h1>Vite + React</h1>
      <div>
        <button
          style={{ padding: '2px' }}
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};
