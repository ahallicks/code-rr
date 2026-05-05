import type { IBook } from '../book/book.tsx';

import { clsx } from 'clsx';

import styles from './header.module.css';

export interface IHeader extends React.PropsWithChildren {
	books: IBook[];
	className?: string;
}

export const Header: React.FC<IHeader> = ({ className, books, ...rest }) => {
	return (
		<header
			className={clsx(styles.base, className)}
			data-e2e-id="header"
			{...rest}
		>
			Code React Router
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/books">Books</a>
						<ul>
							{books.map((book) => (
								<li key={`header-${book.title}`}>
									<a href={`/books/${book.index}`}>
										{book.title}
									</a>
								</li>
							))}
						</ul>
					</li>
					<li>
						<a href="/characters">Characters</a>
					</li>
					<li>
						<a href="/houses">Houses</a>
					</li>
					<li>
						<a href="/spells">Spells</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
