import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  it('Route is rendered properly', () => {
    const component = shallow(<App />)
    component.find('Route').exists()
  })
})
