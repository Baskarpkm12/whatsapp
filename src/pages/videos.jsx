import { useState } from "react";
import React from 'react'
export default function Videos({users,addstatus}) {
  const [index,setIndex]=useState(window.location.pathname.slice(8) - 1);
  
  if(index >= users.length){
    window.location.href="/";
  }
  return (
    <>
      <div className='videos-container'>
          {/* {users.map((user) => ( */}
            <div className='videos'>
             
{users.map((v,i,Users) => {
  if(index == i){
  return (
     <>
              <h5 style={{position:"absolute",left:"46%",zIndex:4,backgroundColor:"black",color:"white",padding:"5px",borderRadius:"10px"}}>{Users[i].name}{Users[i].videos.length}</h5>
              {Users[i].videos.map(video=>(<video src={`${video}`} className='video' controls style={{zIndex:0}}></video>))}
<div className="addUser" onClick={()=>{addstatus(Users[i].id)}}><h1>+</h1></div> 
</>
)}})}
</div>
<h3 onClick={()=>{setIndex(index+1)}}  style={{fontWight:900,fontSize:"30px",background:"green",color:"white",padding:"10px",borderRadius:"50%",cursor:"pointer"}}>&rarr;</h3>
          {/* ))} */}
           
      </div>
    </>)
  // )<div className="addUser" onClick={addstatus()}><h1>+</h1></div>
} /* {user.videos.map(video=>(<video src={`${video}`} className='video' controls></video>))}
<div className="addUser" onClick={()=>{addstatus(user.id)}}><h1>+</h1></div> */