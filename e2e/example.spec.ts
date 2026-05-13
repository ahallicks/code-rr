import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('http://localhost:5173/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/React Router - Code Boilerplate/);
});

test('books link', async ({ page }) => {
	await page.goto('http://localhost:5173/');

	// Click the get started link.
	await page.getByRole('link', { name: 'Books' }).click();

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/The Books of Harry Potter/);

	// Expects page to have a heading.
	await expect(
		page.getByRole('heading', { name: 'The Books of Harry Potter' }),
	).toBeVisible();
});

test('book links', async ({ page }) => {
	await page.goto('http://localhost:5173/books');

	// Click the get started link.
	await page.getByRole('link', { name: "The Sorcerer's Stone" }).click();

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Harry Potter and the Sorcerer's Stone/);

	// Expects page to have a heading with the name of the book.
	await expect(
		page
			.getByRole('heading', {
				name: "Harry Potter and the Sorcerer's Stone",
			})
			.first(),
	).toBeVisible();
});

test('404 page', async ({ page }) => {
	await page.goto('http://localhost:5173/some/bogus/route', {
		waitUntil: 'networkidle',
	});

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Page not found/);

	// Expects page to have a heading with the name of Page not found.
	await expect(
		page.getByRole('heading', { name: 'Page not found' }),
	).toBeVisible();
});
