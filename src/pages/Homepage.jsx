import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Headercomp from '../components/Headercomp';

function Homepage({users,addUser,addprofile}){    
    return(
        <>
            <Headercomp className="head"/>
{
    users.map((user)=>(
        <div className='contact' key={user.id}>
            <div className="container2" >
                <div className="logo" onClick={()=>{addprofile(user.id)}}>
                    <img src={user.img}/>
                </div>
                <NavLink to={"/chatpage/"+user.id}>
                <div className='name'>
                    <h2>{user.name}</h2>
                    <h4>{user.msgs.map(v=>v).reverse().slice(0,1)}</h4>
                </div>
                </NavLink>
            </div>
            
            </div>        
    ))
}
      <Footer addUser={addUser}/>
        </>
    )
}
export default Homepage;