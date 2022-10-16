import { FC, memo } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = memo((): JSX.Element => {
  return (
    <div className={styles.footer}>
      <h1>Footer </h1>
    </div>
  );
});

export default Footer;
