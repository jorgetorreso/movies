import renderer from 'react-test-renderer';
import CardBody from "./index";
import { ReactElement } from 'react';

jest.mock("./style");

const renderTree = (tree: ReactElement) => renderer.create(tree);

describe('<CardBody>', () => {
  it('should render component', () => {
    expect(renderTree(<CardBody>Test Content</CardBody>).toJSON()).toMatchSnapshot();
  });
});