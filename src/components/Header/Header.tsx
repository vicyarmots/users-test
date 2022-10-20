import { FC, memo } from 'react';
import styles from './Header.module.scss';

const Header: FC = memo((): JSX.Element => {
   console.log(styles);

   return (
      <div className={styles.header}>
         <h1>Header </h1>
      </div>
   );
});

export default Header;
