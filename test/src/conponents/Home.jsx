import React, { useState } from 'react'

const Home = () => {
    const [data,setData]=useState(0)

    function increment(){
        setData((prevalue)=>prevalue+1)
    }

    function decrement(){
       if(data > 0){
        setData((prevalue)=>prevalue -1)
       }
    }

    function reset(){
        setData((prevalue)=>0)
    }
  return (
    <div>
      <h1>Home-page</h1>
      <h1>Counter:{data}</h1>
      <button onClick={()=>increment()} >Increment</button>
      <button onClick={()=>decrement() }>Decrement</button>
      <button onClick={()=>reset()}>Reset</button>
    </div>
  )
}

export default Home
