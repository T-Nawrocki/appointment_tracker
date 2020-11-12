import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import AppointmentsListItem from '../components/AppointmentsListItem';

configure({ adapter: new Adapter() });

describe('Appointments List Item', () => {
  it('should render the list item', () => {
    const tree = renderer.create(<AppointmentsListItem appointment={{
      title: "title",
      dateTime: new Date()
    }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
