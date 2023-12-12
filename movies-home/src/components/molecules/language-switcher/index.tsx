import esFlag from '/es.svg'
import enFlag from '/en.svg'
import { languages } from '../../../utils/language';
import { StyledLanguageSwitcher } from './style';

interface ILanguageSwitcherProps {
    selectLanguage: string;
    onChangeLanguage: (language: string) => void;
}

const LanguageSwitcher = ({ onChangeLanguage, selectLanguage }: ILanguageSwitcherProps) => {
    return (
        <StyledLanguageSwitcher>
            <div className="Lang-menu">
                <div className="Lang-menu__selected">
                    <img src={selectLanguage === 'en' ? enFlag : esFlag} /> {languages[selectLanguage].name}
                </div>
                <ul>
                    <li>
                        <button onClick={() => onChangeLanguage('en')} className="en"><img src={enFlag} /> English</button>
                    </li>
                    <li>
                        <button onClick={() => onChangeLanguage('es')} className="es"><img src={esFlag} /> Spanish</button>
                    </li>
                </ul>
            </div>
        </StyledLanguageSwitcher>
    );
};

export default LanguageSwitcher;
