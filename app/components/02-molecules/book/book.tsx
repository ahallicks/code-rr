import { ButtonLink } from '~/components/01-atoms/button/button.tsx';
import { Card } from '~/components/01-atoms/card/card.tsx';

import styles from './book.module.css';

export interface IBook {
	number: number;
	title: string;
	originalTitle: string;
	releaseDate: string;
	description: string;
	pages: number;
	cover: string;
	index: number;
}

const BookContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
	<Card className={styles.base} data-e2e-id="book">
		{children}
	</Card>
);

const BookDetails: React.FC<React.PropsWithChildren> = ({ children }) => (
	<div className={styles.details}>{children}</div>
);

const BookContent: React.FC<React.PropsWithChildren> = ({ children }) => (
	<div className={styles.content}>{children}</div>
);

const BookTitle: React.FC<Pick<IBook, 'title' | 'originalTitle'>> = ({
	title,
	originalTitle,
}) => (
	<hgroup>
		<h2>{title}</h2>
		<h3>(Original Title: {originalTitle})</h3>
	</hgroup>
);

const BookReleaseInfo: React.FC<Pick<IBook, 'releaseDate' | 'pages'>> = ({
	releaseDate,
	pages,
}) => (
	<p>
		Released on {releaseDate}. It has {pages} pages.
	</p>
);

const BookDescription: React.FC<Pick<IBook, 'description'>> = ({
	description,
}) => <p>Description: {description}</p>;

const BookCover: React.FC<Pick<IBook, 'cover' | 'title'>> = ({
	cover,
	title,
}) => (
	<div className={styles.cover}>
		<img src={cover} alt={`Cover of ${title}`} className={styles.cover} />
	</div>
);

const BookLink: React.FC<Pick<IBook, 'index'>> = ({ index }) => (
	<p>
		<ButtonLink
			href={`/books/${index}`}
			text="Read more"
			variation="primary"
		/>
	</p>
);

export const Book = {
	Container: BookContainer,
	Details: BookDetails,
	Content: BookContent,
	Title: BookTitle,
	ReleaseInfo: BookReleaseInfo,
	Description: BookDescription,
	Cover: BookCover,
	Link: BookLink,
};
