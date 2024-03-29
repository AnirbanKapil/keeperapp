import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDo from "./components/ToDo";



const AppLayOut = () => {
 
    
    


    return (
        <div>
            <Header />
            <ToDo />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);

