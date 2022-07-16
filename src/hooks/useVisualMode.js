import { useState } from "react";


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  

  /////////// TRANSITION ///////////////////
  const transition = (newMode, replace = false) => {
    if (replace) {
     return setMode(newMode);
    }
    setMode(newMode);
    setHistory([...history, newMode]);
  };


  /////////// BACK //////////////////////
  const back = () => {
    if (history.length <= 1) {
      return
    }
      const prevHistory = history.splice(0, history.length-1)
      setHistory(prevHistory)
      setMode(prevHistory[prevHistory.length -1])
  };

  return { 
  mode, 
  transition,
  back
 };
}