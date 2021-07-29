import { render } from "@testing-library/react";
import EmployeesList from "../components/employeesList";
import "@testing-library/jest-dom/extend-expect";

describe('Test table for employees details', () =>{
    it('givenDataTestId_whenRendered_shouldReturnProperElements', ()=>{
        // eslint-disable-next-line react/react-in-jsx-scope
        const { getByTestId } = render(<EmployeesList />);
        const TableContainer = getByTestId('tableContainer');
        const Table = getByTestId('table');
        const TableRowHeader = getByTestId('tableRowHeader');
        const TableBody = getByTestId('tableBody');

        expect(TableContainer).toBeInTheDocument();
        expect(Table).toBeInTheDocument();
        expect(TableRowHeader).toBeInTheDocument();
        expect(TableBody).toBeInTheDocument();
    });

    it("givenDataTestId_whenRendered_shouldReturnProper_RowElements", () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const { getByTestId } = render(<EmployeesList />);
        const Name = getByTestId('name');
        const Email = getByTestId('email');
        const PhoneNumber = getByTestId('phoneNumber');
        const Department = getByTestId('department');
        const Salary = getByTestId("salary");
        const Company = getByTestId("company");
    
        expect(Name).toBeInTheDocument();
        expect(Email).toBeInTheDocument();
        expect(PhoneNumber).toBeInTheDocument();
        expect(Department).toBeInTheDocument();
        expect(Salary).toBeInTheDocument();
        expect(Company).toBeInTheDocument();
    });
})
