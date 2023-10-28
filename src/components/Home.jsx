import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram, } from "react-icons/ai";

const Home = () => {
  return (
   <>
    <div className='home' id='home'>
        <main>
            <h1>DataFlow.AI</h1>
            <p>Analsier of all your DataFlow</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
            Unlock insights with our dataflow analysis website, visualizing and understanding the 
            flow of data in your systems<br></br>
            Streamline your operations with our dataflow analysis platform, identifying
             bottlenecks and optimizing data pathways.
             <br></br>
             Navigate the digital landscape confidently with our dataflow analysis tool, 
             ensuring data integrity and efficiency.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            
            <p>
            we specialize in harnessing the power of Artificial Intelligence AI and automation to 
            revolutionize the way you analyze dataflow.<br></br>
            Our dedicated team is driven by the belief that data holds the key
             to unlocking the full potential of your operations.<br></br>
             With a focus on dataflow analysis, we offer cutting-edge solutions that 
             not only help you gain deep insights into the movement of data within your systems but also automate the process for efficiency. <br></br>
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
    <div>
        <h1>Brands</h1>
        
        <article>
            <div style={{
                animationDelay: "0.3s"
            }}>


            <AiFillGoogleCircle />
            <p>Google</p>

            </div>
            <div style={{
                animationDelay: "0.5s"
            }}>


            <AiFillAmazonCircle />
            <p>Amazon</p>

            </div>
            <div style={{
                animationDelay: "0.7s"
            }}>


            <AiFillYoutube />
            <p>YouTube</p>

            </div>
            <div style={{
                animationDelay: "1s"
            }}>


            <AiFillInstagram />
            <p>Instargram</p>

            </div>
        </article>
    </div>
    </div>
   </>
  );
}

export default Home