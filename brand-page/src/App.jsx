import { useState } from 'react'
//  import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Navbar';
import Hero from './Hero';
// import Contain from './Contain';

function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
  <Navbar/>
  <div className='mar'>
  {/* <Contain/> */}
  <Hero/>
  </div>

    </>
  );
}

export default App
