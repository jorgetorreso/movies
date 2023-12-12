import { StyledCardSubtitle } from "./style";

interface CardSubtitleProps {
    text: string;
}


const CardSubtitle = ({ text }: CardSubtitleProps) => {
    return <StyledCardSubtitle className="Card__subtitle">{text}</StyledCardSubtitle>;
};

export default CardSubtitle;