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

    getPlan: builder.query({
      query: (plan) => ({
        url: "/api/plan",
        body: plan,
      }),
      invalidatesTags: ["plan"],
    }),
  }),
});

export const { useCreatePlanMutation } = planApi;
