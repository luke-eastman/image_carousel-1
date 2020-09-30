import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import App from '../Client/App.jsx'

test('truth serum', () => {
  expect('true').toBe('true');
});


// describe('')