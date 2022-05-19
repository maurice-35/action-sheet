import React from 'react';

export const RenderContactInfo = ({ name, phone, email, category }) => {
	return (
		<div>
			<div>{name}</div>
			<div>{phone}</div>
			<div>{email}</div>
			<div>{category}</div>
		</div>
	);
}
