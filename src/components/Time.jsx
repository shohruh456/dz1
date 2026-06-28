import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="text-center p-8 bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 max-w-xs w-full">
        <h2 className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-3">
          Digital Clock
        </h2>
        <div className="text-5xl font-mono font-black text-cyan-400 tracking-wider drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          {time.toLocaleTimeString()}
        </div>
        
      </div>
    </div>
  );
}

export default DigitalClock;