import { createBrowserRouter, 
  Route, 
  NavLink, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Skills from "./pages/career/Skills";
import Projects from "./pages/career/Projects";

// layouts

import RootLayout from "./layouts/Rootlayout";
import Careerlayout from "./layouts/Careerlayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>

    <Route index element={<Home/>}/>
    
    <Route path="about" element={<About/>}/>

    <Route path="career" element={<Careerlayout/>}>
      <Route path="skills" element={<Skills/>}/>
      <Route path="projects" element={<Projects/>}/>
    </Route>

    <Route path="contact" element={<Contact/>}/>

  </Route>

  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;