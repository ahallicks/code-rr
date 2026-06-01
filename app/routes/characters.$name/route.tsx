import type { Route } from './+types/route.ts';
import type { ICharacterData } from '~/services/get-characters.ts';

import { getCharacterData } from '~/services/get-characters.ts';

import { Character } from '~/components/02-molecules/character/character.tsx';
import { Segment } from '~/components/04-layouts/segment/segment.tsx';

export const loader = async ({
	params,
}: Route.LoaderArgs): Promise<ICharacterData> => {
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

export default function CharacterPage({
	loaderData,
}: Route.ComponentProps): React.ReactNode {
	const { character } = loaderData;
	return (
		<>
			<title>{character.fullName}</title>
			<meta
				name="description"
				content={`${character.fullName} played by ${character.interpretedBy} of house ${character.hogwartsHouse}`}
			/>

			<Segment.Root>
				<Segment.Container>
					<Character.Root>
						<Character.Container>
							<Character.Image
								image={character.image}
								fullName={character.fullName}
							/>
							<Character.Name
								fullName={character.fullName}
								nickname={character.nickname}
							/>
							<Character.Details
								hogwartsHouse={character.hogwartsHouse}
								interpretedBy={character.interpretedBy}
								birthdate={character.birthdate}
								children={character.children}
							/>
						</Character.Container>
					</Character.Root>
				</Segment.Container>
			</Segment.Root>
		</>
	);
}
