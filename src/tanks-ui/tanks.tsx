import { useEffect, useRef, useState } from 'react'
import './style.css'

const Tanks = () => {

const [isclicked,setIsclicked] = useState(false)
const [currentTankWaterLevel,setcurrentTankWaterLevel] = useState(0)
const [waterlevel,setWaterlevel] = useState(currentTankWaterLevel)
const [totalWater , setTotalwater] = useState(0)
const intervalIdRef  = useRef<NodeJS.Timeout| null>(null)

useEffect(() => {
   return () => {
     // Cleanup function to clear interval when component unmounts
     clearInterval(intervalIdRef.current!);
   };
 }, []);

function handleAddWater(){
    setIsclicked(true)
    console.log(totalWater)
   intervalIdRef.current = setInterval(() => {
      if(totalWater < 1000){
         setIsclicked(true)
         setWaterlevel((prevWaterlevel) => prevWaterlevel + 60)
         setcurrentTankWaterLevel((prevTotalWater) => prevTotalWater + 200)
      }else {
         setIsclicked(false);
         clearInterval(intervalIdRef.current!);
       }
         },1000)
   
 
   }
     

   const handleMouseUp = () => {
      clearInterval(intervalIdRef.current!)
      setIsclicked(false)
    
      
};


function handleEmpty(){
   setWaterlevel(0)
   setIsclicked(false)
}

  return (<>
              <div>
               <div>{`${currentTankWaterLevel} liters`}</div>
              <div className='tank-container'>
                
                    {isclicked &&
                          
                          <div style={{
                           position: 'relative' ,
                           top: '0%',
                           height: `${waterlevel}px`,
                           width: '250px',
                           backgroundColor:'aqua',
                           transition: 'height 0.5s ease-in-out'
                          }}></div>
                          
                    }
                     
                      </div>
             <div>
                <button 
                   className='addbtn'
                    onMouseDown={handleAddWater}
                    onMouseUp={handleMouseUp}
                   >Add water</button>
                <br />
                <button 
                   className='emptybtn'
                   onClick={handleEmpty}
                   >Empty</button>
             </div>
              </div>
             
  </>
    
  )
}

export default Tanks