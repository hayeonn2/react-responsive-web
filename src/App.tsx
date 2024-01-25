import React from 'react';
import { Mobile, Pc } from './MediaQuery';

function App() {
	// const isPc = useMediaQuery({ query: '(min-width: 1024px)' });

	// const queryText = isPc ? '웹페이지' : '모바일버전!!';
	// const isTablet = useMediaQuery({
	// 	query: '(min-width: 768px) and (max-width: 1023px)',
	// });
	// const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

	return (
		<div>
			<Mobile>
				<div>모바일입니당</div>
			</Mobile>

			<Pc>
				<div>피씨입니당!!</div>
			</Pc>
			{/* {isPc && <p>PC</p>}
			{isTablet && <p>Tablet</p>}
			{isMobile && <p>Mobile</p>} */}
		</div>
	);
}

export default App;
