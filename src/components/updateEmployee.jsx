import React, { useState, useEffect } from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Employee } from '../services/employee.js';
import { useHistory, useParams } from 'react-router-dom';

const employee = new Employee();

const UpdateEmployee = () => {

    const history = useHistory();
    const { empId } = useParams();
    const paperStyle = {padding:'60px 20px', width:400, margin:'120px auto'}
    const headerStyle = {margin:0}  
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const marginTop = {marginTop:20}

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        department: '',
        salary: '',
        company: ''
    }

    const [empData, setEmployee] = useState(initialValues);

    useEffect(() => {
        employee.getEmployee(empId)
        .then((res) => {
            setEmployee(res.data.data);
        }).catch(err => {
            alert(err);
        })
    }, [empData]);

    const onSubmit = (event, props) => {
        event.preventDefault();
        employee.editEmployee(empData, empId).then((res) => {
            setEmployee(res.data.data);
            alert(res.data.message);
            history.push('/EmployeesList');
        }).catch((error) => {
            console.log(error);
        });
        props.resetForm()
        props.setSubmitting(false)
    } 
    let {
        name, email, phoneNumber, department, salary, company
    } = empData;

    const onInputChange = (e) => {
        console.log(empData);
        setEmployee({...empData, [e.target.name] : e.target.value});
        console.log('---------------', empData);
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3,"first name is too short").matches(/^[A-Z ]{1}[a-z A-Z ]{3,}$/).required("Required"),
        email: Yup.string().email('please enter valid email').required('Required'),
        phoneNumber: Yup.string().required("Required").min(10,'Should be integers only').matches(/^[0-9]{10}$/),
        department: Yup.string().required('Required').matches(/^[a-zA-Z]{2,}$/),
        salary: Yup.string().required('Required').matches(/^[0-9]{3,}$/),
        company: Yup.string().required('Required').matches(/^[a-zA-Z]{2,}$/)
    })

    return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar data-testid='avatar' style={ avatarStyle }>
                            <PersonAddOutlinedIcon />
                        </Avatar>
                        <h2 data-testid='heading' style={headerStyle}>Update Employee Form</h2>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} enableReinitialize={true}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Name' 
                                    placeholder='your name' 
                                    value={name}
                                    onChange={e => {onInputChange(e)}}
                                    helperText={<ErrorMessage name="name"/>} 
                                name="name"/>

                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Email' 
                                    placeholder='your email'
                                    value={email}
                                    onChange={e => {onInputChange(e)}} 
                                    helperText={<ErrorMessage name="email"/>} 
                                name="email"/>

                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Phone Number' 
                                    placeholder='your phone number'
                                    value={phoneNumber}
                                    onChange={e => {onInputChange(e)}} 
                                    helperText={<ErrorMessage name="phoneNumber"/>} 
                                name="phoneNumber"/>

                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Department'
                                    value={department}
                                    onChange={e => {onInputChange(e)}}  
                                    helperText={<ErrorMessage name="department"/>} 
                                name="department"/>

                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Salary' 
                                    value={salary}
                                    onChange={e => {onInputChange(e)}} 
                                    helperText={<ErrorMessage name="salary"/>} 
                                name="salary"/>

                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Company'  
                                    value={company}
                                    onChange={e => {onInputChange(e)}}
                                    helperText={<ErrorMessage name="company"/>} 
                                name="company"/>

                                <Button type='submit' 
                                    variant='contained' 
                                    disabled={props.isSubmitting} 
                                    color='primary' 
                                    style={marginTop}>{props.isSubmitting ? "Loading" : "UPDATE"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        )   
}

export default UpdateEmployee;