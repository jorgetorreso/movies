import renderer from 'react-test-renderer';
import Card from './index';

jest.mock('../../atoms/cardHeader', () => 'MockedCardHeader');
jest.mock('../../atoms/cardBody', () => 'MockedCardBody');
jest.mock('../../atoms/cardSubtitle', () => 'MockedCardSubtitle');
jest.mock('../../atoms/cardTitle', () => 'MockedCardTitle');
jest.mock('../../atoms/cardFeature', () => 'MockedCardFeature');
jest.mock('../../../utils/helpers', () => ({
  translation: jest.fn().mockReturnValue('MockedTranslation'),
}));

const renderTree = (tree: React.ReactElement) => renderer.create(tree);

describe('<Card>', () => {
  it('should render component', () => {
    const data = {
      id: "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
      name: "Howl Jenkins Pendragon",
      img: "https://static.wikia.nocookie.net/howlscastle/images/2/26/Howl_with_black_hair.jpg",
      gender: "Male",
      age: "27",
      eye_color: "Bright blue",
      hair_color: "Bright blue",
      specie: "Wizard 🪄",
    };
    const lang = 'en';

    expect(
      renderTree(<Card data={data} lang={lang} />).toJSON()
    ).toMatchSnapshot();
  });
});