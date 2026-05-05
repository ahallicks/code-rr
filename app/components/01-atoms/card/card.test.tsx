import type { ICard } from './card.tsx';
import type { UserEvent } from '@testing-library/user-event';

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { checkA11y } from 'tests/test-utils.ts';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { mockCardData } from './card.mock.ts';
import { Card } from './card.tsx';

describe('~/components/02-molecules/card', () => {
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
	props?: Partial<ICard>;
};

type TReturn = {
	props: ICard;
	user: UserEvent;
	container: HTMLElement;
	baseElement: HTMLElement;
};

const getDefaultProps = (overrides: Partial<ICard> = {}): ICard => ({
	...mockCardData,
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
	const props = getDefaultProps(overrides.props);
	const utils = render(
		<Card {...props}>{props.children ?? 'Component'}</Card>
	);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
