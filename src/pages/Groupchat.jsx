import React,{ useEffect, useState } from "react"
import Headercomp from "../components/Headercomp";
import { NavLink } from "react-router-dom";

function Chat(props){

const id=(window.location.pathname).slice(11);

return(
        <>
            <div className="message">
                <input type="text" placeholder="message" autoFocus value={props.msg} onChange={(e)=>{props.setMsg(e.target.value);}} onKeyUp={(e)=>{if(e.keyCode == 13){props.process(id)}}} />
                <button onClick={()=>{props.process(id)}}>Send</button>
            </div>
            <div className="page">   
                {
                    props.users.map((obj)=>{
                        return(
                            
           (obj.id==id)&&obj.msgs.map((v)=>(<><div className="top"><NavLink to="/"><h4 className="larr">&larr;</h4></NavLink><h3 className="uname">{obj.name}</h3> <h3 className="uicon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
           </svg><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"/>
           </svg><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                   <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                   </svg></h3></div><div className="text">{v}</div></>))
                    ) 
                        
                    })
                }
            </div>
        </>
    )
}
export default Chat