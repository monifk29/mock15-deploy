import React, { useState } from 'react'


const Timer = () => {

    const [timer, setTimer] = useState(0);

    function timerunner() {
            setTimer(timer + 1);
          }
        
          setInterval(timerunner, 1000);

  return (
    <div>Timer : {timer}</div>
  )
}

export default Timer