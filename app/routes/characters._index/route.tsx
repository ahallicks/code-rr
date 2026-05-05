import type { ICharactersData } from '~/services/get-characters.ts';

import { useLoaderData } from 'react-router';

import { getCharactersData } from '~/services/get-characters.ts';

import { CardList } from '~/components/01-atoms/card-list/card-list.tsx';
import { Character } from '~/components/02-molecules/character/character.tsx';
import { Segment } from '~/components/04-layouts/segment/segment.tsx';

export const loader = async (): Promise<ICharactersData> => {
	try {
		const characters = await getCharactersData();
		return characters;
	} catch (error) {
		console.error('Error fetching page data:', error);
		throw new Response('Page not found', { status: 404 });
	}
};

export default function Characters(): React.ReactNode {
	const { characters } = useLoaderData<typeof loader>();
	return (
		<>
			<title>Houses in Harry Potter</title>
			<meta
				name="description"
				content="All about the houses in Harry Potter"
			/>

			<Segment.Root>
				<Segment.Container>
					<CardList>
						{characters.map((character, index) => (
							<Character.Container key={index}>
								<Character.Image
									image={character.image}
									fullName={character.fullName}
								/>

								<Character.Name
									fullName={character.fullName}
									nickname={character.nickname}
								/>
								<Character.Link fullName={character.fullName} />
							</Character.Container>
						))}
					</CardList>
				</Segment.Container>
			</Segment.Root>
		</>
	);
}
