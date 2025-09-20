import { describe, expect, it, beforeAll, afterAll } from 'vitest';
import { dev } from '$app/environment';

describe('Calendar API Endpoint', () => {
	const baseUrl = 'http://localhost:5176';
	
	it('should serve ICS file with correct headers for valid calendar ID', async () => {
		const response = await fetch(`${baseUrl}/api/calendar/yhims-g9-2025`);
		
		expect(response.status).toBe(200);
		expect(response.headers.get('content-type')).toBe('text/calendar; charset=utf-8');
		expect(response.headers.get('content-disposition')).toBe('attachment; filename="yhims-g9-2025.ics"');
		expect(response.headers.get('access-control-allow-origin')).toBe('*');
		expect(response.headers.get('cache-control')).toBe('public, max-age=3600');
	});

	it('should return valid ICS content', async () => {
		const response = await fetch(`${baseUrl}/api/calendar/yhims-g9-2025`);
		const content = await response.text();
		
		expect(content).toContain('BEGIN:VCALENDAR');
		expect(content).toContain('END:VCALENDAR');
		expect(content).toContain('VERSION:2.0');
		expect(content).toContain('PRODID:-//YoonsungOh//YHIMS G9 2025/2//KR');
	});

	it('should contain expected Korean school events', async () => {
		const response = await fetch(`${baseUrl}/api/calendar/yhims-g9-2025`);
		const content = await response.text();
		
		expect(content).toContain('중간고사');
		expect(content).toContain('스포츠 캠프');
		expect(content).toContain('졸업 여행');
		expect(content).toContain('크리스마스 콘서트');
	});

	it('should return 404 for invalid calendar ID', async () => {
		const response = await fetch(`${baseUrl}/api/calendar/non-existent-calendar`);
		
		expect(response.status).toBe(404);
	});

	it('should have proper CORS headers for calendar app integration', async () => {
		const response = await fetch(`${baseUrl}/api/calendar/yhims-g9-2025`);
		
		expect(response.headers.get('access-control-allow-origin')).toBe('*');
		expect(response.headers.get('access-control-allow-methods')).toBe('GET');
		expect(response.headers.get('access-control-allow-headers')).toBe('Content-Type');
	});

	it('should handle OPTIONS request for CORS preflight', async () => {
		const response = await fetch(`${baseUrl}/api/calendar/yhims-g9-2025`, {
			method: 'OPTIONS'
		});
		
		// Should not throw error and handle CORS properly
		expect(response.status).not.toBe(500);
	});
});