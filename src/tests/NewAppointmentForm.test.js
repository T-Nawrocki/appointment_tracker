import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import NewAppointmentForm, { availableTimes } from '../components/NewAppointmentForm';

configure({ adapter: new Adapter() });

describe('New Appointment Form', () => {
  it('should render the form', () => {
    const tree = renderer.create(<NewAppointmentForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the title input', () => {
    const wrapper = shallow(<NewAppointmentForm />);
    expect(wrapper.find('input[name="new-appointment-title"]').exists()).toBe(true);
  });

  it('should render the date input', () => {
    const wrapper = shallow(<NewAppointmentForm />);
    expect(wrapper.find('input[name="new-appointment-date"]').exists()).toBe(true);
  });

  it('should render the time select', () => {
    const wrapper = shallow(<NewAppointmentForm />);
    expect(wrapper.find('select[name="new-appointment-time"]').exists()).toBe(true);
  });

  it('should render the submit input', () => {
    const wrapper = shallow(<NewAppointmentForm />);
    expect(wrapper.find('input[name="new-appointment-submit"]').exists()).toBe(true);
  });

  it('should generate available times every half hour between 8am and 6pm', () => {
    expect(availableTimes().length).toBe(20);
    expect(availableTimes()[0]).toBe("8:00");
    expect(availableTimes()[availableTimes().length - 1]).toBe("17:30");
  });

  it('should have options for all available times (plus default)', () => {
    const wrapper = shallow(<NewAppointmentForm />);
    expect(wrapper.find('option').length).toBe(21);
  });

});
