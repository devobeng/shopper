import React from 'react';
import { useGetProductQuery } from '../slices/productApiSlice';

import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
	const { data: products, isLoading, error } = useGetProductQuery();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error?.data?.message}</Message>
			) : (
				<>
					<h1>Latest Products</h1>
					<Row>
						{products.map((product) => (
							<Col sm={12} md={6} lg={4} xl={3} key={product._id}>
								<Product product={product} />
							</Col>
						))}
					</Row>
				</>
			)}
		</>
	);
};

export default HomeScreen;
