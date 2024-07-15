
import { TProduct } from "../../types";
import { baseApi } from "./BaseApi";

export const productsApi = baseApi.injectEndpoints({

    endpoints:(builder)=>({
        getAllProducts:builder.query({
            
            query:(arg)=>{

                const params = new URLSearchParams()
               
                if(arg.category){
                    params.append("category",arg.category)
                }
                if(arg.price){
                   
                    params.append("sort",arg.price)
                }
             return{
                 url:'/product',
                    method:'GET',
                    params
             }   
            },
            providesTags:["Product"]
         
        }),
        getSingleProducts:builder.query({
            query:(id:string)=>({
                url:`/product/${id}`,
                method:'GET',
            }),
            providesTags:["Product"]
           
        }),
        createProduct:builder.mutation({
            query:(payload:TProduct)=>({
                url:'product/create-product',
                method:'POST',
                body:payload
            }),
            invalidatesTags:["Product"]
        }),
        updateProduct:builder.mutation({
            query:({id,payload}:{id:string,payload:TProduct})=>{
                
                return{

            url:`/product/${id}`,
            method:'PUT',
            body:payload
        }
            },
            invalidatesTags:['Product']
        }),
        deleteProduct:builder.mutation({
            query:(id:string)=>{
                console.log(id)
                return{

            url:`/product/${id}`,
            method:'DELETE',
           
        }
            },
            invalidatesTags:["Product"]
        })
    })
})
    
export const {useGetAllProductsQuery,useGetSingleProductsQuery, useCreateProductMutation,useUpdateProductMutation,useDeleteProductMutation} = productsApi