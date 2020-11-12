import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';

import NewAppointmentForm from '../components/NewAppointmentForm';

configure({ adapter: new Adapter() });

describe('New Appointment Form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewAppointmentForm />);
  });

  it('should render the form', () => {
    const tree = renderer.create(<NewAppointmentForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the title input', () => {
    expect(wrapper.find('input[name="new-appointment-title"]').exists()).toBe(true);
  });

  it('should render the date input', () => {
    expect(wrapper.find('input[name="new-appointment-date"]').exists()).toBe(true);
  });

  it('should render the time select', () => {
    expect(wrapper.find('select[name="new-appointment-time"]').exists()).toBe(true);
  });

  it('should render the submit input', () => {
    expect(wrapper.find('input[name="new-appointment-submit"]').exists()).toBe(true);
  });

  it('should have options for all available times (plus default)', () => {
    expect(wrapper.find('option').length).toBe(21);
  });

});
