import { render } from "@testing-library/react";
import AddEmployee from "../components/addEmployee";
import "@testing-library/jest-dom/extend-expect";

describe("Testing Heading tags", () => {

    it("givenDataTestId_shouldRenderProperTitleElement", () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const { getByTestId } = render(<AddEmployee />);
        const title = getByTestId("heading");
        expect(title).toHaveTextContent("Add Employee Form");
    });
    //negative test case
    it("givenWrongTitle_contentShould_returnProperResult", () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const { getByTestId } = render(<AddEmployee />);
        const title = getByTestId("heading");
        expect(title).not.toContain("Employee")
    });
});

describe('Testing addEmployee Form component', () =>{
    it('givenDataTestId_whenVisitingFormComponent_itShouldRenderProperly', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const { getByTestId } = render(<AddEmployee />);
        const Avatar = getByTestId('avatar');
        const Heading = getByTestId('heading');
        const Form = getByTestId('form');
        const Name = getByTestId('name');
        const Email = getByTestId('email');
        const PhoneNumber = getByTestId('phoneNumber');
        const Department = getByTestId('department');
        const Salary = getByTestId('salary');
        const Company = getByTestId('company');
        const Button = getByTestId('submit');

        expect(Avatar).toBeInTheDocument();
        expect(Heading).toBeInTheDocument();
        expect(Form).toBeInTheDocument();
        expect(Name).toBeInTheDocument();
        expect(Email).toBeInTheDocument();
        expect(PhoneNumber).toBeInTheDocument();
        expect(Salary).toBeInTheDocument();
        expect(Department).toBeInTheDocument();
        expect(Company).toBeInTheDocument();
        expect(Button).toBeInTheDocument();
    })

    it('givenDataTestId_whenVisitingFormComponent_itShouldRenderLabelValuesProperly', ()=>{
        // eslint-disable-next-line react/react-in-jsx-scope
        const { getByTestId } = render(<AddEmployee />);
        const Name = getByTestId('name');
        const Email = getByTestId('email');
        const PhoneNumber = getByTestId('phoneNumber');
        const Department = getByTestId('department');
        const Salary = getByTestId('salary');
        const Company = getByTestId('company');

        expect(Name).toHaveTextContent('Name');
        expect(Email).toHaveTextContent('Email');
        expect(PhoneNumber).toHaveTextContent('Phone Number');
        expect(Department).toHaveTextContent('Department');
        expect(Salary).toHaveTextContent('Salary');
        expect(Company).toHaveTextContent('Company');
    })
})