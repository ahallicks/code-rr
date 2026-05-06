import { clsx } from 'clsx';

import styles from './card-list.module.css';

export interface ICardList extends React.PropsWithChildren {
	title?: string;
	className?: string;
}

export const CardList: React.FC<ICardList> = ({
	title,
	className,
	children,
	...rest
}) => {
	return (
		<>
			{title ? <h1 className={styles.title}>{title}</h1> : null}
			<div
				className={clsx(styles.base, className)}
				data-e2e-id="card-list"
				{...rest}
			>
				{children}
			</div>
		</>
	);
};
