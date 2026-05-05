import type { LoaderFunctionArgs } from 'react-router';

import { useLoaderData } from 'react-router';

export const loader = async ({
	params,
}: LoaderFunctionArgs): Promise<{ filePath: string }> => {
	const filePath = params['*'];

	if (!filePath) {
		throw new Response('File path is required', { status: 400 });
	}

	try {
		return {
			filePath,
		};
	} catch (error) {
		console.error('Error fetching page data:', error);
		throw new Response('Page not found', { status: 404 });
	}
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
