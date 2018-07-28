# Replace Tags

Replace HTML tags with another

## Installation

### [NPM](https://www.npmjs.com/package/replace-tags)
```
npm i replace-tags
```
## Usage

Replace all instances of 'div' tags with 'custom-div'

```
replaceTags('div', 'custom-div');
```

This will do the same thing:
```
$('div').replaceTags('custom-div');
```

You can pass in 'true' if you want to remove all other attributes that were part of the element

```
replaceTags('div', 'custom-div', true);
```
