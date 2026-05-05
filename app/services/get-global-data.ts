import type { IBook } from '~/components/02-molecules/book/book.tsx';

export interface IGlobalData {
	books: IBook[];
}

export const getGlobalData = async (): Promise<IGlobalData> => {
	const res = await fetch('https://potterapi-fedeperin.vercel.app/en/books');

	if (!res.ok) {
		throw new Error('Failed to fetch global data');
	}

	const data = await res.json();

	return { books: data };
};
