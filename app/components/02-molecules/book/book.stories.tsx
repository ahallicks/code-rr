import type { IBook } from './book.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { mockBookData } from './book.mock.ts';
import { Book as BookComponent } from './book.tsx';

const meta: Meta<IBook> = {
	title: '02-molecules/Book',
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<IBook>;

export const Book: Story = {
	args: mockBookData,
	render: (args) => (
		<BookComponent.Container key={`home-${args.title}`}>
			<BookComponent.Cover cover={args.cover} title={args.title} />
			<BookComponent.Content>
				<BookComponent.Title
					title={args.title}
					originalTitle={args.originalTitle}
				/>
				<BookComponent.Link index={args.index} />
			</BookComponent.Content>
		</BookComponent.Container>
	),
};
