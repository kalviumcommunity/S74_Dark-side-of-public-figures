import React, { useState } from 'react';
import data from '../celeb.json'
import './Css/Explore.css'
import { Link} from 'react-router-dom';
const Explore = () => {
    const [value,setValue] = useState('');

    const onChange = (e) =>{
        setValue(e.target.value)
    }
    const onsearch = (searchterm) =>{
        setValue(searchterm);
        document.getElementById("dropdown").style.display = 'none'
    }

    return (
        <div>
            <div className="navbar">
            <div className="Header">
                    <h1 style={{background: "linear-gradient(to right,#ff00bfaa, blue)", // Define gradient
                    WebkitBackgroundClip: "text", // Clip the gradient to the text
                    WebkitTextFillColor: "transparent", // Make the text itself transparent
                    fontSize: "48px", // Font size for better visibility
                    fontWeight: "bold", 
                    textAlign: "center", 
                    margin: "20px",
                    padding:'2px'
                    }}>Darkin</h1>
                </div>
                <nav>
                    <div className="Linker">
                        <Link className='btn1' to='/'>Home</Link>
                        <Link className='btn2' to='/About'>About</Link>
                        <Link className='btn3' to='/Blog'>Blog</Link>
                        <Link className='btn4' to='/Whoarewe'>Whoarewe</Link>
                    </div>
                </nav>
            </div>
            <div className='search'>     
                <input
                onChange={onChange}
                value={value}
                placeholder='search the Darkness...' type="text" className='search-bar'/>
                <button className='search-btn'>search</button>
            </div>
            <div id='dropdown' style={{display : value ? 'block' : 'none'}}>
                {data.filter((item)=>{
                    const searchterm = value.toLowerCase()
                    const fullName = item.name.toLowerCase();

                    return fullName.startsWith(searchterm) && searchterm !== fullName
                }).map((item,i)=>{
                    return(
                        <h3
                        className='dropdown-item'
                        key={i}
                        onClick={()=>onsearch(item.name)}
                        >
                        {item.name}
                    </h3>
                    )
                })
                }
            </div>
        </div>
        
    );
};

export default Explore;
