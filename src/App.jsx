import React,{useState,useEffect} from 'react'
import './App.css'
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom'
import Aboutpage from './pages/Aboutpage'
import Homepage from './pages/Homepage'
import Statuspage from './pages/Status'
import Chatpage from './pages/chatpage'
import Groupchat from './pages/Groupchat'
import Videos from './pages/videos'

function App() {
  const [users,setUsers]=useState(JSON.parse(localStorage.getItem("user")) || [{id:1,name:"Baskar",msgs:["hai da"],img:"/images/my.jpg",videos:["/a.mp4"]},{id:2,name:"Dilli",msgs:["how are u"],img:"/images/dilli.jpg",videos:["/a.mp4"]},{id:3,name:"Mohan",msgs:["hai da"],img:"/images/mohan.jpg",videos:["/a.mp4"]}])
  const [groups,setGroups]=useState(JSON.parse(localStorage.getItem("groups")) || [{id:-1,name:"Nanga 4 Peru🤣🤦‍♂️",msgs:["hai da"],img:"/images/group.jpg"},{id:-2,name:"group2",msgs:["how are u"],img:"/images/group.jpg"},{id:-3,name:"group3",msgs:["hai da"],img:"/images/group.jpg"}])
  const [msg,setMsg] = useState("");
  let userMsg=(i)=>{
    if(!(msg == "") ){
    let newUser = users.map((obj)=>{
        return (obj.id == i)?{"id":obj.id,"name":obj.name,"msgs":[...obj.msgs,msg],"img":obj.img,"videos":obj.videos}:obj;
    })
    localStorage.setItem("user",JSON.stringify(newUser))
    setUsers(newUser)
  }
  setMsg("")
  }
  let groupMsg=(i)=>{
    if(!(msg == "")){
    let newUser = groups.map((obj)=>{
        return (obj.id == i)?{"id":obj.id,"name":obj.name,"msgs":[...obj.msgs,msg],"img":obj.img}:obj;
    })
    localStorage.setItem("groups",JSON.stringify(newUser))
    setGroups(newUser)
  }
  setMsg("")
  }


  function addUser(){
    let name=prompt("New UserName : ");
    if(name == ""){
      alert("name is empty")
    }else{
   let newUser=[...users,{"id":users.length + 1,"name":name,msgs:[],"img":"/images/new-user.jpg","videos":["/a.mp4"]}]
  localStorage.setItem("user",JSON.stringify(newUser))
  setGroups(newUser) 
  }
}
const addGroup =()=>{
  let name=prompt("New GroupName : ");
  if(name == ""){
    alert("group name is empty")
  }else{
 let newUser=[...groups,{"id":`-${groups.length}` + 1,"name":name,msgs:[],"img":"/images/group-dp.png"}]
localStorage.setItem("groups",JSON.stringify(newUser))
setUsers(newUser) 
}
}
const addprofile=(i)=>{
  let profile=prompt("New profile link (.jpg or png): ");
  if(profile == "" || profile == null){
    alert("no img link")
  }else{
    let newUser = users.map((obj)=>{
      return (obj.id == i)?{"id":obj.id,"name":obj.name,"msgs":obj.msgs,"img":profile,"videos":obj.videos}:obj;
  })
  localStorage.setItem("user",JSON.stringify(newUser))
  setUsers(newUser)
}
}
const addgroupprofile=(i)=>{
  let profile=prompt("New profile link (.jpg or png): ");
  if(profile == "" || profile == null){
    alert("no img link")
  }else{
    let newUser = groups.map((obj)=>{
      return (obj.id == i)?{"id":obj.id,"name":obj.name,"msgs":obj.msgs,"img":profile}:obj;
  })
  localStorage.setItem("groups",JSON.stringify(newUser))
  setUsers(newUser)
}
}
const userCDelete=(all,i)=>{
 let ok=confirm("are you delete this message");
 if(ok){
  let newArray = users.map((obj)=>{
    if(obj.msgs == all){
      return {"id":obj.id,"name":obj.name,"msgs":all.filter((v,index)=>!(index == i)),"img":obj.img,"videos":obj.videos}
    }else{
      return obj;
    }
  });
localStorage.setItem("user",JSON.stringify(newArray))
setUsers(newArray)
 }else{
  alert("not deleted")
 }
}

const groupCDelete=(all,i)=>{
 let ok=confirm("are you delete this message");
 if(ok){
  let newArray = groups.map((obj)=>{
    if(obj.msgs == all){
      return {"id":obj.id,"name":obj.name,"msgs":all.filter((v,index)=>!(index == i)),"img":obj.img}
    }else{
      return obj;
    }
  });
localStorage.setItem("groups",JSON.stringify(newArray))
setGroups(newArray)
 }else{
  alert("not deleted")
 }
}
let addstatus =(i)=>{
let status=prompt("enter video link address(online): ")
  let newUser = users.map((obj)=>{
      return (obj.id == i)?{"id":obj.id,"name":obj.name,"msgs":obj.msgs,"img":obj.img,"videos":[...obj.videos,status]}:obj;
  })
  localStorage.setItem("user",JSON.stringify(newUser))
  setUsers(newUser)
}
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage users={users} addUser={addUser} addprofile={addprofile}/>} />
            <Route path='/group' element={<Aboutpage users={groups}  process={groupMsg} addUser={addGroup} addprofile={addgroupprofile}/>} /> 
            <Route path='/status' element={<Statuspage users={users}/>} />
            <Route path='/videos/:id' element={<Videos users={users} addstatus={addstatus}/>} />
            <Route path='/chatpage/:id' element={<Chatpage  process={userMsg} setMsg={setMsg} msg={msg} users={users} delete={userCDelete}/>} />
            <Route path='/groupchat/:id' element={<Groupchat process={groupMsg} setMsg={setMsg} msg={msg} users={groups} delete={groupCDelete}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
