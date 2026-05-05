import type { Meta, StoryObj } from '@storybook/react-vite';

import { mockSpellData } from './spell.mock.ts';
import { Spell as SpellComponent } from './spell.tsx';

const meta: Meta<typeof SpellComponent> = {
	title: '02-molecules/Spell',
	component: SpellComponent,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SpellComponent>;

export const Spell: Story = {
	args: mockSpellData,
};
