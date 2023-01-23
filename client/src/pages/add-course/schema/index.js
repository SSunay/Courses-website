import * as Yup from 'yup';


export const CourseSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(1000, 'Too Long!')
      .required('Please,fill the section!'),
      description: Yup.string()
      .min(2, 'Too Short!')
      .max(1500, 'Too Long!')
      .required('Please,fill the section!'),
      price: Yup.number()
      .min(2, 'Too Short!')
      .max(100000, 'Too Long!')
      .required('Please,fill the section!'),
      img: Yup.string()
      .min(2, 'Too Short!')
      .max(1000, 'Too Long!')
      .required('Please,fill the section!'),
    
  });