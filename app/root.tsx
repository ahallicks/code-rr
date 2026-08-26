import type { Route } from './+types/root.ts';
import type { IGlobalData } from './services/get-global-data.ts';

import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	data,
	isRouteErrorResponse,
	useLoaderData,
	useRouteError,
} from 'react-router';

import { getGlobalData } from '~/services/get-global-data.ts';
import { Axe } from '~/utils/report-accessibility.tsx';

import { Footer } from '~/components/02-molecules/footer/footer.tsx';
import { Header } from '~/components/02-molecules/header/header.tsx';
import { NotFound } from '~/components/04-layouts/404/404.tsx';

import layerStyles from './layers.css?url';
import './globals.css';

export const links: Route.LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
];

export const loader = async (): Promise<IGlobalData> => {
	try {
		const { books } = await getGlobalData();
		return { books };
	} catch (error) {
		console.error('Error fetching global data:', error);
		throw data('Error connecting to the CMS.', { status: 404 });
	}
};

export function Layout({ children }: React.PropsWithChildren): React.ReactNode {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				{process.env.NODE_ENV === 'development' ? (
					<link
						rel="stylesheet"
						href={layerStyles}
						precedence="default"
					/>
				) : null}
				<Links />
			</head>
			<body>
				<Axe />
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function (): React.ReactNode {
	const { books } = useLoaderData<typeof loader>();

	return (
		<>
			<Header books={books} />
			<main id="main" className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export function ErrorBoundary(): React.ReactNode {
	const error = useRouteError();

	let status = '500';
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		status = error.status.toString();
		message = error.status === 404 ? 'Page not found' : 'Error';
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<NotFound
			status={status}
			details={details}
			message={message}
			stack={stack}
		/>
	);
}
