import { StyledCardCover } from "./style";

interface CardCoverProps {
    src: string;
    alt: string;
}

const CardCover = ({ src, alt, ...props }: CardCoverProps) => {
    return <StyledCardCover className="Card__cover" src={src} alt={alt} {...props} />;
};

export default CardCover;