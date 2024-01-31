import React from 'react'
import Navbar from '../Navigation/Navbar';

const RecordingPreference = () => {
  // all the logic for recording preferences goes here
  
  return (
    <div className='box'>
        <div>
            <Navbar />
        </div>
        <hr />

        <div className='content'>
          <div className='section'>
            <h3 className='title'>Recording preferences</h3>

            <div class="checkbox-group">
              <div class="checkbox">
                <input type="checkbox" id="checkbox1" />
                <label for="checkbox1">Copy Link to Clipboard</label>
              </div>

              <div class="checkbox">
                <input type="checkbox" id="checkbox2" />
                <label for="checkbox2">Mirror camera</label>
              </div>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox3" />
              <label for="checkbox3">Recording Preview</label>
            </div>
          </div>

          {/* camera shape */}
          <div className='section'>
            <h3 className='title'>Camera shape</h3>
            <div class="checkbox-group">
              <div class="checkbox">
                <input type="checkbox" id="checkbox4" />
                <label for="checkbox4">Squared</label>
              </div>

              <div class="checkbox">
                <input type="checkbox" id="checkbox5" />
                <label for="checkbox5">Slightly rounded</label>
              </div>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox6" />
              <label for="checkbox6">Rounded</label>
            </div>
          </div>

          {/* Help and support */}
          <div>
            <h3 className='title'>Help & Support</h3>
            <p className='paragraph'>Having problems? Try reloading konvey or updating the browser to the latest version. <span>Email support here</span></p>
            <div className='btn-group'>
              <button className='btn'>Reload</button>
              <button className='btn2'>Help Center</button>
            </div>
          </div>

        </div>

          {/* sign out*/}
          <div className='signout-box'>
            <div>
              <p>Account</p>
              {/* Dynamic display of email should be here */}
              <p>example@email.com</p>
            </div>
            <button className='btn3'>Sign out</button>
          </div>
        <style>
        {`
            .box {
                display: flex;
                flex-direction: column;
                // justify-content: start;
                // align-items: center;
                height: 68vh;
                width: 30vw;
                // border: 1px solid black;
                border-radius: 2px;
                // padding: 0 20px;
                background-color: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                position: absolute;
                top: 35%;
                left: 84%;
                transform: translate(-50%, -50%);
            }

            hr {
              border: 1px solid #ddd;
              margin: 5px 0;
            }

            .content {
              display: flex;
              flex-direction: column;
              padding: 0 30px;
              // justify-content: center;
              // align-items: center;
              // gap: 20px;
            }

            .section {
              display: flex;
              flex-direction: column;
            }

            .title {
              font-size: 0.8em;
            }
            .paragraph {
              margin-top: -10px;
              font-size: 0.7em;
              line-height: 1.5;
            }
            .paragraph span {
              color: #4b84f3;
              cursor: pointer;
            }

            .checkbox-group {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              gap: 20px;
            }

            .checkbox {
              display: flex;
              align-items: center;
              // margin-bottom: 10px;
            }
        
            .checkbox label {
              font-size: 0.8em;
              margin-left: 5px;
            }
        
            .checkbox input {
              width: 16px;
              height: 16px;
              border: 1px solid #ddd;
              border-radius: 3px;
              outline: none;
              cursor: pointer;
            }

            .btn {
              width: 70px;
              height: 30px;
              border: none;
              border-radius: 6px;
              background-color: #4b84f3;
              color: white;
              margin-bottom: 10px;
              cursor: pointer;
              font-weight:600;
            }
            .btn:hover {
              background-color: white;
              border: 1px solid #4b84f3;
              color: #4b84f3;
            }

            .btn2 {
              width: 100px;
              height: 30px;
              border: none;
              border-radius: 6px;
              background-color: white;
              color: #4b84f3;
              border: 1px solid #4b84f3;
              margin-bottom: 10px;
              cursor: pointer;
              font-weight:600;
              margin-left: 20px;
            }
            .btn2:hover {
              background-color: #4b84f3;
              color: white;
            }

            .signout-box {
              background-color: #eff3ff;
              height: 60px;
              margin-top: 10px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 30px;
            }
            .signout-box div {
              line-height: 0.2;
              font-size: 0.8em;
            }

            .btn3 {
              width: 70px;
              height: 30px;
              border: none;
              border-radius: 6px;
              background-color: #4b84f3;
              color: white;
              cursor: pointer;
              font-weight:500;
            }
            .btn3:hover {
              background-color: white;
              border: 1px solid #4b84f3;
              color: #4b84f3;
            }
				`}
      </style>
    </div>
  )
}

export default RecordingPreference;