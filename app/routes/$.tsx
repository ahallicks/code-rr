import type { Route } from './+types/$.ts';

export const loader = async ({
	params,
}: Route.LoaderArgs): Promise<{ filePath: string }> => {
	const filePath = params['*'];

	if (!filePath) {
		throw new Response('File path is required', { status: 400 });
	}

	throw new Response('Page not found', { status: 404 });

	/*
	// This splat route will match anything else that hasn't been matched by a
	// previous route, so we can use it to display a custom 404 page or handle
	// dynamic content based on the file path.
	try {
		return {
			filePath,
		};
	} catch (error) {
		console.error('Error fetching page data:', error);
		throw new Response('Page not found', { status: 404 });
	}
	//*/
};

export default function Page({
	loaderData,
}: Route.ComponentProps): React.ReactNode {
	const { filePath } = loaderData;
	return (
		<>
			<title>{filePath}</title>
			<meta name="description" content={filePath} />
			<p>File path: {filePath}</p>
		</>
	);
}
