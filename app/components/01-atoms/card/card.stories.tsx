import type { Meta, StoryObj } from '@storybook/react-vite';

import { mockCardData } from './card.mock.ts';
import { Card as CardComponent } from './card.tsx';

const meta: Meta<typeof CardComponent> = {
	title: '01-atoms/Card',
	component: CardComponent,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CardComponent>;

export const Card: Story = {
	args: mockCardData,
};
