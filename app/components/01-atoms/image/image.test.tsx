import type { IImage } from './image.tsx';
import type { UserEvent } from '@testing-library/user-event';

import { cleanup, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { checkA11y } from 'tests/test-utils.ts';
import { afterEach, describe, test, vi } from 'vitest';

import { mockImageData } from './image.mock.ts';
import { Image } from './image.tsx';

describe('~/components/01-atoms/image', () => {
	afterEach(() => {
		vi.clearAllMocks();
		cleanup();
	});

	test('passes accessibility checks', async () => {
		const { container } = setupTest();
		await checkA11y(container);
	});
});

type TestOverrides = {
	props?: Partial<IImage>;
};

type TReturn = {
	props: IImage;
	user: UserEvent;
	container: HTMLElement;
	baseElement: HTMLElement;
};

const getDefaultProps = (overrides: Partial<IImage> = {}): IImage => ({
	...mockImageData,
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
	const props = getDefaultProps(overrides.props);
	const utils = render(<Image {...props} />);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
