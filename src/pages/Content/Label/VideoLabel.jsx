import React, { useState, useEffect } from 'react';
import Navbar from '../Navigation/Navbar';
import Link from '../images/blue_link.png';
import Clip from '../images/link.svg'
import Delete from '../images/delete.svg'
import Copy from '../images/copy.svg';

const VideoLabel = () => {
    // const [label, setLabel] = useState('');
    const [requestLink, setRequestLink] = useState('');
    const [recentLinks, setRecentLinks] = useState([]);
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch API data
                const response = await fetch('{{baseURL}}/recordings/can-user-upload');
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.error('Error fetching API data:', error);
            }
        };
        fetchData();
    }, []);

    const createRequest = async () => {
        try {
            // Create request
            const response = await fetch(apiData.request.url.raw, {
                method: apiData.request.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: apiData.request.body.raw
            });
            const responseData = await response.json();
            setRequestLink(responseData.data.record_link);
            setRecentLinks([...recentLinks, responseData.data.record_link]);
            // Notify user
            notify('Request Created', 'New request link created');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getRequestLinks = async () => {
        try {
            // Get request links
            const response = await fetch(apiData.getRequestLinks.request.url.raw);
            const responseData = await response.json();
            const links = responseData.data.map((item) => item.record_link);
            setRecentLinks(links);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const deleteRequestLink = async (link) => {
        try {
            // Delete request link
            await fetch(apiData.deleteRequestLink.request.url.raw, {
                method: apiData.deleteRequestLink.request.method
            });
            setRecentLinks(recentLinks.filter((l) => l !== link));
            // Notify user
            notify('Link Deleted', 'The link has been deleted');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const notify = (title, message) => {
        if ('Notification' in window) {
            if (Notification.permission === 'granted') {
                new Notification(title, { body: message });
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(function (permission) {
                    if (permission === 'granted') {
                        new Notification(title, { body: message });
                    }
                });
            }
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        notify('Link Copied', 'Link copied to clipboard');
    };


  return (
    <div className='box'>
        <div style={{backgroundColor: 'white'}}>
            <Navbar />
        </div>
        <div className='mainPage'>
            <label>
                Label
                <div className='inputStyle'>
                    <input 
                        type="text" 
                        placeholder='Enter labels'
                        style={{width:250, height:25, paddingLeft: 5}}
                    />
                    <button
                        className='btn'
                        onClick={createRequest}
                    >
                        Create Request
                    </button>
                </div>
            </label>
            <label>
                Request Link is Ready
                <div className='inputStyle'>
                    <input 
                        type="text" 
                        name="" 
                        id=""
                        value={requestLink}
                        onChange={(e) => setRequestLink(e.target.value)}
                        style={{width:250, height:25, paddingLeft: 5, marginLeft: -10}}
                    />
                    <button className='copy' onClick={copyToClipboard}>
                        <img src={Link} alt="" style={{width:16}}/>
                        <p>Copy Link</p>
                    </button>
                </div>
            </label>

            <h3 style={{fontSize: '1em'}}>Most Recent Labels</h3>
            <div className="container">
                <div className="list-header">
                    <span>#</span>
                    <span>Label</span>
                    <span>Link URL</span>
                    <span>No of Recording</span>
                    <span>Actions</span>
                </div>
                {recentLinks.map((link, index) => (
                    <div key={index} className="list-item">
                    <span>{index + 1}</span>
                    <span>Item 2</span>
                    <span>{link}</span>
                    <span>10</span>
                    <div className='btns'>
                        <img src={Clip} alt="clip" onClick={() => copyToClipboard(link)} style={{width: 14, cursor: 'pointer'}}/>
                        <img src={Delete} alt="delete" onClick={() => deleteRequestLink(index)} style={{width: 14, cursor: 'pointer'}}/>
                    </div>
                </div>
                ))}
            </div>

            <hr />
            <div className='text'>
                <p>Open Request Links</p>
                <img src={Copy} alt="" onClick={getRequestLinks} style={{width: 10, cursor: 'pointer'}}/>
            </div>
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
                // padding: 0 10px;
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

            label {
                font-weight: bold;
                font-size: 1em;
                
            }

            .inputStyle {
                display: flex;
                flex-direction: row;
                gap: 5px;
                justify-content: space-around;
                align-items: center;
                margin-top: 5px;
                margin-bottom: 10px
            }
            .inputStyle input {
                // width: 200px;
                border: 1px solid #ddd;
                outline: none;
                border-radius: 5px;
                margin-left: -5px;
            }
            .inputStyle .btn {
                width: 105px;
                font-size: 0.7em;
                padding: 10px;
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
                border-radius: 5px;
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