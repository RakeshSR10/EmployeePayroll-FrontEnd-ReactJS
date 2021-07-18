import React from 'react';
import Enzyme from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Registration from '../pages/registerForm.js';
import Adapter from 'enzyme-adapter-react-16';
import { getByTestId, render } from '@testing-library/react';

Enzyme.configure({ adapter : new Adapter() });

describe('Heading and logo tags test', () => {
    it('Render Registration logo', ()=> {
        const { getByTestId } = render(<Registration />);
        const headerLogo = getByTestId('avatar');
        expect(headerLogo).toBeInTheDocument();
    })

    it('Render header h2 tag', () => {
        const { getByTestId } = render(<Registration />);
        const headerH2Tag = getByTestId('heading');
        expect(headerH2Tag).toHaveTextContent('Registration Form');
    })

    it('Render Typography tag', () => {
        const { getByTestId } = render(<Registration />);
        const headerTypography = getByTestId('typography');
        expect(headerTypography).toHaveTextContent('Please fill all the fields');
    })
})
describe('Registration Page Elements test', () => {
    it('Check Elements', () => {
        const { getByTestId } = render(<Registration />);
        const logo = getByTestId('avatar');
        const form = getByTestId('form');
        const firstName = getByTestId('firstName');
        const lastName = getByTestId('lastName');
        const email = getByTestId('email');
        const password = getByTestId('password');
        const button = getByTestId('submitButton');

        expect(logo).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        
    });
    
    it('check Register page elements value', () => {
        const { getByTestId } = render(<Registration />);
        const firstName = getByTestId('firstName');
        const lastName = getByTestId('lastName');
        const email = getByTestId('email');
        const password = getByTestId('password');
        
        expect(firstName).toHaveTextContent('First Name');
        expect(lastName).toHaveTextContent('Last Name');
        expect(email).toHaveTextContent('Email');
        expect(password).toHaveTextContent('Password');
    });
});