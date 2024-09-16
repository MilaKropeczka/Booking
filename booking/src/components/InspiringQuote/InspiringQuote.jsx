import React, { useEffect } from 'react';
import { useState } from 'react';

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
		/// ...pobieranie
		setLoading(false);
	}, []);

	useEffect(() => {
		setQuote(quotes[0]);
	}, [loading]);

	return <p style={styles}>{quote}</p>;
}
