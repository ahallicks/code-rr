import type { Route } from './+types/_index.ts';
import type { IHomepage } from '~/services/get-homepage.ts';

import { getHomepage } from '~/services/get-homepage.ts';

import { CardList } from '~/components/01-atoms/card-list/card-list.tsx';
import { Book } from '~/components/02-molecules/book/book.tsx';
import { Segment } from '~/components/04-layouts/segment/segment.tsx';

export const loader = async (): Promise<{ homepage: IHomepage }> => {
	try {
		const homepage = await getHomepage();
		return { homepage };
	} catch (error) {
		console.error('Error fetching page data:', error);
		throw new Response('Page not found', { status: 404 });
	}
};

export default function Homepage({
	loaderData,
}: Route.ComponentProps): React.ReactNode {
	const { homepage } = loaderData;
	return (
		<>
			<title>React Router - Code Boilerplate</title>
			<meta
				name="description"
				content="React Router - Code Boilerplate"
			/>

			<Segment.Root>
				<Segment.Container>
					<CardList>
						{homepage.books.map((book) => (
							<Book.Container key={`home-${book.title}`}>
								<Book.Cover
									cover={book.cover}
									title={book.title}
								/>
								<Book.Content>
									<Book.Title
										title={book.title}
										originalTitle={book.originalTitle}
									/>
									<Book.Link index={book.index} />
								</Book.Content>
							</Book.Container>
						))}
					</CardList>
				</Segment.Container>
			</Segment.Root>
		</>
	);
}
