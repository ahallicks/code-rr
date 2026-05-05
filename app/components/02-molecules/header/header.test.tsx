import type { IHeader } from './header.tsx';
import type { UserEvent } from '@testing-library/user-event';

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { checkA11y } from 'tests/test-utils.ts';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { mockHeaderData } from './header.mock.ts';
import { Header } from './header.tsx';

describe('~/components/02-molecules/header', () => {
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

		const element = screen.getByText('Code React Router');

		expect(element).toBeTruthy();
	});
});

type TestOverrides = {
	props?: Partial<IHeader>;
};

type TReturn = {
	props: IHeader;
	user: UserEvent;
	container: HTMLElement;
	baseElement: HTMLElement;
};

const getDefaultProps = (overrides: Partial<IHeader> = {}): IHeader => ({
	...mockHeaderData,
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
	const props = getDefaultProps(overrides.props);
	const utils = render(
		<Header {...props}>{props.children ?? 'Code React Router'}</Header>,
	);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
