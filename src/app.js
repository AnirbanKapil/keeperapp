import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";



const AppLayOut = () => {
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);

