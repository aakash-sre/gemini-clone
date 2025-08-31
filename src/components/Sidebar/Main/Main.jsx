import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/context'


const Main = () => {

  const {  onSent, recentPrompt,showResult,loading ,resultData,setInput,input} = useContext(Context)



  return (
    <div className='main'>
      <div className="nav">
        <p>ShreenKit</p>
        <img src={assets.newuser_icon} alt="" />

      </div>
      <div className="main-container">

       {!showResult
       ? <>


        <div className="greet">
          <p> <span> Hello, Dev</span> </p>
          <p>How can I Help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful palces to <br/>  see on the beautiful ground</p>
            <img src={assets.compass_icon} alt="" />
          </div>
           <div className="card">
            <p>Brifly summerize this  concept : urban plannning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
           <div className="card">
            <p>Brainstorm team bonding activitise for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
           <div className="card">
            <p>Improve the readabilty of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
       </>
       :<div className='result'>
        <div className='result-title'>
          <img src={assets.shree_icon} alt="" />
          <p>{recentPrompt}</p>

        </div>
        <div className="result-data">
          <img src={assets.shree_icon} alt="" />
          {loading 
          ? <div className='loader' >
            <hr />
             <hr />
              <hr />
          </div>
            : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
        }
        </div>

       </div>
       }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=> setInput(e.target.value)} value={input} type="text"  placeholder='Enter a prompt here' />
          <div>
           <img src={assets.gallery_icon}alt="" /> 
           <img src={assets.mic_icon}alt="" />
            {input? <img onClick={()=> onSent()} src={assets.send_icon}alt="" /> : null}
        </div> 
        </div>
      
      <p className="bottom-info">
        Gemini may display inaccurate info including about people , so double check its  
      </p>
     </div>
     </div>
     </div>
   
  
    
  )
}

export default Main