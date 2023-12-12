import renderer from 'react-test-renderer';
import CardFeature from "./index";
import { ReactElement } from 'react';

jest.mock("./style");

const renderTree = (tree: ReactElement) => renderer.create(tree);
describe('<CardFeature>', () => {
  it('should render component', () => {
    expect(renderTree(<CardFeature
      label={'gender'}
      detail={'male'}
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<CardFeature
      label={'gender'}
      detail={'male'}
    />).toJSON()).toMatchSnapshot();
  });
});