import Footer from "../components/Footer";
import Headercomp from "../components/Headercomp";
import {Link, NavLink} from "react-router-dom"

function Statuspage({users}){
    return(
        <>
            <Headercomp/>
        {users.map((user)=>(
            <NavLink to={`/videos/${user.id}`}>
            <div className="container2">
                <div className="logo">
                        <img src={user.img} className="st"/>
                </div>
                <div className='name'>
                    <h2>{user.name}</h2>
                    <h4>just now</h4>
                </div>             
            </div>
            </NavLink>  
        )

        )}
        </>
        
    )
}
export default Statuspage;