import React from 'react';
import { useMediaQuery } from 'react-responsive';

function App() {
	const isPc = useMediaQuery({ query: '(min-width: 1024px)' });
	const isTablet = useMediaQuery({
		query: '(min-width: 768px) and (max-width: 1023px)',
	});
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

	return (
		<div>
			{isPc && <p>PC</p>}
			{isTablet && <p>Tablet</p>}
			{isMobile && <p>Mobile</p>}
		</div>
	);
}

export default App;
