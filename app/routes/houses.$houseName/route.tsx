import type { Route } from './+types/route.ts';
import type { IHouseData } from '~/services/get-houses.ts';

import { useLoaderData } from 'react-router';

import { getHouseData } from '~/services/get-houses.ts';

import { House } from '~/components/02-molecules/house/house.tsx';
import { Segment } from '~/components/04-layouts/segment/segment.tsx';

export const loader = async ({
	params,
}: Route.LoaderArgs): Promise<IHouseData> => {
	if (!params.houseName) {
		throw new Response('House name is required', { status: 400 });
	}
	try {
		const house = await getHouseData({ houseName: params.houseName });
		return house;
	} catch (error) {
		console.error('Error fetching page data:', error);
		throw new Response('Page not found', { status: 404 });
	}
};

export default function HousePage(): React.ReactNode {
	const { house } = useLoaderData<typeof loader>();
	return (
		<>
			<title>{house.house}</title>
			<meta name="description" content={`All about the ${house.house}`} />

			<Segment.Root>
				<Segment.Container>
					<House {...house} />
				</Segment.Container>
			</Segment.Root>
		</>
	);
}
