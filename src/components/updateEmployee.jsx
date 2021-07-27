import { Grid, Paper, Avatar, Button } from '@material-ui/core';
import React, { Component } from 'react';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Employee } from '../services/employee.js';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const employee = new Employee();

class UpdateEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            department: '',
            salary: '',
            company: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    componentDidMount() {
        const employeeId = this.props.match.params.empId;
        employee.getEmployee(employeeId).then((res) => {
            const result = res.data.data;
            if(res.data.success === true) {
                this.setState({
                    name: result.name,
                    email: result.email,
                    phoneNumber: result.phoneNumber,
                    department: result.department,
                    salary: result.salary,
                    company: result.company
                });
            } else {
                alert('Employee not found');
            }
        }).catch((err) => {
            console.log(err.message);
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const empData = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            department: this.state.department,
            salary: this.state.salary,
            company: this.state.company
        };

        const employeeId = this.props.match.params.empId;

        employee.updateEmployee(empData, employeeId).then((res) => {
            alert(res.data.message);
            this.props.history.push('/dashboard/EmployeesList');
        }).catch((err) => {
            console.log(err.message);
        })
    }

    render() {
        const paperStyle = {padding:'60px 20px', width:400, margin:'120px auto'}
        const headerStyle = {margin:0}  
        const avatarStyle = {backgroundColor:'#1bbd7e'}
        const marginTop = {marginTop:20}

        return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                        <Avatar data-testid='avatar' style={ avatarStyle }>
                            <PersonAddOutlinedIcon />
                        </Avatar>
                        <h2 data-testid='heading' style={headerStyle}>Update Employee Form</h2>
                    </Grid>
                    <ValidatorForm ref={(r) => (this.form = r)} data-testid = 'form' onSubmit = {this.handleSubmit} >
                        <TextValidator name='name'
                            fullWidth
                            label='Name'
                            data-testid='name'
                            value={this.state.name}
                            onChange={this.onInputChange}
                            validators={['required', 'matchRegexp:^[A-Z ]{1}[a-z A-Z ]{3,}$']}
                            errorMessages={['This field is required', 'first name is too short']}
                        />
                        <TextValidator name='email'
                            fullWidth
                            label='Email'
                            data-testid='email'
                            value={this.state.email}
                            onChange={this.onInputChange}
                            validators={['required', 'isEmail']}
                            errorMessages={['This field is required', 'please enter valid email']}
                        />
                        <TextValidator name='phoneNumber'
                            fullWidth
                            label='Phone Number'
                            data-testid='phoneNumber'
                            value={this.state.phoneNumber}
                            onChange={this.onInputChange}
                            validators={['required', 'matchRegexp:^[0-9]{10}$']}
                            errorMessages={['This field is required', 'Should be integers only']}
                        />
                        <TextValidator name='department'
                            fullWidth
                            label='Department'
                            data-testid='department'
                            value={this.state.department}
                            onChange={this.onInputChange}
                            validators={['required', 'matchRegexp:^[a-z A-Z ]{2,}$']}
                            errorMessages={['This field is required', 'should contain chars only']}
                        />
                        <TextValidator name='salary'
                            fullWidth
                            label='Salary'
                            data-testid='salary'
                            value={this.state.salary}
                            onChange={this.onInputChange}
                            validators={['required', 'matchRegexp:^[0-9]{3,}$']}
                            errorMessages={['This field is required', 'should contains only integers']}
                        />
                        <TextValidator name='company'
                            fullWidth
                            label='Company'
                            data-testid='company'
                            value={this.state.company}
                            onChange={this.onInputChange}
                            validators={['required', 'matchRegexp:^[a-z A-Z]{3,}$']}
                            errorMessages={['This field is required', 'should contains only chars']}
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            style={marginTop}
                            data-testid='submitButton'
                        >
                            UPDATE
                        </Button>
                    </ValidatorForm>
                </Paper>
            </Grid>
        )
    }
}

export default UpdateEmployee;