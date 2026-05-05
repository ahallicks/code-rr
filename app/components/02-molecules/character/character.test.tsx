import type { ICharacter } from './character.tsx';
import type { UserEvent } from '@testing-library/user-event';

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createRoutesStub } from 'react-router';
import { checkA11y } from 'tests/test-utils.ts';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { mockCharacterData } from './character.mock.ts';
import { Character } from './character.tsx';

describe('~/components/02-molecules/character', () => {
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
			`${mockCharacterData.fullName} (${mockCharacterData.nickname})`,
		);

		expect(element).toBeTruthy();
	});
});

type TestOverrides = {
	props?: Partial<ICharacter>;
};

type TReturn = {
	props: ICharacter;
	user: UserEvent;
	container: HTMLElement;
	baseElement: HTMLElement;
};

const getDefaultProps = (overrides: Partial<ICharacter> = {}): ICharacter => ({
	...mockCharacterData,
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
	const props = getDefaultProps(overrides.props);
	const Stub = createRoutesStub([
		{
			path: '/',
			Component: () => (
				<Character {...props}>
					{props.children ?? 'Component'}
				</Character>
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
