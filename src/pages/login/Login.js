import React, {useState, useEffect, useRef} from 'react'
import './loginStyle.css';
import logo from'../../assets/logoT.png';
import { useForm } from "react-hook-form";
import {  useSelector, useDispatch } from 'react-redux'
import { request } from '../../api/request';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
  MDBInputGroup
}
from 'mdb-react-ui-kit';
import { setUserToken } from '../../store/userSlice';




export const Login = (props) => {
  const {theme} = props
  const { register, formState: { errors } } = useForm();
  const dispatch = useDispatch()

  const [data, setData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
    [e.target.name]: value
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password
    };
     request.post("/", userData).then((response) => {
      if(Object.keys(response.data).length > 0){
        //token
        dispatch(setUserToken(response.data.id+"_rabia_token"))
        setData({
          email: "",
          password: ""
        })
        alert("başarılı")
      }
    })
  };
    

  return (
    <MDBContainer fluid>
      <p>LOGİN {theme}</p>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' onSubmit={handleSubmit}>
              
              <img src={logo} alt="My logo" className='logo'/>
              &nbsp;
              <h3 className="fw-bold mb-2 text-uppercase">Sisteme Giriş Ekranı </h3>
              <p className="text-white-50 mb-5">Lütfen kullanıcı adınızı ve paralanızı giriniz.</p>

              
                <MDBInput 
                wrapperClass='mb-4 mx-5 w-100' 
                labelClass='text-white' 
                label='Kullanıcı adı' 
                id='formControlLg' 
              
                type='email' 
                name="email"
                value={data.email}
                onChange={handleChange}
                size="lg"
               /*  {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "geçersiz kullanıcı adı"
                  }
                })} */
                />                
              

          
              <MDBInput 
              wrapperClass='mb-4 mx-5 w-100' 
              labelClass='text-white' 
              label='Şifre' 
              id='formControlLg' 
              required
              type='password' 
              name="password"
              value={data.password}
              onChange={handleChange}
              size="lg"
              /* {...register("password", { 
                required: true, 
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                message: "geçersiz şifre"
            })} */
            />
              

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Şifre Sıfırlama</a></p>
              <MDBBtn outline 
              className='mx-2 px-5' 
              color='primary'
              size='lg'
              onClick={handleSubmit}
              type="submit">
                GİRİŞ
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}
