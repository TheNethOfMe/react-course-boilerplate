import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage.jsx';

test('should render the Expense Dashboard', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});