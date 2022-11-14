import classes from "./Hero.module.css";
import hero_image from "../resources/hero.png";

export default function Hero() {
  return (
    <div className={`${classes.hero_section} item`}>
      <div className={classes.hero_text}>
        <h1>
          Rent a <span className={classes.highlight}>place</span> away from{" "}
          <br /> <span className={classes.highlight}>home</span> in the{" "}
          <span className={classes.highlight}>metaverse</span>
        </h1>
        <p>
          We provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className={classes.mini_form}>
          <input placeholder="Search for location" type="text" />
          <button>Search</button>
        </div>
      </div>

      <img
        src={hero_image}
        alt="Houses in the metaverse"
        className={classes.hero_image}
      />
    </div>
  );
}
