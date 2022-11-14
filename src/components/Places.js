import Card from "./Card";
import classes from "./Places.module.css";
import bnbData from "./bnbData";

export default function Places() {
    // eslint-disable-next-line array-callback-return
    const cardEl = bnbData.map((el, i)=> {
        if (i + 1 <= 8) {
          return <Card src={el} key={i} />;
        }
    })
  return (
    <main className="item">
      <h2 className={classes.placesHeading}>
        Inspiration for your next adventure
      </h2>

      <div className={classes.bnbs}>{cardEl}</div>
    </main>
  );
}
