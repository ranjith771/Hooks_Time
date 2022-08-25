import React, { useState } from 'react';


const App= () => {

  let newTime= new Date().toLocaleTimeString();

  const [ctime,utime]=useState(newTime);

  const Press = () => {
    return (
      utime(newTime) 
          );
  }

  return (
    <>
    <h1>{ctime}</h1>
    <button onClick={Press}>Get Time</button>
    </>
  );
}

export default App;
