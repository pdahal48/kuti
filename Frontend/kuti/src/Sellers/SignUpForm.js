import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Row, Col, FloatingLabel, Alert } from 'react-bootstrap'

const SellerSignUpForm = ({ signupSeller }) => {

    const [flag, setFlag] = useState(false)
    const [value, setValue] = useState(null)
    const navigate = useNavigate()

    const [loginFormData, setloginFormData] = useState({
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
    });

    async function handleSubmit(e) {
        console.log(`submitted`)
        e.preventDefault()
        let user = await signupSeller(loginFormData)
        if(user.success){
            navigate('/')
        } else {
            setFlag(true)
            setValue(user.Error)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setloginFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <div className="container col-xl-4 col-lg-6 col-md-9 login-body">
            <div className = "card my-5">
                {flag && 
                    <Alert variant="warning">{value}</Alert>
                }
                <div className = "card-body">
                <Form onSubmit = {handleSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                        <FloatingLabel label="Full Name">
                        <Form.Control 
                            type="text" 
                            name = "fullName"
                            placeholder="Full Name"
                            className="mt-1"
                            value = {loginFormData.fullName}
                            onChange = {handleChange}
                        />
                        </FloatingLabel>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                    <Col>
                    <FloatingLabel label="Username">
                    <Form.Control 
                        type="text" 
                        name = "username"
                        placeholder="Username"
                        className="mt-4"
                        value = {loginFormData.username}
                        onChange = {handleChange}
                    />
                    </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel label="Password">
                <Form.Control 
                    type="password"
                    name = "password"
                    placeholder="Password"
                    className="mt-4"
                    value = {loginFormData.password}
                    onChange = {handleChange}
                />
                </FloatingLabel>
                </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Row>
                    <Col >
                    <FloatingLabel label="Business Name">
                    <Form.Control 
                        type="text" 
                        name = "business_name"
                        placeholder="Business Name"
                        className="mt-4"
                        value = {loginFormData.business_name}
                        onChange = {handleChange}
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
                        placeholder="Business street address"
                        className="mt-4"
                        value = {loginFormData.business_address}
                        onChange = {handleChange}
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
                        placeholder="Business City"
                        className="mt-4"
                        value = {loginFormData.business_city}
                        onChange = {handleChange}
                    />
                    </FloatingLabel>
                    </Col>
                    <Col>
                    <FloatingLabel label="Business State">
                    <Form.Control 
                        type="text" 
                        name = "business_state"
                        placeholder="Business State"
                        className="mt-4"
                        value = {loginFormData.business_state}
                        onChange = {handleChange}
                    />
                    </FloatingLabel>
                    </Col>
                    <Col>
                    <FloatingLabel label="Zip Code">
                    <Form.Control 
                        type="text" 
                        name = "business_zip_code"
                        placeholder="Zip Code"
                        className="mt-4"
                        value = {loginFormData.business_zip_code}
                        onChange = {handleChange}
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
                        placeholder="Business Email"
                        className="mt-4"
                        value = {loginFormData.email}
                        onChange = {handleChange}
                    />
                    </FloatingLabel>
                    </Col>
                    <Col>
                    <FloatingLabel label="Paypal Email">
                    <Form.Control 
                        type="text" 
                        name = "paypal_email"
                        placeholder="Paypal email for payments"
                            className="mt-4"
                        value = {loginFormData.paypal_email}
                        onChange = {handleChange}
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
                                placeholder="Business Phone"
                                className="mt-4"
                                value = {loginFormData.phone_number}
                                onChange = {handleChange}
                            />
                    </FloatingLabel>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Row className="container justify-content-center">
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
        </Form>
        </div>
        </div>
        </div>
    )
}

export default SellerSignUpForm;
