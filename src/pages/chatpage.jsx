import React,{ useEffect, useState } from "react"
import Headercomp from "../components/Headercomp";

function Chat(props){

const id=(window.location.pathname).slice(10);

return(
        <>
        <Headercomp className="haed"/>
            <div className="message">
                <input type="text" placeholder="message" autoFocus value={props.msg} onChange={(e)=>{props.setMsg(e.target.value);}} onKeyUp={(e)=>{if(e.keyCode == 13){props.process(id)}}}  />
                <button onClick={()=>{props.process(id)}}>Send</button>
            </div>
            <div className="page">   
                {
                    props.users.map((obj)=>{
                        return(
                            
           (obj.id==id)&&obj.msgs.map((value,i,all)=>(<div className="text" onClick={()=>{props.delete(all,i)}}>{value}</div>))
                            
                    ) 
                        
                    })
                }
            </div>
        </>
    )
}
export default Chat