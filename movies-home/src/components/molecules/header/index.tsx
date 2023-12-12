import Logo from '../../atoms/logo';
import MenuButton from '../../atoms/menu';
import LanguageSwitcher from '../language-switcher';
import { StyledHeader } from './style';

interface IHeaderProps {
    language: string;
    onChangeLanguage: (language: string) => void;
    onClickMenu: () => void;
    onClickLogo: () => void;
}

const Header = ({ language, onChangeLanguage, onClickMenu, onClickLogo }: IHeaderProps) => {
    return (
        <StyledHeader>
            <LanguageSwitcher selectLanguage={language} onChangeLanguage={onChangeLanguage} />
            <Logo onClick={onClickLogo} />
            <MenuButton onClick={onClickMenu} />
        </StyledHeader>
    );
};

export default Header;
