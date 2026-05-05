import type { Meta, StoryObj } from '@storybook/react-vite';

import { mockHeaderData } from './header.mock.ts';
import { Header as HeaderComponent } from './header.tsx';

const meta: Meta<typeof HeaderComponent> = {
	title: '02-molecules/Header',
	component: HeaderComponent,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {
	args: mockHeaderData,
};
