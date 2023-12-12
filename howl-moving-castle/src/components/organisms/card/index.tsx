import { StyledCard } from './style';
import CardBody from '../../atoms/cardBody';
import { ICardProps } from '../../../types';
import CardHeader from '../../atoms/cardHeader';
import CardSubtitle from '../../atoms/cardSubtitle';
import CardFeature from '../../atoms/cardFeature';
import CardTitle from '../../atoms/cardTitle';
import { translation } from '../../../utils/helpers';


const Card = ({ data, lang }: ICardProps) => {
  return (
    <StyledCard className='Card'>
      <CardHeader background={data.img} />
      <CardBody  >
        <CardSubtitle text={data.specie} />
        <CardTitle text={data.name} />
        <CardFeature label={translation('age', lang)} detail={data.age} />
      </CardBody>
    </StyledCard>
  );
};

export default Card;
