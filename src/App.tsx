import { useState } from 'react'
import Tanks  from './tanks-ui/tanks' 
import './App.css'

function App() {
 const TanksContainer = []
 for(let i=0 ; i<4 ; i++){
  TanksContainer.push(<Tanks key={i}/>)
}
  return (
   <>
   <div>
     <div>this is magical tanks</div>
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
