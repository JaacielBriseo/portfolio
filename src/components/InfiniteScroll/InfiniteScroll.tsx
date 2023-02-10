import { useCallback, useEffect, useRef, useState } from 'react';

const PAGE_SIZE = 10;

export const InfiniteScroll = () => {
	const [colores, setColores] = useState(
		Array(PAGE_SIZE)
			.fill('')
			.map((_, i) => (i % 2 === 0 ? 'bg-emerald-400' : 'bg-yellow-400'))
	);
	const [page, setPage] = useState(1);

	const observer = useRef<IntersectionObserver>();
	const lastDivRef = useCallback((node: Element | null) => {
		if (observer.current) {
			observer.current.disconnect();
		}

		if (!node) {
			return;
		}

		observer.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				setPage(p => p + 1);
			}
		});
		observer.current.observe(node);
	}, []);

	useEffect(() => {
		if (page === 1) {
			return;
		}
		setColores(currentColores => [
			...currentColores,
			...Array(PAGE_SIZE)
				.fill('')
				.map((_, i) => ((currentColores.length + i) % 2 === 0 ? 'bg-emerald-400' : 'bg-yellow-400')),
		]);
	}, [page]);

	return (
		<div>
			{colores.map((color, i) => {
				if (colores.length === i + 1) {
					return <div key={`${color}-${i}`} ref={lastDivRef} className={`w-full h-[calc(100vh/4)] ${color}`} />;
				} else {
					return <div key={`${color}-${i}`} className={`w-full h-[calc(100vh/4)] ${color}`} />;
				}
			})}
		</div>
	);
};
