import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('Calendar Subscription Page', () => {
	it('should render calendar title', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();
		await expect.element(heading).toHaveTextContent('YHIMS G9 2025 Calendar');
	});

	it('should render all subscription buttons', async () => {
		render(Page);

		const googleButton = page.getByRole('button', { name: 'Google Calendar' });
		const appleButton = page.getByRole('button', { name: 'Apple Calendar' });
		const outlookButton = page.getByRole('button', { name: 'Outlook Calendar' });
		const downloadButton = page.getByRole('button', { name: 'Download ICS' });

		await expect.element(googleButton).toBeInTheDocument();
		await expect.element(appleButton).toBeInTheDocument();
		await expect.element(outlookButton).toBeInTheDocument();
		await expect.element(downloadButton).toBeInTheDocument();
	});

	it('should render copy buttons', async () => {
		render(Page);

		const copyWebcalButton = page.getByRole('button', { name: 'Copy webcal URL' });
		const copyDirectButton = page.getByRole('button', { name: 'Copy direct URL' });

		await expect.element(copyWebcalButton).toBeInTheDocument();
		await expect.element(copyDirectButton).toBeInTheDocument();
	});

	it('should have all subscription and copy buttons visible', async () => {
		render(Page);

		const googleButton = page.getByRole('button', { name: 'Google Calendar' });
		const appleButton = page.getByRole('button', { name: 'Apple Calendar' });
		const outlookButton = page.getByRole('button', { name: 'Outlook Calendar' });
		const downloadButton = page.getByRole('button', { name: 'Download ICS' });
		const copyWebcalButton = page.getByRole('button', { name: 'Copy webcal URL' });
		const copyDirectButton = page.getByRole('button', { name: 'Copy direct URL' });
		
		await expect.element(googleButton).toBeVisible();
		await expect.element(appleButton).toBeVisible();
		await expect.element(outlookButton).toBeVisible();
		await expect.element(downloadButton).toBeVisible();
		await expect.element(copyWebcalButton).toBeVisible();
		await expect.element(copyDirectButton).toBeVisible();
	});

	it('should have responsive layout structure', async () => {
		render(Page);

		const subscribeSection = page.getByRole('heading', { name: 'Subscribe with:' });
		const copySection = page.getByRole('heading', { name: 'Copy subscription URL:' });
		
		await expect.element(subscribeSection).toBeInTheDocument();
		await expect.element(copySection).toBeInTheDocument();
	});
});

