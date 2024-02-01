import React from 'react';
import Navbar from '../Navigation/Navbar';
import Clip from '../images/link.svg'
import Delete from '../images/delete.svg'
import Copy from '../images/copy.svg';

const MyRecordings = () => {
  return (
    <div className='box'>
        <div style={{backgroundColor: 'white'}}>
            <Navbar />
        </div>
        <div className='mainPage'>
            <h3>My Recordings</h3>
            {/* add recording dynamically */}
            <div className='record'>
                <img src="" alt="thumnail" style={{width: 100, height:40}} />
                <div className='title'>
                    <p>recording title...</p>
                    <p>days recorded...</p>
                </div>
                <div className='btns'>
                    <img src={Clip} alt="clip" style={{width: 14,  cursor: 'pointer'}}/>
                    <img src={Delete} alt="delete" style={{width: 14, cursor: 'pointer'}}/>
                </div>
            </div>
            <hr />

            <div className='text'>
                <p>Open My Recording</p>
                <img src={Copy} alt="" style={{width: 10, cursor: 'pointer'}}/>
            </div>
            {/* other dynamic contents goes here */}
        </div>

        <style>
        {`
            .box {
                display: flex;
                flex-direction: column;
                // justify-content: start;
                // align-items: center;
                height: 72vh;
                width: 30vw;
                // border: 1px solid black;
                border-radius: 2px;
                // padding: 0 20px;
                background-color: rgb(249, 249, 249);
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                position: absolute;
                top: 37%;
                left: 84%;
                transform: translate(-50%, -50%);
            }

            .mainPage {
                padding: 10px 20px;
            }
            .mainPage h3 {
                font-size: 0.8em;
            }

            .record {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                height: 70px;
                // border: 1px solid;
                margin-bottom: 10px;
            }

            .title {
                margin-left: -50px;
                line-height: 2px;
                font-size: 0.8em;
            }

            .btns {
                display: flex;
                gap: 10px;
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

export default MyRecordings;