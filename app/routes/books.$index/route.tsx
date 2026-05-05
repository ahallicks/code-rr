import type { LoaderFunctionArgs } from 'react-router';
import type { IBookData } from '~/services/get-book.ts';

import { useLoaderData } from 'react-router';

import { getBookData } from '~/services/get-book.ts';

import { Book } from '~/components/02-molecules/book/book.tsx';
import { Segment } from '~/components/04-layouts/segment/segment.tsx';

export const loader = async ({
	params,
}: LoaderFunctionArgs): Promise<IBookData> => {
	try {
		const book = await getBookData({ bookIndex: Number(params.index) });
		return book;
	} catch (error) {
		console.error('Error fetching page data:', error);
		throw new Response('Page not found', { status: 404 });
	}
};

export default function BookPage(): React.ReactNode {
	const { book } = useLoaderData<typeof loader>();
	return (
		<>
			<title>{book.title}</title>
			<meta name="description" content={book.description ?? ''} />
			<Segment.Root>
				<Segment.Container>
					<Book.Details>
						<Book.Cover cover={book.cover} title={book.title} />
						<Book.Content>
							<Book.Title
								title={book.title}
								originalTitle={book.originalTitle}
							/>
							<Book.Description description={book.description} />
							<Book.ReleaseInfo
								releaseDate={book.releaseDate}
								pages={book.pages}
							/>
						</Book.Content>
					</Book.Details>
				</Segment.Container>
			</Segment.Root>
		</>
	);
}
