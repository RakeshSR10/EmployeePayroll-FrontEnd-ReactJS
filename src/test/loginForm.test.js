import React from 'react';
import Enzyme from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Login from '../pages/loginForm.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';

Enzyme.configure({ adapter : new Adapter() });

describe('Login Headers tag test', () => {
    
    it('render header h2 tag', () => {
        const {getByTestId} = render(<Login />);
        const header = getByTestId('login');
        expect(header).toHaveTextContent('Log-In');
      })
})

describe('Login Form test', () => {

    it('check if form login displays', () => {
      const { getByTestId } = render(<Login />);
      const logo = getByTestId('logo');
      const form = getByTestId('form');
      const email = getByTestId('email');
      const password = getByTestId('password');
      const button = getByTestId('submitButton');
  
      expect(logo).toBeInTheDocument();
      expect(form).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });
  
    it('check elements value in the login form', () => {
      const { getByTestId } = render(<Login />);
      const email = getByTestId('email');
      const password = getByTestId('password');
  
      expect(email).toHaveTextContent('email');
      expect(password).toHaveTextContent('password');
  
    });
  });