import { expect, test, describe } from 'vitest';
import { alertistBucket, alertistToastBucket, alertistStringToHtml, alertistInit, alertistCleanup, alertistRandomString, alertistButtons } from './util';
import dom from './fakedom';
dom();

describe.skip('alertist util', () => {
	test('alertistBucket is null', () => {
		expect(alertistBucket).toBe(null);
	});

	test('alertistToastBucket is null', () => {
		expect(alertistToastBucket).toBe(null);
	});

	test('alertistStringToHtml', () => {
		const html = alertistStringToHtml('<div>test</div>');
		expect(html.outerHTML).toBe('<div>test</div>');
	});

	test('alertistRandomString', () => {
		expect(alertistRandomString().length).toBeGreaterThan(0);
	});

	test('alertistButtons', () => {
		expect(alertistButtons.close).toContain('data:image/png;base64');
	});

	test('alertistInit', () => {
		expect(alertistInit()).toBe(true);
	});

	test('alertistInit outside document context', () => {
		document = undefined;
		DOMParser = undefined;
		expect(alertistInit()).toBe(null);
	});
});
