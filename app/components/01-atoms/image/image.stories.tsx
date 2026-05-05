import type { Meta, StoryObj } from '@storybook/react-vite';

import { mockImageData } from './image.mock.ts';
import { Image as ImageComponent } from './image.tsx';

const meta: Meta<typeof ImageComponent> = {
	title: '01-atoms/Image',
	component: ImageComponent,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ImageComponent>;

export const Image: Story = {
	args: mockImageData,
};
