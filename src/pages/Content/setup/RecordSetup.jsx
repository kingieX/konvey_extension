import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import Navbar from '../Navigation/Navbar';
import Mic from '../images/microphone.svg'


const RecordSetup = () => {
  // all the logic for recording goes here


  return (
    <div className='box'>
        <div>
            <Navbar />
        </div>
        <hr />

        <div className='content'>
          <h3>Start Your Recording</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'flex-start'}}>
            {/* Screen */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <Switch.Root className="SwitchRoot" id="screen">
                <Switch.Thumb className="SwitchThumb" />
              </Switch.Root>
              <label className="Label" htmlFor="screen" style={{ paddingRight: 15 }}>
                Screen
              </label>
            </div>
            {/* Camera */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Switch.Root className="SwitchRoot" id="camera">
                <Switch.Thumb className="SwitchThumb" />
              </Switch.Root>
              <label className="Label" htmlFor="camera" style={{ paddingRight: 15 }}>
                Camera
              </label>
            </div>
            {/* Screen + Cam */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Switch.Root className="SwitchRoot" id="screenCam">
                <Switch.Thumb className="SwitchThumb" />
              </Switch.Root>
              <label className="Label" htmlFor="screenCam" style={{ paddingRight: 15 }}>
                Screen + Cam
              </label>
            </div>
          </div>

          {/* video quality */}
          <div className='resolution'>
            <select name="resolution" id="">
              <option value="360p">SD (Standard Definition) 360p</option>
              <option value="480p">FSD (Full Standard Definition) 480p</option>
              <option value="720p">HD (High Definition) 720p</option>
              <option value="1080p">FHD (Full High Definition) 1080p</option>
              <option value="2k">2k video (Quad HD)</option>
              <option value="4k">4k video or Ultra HD (UHD)</option>
            </select>
          </div>

          {/* microphone */}
          <div>
            <div className='microphone'>
              <img src={Mic} alt="" style={{width: 10,}}/>
              <p style={{marginLeft: -15}}>Default - Microphone</p>
              <div>
                <button className='btn2'>on</button>
              </div>
            </div>
          </div>

          {/* start recording */}
          <div>
            <button className='btn'>Start Recording</button>
          </div>
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
                // padding: 0 10px;
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
              // justify-content: center;
              align-items: center;
              // gap: 20px;
            }

            // toggle
            button {
              all: unset;
            }
            
            .SwitchRoot {
              width: 50px;
              height: 25px;
              background-color: rgb(185, 194, 193);
              border: 1px solid rgb(185, 194, 193);
              border-radius: 9999px;
              outline: none;
              position: relative;
              // box-shadow: 0 2px 10px #4b84f3;
              -webkit-tap-highlight-color: #4b84f3;
            }
            .SwitchRoot:focus {
              box-shadow: 0 0 0 2px black;
            }
            .SwitchRoot[data-state='checked'] {
              background-color: white;
              border-color: #4b84f3;
            }
            
            .SwitchThumb {
              display: block;
              width: 21px;
              height: 21px;
              background-color: white;
              border-radius: 9999px;
              // box-shadow: 0 2px 2px var(--black-a7);
              transition: transform 100ms;
              transform: translateX(-4px);
              will-change: transform;
            }
            .SwitchThumb[data-state='checked'] {
              transform: translateX(19px);
              background-color: #4b84f3;
            }
            
            .Label {
              // color: white;
              font-size: 15px;
              line-height: 1;
              margin-left: 10px;
            }

            .resolution {
              margin-top: 15px;
            }
            .resolution select {
              width: 210px;
              height: 30px;
              background-color: rgb(230, 246, 247);
              font-size: 0.7em;
              border-radius: 5px;
              border: none;
              padding: 0 10px;
              outline: none;
              appearance: none;
              background-image: url('data:image/svg+xml;utf8,<svg fill="%23333" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
              background-size: 30px 30px;
              background-position: right center;
              background-repeat: no-repeat;
            }
            .resolution select option {
              background-color: white;
            }
            .resolution select option:hover {
              background-color: rgb(230, 246, 247);
            }

            .microphone {
              display: flex;
              justify-content: space-around;
              align-items: center;
              gap: 5px;
              background-color: rgb(230, 246, 247);
              margin: 10px;
              width: 210px;
              height: 30px;
              font-size: 0.7em;
              font-weight: 500;
              margin-bottom:15px;
            }
            .microphone img {
              width; 12px;
            }

            .btn2 {
              background-color: #4b84f3;
              border: none;
              color: white;
              border-radius: 5px;
            }

            .btn {
              width: 210px;
              height: 30px;
              border: none;
              border-radius: 20px;
              background-color: #4b84f3;
              color: white;
              font-weight: 500;
              margin-top: 20px;
              margin-bottom: 10px;
              cursor: pointer;
              font-weight:600;
            }
            .btn:hover {
              background-color: #efac25;
            }
				`}
      </style>
    </div>
  )
}

export default RecordSetup;