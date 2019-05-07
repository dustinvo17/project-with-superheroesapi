import React from 'react'
import {Link} from 'react-router-dom'
const HeroNotFound =()=>{
    return (
        <div className="container">
            
            <div className="ui vertical masthead center aligned segment">
                    <div className="ui container">
                        <h1 className="ui header">Can't find hero...</h1>
                </div>

                <div className="ui container">
                       <div  >
                        <Link to='/' className="ui massive button inverted red" >Back to home</Link>
                        
                       </div>
                </div>
                
  
               
            </div>
           

        </div>
    )
}

export default HeroNotFound