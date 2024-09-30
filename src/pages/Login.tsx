/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Col,  Row,  } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utills/verifyToken";
import { useLoginUserMutation } from "../redux/api/api";
import React from "react";
import PhForm from "../form/PhForm";
import PhInput from "../form/PhInput";
import { setUser } from "../redux/features/authSlice";




const Login = () => {

    const navigate =useNavigate()
    const dispatch =useAppDispatch()
    const[ login,{data,error}]=useLoginUserMutation()
    console.log(data);
    console.log('err',error);
  
  
  
  const onSubmit =async (data :FieldValues) => {
    console.log(data);
    
  const toastId=toast.loading('logged in')
  try{
    const userInfo={
      email: data.email,
       password: data.password,
  
      }
      
      console.log(userInfo);
      
      
       const res = await login(userInfo).unwrap()
       console.log(res);
       
       const user =verifyToken(res.data.accessToken)
       console.log(user);
       
      dispatch(setUser({user:user,token:res.data.accessToken}))
      toast.success('logged in successfully',{id: toastId})
  
      
        navigate(`/`)
   

      }catch(err){
        toast.error('something went wrong',{id: toastId})
        }
        }  

  return (

<div 
className="bg-cover bg-center  relative"
 style={{ backgroundImage: 'url(https://i.ibb.co.com/F5qYfPB/DALL-E-2024-09-30-08-54-22-A-dynamic-fitness-shop-background-image-with-an-energetic-vibe-The-scene.webp)',height:"100vh",width:"100%" }}>
<Row
className="  absolute inset-0 bg-black bg-opacity-30 "
style={{height:"100vh",width:"100%"}}
justify='center' align='middle' >
<Col span={8}>
<PhForm onSubmit={onSubmit}>
  
 <div >
 <PhInput type="email" name='email' label="Email" labelClass="text-lg font-semibold text-white"></PhInput>
 </div>
     
   
      <PhInput type="password" name='password' label="Password" labelClass="text-lg font-semibold text-white" ></PhInput>
  
<Button htmlType="submit"> Submit</Button>
    </PhForm>
</Col>
   
    </Row>
</div>


  );
};

export default Login;


