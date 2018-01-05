import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login.jsx';

test('should render Login page', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLoginSpy = jest.fn();
  const wrapper = shallow(<Login startLogin={startLoginSpy} />);
  wrapper.find('button').simulate('click');
  expect(startLoginSpy).toHaveBeenCalled();
});