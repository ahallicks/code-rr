import { clsx } from 'clsx';

import styles from './card.module.css';

export interface ICard extends React.PropsWithChildren {
	className?: string;
}

export const Card: React.FC<ICard> = ({ className, children, ...rest }) => {
	return (
		<article
			className={clsx(styles.base, className)}
			data-e2e-id="card"
			{...rest}
		>
			{children}
		</article>
	);
};
