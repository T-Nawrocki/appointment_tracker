import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import AppointmentsListItem from '../components/AppointmentsListItem';

configure({ adapter: new Adapter() });

describe('Appointments List Item', () => {
  it('should render the list item', () => {
    const tree = renderer.create(<AppointmentsListItem appointment={{
      id: 1,
      title: "title",
      dateTime: new Date(2020, 0, 1)
    }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
