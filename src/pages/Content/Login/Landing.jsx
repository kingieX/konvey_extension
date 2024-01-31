import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../images/32.png'

const Landing = () => {
  const navigate = useNavigate();
  // all the logic for login goes here

  const handleLogin = () => {
    navigate('/setup')
  }
    


  return (
    <div className='box'>
        <div className='logo'>
            <img src={Logo} alt="logo" />
            <p>Konvey</p>
        </div>
        <div className='wel'>
            <h3>Welcome to Konvey</h3>
            <p>Please login to continue</p>
        </div>
        <div className='btn'>
            <button onClick={handleLogin}>Login</button>
        </div>
        <style>
        {`
            .box {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                height: 60vh;
                width: 27vw;
                // border: 1px solid black;
                border-radius: 2px;
                padding: 20px;
                background-color: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                position: absolute;
                top: 34%;
                left: 84%;
                transform: translate(-50%, -50%);
            }

            .logo {
              display: flex;
              gap: 10px;
              justify-content: center;
              align-items: center;
              // padding-top: 10px;
            }
            .logo img {
              width: 40px;
            }
            .logo p {
              font-weight: 900;
              font-size: 1.3em;
              color: #4b84f3;
            }

            .wel {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 10px;
            }
            .wel h3 {
              font-weight: bold;
              font-size: 1em;
            }
            .wel p {
              margin-top: -5px;
              font-weight: 500;
              font-size: 1em;
            }

            .btn button {
              width: 210px;
              height: 30px;
              border: none;
              border-radius: 20px;
              background-color: #4b84f3;
              color: white;
              font-weight: 500;
              font-size: 1em;
              margin-bottom: 10px;
              cursor: pointer;
            }
            button:hover {
              background-color: #efac25;
            }

				`}
      </style>
    </div>
  )
}

export default Landing