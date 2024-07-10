import { baseApi } from "./BaseApi";

export const productsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            
            query:()=>({
                url:'/product',
                method:'GET',
                // params:arg
            })
        }),
        getSingleProducts:builder.query({
            query:(id)=>({
                url:`/product/${id}`,
                method:'GET',
            })
        }),
        createProduct:builder.mutation({
            query:(payload)=>({
                url:'/create-product',
                method:'POST',
                body:payload
            })
        })
    })
})
    
export const {useGetAllProductsQuery,useGetSingleProductsQuery, useCreateProductMutation} = productsApi