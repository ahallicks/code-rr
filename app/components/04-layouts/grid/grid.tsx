import { clsx } from 'clsx';

import styles from './grid.module.css';

type TContainerElements = keyof Pick<
	React.JSX.IntrinsicElements,
	'aside' | 'div' | 'footer' | 'header' | 'nav' | 'section'
>;

type TGridAttributes = Omit<
	React.HtmlHTMLAttributes<Element>,
	'className' | 'id'
>;

export type TGrid = {
	children: React.ReactNode;
	tag?: TContainerElements;
	id?: string;
	className?: string;
	containerSize?: 'min' | 'max';
};

type TGridProps = TGrid & TGridAttributes;

export const Grid: React.FC<TGridProps> = ({
	id,
	tag: Tag = 'div',
	children,
	className,
	containerSize = 'max',
	...rest
}) => (
	<Tag
		id={id}
		className={clsx(
			styles.grid,
			containerSize ? styles[`${containerSize}Container`] : undefined,
			className,
		)}
		{...rest}
	>
		{children}
	</Tag>
);
