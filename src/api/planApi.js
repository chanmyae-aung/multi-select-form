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
      query: () => ({
        url: "/api/plan",
      }),
      providesTags: ["plan"],
    }),
    updatePlan: builder.mutation({
      query: (plan) => ({
        url: "/api/plan/update",
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
          add_on_ids: addon,
          is_choosen: true,
          type: "month",
        },
      }),
      invalidatesTags: ["plan"],
    }),
    updateAddOns: builder.mutation({
      query: (addon) => ({
        url: "/api/addon/update",
        method: "POST",
        body: addon,
      }),
      invalidatesTags: ["plan"],
    }),
    getAddOns: builder.query({
      query: () => ({
        url: "/api/addon",
      }),
      providesTags: ["plan"],
    }),
    getFinish: builder.query({
      query: () => ({
        url: "/api/finish",
      }),
      providesTags: ["finish"],
    }),
  }),
});

export const {
  useCreatePlanMutation,
  useGetAddOnsQuery,
  useGetPlanQuery,
  useUpdatePlanMutation,
  useCreateAddOnsMutation,
  useUpdateAddOnsMutation,
  useGetFinishQuery,
} = planApi;
