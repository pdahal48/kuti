import * as Yup from 'yup';
import { string } from 'yup';

export const LoginSchema = Yup.object({
    username: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Username is required'),
    password: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Password is required')
});
