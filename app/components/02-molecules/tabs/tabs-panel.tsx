import styles from './tabs.module.css';

export type TTabsPanel = {
	id: string;
	isSelected: boolean;
	children: React.ReactNode;
};

export const TabsPanel: React.FC<TTabsPanel> = ({
	id,
	isSelected,
	children,
}) => {
	return (
		<div
			role="tabpanel"
			id={`tabpanel_${id}`}
			aria-labelledby={`tab_${id}`}
			aria-hidden={!isSelected}
			className={styles.tabpanel}
		>
			{children}
		</div>
	);
};
