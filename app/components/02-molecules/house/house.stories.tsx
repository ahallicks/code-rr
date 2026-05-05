import type { Meta, StoryObj } from '@storybook/react-vite';

import { mockHouseData } from './house.mock.ts';
import { House as HouseComponent } from './house.tsx';

const meta: Meta<typeof HouseComponent> = {
	title: '02-molecules/House',
	component: HouseComponent,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HouseComponent>;

export const House: Story = {
	args: mockHouseData,
};
