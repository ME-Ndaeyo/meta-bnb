import classes from "./Card.module.css"

export default function Card(props){
    return (
      <div className={classes.card}>
        <img
          src={props.src}
          alt="bnb apartment"
          className={classes.cardImage}
        />
        <div className={classes.cardTitle}>
          <p>Desert king</p>
          <p>
            <strong>1MBT per night</strong>
          </p>
        </div>
        <div className={classes.cardDescription}>
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <div className={classes.cardRating}>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>
      </div>
    );
}