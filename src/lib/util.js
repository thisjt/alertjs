/**@type {HTMLElement | null} */
export let alertistBucket = null;

/**@type {HTMLElement | null} */
export let alertistToastBucket = null;

/**
 * Converts a string to an HTMLElement.
 * @param {string} string
 * @returns {HTMLElement} HTMLElement
 */
export function alertistStringToHtml(string) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(string, 'text/html');
	return /**@type {HTMLElement}*/ (doc.body.firstChild);
}

/**
 * Initializes the alertist bucket.
 * @returns {null | true}
 */
export function alertistInit() {
	let bucketSelector = /**@type {HTMLElement}*/ (document.querySelector('.alertist-bucket'));
	let toastBucketSelector = /**@type {HTMLElement}*/ (document.querySelector('.alertist-toast-bucket'));
	if (!bucketSelector) {
		bucketSelector = document.createElement('span');
		bucketSelector.classList.add('alertist-bucket');
		document.querySelector('body')?.append(bucketSelector);
		alertistBucket = bucketSelector;
	}
	if (!toastBucketSelector) {
		toastBucketSelector = alertistStringToHtml(/*html*/ `
			<div class="alertist-toast-bucket" popover="manual">
				<div class="alertist-toast-container">
				</div>
			</div>
		`);

		document.querySelector('body')?.append(toastBucketSelector);
		toastBucketSelector.showPopover();
		alertistToastBucket = toastBucketSelector.querySelector('.alertist-toast-container');
	}

	return true;
}

/**
 * Returns a random string.
 * @returns {string} Random string
 */
export function alertistRandomString() {
	return Math.random().toString(36).substring(2);
}

export const alertistButtons = {
	close:
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAElBMVEX///9HcEz///////////////84chYNAAAABnRSTlP9ABWejzIjLOoFAAAAlUlEQVQoz3VSWRbEIAwi2/2vPG5tg8nohz6JBBFIhDRjnEIB0xt' +
		'QB2LMik1kADIXZ8xXOUTtuqcbEXzbB3lK8RIQ29zgLdz9EgWYJJODRElui9zcSRBIGEkFPyc/EOwBXCq0L3WEW3Ur4xxa8hrkKHkNMqMa9dfe7lN8fcqFfPQQr+E4AWhjYziJasJmK1ERWhOqI6I/koMDV9q/Is8AAAAASUVORK5CYII=',
};
