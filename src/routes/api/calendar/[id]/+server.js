import { error } from '@sveltejs/kit';
import { readFileSync } from 'fs';
import { join } from 'path';

const calendars = {
	'yhims-g9-2025': 'YHIMS G9 2025 2.ics'
};

export async function GET({ params }) {
	const { id } = params;
	
	if (!calendars[id]) {
		throw error(404, 'Calendar not found');
	}
	
	try {
		const filePath = join(process.cwd(), 'src', 'lib', calendars[id]);
		const icsContent = readFileSync(filePath, 'utf-8');
		
		return new Response(icsContent, {
			headers: {
				'Content-Type': 'text/calendar; charset=utf-8',
				'Content-Disposition': `attachment; filename="${id}.ics"`,
				'Cache-Control': 'public, max-age=3600',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET',
				'Access-Control-Allow-Headers': 'Content-Type'
			}
		});
	} catch (err) {
		throw error(500, 'Failed to read calendar file');
	}
}