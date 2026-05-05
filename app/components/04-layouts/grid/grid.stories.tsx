import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid as GridComponent } from './grid.tsx';

const meta: Meta<typeof GridComponent> = {
	title: '04-layouts/Grid',
	component: GridComponent,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		containerSize: {
			description: 'Controls the container width for the grid',
			options: ['max', 'min'],
			control: 'inline-radio',
			table: {
				defaultValue: {
					summary: 'max',
				},
			},
		},
		tag: {
			description: 'Controls the HTML element of the component',
			control: 'text',
		},
	},
};

export default meta;
type Story = StoryObj<typeof GridComponent>;

export const Grid: Story = {
	args: {
		containerSize: 'max',
		tag: 'div',
	},
	render: (args) => (
		<GridComponent className="grid" {...args}>
			<GridComponent className="gridOverlay">
				<span className="gridItem"></span>
				<span className="gridItem"></span>
				<span className="gridItem"></span>
				<span className="gridItem"></span>
				<span className="gridItem"></span>
				<span className="gridItem"></span>
				<span className="gridItem"></span>
				<span className="gridItem"></span>
				<span className="gridItem"></span>
				<span className="gridItem"></span>
				<span className="gridItem"></span>
				<span className="gridItem"></span>
			</GridComponent>
		</GridComponent>
	),
};
