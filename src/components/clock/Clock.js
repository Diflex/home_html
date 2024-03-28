import { useState, useEffect } from 'react';
import './clock.css';

function Clock() {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <p className='clock'>
      {date.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit', hour12: false})}
    </p>
  );
}

export default Clock;

