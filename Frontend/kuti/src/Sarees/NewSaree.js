import React, { useState } from 'react'
import { Form, Row, Col, FloatingLabel, Alert } from 'react-bootstrap'
import { API } from '../API';
// import './Styles/ItemStyles.css'

const NewSaree = ({ handleSubmit, currentUser }) => {

    const [flag, setFlag] = useState(false);
    const [value, setValue] = useState(null);

    const INITIAL_STATE = {
        name: "",
        material: "",
        description: "",
        color: "",
        price: "",
        blouse_size: "",
        stiched: false,
        quantity: ""
    }

    const imagesInitialState = {
        image1: "",
        image2: "",
        image3: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [imagesState, setImagesState] = useState(imagesInitialState);
    
    async function handleSubmit(e) {
        try {
            e.preventDefault()
            console.log(formData)
            let newSaree = await API.uploadSaree({seller_username: currentUser.customer.username,
                sale_price: formData.price,
                ...formData});
            console.log(`saree is ${newSaree}`)
            if(newSaree.saree){
                uploadImages(newSaree.saree.id);
                setFormData(INITIAL_STATE);
                setImagesState(imagesInitialState);
                setFlag(true);
                setValue(`${formData.name} has been added`)
            } else {
                //not sure if this will ever be hit
                console.log(newSaree)
                setFlag(true)
                setValue(newSaree.Error)
            }
        } catch (e) {
            console.log(`e is ${e}`)
            const err = e[0].split(".");
            setFlag(true)
            setValue(err[1])
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(data => ({
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

    const uploadImages = async (sareeId) => {
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
            API.uploadSareeToDB({ sareeId, imageUrl });
        }
    }

    return (
        <div>
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
                            value = {formData.name}
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
                            value = {formData.material}
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
                            value = {formData.description}
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
                            value = {formData.color}
                            onChange = {handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group>
                    <FloatingLabel label="Blouse Stitched?">
                        <Form.Select 
                            name = "stiched"
                            className="mt-4"
                            onChange = {handleChange}
                        >
                            <option value = {false}>No</option>
                            <option value = {true}>Yes</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel label="Blouse Size">
                        <Form.Control 
                            type="number" 
                            name = "blouse_size"
                            placeholder="Quantity"
                            className="mt-4"
                            value = {formData.blouse_size}
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
                            value = {formData.price}
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
                            value = {formData.quantity}
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

export default NewSaree;