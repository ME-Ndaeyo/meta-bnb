import bnbData from "../bnbData";
import Card from "../Card";
import classes from "./PlaceToStay.module.css";

export default function PlaceToStay() {
    // eslint-disable-next-line array-callback-return
    const cardEl = bnbData.map((el, i)=>{
        return <Card src={el} key={i}/>
    })

  return (
    <main className="item">
      <div className={classes.placeToStayHeader}>
        <ul className={classes.headerList}>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantast city</li>
          <li>Beach</li>
          <li>Cabins</li>
          <li>Off-grid</li>
          <li>Farm</li>
          <li className={classes.location}>
            <p>Location</p>
            <ion-icon name="options"></ion-icon>
          </li>
        </ul>
      </div>
      <div className={classes.bnbs}>{cardEl}</div>
    </main>
  );
}
