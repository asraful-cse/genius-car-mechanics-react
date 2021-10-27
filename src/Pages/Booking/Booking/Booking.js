import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
	const [service, setService] = useState({});
	const { serviceId } = useParams();
	useEffect(() => {
		fetch(`https://secret-island-45830.herokuapp.com/services/${serviceId}`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);
	return (
		<div>
			<h1>service details: {service.name}</h1>
			<h2>this is booking: {serviceId}</h2>
		</div>
	);
};

export default Booking;
