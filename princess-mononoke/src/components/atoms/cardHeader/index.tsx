import { StyledCardHeader } from "./style";

interface ICardHeaderProps {
    background: string;
}

const CardHeader = ({ background }: ICardHeaderProps) => {
    return <StyledCardHeader background={background}></StyledCardHeader>;
};

export default CardHeader;
