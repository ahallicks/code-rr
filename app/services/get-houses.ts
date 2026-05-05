import type { IHouse } from '~/components/02-molecules/house/house.tsx';

export interface IHousesData {
	houses: IHouse[];
}

export const getHousesData = async (): Promise<IHousesData> => {
	const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/houses`);

	if (!res.ok) {
		throw new Error('Failed to fetch houses data');
	}

	const houses = await res.json();

	return { houses };
};

export interface IHouseData {
	house: IHouse;
}

export const getHouseData = async ({ houseName }: { houseName: string }): Promise<IHouseData> => {
	const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/houses?search=${houseName}`);

	if (!res.ok) {
		throw new Error('Failed to fetch houses data');
	}

	const house = await res.json();

	return { house: house[0] };
};
