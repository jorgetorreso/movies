import renderer from 'react-test-renderer';
import CardCover from "./index";
import { ReactElement } from 'react';

jest.mock("./style");

const renderTree = (tree: ReactElement) => renderer.create(tree);
describe('<CardCover>', () => {
  it('should render component', () => {
    expect(renderTree(<CardCover
      src={'https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Prince_Justin.png'}
      alt={'Prince Justin or Turnip Head'}
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<CardCover
      src={'https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Prince_Justin.png'}
      alt={'Prince Justin or Turnip Head'}
    />).toJSON()).toMatchSnapshot();
  });
});