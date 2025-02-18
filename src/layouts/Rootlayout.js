import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
    return(
        <div className="root-layout">
    <header>
      <nav>
        <h1>SeeSawTech</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="career">Career</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
     </header>
     <main>
        <Outlet/>
     </main>

     <footer>
                <div className="footer-content">
                    <p>&copy; 2024 SeeSawTech. All rights reserved.</p>
                    <nav>
                        <NavLink to="/">Home</NavLink> | 
                        <NavLink to="about">About</NavLink> | 
                        <NavLink to="career">Career</NavLink> | 
                        <NavLink to="contact">Contact</NavLink>
                    </nav>
                </div>
            </footer>

        </div>
    )
}