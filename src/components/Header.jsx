import { Link } from 'react-router-dom'
import logo from '../assets/image/graphql_logo.png'

const Header = () => {
  return (
    <nav className='navbar bg-light mb-4 py-3'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-2' />
            <div>Project Management</div>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header