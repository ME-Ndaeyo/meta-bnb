import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props){
    return (
      <div>
        <Navbar/>
        <main>{props.children}</main>
        <Footer/>
      </div>
    );
}