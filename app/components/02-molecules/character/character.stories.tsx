import type { ICharacter } from './character.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { mockCharacterData } from './character.mock.ts';
import { Character as CharacterComponent } from './character.tsx';

const meta: Meta<ICharacter> = {
	title: '02-molecules/Character',
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<ICharacter>;

export const Character: Story = {
	args: mockCharacterData,
	render: (args) => (
		<CharacterComponent.Root>
			<CharacterComponent.Container>
				<CharacterComponent.Image
					image={args.image}
					fullName={args.fullName}
				/>
				<CharacterComponent.Name
					fullName={args.fullName}
					nickname={args.nickname}
				/>
				<CharacterComponent.Details
					hogwartsHouse={args.hogwartsHouse}
					interpretedBy={args.interpretedBy}
					birthdate={args.birthdate}
					children={args.children}
				/>
			</CharacterComponent.Container>
		</CharacterComponent.Root>
	),
};
