import renderer from 'react-test-renderer';
import CardSubtitle from "./index";
import { ReactElement } from 'react';

jest.mock("./style");

const renderTree = (tree: ReactElement) => renderer.create(tree);
describe('<CardSubtitle>', () => {
  it('should render component', () => {
    expect(renderTree(<CardSubtitle  
      text={'Movie 1'} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<CardSubtitle  
      text={'Movie 1'} 
    />).toJSON()).toMatchSnapshot();
  });
});