import type { IBook } from '~/components/02-molecules/book/book.tsx';

export interface IBookData {
	book: IBook;
}

export const getBookData = async ({ bookIndex }: { bookIndex: number }): Promise<IBookData> => {
	const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/books?index=${bookIndex}`);

	if (!res.ok) {
		throw new Error('Failed to fetch global data');
	}

	const book = await res.json();

	return { book };
};
