import type { Meta, StoryObj } from '@storybook/react-vite';

import { mockCharacterData } from './character.mock.ts';
import { Character as CharacterComponent } from './character.tsx';

const meta: Meta<typeof CharacterComponent> = {
	title: '02-molecules/Character',
	component: CharacterComponent,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CharacterComponent>;

export const Character: Story = {
	args: mockCharacterData,
};
