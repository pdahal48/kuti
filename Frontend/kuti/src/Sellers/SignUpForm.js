import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Row, Col, FloatingLabel, Form, Button, Alert } from 'react-bootstrap'
import { Formik } from 'formik';
import { SellerSignUpSchema } from './SellerSignUpSchema';
import usStates from './States.json'

const SellerSignUpForm = ({ signupSeller }) => {

    const [flag, setFlag] = useState(false)
    const [value, setValue] = useState(null)
    const navigate = useNavigate();

    const handleSubmit = async (event, values) => {
        try {
            event.preventDefault();
            const user = await signupSeller(values)
            if (user.success){
                navigate('/')
            } else {
                setFlag(true)
                setValue(user.Error)
            }
        } catch(e) {
            console.log(e)
        }
    }
    
    return (
        <Row className="mt-4 justify-content-center">
            <Col className="col-sm-12 col-md-11 col-lg-9 col-xl-7
             p-4 signup-card">
            {flag && 
                <Alert variant="danger">{value}</Alert>
            }
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

                onSubmit={(values, actions) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    }, 1000);
                    console.log(values)
                }}
            >

            {({
                values, 
                errors,
                handleChange,
                handleBlur,
            }) => (
            <Form>
            <Row className="justify-content-center">
                <Col className="col-5 text-start me-auto">
                    <div className="signup-header">
                        Enter your personal Information <br></br>
                        <Col className="errors text-danger text-start">
                    {
                        Object.values(errors)[0]
                    }
                </Col>
                    </div>
                    <Form.Group>
                        <Row>
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
                <div className="signup-header text-start">Enter your business Information</div>
                    <Form.Group>
                        <Row className="mt-3">
                            <Col>
                            <FloatingLabel label="Name">
                            <Form.Control 
                                type="text" 
                                name = "business_name"
                                id="business_name"
                                className="mt-3"
                                placeholder="Name"
                                value = {values.business_name}
                                onChange = {handleChange}
                                onBlur={handleBlur}
                            />
                            </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-12">
                                <FloatingLabel label="Street Address">
                                    <Form.Control 
                                        type="text" 
                                        name = "business_address"
                                        id="business_address"
                                        className="mt-4"
                                        placeholder="Street Address"
                                        value = {values.business_address}
                                        onChange = {handleChange}
                                        onBlur={handleBlur}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FloatingLabel label="City">
                                <Form.Control 
                                    type="text" 
                                    name = "business_city"
                                    id="business_city"
                                    className="mt-4"
                                    placeholder="City"
                                    value = {values.business_city}
                                    onChange = {handleChange}
                                    onBlur={handleBlur}
                                />
                                </FloatingLabel>
                            </Col>
                            <Col>
                            <FloatingLabel label="State">
                                <Form.Select
                                    className="mt-4"
                                    name = "business_state"
                                    id="business_state"
                                    className="mt-4"
                                    placeholder="State"
                                    value = {values.business_state}
                                    onChange = {handleChange}
                                >
                                    {
                                        usStates.map(st => (
                                            <option>{st.code}</option>
                                        ))
                                    }
                                </Form.Select>
                                    {/* // type="text" 
                                    // name = "business_state"
                                    // id="business_state"
                                    // className="mt-4"
                                    // placeholder="State"
                                    // value = {values.business_state}
                                    // onChange = {handleChange}
                                    // onBlur={handleBlur} */}
                                    
                                
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
                            <FloatingLabel label="Email">
                            <Form.Control 
                                type="text" 
                                name = "email"
                                id="email"
                                placeholder="Email"
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
                                placeholder="Paypal Email"
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
                                <FloatingLabel label="Phone">
                                    <Form.Control 
                                        type="text" 
                                        name = "phone_number"
                                        id="phone_number"
                                        placeholder="Phone"
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
                        <Row>
                            <Col className="text-start mt-3">
                                <Button onClick={(event) => (handleSubmit(event, values))} type="submit">
                                    Submit
                                </Button>
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
