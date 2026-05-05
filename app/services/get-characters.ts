import type { ICharacter } from '~/components/02-molecules/character/character.tsx';

export interface ICharactersData {
	characters: ICharacter[];
}

export const getCharactersData = async (): Promise<ICharactersData> => {
	const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/characters`);

	if (!res.ok) {
		throw new Error('Failed to fetch houses data');
	}

	const characters = await res.json();

	return { characters };
};

export interface ICharacterData {
	character: ICharacter;
}

export const getCharacterData = async ({ characterName }: { characterName: string }): Promise<ICharacterData> => {
	const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/characters?search=${characterName.replaceAll('-', ' ')}`);

	if (!res.ok) {
		throw new Error('Failed to fetch houses data');
	}

	const character = await res.json();

	return { character: character[0] };
};
