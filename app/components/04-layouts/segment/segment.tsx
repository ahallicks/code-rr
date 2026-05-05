import type {
	TContainerElements,
	TContainerSize,
} from '../container/container.tsx';
import type { TAnchorId } from '~/types/global-types.ts';

import { clsx } from 'clsx';

import { decodeUri } from '~/utils/decode-uri.ts';

import { Container } from '../container/container.tsx';

import styles from './segment.module.css';

export type TSegment = {
	id: string;
	containerSize?: TContainerSize;
};

type TSegmentRoot = {
	children?: React.ReactNode;
};
type TSegmentRootAttributes = React.HtmlHTMLAttributes<Element>;
type TSegmentRootProps = TSegmentRoot & TSegmentRootAttributes & TAnchorId;

const SegmentRoot: React.FC<TSegmentRootProps> = ({
	id,
	anchorId,
	className,
	children,
	...rest
}) => {
	const titleId = id ? `${id}-title` : undefined;
	const anchor = anchorId ? decodeUri(anchorId) : undefined;

	return (
		<section
			id={anchor}
			className={clsx('segment', styles.segment, className)}
			aria-labelledby={titleId}
			{...rest}
		>
			{children}
		</section>
	);
};

type TSegmentContainer = {
	tag?: TContainerElements;
	containerSize?: TContainerSize;
	children?: React.ReactNode;
};
type TSegmentContainerAttributes = React.HtmlHTMLAttributes<Element>;
type TSegmentContainerProps = TSegmentContainer & TSegmentContainerAttributes;

const SegmentContainer: React.FC<TSegmentContainerProps> = ({
	tag,
	containerSize,
	className,
	children,
}) => (
	<Container
		tag={tag}
		containerSize={containerSize}
		className={clsx(styles.container, className)}
	>
		{children}
	</Container>
);

export const Segment = {
	Root: SegmentRoot,
	Container: SegmentContainer,
};
