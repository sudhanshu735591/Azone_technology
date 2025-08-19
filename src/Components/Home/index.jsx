import Experience_and_Doubt from "../doubt_experience"
import Footer from "../Footer"
import Header from "../Header"
import Body from "./Body"
import Features from "./Features"
import Performance from "./Performance"
import React from "react";
function Home(){
    return(
        <div className="">
            <Header/>
            <div className="lg:p-0">
                <Body/>
                <Experience_and_Doubt/>
                <Features/>
            </div>
            
            <Performance/>
            <Footer/>
        </div>
    )
}
export default Home