import React, { useEffect, useState, useLayoutEffect } from 'react';

const quotes = ['cytat 1', 'cytat2', 'cytat3', 'cytat4'];

const styles = {
	position: 'absolute',
	padding: '10px',
	top: '10px',
	left: 0,
	right: 0,
	textAlign: 'center',
	color: 'white',
	fontStyle: 'italic',
};

export default function InspiringQuote(props) {
	const [quote, setQuote] = useState('Wczytywanie cytatów...');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	useLayoutEffect(() => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	}, [loading]);

	return <p style={styles}>{quote}</p>;
}
