import React from 'react'
import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
import axios from 'axios';
import { CourseSchema } from './schema';
import './index.scss'
import { useNavigate,} from 'react-router-dom'

const AddCourse = () => {
    const navigate = useNavigate()
  return (
    <div className='inputPart'>
         <h1 className='addTitle'>ADD NEW COURSE</h1>
     <Formik
       initialValues={{
        title:'',
        description:'',
        price:'',
        img:'',
       }}
       validationSchema={CourseSchema}
       onSubmit={(values ,{ resetForm }) => {

        axios.post ("http://localhost:8000/courses",values);
        resetForm();
    }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="title"  placeholder="Enter your course name." className={errors.title && touched.title ? 'border-red': null}/>
           {errors.title && touched.title ? (
             <div className='error'>{errors.title}</div>
           ) : null} <br /><br />

           <Field name="description" placeholder="Enter your course information." />
           {errors.description && touched.description ? (
             <div  className='error'>{errors.description}</div>
           ) : null} <br /><br />

           <Field name="price" placeholder="Enter your course price."/>
           {errors.price && touched.price ? (
             <div  className='error'>{errors.price}</div>
           ) : null} <br /><br />

           <Field name="img" placeholder="Enter your course image (Just LINK and 310x188 px !!!)" />
           {errors.img && touched.img ? (
             <div  className='error'>{errors.img}</div>
           ) : null} <br /><br />
           <button type="submit" className='submitBtn' >Submit</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default AddCourse