import { Outlet, NavLink  } from "react-router-dom";


export default function Careerlayout() {
    return(
        <div className="career-layout">

            <h2>My Career</h2>
            <p>Find my career skills and my career prjects below</p>

         <nav>
         <NavLink to="skills">Skills</NavLink>
         <NavLink to="projects">Projects</NavLink>
         </nav>

            <Outlet/>
    
        </div>
    )
}