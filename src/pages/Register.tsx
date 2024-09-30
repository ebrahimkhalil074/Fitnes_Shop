
import { Button, Col, Flex, Row,  } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAddUserMutation } from "../redux/api/allapi";
import React from 'react';
import PhForm from "../form/PhForm";
import PhInput from "../form/PhInput";




const Register = () => {
  const [addUser,{data,error}] =useAddUserMutation();
  console.log(data,error);
    const handleSubmit :SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    addUser(data);
    };

    

  return (
    <div
    className="bg-cover bg-center  relative"
 style={{ backgroundImage: 'url(https://i.ibb.co.com/F5qYfPB/DALL-E-2024-09-30-08-54-22-A-dynamic-fitness-shop-background-image-with-an-energetic-vibe-The-scene.webp)',height:"100vh",width:"100%" }}
    >
  <Row justify='center' align='middle' style={{height:'100vh', width:'100%'}}>
      <Col span={24}>
      <Flex justify="center" align="center" >
<Col span={12}>
<PhForm onSubmit={handleSubmit}>
  
  <PhInput type="text" name='name' label="Name" labelClass="text-lg font-semibold text-blue-500 bg-gray-300 p-1 px-2 rounded-lg" ></PhInput>

      <PhInput type="email" name='email' label="Email" labelClass="text-lg font-semibold text-blue-500 bg-gray-300 p-1 px-2 rounded-lg" ></PhInput>
    
     
      <PhInput type="password" name='password' label="Password" labelClass="text-lg font-semibold text-blue-500 bg-gray-300 p-1 px-2 rounded-lg" ></PhInput>
   
 
      <PhInput type="text" name='phone' label="Number" labelClass="text-lg font-semibold text-blue-500 bg-gray-300 p-1 px-2 rounded-lg"></PhInput>
      
      <PhInput type="text" name='address' label="Address" labelClass="text-lg font-semibold text-blue-500 bg-gray-100 p-1 px-2 rounded-lg" ></PhInput>
<div className="flex justify-between items-baseline">
<Button htmlType="submit"> Submit</Button>
<div> you are allredy register please.!<Link to='/login'><Button>Login</Button></Link></div>
</div>

    </PhForm>
</Col>
   
    </Flex>
      </Col>
    
    </Row>
    </div>
  
  );
};

export default Register;