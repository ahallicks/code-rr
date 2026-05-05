import type { ICardList } from './card-list.tsx';
import type { UserEvent } from '@testing-library/user-event';

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { checkA11y } from 'tests/test-utils.ts';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { mockCardListData } from './card-list.mock.ts';
import { CardList } from './card-list.tsx';

describe('~/components/03-organisms/card-list', () => {
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

		const element = screen.getByText('Component');
		
		expect(element).toBeTruthy();
	});
})

type TestOverrides = {
	props?: Partial<ICardList>;
};

type TReturn = {
	props: ICardList;
	user: UserEvent;
	container: HTMLElement;
	baseElement: HTMLElement;
};

const getDefaultProps = (overrides: Partial<ICardList> = {}): ICardList => ({
	...mockCardListData,
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
	const props = getDefaultProps(overrides.props);
	const utils = render(
		<CardList {...props}>{props.children ?? 'Component'}</CardList>
	);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
