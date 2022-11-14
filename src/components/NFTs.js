import classes from "./NFTs.module.css";
import nft_image from "../resources/nfts.png";

export default function NFTs() {
  return (
    <div className={`${classes.nft_section} item`}>
      <div className={classes.nft_text}>
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our customer
          access to loads of our exclusive services.
        </p>
        <button className={classes.learn_more}>Learn more</button>
      </div>
      <div className={classes.nft_image}>
        <img src={nft_image} alt="Metabnb NFTs" />
      </div>
    </div>
  );
}
