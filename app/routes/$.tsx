import type { LoaderFunctionArgs } from 'react-router';

import { useLoaderData } from 'react-router';

export const loader = async ({
	params,
}: LoaderFunctionArgs): Promise<{ filePath: string }> => {
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

export default function Page(): React.ReactNode {
	const { filePath } = useLoaderData<typeof loader>();
	return (
		<>
			<title>{filePath}</title>
			<meta name="description" content={filePath} />
			<p>File path: {filePath}</p>
		</>
	);
}
