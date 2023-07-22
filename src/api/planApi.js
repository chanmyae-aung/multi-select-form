// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const planApi = createApi({
  reducerPath: "planApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://159.89.194.156" }),
  tagTypes: ["plan"],
  endpoints: (builder) => ({
    createPlan: builder.mutation({
      query: (plan) => ({
        url: "/api/plan",
        method: "POST",
        body: plan,
      }),
      invalidatesTags: ["plan"],
    }),
    createAddOns: builder.mutation({
      query: (addon) => ({
        url: "/api/addon",
        method: "POST",
        body: {
          "add_on_ids": addon,
          "is_choosen": true,
          "type": "month",
        },
      }),
      invalidatesTags: ["plan"],
    }),
    getFinish: builder.query({
      query: () => ({
        url: "/api/finish",
        method: "GET",
      }),
      providesTags: ["finish"],
    }),
  }),
});

export const { useCreatePlanMutation, useCreateAddOnsMutation, useGetFinishQuery } = planApi;
