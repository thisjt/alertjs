# Alertist

A simple alert management system built on top of the native [**"dialog"**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) HTML tag.

Simply install the package:

```
npm install alertist
```

and then import it in your project.

```javascript
import alertist from 'alertist';
```

Don't forget to import either the SASS file for styling inside the
`src/scss/main.scss` or include the `dist/alertist.css` file in your
document.

That's it!

---

## Customization

You can customize the dialog styling by changing the SASS variables inside the
`src/scss/variables.scss`. If you want more customizability, you can style it
yourself.

---

We currently have 2 types of alerts available. This will expand in the future but
as of now this is what the package offers.

1. Alert
2. Confirm

## Alert

Syntax:
```javascript
const okCallback = () => {
	console.log('OK Button clicked!');
};
const cancelCallback = () => {
	console.log('X button or outside backdrop clicked!');
};
const check = () => {
	return true;
};

// Use it like this:
alertist.alert('Hello world!');
alertist.alert('Hello world!', okCallback);
alertist.alert('Hello world!', okCallback, cancelCallback);
alertist.alert('Hello world!', okCallback, cancelCallback, check);
alertist.alert('Title', 'Hello world!');
alertist.alert('Title', 'Hello world!', 'Yes');
alertist.alert('Title', 'Hello world!', okCallback);
alertist.alert('Title', 'Hello world!', 'Yes', okCallback);
alertist.alert('Title', 'Hello world!', okCallback, cancelCallback);
alertist.alert('Title', 'Hello world!', okCallback, cancelCallback, check);
alertist.alert('Title', 'Hello world!', 'Yes', okCallback, cancelCallback);
alertist.alert('Title', 'Hello world!', 'Yes', okCallback, cancelCallback, check);

// Or avoid the hassle and do it like this:
alertist.alert({
	title: 'Title',
	text: 'Hello world!',
	button: 'Yes', // default: 'OK'
	okCallback,
	cancelCallback,
	check,
})
```

Here's the HTML if you want to style this alert type yourself:
```html
<dialog class="alertist alertist-alert" style="transform: translate(0px, 0px)">
	<div class="alertist-container">
		<div class="alertist-header">
			<div class="alertist-title" draggable="true"></div>
			<button class="alertist-title_close"><img></button>
		</div>
		<div class="alertist-body"></div>
		<div class="alertist-footer">
			<button class="alertist-footer_button"></button>
		</div>
	</div>
</dialog>
```

## Confirm

Syntax:
```javascript
const okCallback = () => {
	console.log('OK Button clicked!');
};
const cancelCallback = () => {
	console.log('X button or Cancel or outside backdrop clicked!');
};
const check = () => {
	return true;
};

// Use it like this:
alertist.confirm('Hello world?', okCallback);
alertist.confirm('Hello world?', okCallback, cancelCallback);
alertist.confirm('Hello world?', okCallback, cancelCallback, check);
alertist.confirm('Title', 'Hello world?', okCallback);
alertist.confirm('Title', 'Hello world?', okCallback, cancelCallback);
alertist.confirm('Title', 'Hello world?', okCallback, cancelCallback, check);
alertist.confirm('Title', 'Hello world?', 'Yes', okCallback);
alertist.confirm('Title', 'Hello world?', 'Yes', okCallback, cancelCallback);
alertist.confirm('Title', 'Hello world?', 'Yes', okCallback, cancelCallback, check);
alertist.confirm('Title', 'Hello world?', 'Yes', 'No', okCallback);
alertist.confirm('Title', 'Hello world?', 'Yes', 'No', okCallback, cancelCallback);
alertist.confirm('Title', 'Hello world?', 'Yes', 'No', okCallback, cancelCallback, check);

// Or avoid the hassle and do it like this:
alertist.confirm({
	title: 'Title',
	text: 'Hello world!',
	button: 'Yes', // default: 'OK'
	cancel: 'No', // default: 'Cancel'
	okCallback,
	cancelCallback,
	check,
})
```

Here's the HTML if you want to style this alert type yourself:
```html
<dialog class="alertist alertist-confirm" style="transform: translate(0px, 0px)">
	<div class="alertist-container">
		<div class="alertist-header">
			<div class="alertist-title" draggable="true"></div>
			<button class="alertist-title_close"><img></button>
		</div>
		<div class="alertist-body"></div>
		<div class="alertist-footer">
			<button class="alertist-footer_button"></button>
			<button class="alertist-footer_cancelbutton"></button>
		</div>
	</div>
</dialog>
```


