import { FC } from 'react';
import { Header, UserFormModal, UsersList, Footer } from '../../components';
import styles from './MainLayout.module.scss';

const Layout: FC = () => {
    return (
        <div className="App">
            <Header />
            <div className={styles.listContainer}>
                <UsersList />
                <UserFormModal />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
