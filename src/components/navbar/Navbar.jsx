import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ user, login, logout }) {
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between 
        items-center px-4 bg-[#2C3A47] py-4 shadow-md'>
            <div className="left">
                <Link to={'/'}>
                    <div className="logo font-bold text-2xl text-white text-center">
                        Protected Route
                    </div>
                </Link>
            </div>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center items-center'>
                    <Link to={'/'}>
                        <li className='cursor-pointer font-medium'>Home</li>
                    </Link>
                    <Link to={'/product'}>
                        <li className='cursor-pointer font-medium'>Product</li>
                    </Link>
                    <Link to={'/dashboard'}>
                        <li className='cursor-pointer font-medium'>Dashboard</li>
                    </Link>
                    {user ?
                        <li onClick={logout} className='cursor-pointer font-medium bg-red-600 px-4 py-'>
                            Logout
                        </li>
                        :
                        <li onClick={login} className='cursor-pointer font-medium bg-green-600 px-4 py-'>
                            Login
                        </li>
                    }


                </ul>
            </div>
        </div>
    )
}

export default Navbar