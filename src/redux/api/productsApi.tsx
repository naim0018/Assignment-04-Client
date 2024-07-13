
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
            }
        }),
        getSingleProducts:builder.query({
            query:(id:string)=>({
                url:`/product/${id}`,
                method:'GET',
            })
        }),
        createProduct:builder.mutation({
            query:(payload:TProduct)=>({
                url:'/create-product',
                method:'POST',
                body:payload
            })
        }),
        updateProduct:builder.mutation({
            query:({id,payload}:{id:string,payload:TProduct})=>{
                console.log(id,payload)
                return{

            url:`/:${id}`,
            method:'PUT',
            body:payload
        }
            }
        })
    })
})
    
export const {useGetAllProductsQuery,useGetSingleProductsQuery, useCreateProductMutation,useUpdateProductMutation} = productsApi