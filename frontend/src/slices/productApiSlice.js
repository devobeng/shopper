import { PRODUCTS_URL, PRODUCT_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({
				url: PRODUCTS_URL,
			}),
			keepUnusedDataFor: 5,
		}),
		getProductDetails: builder.query({
			query: (productId) => ({
				url: `${PRODUCT_URL}/${productId}}`,
			}),
		}),
	}),
});
export const { useGetProductQuery, useGetProductDetailQuery } =
	productsApiSlice;
