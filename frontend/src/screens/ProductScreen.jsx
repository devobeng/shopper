import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';

const ProductScreen = () => {
	const [product, setProduct] = useState({});
	const { id: productId } = useParams;
	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/products/${productId}`);
			setProduct(data);
		};
		fetchProduct();
	}, [productId]);

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			<Row>
				<Col md={5}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={4}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
					</ListGroup>
					<ListGroup.Item>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						/>
					</ListGroup.Item>
					<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<Col>Price</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Status</Col>
									<Col>
										<strong>
											${product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
										</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup>
								<Button
									className='btn-block my-8'
									type='button'
									disabled={product.countInStock === 0}>
									Add to Cart
								</Button>
							</ListGroup>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductScreen;
