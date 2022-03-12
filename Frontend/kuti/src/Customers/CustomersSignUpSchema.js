import * as Yup from 'yup';
import { string } from 'yup';

export const CustomerSignUpSchema = Yup.object({
    fullName: string()
        .min(3, 'must be at least 3 characters long')
        .max(50, 'Too Long!')
        .required('Full Name is required'),
    username: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Username is required'),
    password: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Password is required'),
    email: string()
        .required('Email is required')
});
