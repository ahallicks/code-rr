import { clsx } from 'clsx';

import { ButtonLink } from '~/components/01-atoms/button/button.tsx';

import styles from './spell.module.css';

export interface ISpell {
	spell: string;
	use: string;
	className?: string;
}

export const Spell: React.FC<ISpell> = ({ spell, use, className, ...rest }) => {
	return (
		<div
			className={clsx(styles.base, className)}
			data-e2e-id="spell"
			{...rest}
		>
			<h2 className={styles.spell}>{spell}</h2>
			<p className={styles.use}>{use}</p>
			<p>
				<ButtonLink href={`/spells/${spell}`}>
					View more about {spell}
					<span className={styles.arrow}>&rarr;</span>
				</ButtonLink>
			</p>
		</div>
	);
};
