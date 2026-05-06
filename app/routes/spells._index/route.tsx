import type { ISpellsData } from '~/services/get-spells.ts';

import { useLoaderData } from 'react-router';

import { getSpellsData } from '~/services/get-spells.ts';

import { CardList } from '~/components/01-atoms/card-list/card-list.tsx';
import { Spell } from '~/components/02-molecules/spell/spell.tsx';
import { Segment } from '~/components/04-layouts/segment/segment.tsx';

export const loader = async (): Promise<ISpellsData> => {
	try {
		const spells = await getSpellsData();
		return spells;
	} catch (error) {
		console.error('Error fetching page data:', error);
		throw new Response('Page not found', { status: 404 });
	}
};

export default function Spells(): React.ReactNode {
	const { spells } = useLoaderData<typeof loader>();
	return (
		<>
			<title>Spells in Harry Potter</title>
			<meta
				name="description"
				content="All about the spells in Harry Potter"
			/>

			<Segment.Root>
				<Segment.Container>
					<CardList>
						{spells.map((spell, index) => (
							<Spell key={index} {...spell} />
						))}
					</CardList>
				</Segment.Container>
			</Segment.Root>
		</>
	);
}
