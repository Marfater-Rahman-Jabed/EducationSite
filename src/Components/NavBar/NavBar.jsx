import { Link } from 'react-router-dom';
import logo from '../../assets/LogoSchool.png'
import { BiChevronDown } from 'react-icons/bi'
const NavBar = () => {
    return (
        <div className='py-2'>
            <div className="navbar bg-white lg:ps-24 md:ps-16 ps-6 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="md:h-12 h-8 md:w-12 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Item 1</Link></li>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="btn m-1">Hover</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-0 w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <li><Link to='/'>Item 3</Link></li>
                        </ul>
                    </div>
                    <div><img src={logo} alt="" className='h-16' /></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='px-3 rounded-0 mt-2'><Link to='/' className='border-separate hover:border-b-2 border-orange-500  font-semibold'>HOME</Link></div>
                        <div className="dropdown dropdown-hover mt-1 px-3">
                            <label tabIndex={0} className=" m-1 bg-white flex border-separate hover:border-b-2 border-orange-500 font-semibold ">COURSES <span ><BiChevronDown className=' w-6 h-4 text-3xl'></BiChevronDown></span></label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-64">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className='px-3 rounded-0 mt-2'><Link to='/about' className='border-separate hover:border-b-2 border-orange-500  font-semibold'>BLOG</Link></div>
                        <div className='px-3 rounded-0 mt-2'><Link to='/contact' className='border-separate hover:border-b-2 border-orange-500  font-semibold'>CONTACT</Link></div>
                        <div className='px-3 rounded-0 mt-2'><Link to='/' className='border-separate hover:border-b-2 border-orange-500  font-semibold'>ABOUT</Link></div>
                        <li className=' px-3 text-2xl'> | </li>
                        <div className='px-3 rounded-0 mt-2'><Link to='/' className='border-separate hover:border-b-2 border-orange-500 font-semibold '>LOGIN</Link></div>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;