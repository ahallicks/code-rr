import { clsx } from 'clsx';

import styles from './tabs.module.css';

export type TTabsTab = {
	id: string;
	isSelected: boolean;
	onTabChange: (id: string) => void;
	children: React.ReactNode;
};

export const TabsTab: React.FC<TTabsTab> = ({
	id,
	isSelected,
	onTabChange,
	children,
}) => {
	return (
		<li role="presentation" className={styles.tabListButtonWrapper}>
			<button
				type="button"
				role="tab"
				aria-controls={`tabpanel_${id}`}
				id={`tab_${id}`}
				onClick={() => onTabChange(id)}
				aria-selected={isSelected}
				tabIndex={isSelected ? 0 : -1}
				className={clsx('typoS', styles.tabListButton)}
			>
				{children}
			</button>
		</li>
	);
};
