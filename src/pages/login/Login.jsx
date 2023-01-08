import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './login.scss'

const Login = () => {

    const { login } = useContext(AuthContext)

    const handleLogin = () => {
        login()
    }

  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Hello World.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facilis libero similique laudantium dicta consequuntur ab pariatur soluta animi aut?</p>
                <span>Don't you have an account?</span>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" name="" id="" placeholder='Username' />
                    <input type="text" name="" id="" placeholder='Password' />
                    <button onClick={ handleLogin }>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login