import axios from "axios";
import React, { useState ,useEffect} from "react";
import { Button, Form, Message } from 'semantic-ui-react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import EmploymentTypeService from "../services/employmentTypeService";  
import CityService from "../services/cityService";  
import EmployerService from "../services/employerService";  


export default function AddJobAdvertisement() {
  const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
   

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then((result) => setCities(result.data.data));

        let jobPositionService = new EmploymentTypeService();
        jobPositionService.getEmploymentType().then(result => setJobPositions(result.data.data));

      
    }, []);
 
    
    return (
    <div>
       
       <Formik
                initialValues={{
                    applicationDeadline: '',
                    cityId: '',
                    employerId: '',
                    jobDescription: '',
                    jobPositionId: '',
                    minSalary: '',
                    maxSalary: '',
                    openPositionCount: '',
                    

                }}
                validationSchema={Yup.object({
                    jobDescription: Yup.string().required('Açıklama boş bırakılamaz'),
                    openPositionCount: Yup.number().required('Açık pozisyon girilmelidir'),
                    applicationDeadline: Yup.date().required('İlan bitiş tarihi boş bırakılamaz'),
                    minSalary: Yup.number().required('Minimun maaş boş bırakılamaz'),
                    maxSalary: Yup.number().required('Maksimum maaş boş olamaz veya minumum maaştan fazla girilmelidir'),
                    employerId: Yup.number().required().default(3),
                    cityId: Yup.number()
                        .required('İş ilanınız için geçerli bir şehir seçmelisiniz!'),
                    jobPositionId: Yup.number()
                        .required('İş ilanınız için geçerli bir pozisyon seçmelisiniz'),
                    
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(values);
                    let employerService = new EmployerService();
                    employerService.add(values).then();

                    setTimeout(() => {
                        setSubmitting(false);
                        resetForm();
                    }, 2000);
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleSubmit,
                    handleReset,
                    handleChange,
                }) => (
                    <Form size='large' onSubmit={handleSubmit}>
                        <h1>İş İlanı Gir</h1>
                        <Form.Group unstackable widths='equal' className="is-tanimi">
                            <Form.Input label='İş Tanımı' >
                                <label htmlFor="jobDescription" />
                                <input
                                    id="jobDescription"
                                    type="text"
                                    placeholder="İş tanımı giriniz"

                                    value={values.jobDescription}
                                    onChange={handleChange}
                                />
                                {errors.jobDescription && touched.jobDescription && (
                                    <div>{errors.jobDescription}</div>
                                )}
                            </Form.Input>
                        </Form.Group>
                        <Form.Group unstackable widths={4} className="is-tanimi">
                            <Form.Input label='Açık Pozisyon'  >
                                <label htmlFor="openPositionCount" />
                                <input
                                    id="openPositionCount"
                                    type="number"
                                    placeholder="Örneğin; 10"
                                    // className="input"
                                    value={values.openPositionCount}
                                    onChange={handleChange}
                                />
                                {errors.openPositionCount && touched.openPositionCount && (
                                    <div>{errors.openPositionCount}</div>
                                )}
                            </Form.Input>
                            <Form.Input label='Minimum Maaş'>
                                <label htmlFor="minSalary" />
                                <input
                                    id="minSalary"
                                    type="number"
                                    placeholder="Minimum maaş değeri giriniz"
                                    value={values.minSalary}
                                    onChange={handleChange}
                                />
                                {errors.minSalary && touched.minSalary && (
                                    <div>{errors.minSalary}</div>
                                )}
                            </Form.Input>
                            <Form.Input label='Maksimum Maaş'>
                                <label htmlFor="maxSalary" />
                                <input
                                    id="maxSalary"
                                    type="number"
                                    placeholder="Maksisimum maaşı giriniz"
                                    className="input"
                                    value={values.maxSalary}
                                    onChange={handleChange}
                                />
                                {errors.maxSalary && touched.maxSalary && (
                                    <div>{errors.maxSalary}</div>
                                )}
                            </Form.Input>
                            <Form.Input label='Bitiş tarihi'>
                                <label htmlFor="applicationDeadline" />
                                <input
                                    id="applicationDeadline"
                                    type="date"
                                    placeholder="Bitiş tarihi giriniz"
                                    value={values.applicationDeadline}
                                    onChange={handleChange}
                                />
                                {errors.applicationDeadline && touched.applicationDeadline && (
                                    <div>{errors.applicationDeadline}</div>
                                )}
                            </Form.Input>
                        </Form.Group >
                        <Form.Group className="city" >
                            <Form.Input label='Şehir'>
                                <label htmlFor="cityId" />
                                <select id="cityId" name="cityId" value={values.cityId} onChange={handleChange}>
                                    <option value=""> Şehir Seç</option>
                                    {cities.map(city => (
                                        <option key={city.id.toString()} value={city.id} label={city.name}></option>
                                    ))}
                                </select>
                                {errors.cityId && touched.cityId && (
                                    <div>{errors.cityId}</div>
                                )}
                            </Form.Input>
                             <Form.Field>
                                <label htmlFor="jobPositionId">İş pozisyonu</label>
                                <select id="jobPositionId" name="jobPositionId" value={values.jobPositionId} onChange={handleChange}>
                                    <option value=""> İş pozisyonu seç</option>
                                    {jobPositions.map(jobPosition => (
                                        <option key={jobPosition.id.toString()} value={jobPosition.id} label={jobPosition.typeName}></option>
                                    ))}
                                </select>
                                {
                                    errors.jobPositionId && touched.jobPositionId &&
                                    <Message color='red'>{errors.jobPositionId}</Message>
                                }
                            </Form.Field>   
                            
                            <Form.Input label='Geçici Id'  >
                                <label htmlFor="employerId" />
                                <input
                                    id="employerId"
                                    type="number"
                                    placeholder="Örneğin; 10"
                                    // className="input"
                                    value={values.employerId}
                                    onChange={handleChange}
                                />
                                {errors.employerId && touched.employerId && (
                                    <div>{errors.employerId}</div>
                                )}
                            </Form.Input> 
                        </Form.Group>

                        
                        <Button   className="is-tanimi" type='submit' color='orange' disabled={!dirty || isSubmitting}  
                        >Gönder
                        </Button>

                    </Form>

                )}
            </Formik>

    </div>
  );
}
