import './header.css'


import Navbar from '../navbar/navbar'

function Header(props ) {
  
  return (
    <header className={props.bgColor}>
       <div className='container h-full'>
          <Navbar/>
          {props.children}
       </div>
    </header>
  )
}

export default Header
