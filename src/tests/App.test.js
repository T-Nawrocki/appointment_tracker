import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../App';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render the app', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the new appointment form', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('NewAppointmentForm').length).toEqual(1);
  });

  it('should render the appointment list', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('AppointmentsList').length).toEqual(1);
  });
});
