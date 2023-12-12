import { StyledCardTitle } from "./style";

interface CardTitleProps {
    text: string;
}


const CardTitle = ({ text }: CardTitleProps) => {
    return <StyledCardTitle className="Card__title">{text}</StyledCardTitle>;
};

export default CardTitle;