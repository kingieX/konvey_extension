import React from 'react';
import Navbar from '../Navigation/Navbar';
import Link from '../images/blue_link.png';
import Clip from '../images/link.svg'
import Delete from '../images/delete.svg'
import Copy from '../images/copy.svg';

const VideoLabel = () => {
  return (
    <div className='box'>
        <div style={{backgroundColor: 'white'}}>
            <Navbar />
        </div>
        <div className='mainPage'>
            <label>
                Label
                <div className='inputStyle'>
                    <input type="text" placeholder='Enter labels' style={{width:250, height:25, paddingLeft: 5}}/>
                    <button className='btn'>Create Request</button>
                </div>
            </label>
            <label>
                Request Link is Ready
                <div className='inputStyle'>
                    <input type="text" name="" id="" style={{width:250, height:25, paddingLeft: 5, marginLeft: -10}}/>
                    <button className='copy'>
                        <img src={Link} alt="" style={{width:16}}/>
                        <p>Copy Link</p>
                    </button>
                </div>
            </label>

            <h3 style={{fontSize: '1em'}}>Most Recent Labels</h3>
            <div class="container">
                <div class="list-header">
                    <span>#</span>
                    <span>Label</span>
                    <span>Link URL</span>
                    <span>No of Recording</span>
                    <span>Actions</span>
                </div>
                <div class="list-item">
                    <span>2</span>
                    <span>Item 2</span>
                    <span>http://example.com/2</span>
                    <span>10</span>
                    <div className='btns'>
                        <img src={Clip} alt="clip" style={{width: 14, cursor: 'pointer'}}/>
                        <img src={Delete} alt="delete" style={{width: 14, cursor: 'pointer'}}/>
                    </div>
                </div>
            </div>

            <hr />
            <div className='text'>
                <p>Open Request Links</p>
                <img src={Copy} alt="" style={{width: 10, cursor: 'pointer'}}/>
            </div>
        </div>

        <style>
        {`
            .box {
                display: flex;
                flex-direction: column;
                // justify-content: start;
                // align-items: center;
                height: 75vh;
                width: 30vw;
                // border: 1px solid black;
                border-radius: 2px;
                // padding: 0 20px;
                background-color: rgb(249, 249, 249);
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                position: absolute;
                top: 39%;
                left: 84%;
                transform: translate(-50%, -50%);
            }

            .mainPage {
                padding: 10px 20px;
            }

            label {
                font-weight: bold;
                font-size: 1em;
                
            }

            .inputStyle {
                display: flex;
                // flex-direction: row;
                gap: 10px;
                justify-content: space-around;
                align-items: center;
                margin-top: 5px;
                margin-bottom: 10px
            }
            .inputStyle input {
                border: 1px solid #ddd;
                outline: none;
                border-radius: 5px;
            }
            .inputStyle .btn {
                font-size: 0.7em;
                padding: 10px 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            .copy {
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                background-color: #fff;
                gap: 5px;
                font-size: 0.7em;
                color: #4b84f3;
                cursor: pointer;
            }
            .copy:hover {
                font-size: 0.73em
            }
            .copy img {
                width: 16px;
            }

            .container {
                background-color: white;
                padding: 10px;
                // width: 70%;
                margin: 0 auto;
                overflow: hidden; 
                font-size: 0.7em;
              }
          
              .list-header {
                display: flex;
                justify-content: space-between;
                // align-items: center;
                margin-bottom: 10px;
              }
          
              .list-item {
                display: flex;
                justify-content: space-between;
                // align-items: center;
                margin-bottom: 8px;
              }
          
              .list-item span, .list-header span {
                flex: 1/5;
              }

              .btns {
                display: flex;
                gap: 8px;
            }

            hr {
                border: 1px solid #ddd;
                position: absolute;
                bottom: 5%;
                // margin-bottom: 5px;
                right: 1%;
                width: 100%;
            }

            .text {
                display: flex;
                justify-content: center;
                gap: 10px;
                // padding: 10px;
                font-size: 0.7em;
                font-weight: 600;
                position: absolute;
                bottom: -3px;
                left: 50%;
                transform: translateX(-50%); 
            }
				`}
      </style>
    </div>
  )
}

export default VideoLabel;