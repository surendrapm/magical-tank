import React from 'react'
import './style.css'
const tanks = () => {
  return (<>
              <div>
              <div className='tank-container'>
                <div className='water'></div>
              </div>
             <div>
                <button className='addbtn'>Add water</button>
                <br />
                <button className='emptybtn'>Empty</button>
             </div>
              </div>
             
  </>
    
  )
}

export default tanks