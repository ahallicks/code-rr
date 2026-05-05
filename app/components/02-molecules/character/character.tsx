import { clsx } from 'clsx';

import { ButtonLink } from '~/components/01-atoms/button/button.tsx';

import styles from './character.module.css';

export interface ICharacter {
	fullName: string;
	nickname: string;
	hogwartsHouse: string;
	interpretedBy: string;
	children: string[];
	image: string;
	birthdate: string;

	className?: string;
}

export const Character: React.FC<ICharacter> = ({
	fullName,
	nickname,
	hogwartsHouse,
	interpretedBy,
	children,
	image,
	birthdate,
	className,
	...rest
}) => {
	return (
		<div
			className={clsx(styles.base, className)}
			data-e2e-id="character"
			{...rest}
		>
			<h2>
				{fullName} ({nickname})
			</h2>
			<p>Hogwarts House: {hogwartsHouse}</p>
			<p>Interpreted by: {interpretedBy}</p>
			<p>Birthdate: {birthdate}</p>
			<p>Children: {children.join(', ') || 'None'}</p>
			<div className={styles.image}>
				<img src={image} alt="" />
			</div>
			<ButtonLink
				href={`/characters/${fullName.toLowerCase().replace(/\s+/g, '-')}`}
				text={`Learn more about ${fullName}`}
				variation="primary"
			/>
		</div>
	);
};
