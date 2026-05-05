import type { IHouse } from './house.tsx';
import type { UserEvent } from '@testing-library/user-event';

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createRoutesStub } from 'react-router';
import { checkA11y } from 'tests/test-utils.ts';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { mockHouseData } from './house.mock.ts';
import { House } from './house.tsx';

describe('~/components/02-molecules/house', () => {
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

		const element = screen.getByText(
			`${mockHouseData.emoji} ${mockHouseData.house}`,
		);

		expect(element).toBeTruthy();
	});
});

type TestOverrides = {
	props?: Partial<IHouse>;
};

type TReturn = {
	props: IHouse;
	user: UserEvent;
	container: HTMLElement;
	baseElement: HTMLElement;
};

const getDefaultProps = (overrides: Partial<IHouse> = {}): IHouse => ({
	...mockHouseData,
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
	const props = getDefaultProps(overrides.props);
	const Stub = createRoutesStub([
		{
			path: '/',
			Component: () => <House {...props} />,
		},
	]);
	const utils = render(<Stub />);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
