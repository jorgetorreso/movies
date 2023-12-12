import renderer from 'react-test-renderer';
import CardHeader from "./index";
import { ReactElement } from 'react';

jest.mock("./style");

const renderTree = (tree: ReactElement) => renderer.create(tree);

describe('<CardHeader>', () => {
  it('should render component', () => {
    expect(renderTree(<CardHeader  
      background={'https://static.wikia.nocookie.net/howlscastle/images/2/26/Howl_with_black_hair.jpg'} 
    />).toJSON()).toMatchSnapshot();
  });
});