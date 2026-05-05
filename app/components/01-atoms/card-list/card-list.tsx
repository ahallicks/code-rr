import { clsx } from 'clsx';

import styles from './card-list.module.css';

export interface ICardList extends React.PropsWithChildren {
	className?: string;
}

export const CardList: React.FC<ICardList> = ({
	className,
	children,
	...rest
}) => {
	return (
		<div
			className={clsx(styles.base, className)}
			data-e2e-id="card-list"
			{...rest}
		>
			{children}
		</div>
	);
};
