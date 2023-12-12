import renderer from 'react-test-renderer';
import CardTitle from "./index";
import { ReactElement } from 'react';

jest.mock("./style");

const renderTree = (tree: ReactElement) => renderer.create(tree);
describe('<CardTitle>', () => {
  it('should render component', () => {
    expect(renderTree(<CardTitle  
      text={'Movie 1'} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<CardTitle  
      text={'Movie 1'} 
    />).toJSON()).toMatchSnapshot();
  });
});