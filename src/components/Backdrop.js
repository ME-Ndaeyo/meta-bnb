import classes from "./Backdrop.module.css";
import metamaskLogo from "../resources/metamask-logo.png";
import walletConnectLogo from "../resources/walletconnect-logo.svg";

export default function Backdrop(props){
    return (
      <div className={classes.backdrop} onClick={()=>{props.eventHandler()}}>
        <div className={classes.modal}>
          <div className={classes.modal_heading}>
            <h4>Connect Wallet</h4>
            <ion-icon
              name="close-outline"
              className={classes.close_icon}
              onClick={()=>{props.eventHandler()}}
            ></ion-icon>
          </div>

          <div className={classes.modal_body}>
            <h5>Choose your preferred wallet:</h5>
            <div className={classes.wallet}>
              <p className={classes.wallet_tag}>
                <strong><img src={metamaskLogo} alt='Metamask logo'/> Metamask</strong>
              </p>
              <ion-icon
                name="chevron-forward-outline"
                className={classes.forward_icon}
              ></ion-icon>
            </div>
            <div className={classes.wallet}>
              <p className={classes.wallet_tag}>
                <strong><img src={walletConnectLogo} alt='Wallet-connect logo'/> Wallet connect</strong>
              </p>
              <ion-icon
                name="chevron-forward-outline"
                className={classes.forward_icon}
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>
    );
}