import type { Meta, StoryObj } from '@storybook/react-vite';

import { mockCardListData } from './card-list.mock.ts';
import { CardList as CardListComponent } from './card-list.tsx';

const meta: Meta<typeof CardListComponent> = {
	title: '01-atoms/Card list',
	component: CardListComponent,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CardListComponent>;

export const CardList: Story = {
	args: mockCardListData,
};
