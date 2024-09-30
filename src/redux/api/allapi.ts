// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { TQueryParams, TResponseRedux } from '../../types/globalTypes';
// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://fitness-shop-becend.vercel.app/api", credentials: 'include', }),
//   tagTypes: ["products", "verify"],
//   endpoints: (builder) => ({

import { TQueryParams, TResponseRedux } from "../../types/globalTypes";
import { baseApi } from "./api";



//     addUser: builder.mutation({
//       query: (data) => ({
//         url: '/auth/signup',
//        method: 'POST',
//        body: data
//     }),
//     }),
//     loginUser: builder.mutation({
//       query: (data) => ({
//         url: '/auth/login',
//        method: 'POST',
//        body: data
//     }),
//     }),
    
//     getProducts:builder.query({
//       query:(args)=>{  
//         console.log('args',args);
//         const params = new URLSearchParams();
//         if (args) {
//           args.forEach((item :TQueryParams) => {
//             params.append(item.name, item.value as string);
//           });
//         }
//         return {
//           url:'/product',
//           method: 'GET',
//          params: params
//         }
//       }
//      }),
//      getSingleProducts:builder.query({
//       query: (id) => {
//         console.log('args',id);
    
//          return {
//         url:`product/${id}`,
//         method: 'GET',
//         // params: params,
//       }},
//       transformResponse: (response :TResponseRedux<any> ) => {
//         console.log('insaide api',response);
        
//         return{
//          data: response.data,
//          meta: response.meta
          
//         }
         
//       },
//       // add other response transformations here
    
     
//     }),
    
//     getAllCategory: builder.query({
//       query: () => ({
//         method: "GET",
//         url: "/category",
//       }),
    
//     }),
//     addProduct: builder.mutation({
//       query: (data) => ({
//         url: '/product',
//        method: 'POST',
//        body: data
//     }),
//     }),
//     addCategory: builder.mutation({
//       query: (data) => ({
//         url: '/category',
//        method: 'POST',
//        body: data
//     }),
//     }),
//     updatePeoduct: builder.mutation({
//       query: (args) => ({
//         url: `product/${args.id}`,
//         method: 'PUT',
//         body: args.data,
//       }),
//       invalidatesTags: ['products'],
//     }),
//    deleteProduct: builder.mutation({
//       query: (id) => ({
//         url: `product/${id}`,
//         method: 'DELETE',
       
//       }),
//       invalidatesTags: ['products'],
//     }),
//     getAllProducts: builder.query({
//       query: () => ({
//         method: "GET",
//         url: "/product",
//       }),
//     providesTags:['products']  
//     }),
//     creteOrder: builder.mutation({
//       query: (data) => {
//         return {
//           method: "POST",
//           url: `/order/create`,
//           body: data,
//         };
//       }
//     }),
//   }),
// });
// export const {useAddUserMutation ,useLoginUserMutation, useGetProductsQuery,useGetAllCategoryQuery, useCreteOrderMutation,useGetSingleProductsQuery,useGetAllProductsQuery,useDeleteProductMutation,useUpdatePeoductMutation,useAddProductMutation ,useAddCategoryMutation} = baseApi;

/* eslint-disable @typescript-eslint/no-explicit-any */



const allApi =baseApi.injectEndpoints({
    endpoints: (build) => ({
       
    addUser: build.mutation({
      query: (data) => ({
        url: '/auth/signup',
       method: 'POST',
       body: data
    }),
    }),
    loginUser: build.mutation({
      query: (data) => ({
        url: '/auth/login',
       method: 'POST',
       body: data
    }),
    }),
    
    getProducts:build.query({
      query:(args)=>{  
        console.log('args',args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item :TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url:'/product',
          method: 'GET',
         params: params
        }
      }
     }),
     getSingleProducts:build.query({
      query: (id) => {
        console.log('args',id);
    
         return {
        url:`product/${id}`,
        method: 'GET',
        // params: params,
      }},
      transformResponse: (response :TResponseRedux<any> ) => {
        console.log('insaide api',response);
        
        return{
         data: response.data,
         meta: response.meta
          
        }
         
      },
      // add other response transformations here
    
     
    }),
    
    getAllCategory: build.query({
      query: () => ({
        method: "GET",
        url: "/category",
      }),
    
    }),
    addProduct: build.mutation({
      query: (data) => ({
        url: '/product',
       method: 'POST',
       body: data
    }),
    }),
    addCategory: build.mutation({
      query: (data) => ({
        url: '/category',
       method: 'POST',
       body: data
    }),
    }),
    updatePeoduct: build.mutation({
      query: (args) => ({
        url: `product/${args.id}`,
        method: 'PUT',
        body: args.data,
      }),
      invalidatesTags: ['products'],
    }),
   deleteProduct: build.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: 'DELETE',
       
      }),
      invalidatesTags: ['products'],
    }),
    getAllProducts: build.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
    providesTags:['products']  
    }),
    creteOrder: build.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/order/create`,
          body: data,
        };
      }
    }),
  }),
})

export const {useAddUserMutation ,useLoginUserMutation, useGetProductsQuery,useGetAllCategoryQuery, useCreteOrderMutation,useGetSingleProductsQuery,useGetAllProductsQuery,useDeleteProductMutation,useUpdatePeoductMutation,useAddProductMutation ,useAddCategoryMutation} =  allApi   