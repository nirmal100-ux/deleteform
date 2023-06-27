import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {

  const [show, setShow] = useState(false);

  return (
    <header className="bg-black  text-white flex justify-between px-7 py-2 items-baseline">
      <div>
        <NavLink to='/' replace><h1 className="text-xl mb-2">Sample Web</h1></NavLink>


        {show && <nav className="flex flex-col space-y-2 ">
          <NavLink to='/infoForm'>AddForm</NavLink>

        </nav>
        }



      </div>


      <button onClick={() => setShow(!show)}>
        {show ? <i className="fa-solid fa-xmark hidden sm:flex"></i> : <i className="fa-solid fa-bars hidden sm:flex"></i>}

      </button>
      <nav className="sm:hidden">
        <NavLink to='/infoForm'>AddForm</NavLink>

      </nav>
    </header>
  )
}
export default Header