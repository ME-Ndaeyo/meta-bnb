import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import logo from "../../resources/logo-colored.png";
import debounce from "../../utilities/Helper";

export default function Navbar(props) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    height: "1.2rem",
    width: "91.5%",
    backgroundColor: "#fff",
    textAlign: "center",
    transition: "top 0.6s",
  };

  return (
    <header style={{...navbarStyles, top: visible? '0': '-0.2rem'}}>
      <img src={logo} alt="Metabnb logo" className={classes.logo} />
      <nav>
        <ul className={classes.linksList}>
          <li className={classes.linksListItem}>
            <Link to="./">Home</Link>
          </li>
          <li className={classes.linksListItem}>
            <Link to="./place-to-stay">Place to stay</Link>
          </li>
          <li className={classes.linksListItem}>
            <Link to="./">NFTs</Link>
          </li>
          <li className={classes.linksListItem}>
            <Link to="./">Community</Link>
          </li>
        </ul>
      <button className={classes.connect_wallet} onClick={()=> props.eventHandler()}>Connect Wallet</button>
      </nav>
      
    </header>
  );
}
