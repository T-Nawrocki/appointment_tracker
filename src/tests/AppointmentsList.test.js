import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import AppointmentsList from '../components/AppointmentsList';

configure({ adapter: new Adapter() });

describe('Appointments List', () => {
  it('should render the list', () => {
    const tree = renderer.create(<AppointmentsList appointments={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
