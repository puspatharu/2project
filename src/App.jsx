import About from "./pages/About"
import Home from "./pages/Home"

import {Routes,Route} from 'react-router-dom'
import Menu from "./pages/Menu"
import Team from './pages/Team'
import Elements from "./pages/Elements"
import Contact from './pages/Contact'
import Blog from "./pages/Blog"
import Layout from "./hoc/Lay-out"
function App() {

  return (
    <div>
      <Routes>
       <Route element={<Layout />}>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
<Route path="/menu" element={<Menu />} /> 
<Route path="/team" element={<Team />} />
<Route path="/element" element={<Elements />} />
<Route path="/contact" element={<Contact />} />
<Route path="/blog" element={<Blog />} />
       </Route>
      </Routes>

    </div>

  )
}

export default App
