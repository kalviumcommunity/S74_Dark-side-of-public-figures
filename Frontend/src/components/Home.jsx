import { Link } from "react-router-dom";
import './Css/Home.css'

function Home(){
    return (
        <div>
            <div className="Navbar">

                <div className="Head">
                    <h1 style={{background: "linear-gradient(to right,#ff00bfaa, blue)", // Define gradient
                    WebkitBackgroundClip: "text", // Clip the gradient to the text
                    WebkitTextFillColor: "transparent", // Make the text itself transparent
                    fontSize: "48px", // Font size for better visibility
                    fontWeight: "bold", 
                    textAlign: "center", 
                    margin: "20px",
                    padding:"2px",
                    cursor:"pointer"}}>Darkin</h1>
                </div>
                    <nav>
                    <div className="Links">
                        <Link to='/'>Home</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/Blog'>Blog</Link>
                        <Link to='/Whoarewe'>Whoarewe</Link>
                    </div>
                    </nav>
            </div>
            
                <div className="reason">
                    <div className="reason-1">
                        <div className="content-1">
                            <h1>Exposing the Dark Side of Fame</h1>
                        </div>
                            <div className="def-1">
                                <p>
                                <h2 style={{color: "hotpink"}}>Ever Wonder What Lies Beneath the Surface of Celebrity Life?</h2>
                                Behind the glitz and glam, the lives 
                                of celebrities are filled with hidden struggles. 
                                From personal scandals and secret addictions to mental 
                                health battles, the world of fame is often far from 
                                perfect. Many stars face immense pressure to maintain 
                                a flawless image, leading to silent struggles. Power 
                                plays, exploitation, and financial turmoil are common 
                                in the industry, with legal battles often concealed 
                                from the public eye. The darker side of fame serves 
                                as a reminder that celebrity life isn’t always as 
                                glamorous as it seems.</p>
                            </div>
                    </div>
                    <div className="reason-2">

                            <div className="def-2">
                                <p>Step into the world beyond the red carpet and discover the hidden truths behind the fame. From shocking scandals and addiction struggles to mental health challenges and power games, we expose the untold stories of celebrities. The pressure to keep up a flawless image often leads to personal turmoil, financial wreckage, and unexpected legal dramas. Explore the darker side of fame and see what celebrities are really facing behind the scenes.</p>
                            </div>
                        <div className="content-2">
                            <h1>Secrets They Don’t Want You to Know</h1>
                        </div>
                    </div>
                    </div>
                    <div className="btn">
                        <div className="enter-btn">
                        <Link to='/Explore'><button>Explore here</button></Link>
                        </div>
                </div>

        </div>
    )
}

export default Home