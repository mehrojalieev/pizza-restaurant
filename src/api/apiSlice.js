import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const apiSlice = createApi({
    reducerPath: "api",
    tagTypes: ["Category_foods"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2000" }),
    endpoints: (builder) => ({
        getCategoryFoods: builder.query({
            query: () => "/Foods",
            providesTags: ["Category_foods"]
        })
    })
})

export const { useGetCategoryFoodsQuery } = apiSlice


// npx json-server -p 2000 -w data/db.json