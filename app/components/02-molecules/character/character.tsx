import { clsx } from 'clsx';

import { ButtonLink } from '~/components/01-atoms/button/button.tsx';
import { Card } from '~/components/01-atoms/card/card.tsx';

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

const CharacterRoot: React.FC<
	React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
	<div className={clsx(styles.base, className)} data-e2e-id="character">
		{children}
	</div>
);

export const CharacterContainer: React.FC<React.PropsWithChildren> = ({
	children,
}) => (
	<Card className={styles.base} data-e2e-id="book">
		{children}
	</Card>
);

export const CharacterName: React.FC<
	Pick<ICharacter, 'fullName' | 'nickname'>
> = ({ fullName, nickname }) => (
	<h2 className={styles.name}>
		{fullName} ({nickname})
	</h2>
);

export const CharacterDetails: React.FC<
	Pick<
		ICharacter,
		'hogwartsHouse' | 'interpretedBy' | 'birthdate' | 'children'
	>
> = ({ hogwartsHouse, interpretedBy, birthdate, children }) => (
	<div className={styles.details}>
		<p>Hogwarts House: {hogwartsHouse}</p>
		<p>Interpreted by: {interpretedBy}</p>
		<p>Birthdate: {birthdate}</p>
		<p>Children: {children.join(', ') || 'None'}</p>
	</div>
);

export const CharacterImage: React.FC<
	Pick<ICharacter, 'image' | 'fullName'>
> = ({ image }) => (
	<div className={styles.image}>
		<img src={image} alt="" className={styles.image} />
	</div>
);

export const CharacterLink: React.FC<Pick<ICharacter, 'fullName'>> = ({
	fullName,
}) => (
	<p>
		<ButtonLink
			href={`/characters/${fullName.toLowerCase().replace(/\s+/g, '-')}`}
			text={`Learn more about ${fullName}`}
			variation="primary"
		/>
	</p>
);

export const Character = {
	Root: CharacterRoot,
	Container: CharacterContainer,
	Name: CharacterName,
	Details: CharacterDetails,
	Image: CharacterImage,
	Link: CharacterLink,
};
