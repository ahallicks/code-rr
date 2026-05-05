import { clsx } from 'clsx';
import { Link } from 'react-router';

export type TButtonLink = {
	id?: string;
	text?: string;
	href: string;
	openNewWindow?: boolean;
	variation?: 'primary' | 'secondary' | 'tertiary';
	className?: string;
	onClick?: () => void;
};

export type TButtonLinkWithChildren = TButtonLink & React.PropsWithChildren;

import styles from './button.module.css';

export const ButtonLink: React.FC<TButtonLinkWithChildren> = ({
	text,
	href,
	openNewWindow,
	variation = 'primary',
	className = '',
	children,
	onClick,
	...rest
}) => {
	return (
		<Link
			to={href}
			onClick={onClick}
			className={clsx(styles.base, styles[variation], className)}
			{...rest}
			target={openNewWindow ? '_blank' : undefined}
		>
			{text}
			{children ? children : null}
		</Link>
	);
};
