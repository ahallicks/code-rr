import type { ISpell } from './spell.tsx';
import type { UserEvent } from '@testing-library/user-event';

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createRoutesStub } from 'react-router';
import { checkA11y } from 'tests/test-utils.ts';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { mockSpellData } from './spell.mock.ts';
import { Spell } from './spell.tsx';

describe('~/components/02-molecules/spell', () => {
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

		const element = screen.getByText(mockSpellData.spell);

		expect(element).toBeTruthy();
	});
});

type TestOverrides = {
	props?: Partial<ISpell>;
};

type TReturn = {
	props: ISpell;
	user: UserEvent;
	container: HTMLElement;
	baseElement: HTMLElement;
};

const getDefaultProps = (overrides: Partial<ISpell> = {}): ISpell => ({
	...mockSpellData,
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
	const props = getDefaultProps(overrides.props);
	const Stub = createRoutesStub([
		{
			path: '/',
			Component: () => <Spell {...props} />,
		},
	]);
	const utils = render(<Stub />);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
