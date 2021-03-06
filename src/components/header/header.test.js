import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  })

  it('Should render without errors', () => {
    const wrapper = component.find(`[data-test='header']`);

    expect(wrapper.length).toBe(1);

  })

  it('Should render title without errors', () => {
    const wrapper = component.find(`[data-test='title']`);

    expect(wrapper.length).toBe(1);

  })
})