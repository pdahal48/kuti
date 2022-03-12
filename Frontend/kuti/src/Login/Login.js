import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
import { LoginSchema } from './LoginSchema'
import { Formik } from 'formik'
import './Styles/Login.css'

const Login = ({ showCustomerRegistration, loginCustomer }) => {

    const [flag, setFlag] = useState(false)
    const [value, setValue] = useState(null)
    const navigate = useNavigate()

    async function handleSubmit(event, values) {
        try {
            event.preventDefault();
            console.log(`Form submitted`)
            let user = await loginCustomer(values)
            if(user.success){
                navigate('/')
            } else {
                setFlag(true)
                setValue(user.errors[0])
            }
        } catch(e) {

        }

    }

    return (
        <Row className="justify-content-center text-center container">
            <Col className="col-7 p-0 mt-1 mb-0">
            {flag && 
                <Alert variant="danger">{value}</Alert>
            }
                <div className = "card my-5">
                <div className = "card-body">
                <Row className="login-icon mb-3">
                    <Col className="col-12">
                        <img src="https://medias.utsavfashion.com/skin/frontend/ultimo/default/images/utsavfashion-logo.png"></img>
                    </Col>
                </Row>
                <Col>
                <Formik
                    initialValues = {{
                        username: "",
                        password: ""
                    }}

                    validationSchema = { LoginSchema }

                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {({ values, errors, handleChange, handleBlur }) => (
                    <Form onSubmit = {handleSubmit}>
                    <Col className="text-danger mb-2">
                        {
                            Object.values(errors)[0]
                        }
                    </Col>
                        <Form.Group className="mb-2">
                            <Form.Control 
                                type="text" 
                                name = "username"
                                placeholder="Username"
                                value = {values.username}
                                onChange = {handleChange}
                                onBlur={handleBlur}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                type="password"
                                name = "password"
                                placeholder="Password"
                                value = {values.password}
                                onChange = {handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                        <Row>
                            <Col className="text-start mt-2">
                                <Button onClick={(event) => ( event.preventDefault(), handleSubmit(event, values))} type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form.Group>
                        <Row>
                            <Col onClick={ showCustomerRegistration } className="mt-3 register-link text-start">
                                <Link to="/">
                                    Register
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="loginHelp text-start">
                                <Link to="/login-help">
                                    Login Help?
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                    )}
                    </Formik>
                </Col>
                </div>  
                </div>
            </Col>
        </Row>
    )
}

export default Login;
