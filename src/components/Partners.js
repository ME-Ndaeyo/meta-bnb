import mbtoken from "../resources/mb-token.png";
import metamask from "../resources/metamask.png";
import opensea from "../resources/opensea.png";

import classes from "./Partners.module.css";

export default function Partners() {
  return (
    <ul className={classes.partners}>
      <li className={classes.partner}>
        <img src={mbtoken} alt="MBToken" />
      </li>
      <li className={classes.partner}>
        <img src={metamask} alt="Metamask" />
      </li>
      <li className={classes.partner}>
        <img src={opensea} alt="Opensea" />
      </li>
    </ul>
  );
}
