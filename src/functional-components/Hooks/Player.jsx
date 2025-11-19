import { useRef, useState } from 'react'

export default function Player() {
  var playerRef = useRef(); 

  const [player, setPlayer] = useState('');

  function handleButtonClick() {
    setPlayer(playerRef.current.value)
    playerRef.current.value = ""
  }
  return (
    <section id='player'>
      <h2>Welcome to {player ?? "user"}</h2>
      <p>
        <input ref={playerRef} type='text' />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}





