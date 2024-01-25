import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

type QueryProps = {
	children: ReactNode;
};

export function Pc({ children }: QueryProps) {
	const isPc = useMediaQuery({
		query: '(min-width: 768px)',
	});
	return <div>{isPc && children}</div>;
}

export function Mobile({ children }: QueryProps) {
	const isMobile = useMediaQuery({
		query: '(max-width: 767px)',
	});

	return <div>{isMobile && children}</div>;
}
