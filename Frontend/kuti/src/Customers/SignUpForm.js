import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { CustomerSignUpSchema } from './CustomersSignUpSchema'
import { Formik } from 'formik';

const CustomerSignUpForm = ({ handleModalsClose, signupCustomer }) => {
  
    const navigate = useNavigate()

    async function handleSubmit(values) {
        let user = await signupCustomer(values);
        if(user.success){
            navigate('/')
        }
    }

    return (
        <div className="signup-body">
        <Row className="justify-content-center text-center">
        <Col className="col-8">
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
                        fullName: "",
                        email: "",
                        username: "",
                        password: ""
                    }}

                    validationSchema = { CustomerSignUpSchema }

                    onSubmit={(values, actions) => {
                        actions.setSubmitting(false);
                    }}
                >
                {({ values, errors, handleChange, handleBlur }) => (
                <Form onSubmit = {handleSubmit}>
                    <Col className="text-danger mb-2">
                        {
                            Object.values(errors)[0]
                        }
                    </Col>
                    <Form.Group>
                    <Form.Control 
                            type="text" 
                            name = "fullName"
                            placeholder="Full Name"
                            className="mt-2"
                            value = {values.fullName}
                            onChange = {handleChange}
                        />
                    <Form.Control 
                            type="text" 
                            name = "email"
                            placeholder="Email"
                            className="mt-2"
                            value = {values.email}
                            onChange = {handleChange}
                        />
                        <Form.Control 
                            type="text" 
                            name = "username"
                            placeholder="Username"
                            className="mt-2"
                            value = {values.username}
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="password"
                            name = "password"
                            placeholder="Password"
                            className="mt-2"
                            value = {values.password}
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="submit"
                            value = "Submit"
                            className="mt-3"
                            className="btn btn-primary mt-2"
                        />
                    </Form.Group>

                    <Row className="mt-2">
                        <Col onClick = {handleModalsClose} className="register-link text-start text-sm">
                            <Link to="/seller-registration">
                                Seller Registration
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
        </div>
    )
}

export default CustomerSignUpForm;
