import React from 'react';
import { Formik } from 'formik';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { contactSchema } from './ContactUsSchema';

const Contactus = () => {
    return (
        <Row className="justify-content-center mt-3">
        <Col className="col-6">
        <Formik
            initialValues = {{ 
                firstName: '', 
                lastName: '', 
                email: '', 
                phone: '', 
                message: ''
            }}

            validationSchema = {contactSchema}
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
            handleSubmit,
            isSubmitting,
            /* and other goodies */
            }) => (
            <Form onSubmit={handleSubmit}>
                <h3 className="dispaly-5"> Lets get in touch!</h3>
                <Form.Group>
                    <div className="errors text-danger">
                    {
                        Object.values(errors)[0]
                    }
                    </div>
                    <Row className="mt-4">
                        <Col>
                            <FloatingLabel label="First Name">
                            <Form.Control
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={values.firstName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel label="Last Name">
                            <Form.Control
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={values.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingLabel label="Email">
                            <Form.Control
                                type="text"
                                name="email"
                                id="email"
                                className="mt-3"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel label="Phone Number">
                            <Form.Control
                                type="text"
                                name="phone"
                                id="phone"
                                className="mt-3"
                                value={values.phone}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            </FloatingLabel>
                        </Col>
                    </Row>
                <Row>
                    <Col>
                    <div>
                        <FloatingLabel label="Message">
                        <textarea
                            type="text"
                            name="message"
                            id="message"
                            className="mt-3 form-control"
                            value={values.message}
                            style={{height: "100px"}}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        >
                        </textarea>
                        </FloatingLabel>
                    </div>
                    </Col>
                </Row>
                <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn mt-2"
                >
                    Submit
                </Button>
                </Form.Group>
                </Form>
            )}
        </Formik>
        </Col>
        </Row>
    )
}

export default Contactus;