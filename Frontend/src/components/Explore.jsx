import React, { useState,useEffect} from 'react';
import data from '../celeb.json'
import './Css/Explore.css'
import { Link} from 'react-router-dom';

const Explore = () => {
    const [value,setValue] = useState('');
    const [load,setload] = useState('')
    const [darkness,setDarkness] = useState(false)

    const onPut = () =>{
        setload(true)

        setTimeout(() => {
            setload("No results")
        }, 2000);
    }

    useEffect(() => {
        
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
        document.body.style.height = "100vh";
        document.body.style.margin = "0";

        return () => {
            document.body.style = "";
        };
    }, []);


    const onChange = (e) =>{
        setload("");
        setValue(e.target.value)
    }
    const onsearch = (searchterm) =>{
        setValue(searchterm);
        setload(true)
        setTimeout(() => {
            setDarkness(true)
            setload(false)
        }, 2000);
        setDarkness(false)
        document.getElementById("dropdown").style.display = 'none'
    }

    return (
        <div className='Explore'>
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
            <div className='intro'>
                      
<h1>Search into the <span className='dark'>Darkness</span></h1>
                </div>

            <div className='find'>

                    <div className='search'>     
                        <input
                        onChange={onChange}
                        value={value}
                        placeholder='Enter a Celebrity name...' type="text" className='search-bar'/>
                        <button className='search-btn' onClick={onPut}>Search</button>
                    </div>
                
                    <div id='dropdown' style={{display : value ? 'block' : 'none'}}>
                        {data.filter((item)=>{
                            const searchterm = value.toLowerCase()
                            const fullName = item.name.toLowerCase();

                            return fullName.startsWith(searchterm) 
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
                    <div role="status">
                        {load==true ?  (
                            <svg aria-hidden="true" className="load" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>) : load
                        }
                    </div>
                    {darkness ? (
                       <div className='dark-secret-p' > 
                        {data.filter((item)=>{
                            
                            return(
                                item.name === value
                            )
                        }).map((exitem,i)=>{
                            return (
                                <h2 key={i}> {exitem.dark_sec}</h2>
                            )
                        })
                        }
                    </div> ): ''
                    }
            </div>
            
        </div>
        
    );
};

export default Explore;
