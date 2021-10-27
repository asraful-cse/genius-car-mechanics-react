import React, { useEffect, useState } from "react";

const ServiceManage = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("https://secret-island-45830.herokuapp.com/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	const handleDelete = (id) => {
		fetch(`https://secret-island-45830.herokuapp.com/services/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount) {
					alert("delete sure!!");
					const remaining = services.filter((service) => service._id !== id);
					setServices(remaining);
				}
			});
	};
	return (
		<div>
			{services.map((service) => (
				<div>
					key={service._id}
					<h3>{service.name}</h3>
					<button onClick={() => handleDelete(service._id)}>delete</button>
				</div>
			))}
		</div>
	);
};

export default ServiceManage;
