import * as Yup from 'yup';
import { string } from 'yup';

export const SellerSignUpSchema = Yup.object({
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
    business_name: string()
        .min(5, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Business Name is required'),
    business_address: string()
        .min(10, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Address is required'),
    business_city: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('City is required'),
    business_state: string()
        .min(2, 'Please be more descriptive')
        .max(2, 'Please be brief')
        .required('State abbreviation required'),
    business_zip_code: string()
        .min(5, 'Please be more descriptive')
        .max(5, 'Please be brief')
        .required('5-digit zip code required'),
    business_email: string()
        .min(3, 'Please be more descriptive')
        .max(50, 'Please be brief')
        .required('Business email is required'),
    paypal_email: string()
        .min(2, 'Please be more descriptive')
        .max(50, 'Please be brief')
        .required('Paypal email is required'),
    business_phone: string()
        .min(10, 'Please be more descriptive')
        .max(10, 'Please be brief')
        .required('Business phone number is required'),
});
