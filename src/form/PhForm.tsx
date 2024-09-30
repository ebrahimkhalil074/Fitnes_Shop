/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
type TFormConfig={
  defaultValues?:Record<string,any>,
resolver?:any,
}
type TFormProps={
  onSubmit: SubmitHandler<FieldValues>,
  children: React.ReactNode,
 
}&TFormConfig

const PhForm = ({onSubmit,children,defaultValues,resolver}:TFormProps) => {
const formConfig :TFormConfig ={}

  if(defaultValues){
    formConfig.defaultValues = defaultValues
  }
  if(resolver){
    formConfig.resolver = resolver
  }
    const methods = useForm(formConfig)
const submit :SubmitHandler<FieldValues> = (data) => {
onSubmit(data);
methods.reset()
}
  
  return (
   <FormProvider {...methods}>
     <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
     {children}
    </Form>
   </FormProvider>
  );
};

export default PhForm;