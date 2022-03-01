import * as Yup from 'yup';
import { string, number} from 'yup';

export const contactSchema = Yup.object({
    firstName: string()
        .min(3, 'must be at least 3 characters long')
        .max(50, 'Too Long!')
        .required('First name Required'),
    lastName: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name Required'),
    email: string().email('Invalid email').required('Email required'),
    phone: number().required('Phone number required'),
    message: string()
        .min(10, 'Please be more descriptive')
        .max(1000, 'Please be brief')
        .required('Please enter your message')
});