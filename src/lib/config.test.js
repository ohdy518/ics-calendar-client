import { describe, expect, it } from 'vitest';
import { DOMAIN, CALENDAR_ID } from './config.js';

describe('URL Generation Logic', () => {
	it('should generate correct webcal URL', () => {
		const calendarUrl = `${DOMAIN}/api/calendar/${CALENDAR_ID}`;
		const webcalUrl = calendarUrl.replace('http', 'webcal');
		
		expect(webcalUrl).toBe('webcal://localhost:5175/api/calendar/yhims-g9-2025');
	});

	it('should generate correct Google Calendar subscription URL', () => {
		const calendarUrl = `${DOMAIN}/api/calendar/${CALENDAR_ID}`;
		const webcalUrl = calendarUrl.replace('http', 'webcal');
		const googleUrl = `https://calendar.google.com/calendar/render?cid=${webcalUrl}`;
		
		expect(googleUrl).toBe('https://calendar.google.com/calendar/render?cid=webcal://localhost:5175/api/calendar/yhims-g9-2025');
	});

	it('should generate correct Outlook subscription URL', () => {
		const calendarUrl = `${DOMAIN}/api/calendar/${CALENDAR_ID}`;
		const webcalUrl = calendarUrl.replace('http', 'webcal');
		const outlookUrl = `https://outlook.live.com/calendar/0/addcalendar?url=${webcalUrl}`;
		
		expect(outlookUrl).toBe('https://outlook.live.com/calendar/0/addcalendar?url=webcal://localhost:5175/api/calendar/yhims-g9-2025');
	});

	it('should generate correct direct download URL', () => {
		const calendarUrl = `${DOMAIN}/api/calendar/${CALENDAR_ID}`;
		
		expect(calendarUrl).toBe('http://localhost:5175/api/calendar/yhims-g9-2025');
	});

	it('should have valid domain and calendar ID configuration', () => {
		expect(DOMAIN).toBeDefined();
		expect(DOMAIN).toMatch(/^https?:\/\//);
		expect(CALENDAR_ID).toBeDefined();
		expect(CALENDAR_ID).toBe('yhims-g9-2025');
	});
});