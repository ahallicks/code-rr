import styles from './tabs.module.css';

export type TTabsList = {
	children: React.ReactNode;
};

export const TabsList: React.FC<TTabsList> = ({ children }) => {
	const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
		const target = event.target as HTMLElement;
		if (target.getAttribute('role') !== 'tab') return;

		const tabs = [
			...event.currentTarget.querySelectorAll<HTMLButtonElement>(
				'[role="tab"]',
			),
		];
		const currentIndex = tabs.indexOf(target as HTMLButtonElement);
		if (currentIndex === -1) return;

		const lastIndex = tabs.length - 1;
		let nextIndex: number | null = null;
		switch (event.key) {
			case 'ArrowLeft':
				nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
				break;
			case 'ArrowRight':
				nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
				break;
			case 'Home':
				nextIndex = 0;
				break;
			case 'End':
				nextIndex = lastIndex;
				break;
		}

		if (nextIndex === null) return;
		event.preventDefault();
		event.stopPropagation();
		tabs[nextIndex]?.focus();
	};

	return (
		<div className={styles.tablistWrapper}>
			<ul
				role="tablist"
				className={styles.tablist}
				onKeyDown={handleKeyDown}
				aria-orientation="horizontal"
			>
				{children}
			</ul>
			<div className={styles.divider} />
		</div>
	);
};
