import { clsx } from 'clsx';

import styles from './footer.module.css';

export interface IFooter extends React.PropsWithChildren {
	className?: string;
}

export const Footer: React.FC<IFooter> = ({ className, children, ...rest }) => {
	return (
		<div
			className={clsx(styles.base, className)}
			data-e2e-id="footer"
			{...rest}
		>
			{children}
		</div>
	);
};
