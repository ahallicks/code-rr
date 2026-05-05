import type { IFooter } from './footer.tsx';
import type { UserEvent } from '@testing-library/user-event';

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { checkA11y } from 'tests/test-utils.ts';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { Footer } from './footer.tsx';

describe('~/components/02-molecules/footer', () => {
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
});

type TestOverrides = {
	props?: Partial<IFooter>;
};

type TReturn = {
	props: IFooter;
	user: UserEvent;
	container: HTMLElement;
	baseElement: HTMLElement;
};

const getDefaultProps = (overrides: Partial<IFooter> = {}): IFooter => ({
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
	const props = getDefaultProps(overrides.props);
	const utils = render(
		<Footer {...props}>{props.children ?? 'Component'}</Footer>,
	);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
