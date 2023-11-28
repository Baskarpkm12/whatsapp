import { NavLink } from 'react-router-dom';
import Headercomp from '../components/Headercomp';
import Footer from '../components/Footer';
function Aboutpage({users,addUser,addprofile}){
    return(
        <>
            <Headercomp/>
            {
    users.map((user)=>(
        <div className='contact' key={user.id}>
            <div className="container2">
                <div className="logo" onClick={()=>{addprofile(user.id)}}>
                    <img src={user.img}/>
                </div>
                <NavLink to={"/groupchat/"+user.id}>
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
export default Aboutpage;