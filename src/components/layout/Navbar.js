import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../../resources/logo-colored.png";

export default function Navbar() {
  return (
    <header>
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
      </nav>
      <button className={classes.connect_wallet}>Connect Wallet</button>
    </header>
  );
}
