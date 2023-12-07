import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../store/auth'

const Register = () => {
    const navigate = useNavigate()
    const {storeTokenInLs} = useContext(AuthContext)
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })

    // nadle input
    const handleInput = (e) =>{
        // console.log(e)
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }
    // submit
    const handleSubmit = async (e) =>{
        e.preventDefault();

        // alert(user)
        // console.log(user)
       try {
        const response = await fetch("http://localhost:5000/api/auth/register",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        console.log(response)
        if(response.status === 201){
            const res_data = await response.json()
            // console.log("res data from register", res_data)

            // store token in local stroge
            storeTokenInLs(res_data.token)
            // localStorage.setItem('token', res_data.token)
            navigate("/")
        }
       } catch (error) {
        console.log("error from register", error)
       }
       

    }
  return (
    <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img src="https://www.allen.ac.in/ace2324/assets/images/register.png" alt="registration image" width="500" height="500" />
                    </div>
                    {/* form */}
                    <div className="registration-form">
                        <h1 className='main-heading mb-3'>Registration Form</h1>
                        <br />

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name='username' value={user.username} onChange={handleInput} required autoComplete='off' placeholder='Enter your username...' />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' value={user.email} onChange={handleInput} required autoComplete='off' placeholder='Enter your email...' />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="number" name='phone' required value={user.phone} onChange={handleInput} autoComplete='off' placeholder='Enter your phone...' />
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" name='password' value={user.password} onChange={handleInput} required autoComplete='off' placeholder='Enter your password...' />
                            </div>
                            <br />
                            <button className='btn btn-submit' type='submit'>Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Register