import { clsx } from 'clsx';

import { ButtonLink } from '~/components/01-atoms/button/button.tsx';
import { Card } from '~/components/01-atoms/card/card.tsx';

import styles from './house.module.css';

export interface IHouse {
	house: string;
	emoji: string;
	founder: string;
	colors: string[];
	animal: string;
	className?: string;
}

export const House: React.FC<IHouse> = ({
	house,
	emoji,
	founder,
	colors,
	animal,
	className,
	...rest
}) => {
	return (
		<Card
			className={clsx(styles.base, className)}
			data-e2e-id="house"
			{...rest}
		>
			<h2>
				{emoji} {house}
			</h2>
			<p>Founder: {founder}</p>
			<p>Colors: {colors.join(', ')}</p>
			<p>Animal: {animal}</p>
			<p>
				<ButtonLink
					href={`/houses/${house.toLowerCase()}`}
					text={`Learn more about ${house}`}
					variation="primary"
				/>
			</p>
		</Card>
	);
};
