import type { ISpell } from '~/components/02-molecules/spell/spell.tsx';

export interface ISpellsData {
	spells: ISpell[];
}

export const getSpellsData = async (): Promise<ISpellsData> => {
	const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/spells`);

	if (!res.ok) {
		throw new Error('Failed to fetch spells data');
	}

	const spells = await res.json();

	return { spells };
};

export interface ISpellData {
	spell: ISpell;
}

export const getSpellData = async ({ spellName }: { spellName: string }): Promise<ISpellData> => {
	const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/spells?search=${spellName.replaceAll('-', ' ')}`);

	if (!res.ok) {
		throw new Error('Failed to fetch spell data');
	}

	const spell = await res.json();

	return { spell: spell[0] };
};
