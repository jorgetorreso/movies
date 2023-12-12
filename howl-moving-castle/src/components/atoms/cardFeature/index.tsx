import { StyledCardFeature } from "./style";

interface CardFeatureProps {
    label: string,
    detail: string
}

const CardFeature = ({ label, detail }: CardFeatureProps) => {
    return <StyledCardFeature className="Card__feature">{label} <b>{detail}</b></StyledCardFeature>;
};

export default CardFeature;