import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='wrapper'>
            <div className="selection">
                <Link to='/send'>
                    <button className="selection-btn">Send</button>
                </Link>
                <Link to='/delete'>
                    <button className="selection-btn">Delete</button>
                </Link>
            </div>
        </div>
    )
}

export default Home