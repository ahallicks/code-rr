import type { IBook } from './book.tsx';
import type { UserEvent } from '@testing-library/user-event';

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createRoutesStub } from 'react-router';
import { checkA11y } from 'tests/test-utils.ts';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { mockBookData } from './book.mock.ts';
import { Book } from './book.tsx';

describe('~/components/02-molecules/book', () => {
	afterEach(() => {
		vi.clearAllMocks();
		cleanup();
	});

	test('passes accessibility checks', async () => {
		const { container } = setupTest();
		await checkA11y(container);
	});

	test('should render', async () => {
		setupTest();

		const element = screen.getByText(mockBookData.title);

		expect(element).toBeTruthy();
	});
});

type TestOverrides = {
	props?: Partial<IBook>;
};

type TReturn = {
	props: IBook;
	user: UserEvent;
	container: HTMLElement;
	baseElement: HTMLElement;
};

const getDefaultProps = (overrides: Partial<IBook> = {}): IBook => ({
	...mockBookData,
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
	const props = getDefaultProps(overrides.props);
	const Stub = createRoutesStub([
		{
			path: '/',
			Component: () => (
				<Book.Container key={`home-${props.title}`}>
					<Book.Cover cover={props.cover} title={props.title} />
					<Book.Content>
						<Book.Title
							title={props.title}
							originalTitle={props.originalTitle}
						/>
						<Book.Link index={props.index} />
					</Book.Content>
				</Book.Container>
			),
		},
	]);
	const utils = render(<Stub />);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
