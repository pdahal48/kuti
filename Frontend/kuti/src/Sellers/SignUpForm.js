import React from 'react';
// import { useNavigate } from 'react-router-dom'
import { Row, Col, FloatingLabel, Form, Container } from 'react-bootstrap'
import { Formik } from 'formik';
import { SellerSignUpSchema } from './SellerSignUpSchema';

const SellerSignUpForm = ({ signupSeller }) => {

    const handleSubmit = (e) => {
        console.log('Submitted');
        e.preventDefault()
        // const user = signupSeller(values)
        // if (user.success){
        //     // navigate('/')
        //     console.log(`Success`)
        // }
    }
    
    return (
        <Row className="mt-4 justify-content-center">
            <Col className="col-7 card p-4">
            <Formik
                initialValues = {{
                    username: "",
                    password: "",
                    email: "",
                    fullName: "",
                    business_name: "",
                    business_address: "",
                    business_city: "",
                    business_state: "",
                    business_zip_code: "",
                    phone_number: "",
                    paypal_email: ""
                }}

            validationSchema = { SellerSignUpSchema }

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >

            {({
                values, 
                errors,
                handleChange,
                handleBlur,
            }) => (
            <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center">
                <Col className="col-4 text-start me-auto">
                <Col className="errors text-danger">
                    {
                        Object.values(errors)[0]
                    }
                </Col>
                    <span className="signup-header">Enter your personal Information</span>
                    <Form.Group>
                        <Row className="mt-3">
                            <Col className="col-10">
                                <FloatingLabel label="Full Name">
                                    <Form.Control 
                                        type="text" 
                                        name = "fullName"
                                        id="fullName"
                                        placeholder="Full Name"
                                        className="mt-3"
                                        value = {values.fullName}
                                        onChange = {handleChange}
                                        onBlur={handleBlur}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col className="col-10">
                                <FloatingLabel label="Username">
                                    <Form.Control 
                                        type="text" 
                                        name = "username"
                                        id="username"
                                        placeholder="Username"
                                        className="mt-3"
                                        value = {values.username}
                                        onChange = {handleChange}
                                        onBlur={handleBlur}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col className="col-10">
                                <FloatingLabel label="Password">
                                    <Form.Control 
                                        type="password"
                                        name = "password"
                                        id="password"
                                        placeholder="Password"
                                        className="mt-3"
                                        value = {values.password}
                                        onChange = {handleChange}
                                        onBlur={handleBlur}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
                <Col className="col-1 border-start border-3 my-2"></Col>
                <Col className="col-6">
                <span className="signup-header">Enter your business Information</span>
                    <Form.Group>
                        <Row className="mt-3">
                            <Col>
                            <FloatingLabel label="Business Name">
                            <Form.Control 
                                type="text" 
                                name = "business_name"
                                id="business_name"
                                placeholder="Business Name"
                                className="mt-3"
                                value = {values.business_name}
                                onChange = {handleChange}
                                onBlur={handleBlur}
                            />
                            </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-12">
                                <FloatingLabel label="Business Address">
                                    <Form.Control 
                                        type="text" 
                                        name = "business_address"
                                        id="business_address"
                                        placeholder="Business street address"
                                        className="mt-4"
                                        value = {values.business_address}
                                        onChange = {handleChange}
                                        onBlur={handleBlur}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FloatingLabel label="Business City">
                                <Form.Control 
                                    type="text" 
                                    name = "business_city"
                                    id="business_city"
                                    placeholder="Business City"
                                    className="mt-4"
                                    value = {values.business_city}
                                    onChange = {handleChange}
                                    onBlur={handleBlur}
                                />
                                </FloatingLabel>
                            </Col>
                            <Col>
                            <FloatingLabel label="Business State">
                                <Form.Control 
                                    type="text" 
                                    name = "business_state"
                                    id="business_state"
                                    placeholder="Business State"
                                    className="mt-4"
                                    value = {values.business_state}
                                    onChange = {handleChange}
                                    onBlur={handleBlur}
                                />
                            </FloatingLabel>
                            </Col>
                            <Col>
                            <FloatingLabel label="Zip Code">
                                <Form.Control 
                                    type="text" 
                                    name = "business_zip_code"
                                    id="business_zip_code"
                                    placeholder="Zip Code"
                                    className="mt-4"
                                    value = {values.business_zip_code}
                                    onChange = {handleChange}
                                    onBlur={handleBlur}
                                />
                            </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <FloatingLabel label="Business Email">
                            <Form.Control 
                                type="text" 
                                name = "email"
                                id="email"
                                placeholder="Business Email"
                                className="mt-4"
                                value = {values.email}
                                onChange = {handleChange}
                                onBlur={handleBlur}
                            />
                            </FloatingLabel>
                            </Col>
                            <Col>
                            <FloatingLabel label="Paypal Email">
                            <Form.Control 
                                type="text" 
                                name = "paypal_email"
                                id="paypal_email"
                                placeholder="Paypal email for payments"
                                className="mt-4"
                                value = {values.paypal_email}
                                onChange = {handleChange}
                                onBlur={handleBlur}
                            />
                            </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                        <Row>
                            <Col className="col-6">
                                <FloatingLabel label="Business Phone">
                                    <Form.Control 
                                        type="text" 
                                        name = "phone_number"
                                        id="phone_number"
                                        placeholder="Business Phone"
                                        className="mt-4"
                                        value = {values.phone_number}
                                        onChange = {handleChange}
                                        onBlur={handleBlur}
                                    />
                            </FloatingLabel>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="justify-content-center">
                            <Col className="mt-2">
                                <Form.Control 
                                type="submit"
                                value = "Submit"
                                className="mt-4"
                                className="btn btn-primary mt-2"
                                />
                            </Col>
                        </Row>
                    </Form.Group>
            </Col>
        </Row>
        </Form>
        )}
    </Formik>
    </Col>
</Row>

)}

export default SellerSignUpForm;
