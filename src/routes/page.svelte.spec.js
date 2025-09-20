import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('Calendar Subscription Page', () => {
	it('should render calendar title', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();
		// await expect.element(heading).toHaveTextContent('YHIMS G9 2025 Calendar');
	});

	it('should render all subscription buttons', async () => {
		render(Page);

		const googleButton = page.getByRole('button', { name: 'Google Calendar' });
		const appleButton = page.getByRole('button', { name: 'Apple Calendar' });
		const outlookButton = page.getByRole('button', { name: 'Outlook Calendar' });
		const downloadButton = page.getByRole('button', { name: 'ICS 내려받기' });

		await expect.element(googleButton).toBeInTheDocument();
		await expect.element(appleButton).toBeInTheDocument();
		await expect.element(outlookButton).toBeInTheDocument();
		await expect.element(downloadButton).toBeInTheDocument();
	});

	it('should render copy buttons', async () => {
		render(Page);

		const copyWebcalButton = page.getByRole('button', { name: 'Webcal URL 복사' });
		const copyDirectButton = page.getByRole('button', { name: 'Direct URL 복사' });

		await expect.element(copyWebcalButton).toBeInTheDocument();
		await expect.element(copyDirectButton).toBeInTheDocument();
	});

	it('should have all subscription and copy buttons visible', async () => {
		render(Page);

		const googleButton = page.getByRole('button', { name: 'Google Calendar' });
		const appleButton = page.getByRole('button', { name: 'Apple Calendar' });
		const outlookButton = page.getByRole('button', { name: 'Outlook Calendar' });
		const downloadButton = page.getByRole('button', { name: 'ICS 내려받기' });
        const copyWebcalButton = page.getByRole('button', { name: 'Webcal URL 복사' });
        const copyDirectButton = page.getByRole('button', { name: 'Direct URL 복사' });
		
		await expect.element(googleButton).toBeVisible();
		await expect.element(appleButton).toBeVisible();
		await expect.element(outlookButton).toBeVisible();
		await expect.element(downloadButton).toBeVisible();
		await expect.element(copyWebcalButton).toBeVisible();
		await expect.element(copyDirectButton).toBeVisible();
	});

	it('should have responsive layout structure', async () => {
		render(Page);

		const subscribeSection = page.getByRole('heading', { name: '서비스로 구독...' });
		const copySection = page.getByRole('heading', { name: '다른 방법으로 구독...' });
		
		await expect.element(subscribeSection).toBeInTheDocument();
		await expect.element(copySection).toBeInTheDocument();
	});
});

