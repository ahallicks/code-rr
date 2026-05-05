import type { LoaderFunctionArgs } from 'react-router';
import type { ICharacterData } from '~/services/get-characters.ts';

import { useLoaderData } from 'react-router';

import { getCharacterData } from '~/services/get-characters.ts';

import { Character } from '~/components/02-molecules/character/character.tsx';
import { Segment } from '~/components/04-layouts/segment/segment.tsx';

export const loader = async ({
	params,
}: LoaderFunctionArgs): Promise<ICharacterData> => {
	try {
		const character = await getCharacterData({
			characterName: params.name ?? '',
		});
		return character;
	} catch (error) {
		console.error('Error fetching page data:', error);
		throw new Response('Page not found', { status: 404 });
	}
};

export default function CharacterPage(): React.ReactNode {
	const { character } = useLoaderData<typeof loader>();
	return (
		<>
			<title>{character.fullName}</title>
			<meta
				name="description"
				content={`${character.fullName} played by ${character.interpretedBy} of house ${character.hogwartsHouse}`}
			/>

			<Segment.Root>
				<Segment.Container>
					<Character {...character} />
				</Segment.Container>
			</Segment.Root>
		</>
	);
}
