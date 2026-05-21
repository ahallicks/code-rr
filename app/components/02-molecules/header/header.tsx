import type { IBook } from '../book/book.tsx';

import { clsx } from 'clsx';
import { Link } from 'react-router';

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
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/books">Books</Link>
						<ul>
							{books.map((book) => (
								<li key={`header-${book.title}`}>
									<Link to={`/books/${book.index}`}>
										{book.title}
									</Link>
								</li>
							))}
						</ul>
					</li>
					<li>
						<Link to="/characters">Characters</Link>
					</li>
					<li>
						<Link to="/houses">Houses</Link>
					</li>
					<li>
						<Link to="/spells">Spells</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
