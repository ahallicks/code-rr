import type { IBook } from '~/components/02-molecules/book/book.tsx';

export interface IHomepage {
	books: IBook[];
}

export const getHomepage = async (): Promise<IHomepage> => {
	const res = await fetch('https://potterapi-fedeperin.vercel.app/en/books');

	if (!res.ok) {
		throw new Error('Failed to fetch homepage data');
	}

	const data = await res.json();

	return { books: data };
};
