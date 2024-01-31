import React from 'react'
import Logo from '../images/32.png';

const Camera = () => {
  return (
    <div className='container'>
      <div className='box'>
          <div className='logo'>
              <img src={Logo} alt="logo" />
              <p>Konvey</p>
          </div>
          <h2>Camera Recording</h2>
          <div className='video-box'>
            {/* dynamic video goes here */}
          </div>
          <div className='btn-group'>
            <button className='btn2'>Cancel</button>
            <button className='btn'>Stop Recording</button>
          </div>
      </div>
        <style>
          {`
            .container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 20px;
              padding: 10px;
            }
            .box {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              // gap: 20px;
            }
            .logo {
              display: flex;
              gap: 5px;
              justify-content: center;
              align-items: center;
              // padding-top: 10px;
            }
            .logo img {
              width: px;
            }
            .logo p {
              font-weight: 900;
              font-size: 1em;
              color: #4b84f3;
            }
            .video-box {
              width: 400px;
              height: 300px;
              // border: 1px solid black;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
              margin-bottom: 20px;
            }
            .btn-group {
              display: flex;
              flex-direction: row;
              gap: 50px;
              margin-top: 20px;
            }
            .btn {
              width: 130px;
              height: 30px;
              border: none;
              border-radius: 20px;
              background-color: #4b84f3;
              color: white;
              margin-bottom: 10px;
              cursor: pointer;
              font-weight:500;
              // margin-left: 40px;
            }
            .btn:hover {
                background-color: rgb(230, 246, 247);
            //   border: 1px solid #4b84f3;
              color: #000;
            }

            .btn2 {
              width: 100px;
              height: 30px;
              border: none;
              border-radius: 20px;
              background-color: rgb(230, 246, 247);
              color: black;
              // border: 1px solid #4b84f3;
              margin-bottom: 10px;
              cursor: pointer;
              font-weight:500;
            }
            .btn2:hover {
              background-color: #4b84f3;
              color: white;
            }
            `}
        </style>
    </div>
  )
}

export default Camera;



































