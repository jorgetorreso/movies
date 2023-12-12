import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../molecules/header';
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { ILang } from '../../../types/language';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [language, setLanguage] = useLocalStorage<ILang>('lang', 'en');

    const { pathname } = location;
    return (
        <div className={pathname === '/' ? 'Home' : ''}>
            <Header language={language} onChangeLanguage={setLanguage} onClickMenu={() => navigate("/")} onClickLogo={() => navigate("/")} />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
