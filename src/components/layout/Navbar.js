import { Link } from "react-router-dom";
import React, { useState, useEffect} from "react";
import classes from "./Navbar.module.css";
import logo from "../../resources/logo-colored.png";


export default function Navbar(props) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = useEffect(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 20
    );

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    height: "2.2rem",
    width: "92%",
    backgroundColor: "#fff",
    textAlign: "center",
    transition: "top 0.2s",
    zIndex: "110"
  };

  return (
    <header style={{ ...navbarStyles, top: visible ? "0" : "-0.2rem" }}>
      <img src={logo} alt="Metabnb logo" className={classes.logo} />

      <nav
        className={visible ? classes.navToggle : classes.nav}
        onClick={() => setVisible(false)}
      >
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
        <button
          className={classes.connect_wallet}
          onClick={() => props.eventHandler()}
        >
          Connect Wallet
        </button>
      </nav>

      <button className={classes.menu} onClick={() => setVisible(!visible)}>
        {visible ? (
          <ion-icon name="close-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </button>
    </header>
  );
}
