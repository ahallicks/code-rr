import type { Route } from './+types/route.ts';
import type { IHousesData } from '~/services/get-houses.ts';

import { getHousesData } from '~/services/get-houses.ts';

import { CardList } from '~/components/01-atoms/card-list/card-list.tsx';
import { House } from '~/components/02-molecules/house/house.tsx';
import { Segment } from '~/components/04-layouts/segment/segment.tsx';

export const loader = async (): Promise<IHousesData> => {
	try {
		const houses = await getHousesData();
		return houses;
	} catch (error) {
		console.error('Error fetching page data:', error);
		throw new Response('Page not found', { status: 404 });
	}
};

export default function Houses({
	loaderData,
}: Route.ComponentProps): React.ReactNode {
	const { houses } = loaderData;
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
						{houses.map((house, index) => (
							<House key={index} {...house} />
						))}
					</CardList>
				</Segment.Container>
			</Segment.Root>
		</>
	);
}
