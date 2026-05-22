import type { Route } from './+types/route.ts';
import type { ISpellData } from '~/services/get-spells.ts';

import { useLoaderData } from 'react-router';

import { getSpellData } from '~/services/get-spells.ts';

import { Spell } from '~/components/02-molecules/spell/spell.tsx';
import { Segment } from '~/components/04-layouts/segment/segment.tsx';

export const loader = async ({
	params,
}: Route.LoaderArgs): Promise<ISpellData> => {
	try {
		const spell = await getSpellData({ spellName: params.spellName });
		return spell;
	} catch (error) {
		console.error('Error fetching page data:', error);
		throw new Response('Page not found', { status: 404 });
	}
};

export default function SpellPage(): React.ReactNode {
	const { spell } = useLoaderData<typeof loader>();
	return (
		<>
			<title>Spells in Harry Potter</title>
			<meta
				name="description"
				content="All about the spells in Harry Potter"
			/>

			<Segment.Root>
				<Segment.Container>
					<Spell {...spell} />
				</Segment.Container>
			</Segment.Root>
		</>
	);
}
