import { ButtonLink } from '~/components/01-atoms/button/button.tsx';
import { Segment } from '~/components/04-layouts/segment/segment.tsx';

export const NotFound = ({
	status,
	message,
	details,
	stack,
}: {
	status: string;
	message: string;
	details: string;
	stack?: string;
}): React.ReactNode => (
	<>
		<title>Page not found</title>
		<Segment.Root>
			<Segment.Container>
				<p>{status}</p>
				<h1>{message}</h1>
				<p>{details}</p>
				{stack ? (
					<pre>
						<code>{stack}</code>
					</pre>
				) : null}
				<p>
					<ButtonLink
						href="/"
						text="Go back home"
						variation="primary"
					/>
					<ButtonLink
						href="/contact"
						text="Contact support"
						variation="tertiary"
					/>
				</p>
			</Segment.Container>
		</Segment.Root>
	</>
);
