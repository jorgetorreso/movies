import { ICardBodyProps } from '../../../types';
import { StyledCardBody } from './style';


const CardBody = ({ children }: ICardBodyProps) => {
    return (
        <StyledCardBody className='Card__body'>
           {children}
        </StyledCardBody>
    );
};

export default CardBody;
