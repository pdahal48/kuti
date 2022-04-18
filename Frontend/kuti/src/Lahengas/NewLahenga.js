import React, { useState } from 'react'
import { Form, Row, Col, FloatingLabel, Alert } from 'react-bootstrap'
import { API } from '../API';
import './Styles/ItemStyles.css'

const NewLahenga = ({ handleSubmit, currentUser }) => {

    const [flag, setFlag] = useState(false);
    const [value, setValue] = useState(null);

    const INITIAL_STATE = {
        name: "",
        material: "",
        description: "",
        color: "",
        price: "",
        blouse_size: "",
        waist_size: "",
        length: "",
        quantity: ""
    }

    const imagesInitialState = {
        image1: "",
        image2: "",
        image3: ""
    }

    const [loginFormData, setloginFormData] = useState(INITIAL_STATE);
    const [imagesState, setImagesState] = useState(imagesInitialState);
    
    async function handleSubmit(e) {
        try {
            e.preventDefault()
            let newLahenga = await API.uploadLahenga({seller_username: currentUser.customer.username,
                sale_price: loginFormData.price,
                ...loginFormData})
            if(newLahenga.lahenga){
                uploadImages(newLahenga.lahenga.id);
                setloginFormData(INITIAL_STATE);
                setImagesState(imagesInitialState);
                setFlag(true);
                setValue(`${loginFormData.name} has been added`)
            } else {
                //not sure if this will ever be hit
                console.log(newLahenga)
                setFlag(true)
                setValue(newLahenga.Error)
            }
        } catch (e) {
            const err = e[0].split(".");
            setFlag(true)
            setValue(err[1])
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setloginFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleImagesChange = (e) => {
        const {name, value} = e.target
        setImagesState(data => ({
            ...data,
            [name]: value
        }))
    }

    const uploadImages = async (lahengaId) => {
        let imageField1 = document.getElementById('image1');
        let imageField2 = document.getElementById('image2');
        let imageField3 = document.getElementById('image3');

        let image1File = imageField1.files[0]
        let image2File = imageField2.files[0]
        let image3File = imageField3.files[0]

        let imageFieldArray = [image1File, image2File, image3File];

        for(let i=0; i<imageFieldArray.length; i++) {
            const { url } = await API.getImageUrl();
            API.postImageToS3(url, imageFieldArray[i]);
            const imageUrl = url.split('?')[0];
            API.uploadToDB({lahengaId, imageUrl});
        }
    }

    return (
        <div className='lahenga-card px-5 pb-5 mt-3'>
            <div className='mt-2'>
                {flag && 
                    <Alert variant="warning">{value}</Alert>
                }
            </div>
            <Form onSubmit = {handleSubmit} className='mt-0'>
            <Row>
            <Col>
                <Form.Group>
                    <FloatingLabel label="Name">
                        <Form.Control 
                            type="text" 
                            name = "name"
                            placeholder="Name"
                            className="mt-4"
                            value = {loginFormData.name}
                            onChange = {handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel label="material">
                        <Form.Control 
                            type="text" 
                            name = "material"
                            placeholder="material"
                            className="mt-4"
                            value = {loginFormData.material}
                            onChange = {handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel label="description">
                        <Form.Control 
                            type="text"
                            name = "description"
                            placeholder="description"
                            maxLength="50"
                            className="mt-4"
                            value = {loginFormData.description}
                            onChange = {handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel label="color">
                        <Form.Control 
                            type="text" 
                            name = "color"
                            placeholder="color"
                            className="mt-4"
                            value = {loginFormData.color}
                            onChange = {handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel label="price">
                        <Form.Control 
                            type="number" 
                            name = "price"
                            placeholder="price"
                            className="mt-4"
                            value = {loginFormData.price}
                            onChange = {handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group>
                    <FloatingLabel label="Blouse Size">
                        <Form.Control 
                            type="number" 
                            name = "blouse_size"
                            placeholder="Quantity"
                            className="mt-4"
                            value = {loginFormData.blouse_size}
                            onChange = {handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel label="Waist Size">
                        <Form.Control 
                            type="number" 
                            name = "waist_size"
                            placeholder="Waist Size"
                            className="mt-4"
                            value = {loginFormData.waist_size}
                            onChange = {handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel label="Length">
                        <Form.Control 
                            type="number" 
                            name = "length"
                            placeholder="Length"
                            className="mt-4"
                            value = {loginFormData.length}
                            onChange = {handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel label="Qty">
                        <Form.Control 
                            type="number" 
                            name = "quantity"
                            placeholder="Quantity"
                            className="mt-4"
                            value = {loginFormData.quantity}
                            onChange = {handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
            </Col>
            </Row>
            <Row className='border-top mt-4'>
                <Col className="col-3 mt-4">
                    <Form.Label className='mt-1'>Primary image</Form.Label>
                </Col>
                <Col className="col-8">
                    <Form.Control 
                        type="file" 
                        id="image1"
                        name = "image1"
                        className="mt-4"
                        accept=".jpeg, .png, .jpg"
                        value = {imagesState.image1}
                        onChange = {handleImagesChange}
                    />
                </Col>
                <Col className="col-3 mt-4">
                    <Form.Label className='mt-1'>Additional image</Form.Label>
                </Col>
                <Col className="col-8">
                    <Form.Control 
                        type="file"
                        id="image2"
                        name = "image2"
                        accept=".jpeg, .png, .jpg"
                        className="mt-4"
                        value = {imagesState.image2}
                        onChange = {handleImagesChange}
                    />
                </Col>
                <Col className="col-3 mt-4">
                    <Form.Label className='mt-1'>Additional image</Form.Label>
                </Col>
                <Col className="col-8">
                    <Form.Control 
                        type="file"
                        id="image3"
                        name = "image3"
                        accept=".jpeg, .png, .jpg"
                        className="mt-4"
                        value = {imagesState.image3}
                        onChange = {handleImagesChange}
                    />
                </Col>
            </Row>
            <Form.Group>
                <Row className="container justify-content-center">
                    <Col className="mt-3">
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
    )
}

export default NewLahenga;