import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Backdrop from "../Backdrop";

export default function Layout(props){
    const [showModal, setShowModal] = useState(false);

    function openModal() {
      setShowModal(true);
    }
    function closeModal() {
      setShowModal(false);
    }

    return (
      <div>
        {showModal && <Backdrop eventHandler={closeModal}/>}
        <Navbar eventHandler={openModal}/>
        <main>{props.children}</main>
        <Footer/>

      </div>
    );
}