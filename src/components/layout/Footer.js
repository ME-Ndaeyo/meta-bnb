import classes from "./Footer.module.css";
import logoWhite from "../../resources/logo-white.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="item">
      <ul className={`${classes.social} ${classes.footerList}`}>
        <li>
          <img
            src={logoWhite}
            alt="Metabnb logo"
            className={classes.footerLogo}
          />
        </li>
        <ul className={classes.socialLinks}>
          <li>
            <Link className={classes.footerLink} to="./">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </li>
          <li>
            <Link className={classes.footerLink} to="./">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </li>
          <li>
            <Link className={classes.footerLink} to="./">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </li>
        </ul>
        <li className={classes.copyright}>© 2022 Metabnb</li>
      </ul>

      <ul className={`${classes.community} ${classes.footerList}`}>
        <li className={classes.footerListTitle}>Community</li>
        <li>
          <Link className={classes.footerLink} to="./">
            NFT
          </Link>
        </li>
        <li>
          <Link className={classes.footerLink} to="./">
            Tokens
          </Link>
        </li>
        <li>
          <Link className={classes.footerLink} to="./">
            Landlords
          </Link>
        </li>
        <li>
          <Link className={classes.footerLink} to="./">
            Discord
          </Link>
        </li>
      </ul>

      <ul className={`${classes.places} ${classes.footerList}`}>
        <li className={classes.footerListTitle}>Places</li>
        <li>
          <Link className={classes.footerLink} to="./">
            Castle
          </Link>
        </li>
        <li>
          <Link className={classes.footerLink} to="./">
            Farms
          </Link>
        </li>
        <li>
          <Link className={classes.footerLink} to="./">
            Beach
          </Link>
        </li>
        <li>
          <Link className={classes.footerLink} to="./">
            Learn more
          </Link>
        </li>
      </ul>

      <ul className={`${classes.about} ${classes.footerList}`}>
        <li className={classes.footerListTitle}>About</li>
        <li>
          <Link className={classes.footerLink} to="./">
            Road map
          </Link>
        </li>
        <li>
          <Link className={classes.footerLink} to="./">
            Creators
          </Link>
        </li>
        <li>
          <Link className={classes.footerLink} to="./">
            Career
          </Link>
        </li>
        <li>
          <Link className={classes.footerLink} to="./">
            Contact us
          </Link>
        </li>
      </ul>
    </footer>
  );
}
