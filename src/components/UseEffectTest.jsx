import React from "react";
import { useEffect, useRef, useState } from "react";

const UseEffectTest = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
   const prev = prevCountRef.current;

   if (count > prev) {
    alert("Son oshdi!");
   }else if (count < prev) {
    alert("Son kamaydi!");
    }else if (count === 0) {
    alert("reset");
   }    
   prevCountRef.current = count;
  }, [count]);
  //const [userName, setUserName] = useState("Yuklamoqda...")
  //useEffect(() => {

  //setTimeout(() => {
  //  setUserName("Mamatqul Tursinalievich Teshaboy Og'li")
  // }, 2000)
  //})

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      <h1>{count}</h1>  
      </div>

  );
};

export default UseEffectTest;
