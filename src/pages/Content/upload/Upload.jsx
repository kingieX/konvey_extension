import React from 'react'
import Logo from '../images/32.png';

const Upload = () => {
  // upload logic goes here
  
  return (
    <div className='container'>
      <div className='box'>
          <div className='logo'>
              <img src={Logo} alt="logo" />
              <p>Konvey</p>
          </div>
          <h3>Here's your Recording</h3>
          <div className='video-box'>
            {/* dynamic video goes here */}
          </div>
          <div>
            <div className='title'>
              <h3>Recording Title(This can be changed later)</h3>
              <input type="text" placeholder='Enter the recording title' style={{width:400, height:25, paddingLeft: 5}}/>
            </div>

            <div className='title'>
              <h3>Note (This can be changed later)</h3>
              <textarea type="text" placeholder='Type your message' style={{width:400, height:40, paddingLeft: 5}}/>
            </div>
          </div>
          <div className='btn-group'>
            <button className='btn2'>Cancel</button>
            <button className='btn'>Upload</button>
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
              height: 200px;
              // border: 1px solid black;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            }
            .title {
              font-size: 0.8em;
            }
            .title input, .title textarea {
              border: 1px solid #ddd;
              outline: none;
              border-radius: 5px;
              padding-left: 10px;
              background-color: rgb(230, 246, 247);
            }
            .btn-group {
              display: flex;
              flex-direction: row;
              gap: 50px;
              margin-top: 20px;
            }
            .btn {
              width: 100px;
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
              // border: 1px solid #4b84f3;
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

export default Upload;



































