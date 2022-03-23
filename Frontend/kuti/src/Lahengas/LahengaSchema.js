import * as Yup from 'yup';
import { string } from 'yup';

export const lahengaSchema = Yup.object({
    name: string()
        .min(3, 'must be at least 3 characters long')
        .max(50, 'Too Long!')
        .required('First name Required'),
    material: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name Required'),
    description: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name Required'),
    occassion: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name Required'),
    style: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name Required'),
    price: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name Required'),
    color: string()
        .min(10, 'Please be more descriptive')
        .max(1000, 'Please be brief')
        .required('Please enter your message'),
    hip_size: string()
        .min(10, 'Please be more descriptive')
        .max(1000, 'Please be brief')
        .required('Please enter your message'),
    waist_size: string()
        .min(10, 'Please be more descriptive')
        .max(1000, 'Please be brief')
        .required('Please enter your message'),
    length: string()
        .min(10, 'Please be more descriptive')
        .max(1000, 'Please be brief')
        .required('Please enter your message'),
    image1: string().required('Email required'),
    image2: string().required('Email required'),
    image3: string().required('Email required')
});