import { useState } from 'react'
import Tanks  from './tanks-ui/tanks' 
import './App.css'

function App() {

function calculateTotalWater(){
  
}

 const TanksContainer = []
 for(let i=0 ; i<4 ; i++){
  TanksContainer.push(<Tanks key={i}/>)
}
  return (
   <>
   <div>
     <div>this is magical tanks</div>
     <div>Total Water from all tank :- {`${10} liters`}</div>
     <div style={{
       display:'flex',
       marginTop:'5rem'
}}>
           {TanksContainer}
     </div>
         
    </div>
   
        
   </>
      
  )
}

export default App
