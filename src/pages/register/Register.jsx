import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Social Media</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facilis libero similique laudantium dicta consequuntur ab pariatur soluta animi aut?</p>
                <span>Don't you have an account?</span>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='Password' />
                    <input type="text" placeholder='Name' />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register