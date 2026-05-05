import type { Meta, StoryObj } from '@storybook/react-vite';

import { mockFooterData } from './footer.mock.ts';
import { Footer as FooterComponent } from './footer.tsx';

const meta: Meta<typeof FooterComponent> = {
	title: '02-molecules/Footer',
	component: FooterComponent,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {
	args: mockFooterData,
};
