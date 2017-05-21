# Replace Tags

Replace HTML tags with another

## Installation

### [NPM](https://www.npmjs.com/package/replace-tags)
```
npm i replace-tags
```

### [Yarn](https://yarnpkg.com/en/package/replace-tags)
```
yarn add replace-tags
```

### Bower
```
bower install replace-tags
```

## Usage

Replace all instances of 'div' tags with 'custom-div'

```
replaceTag('div', 'custom-div');
```

This will do the same thing:
```
$('div').replaceTag('custom-div');
```

You can pass in 'true' if you want to remove all other attributes that were part of the element

```
replaceTag('div', 'custom-div', true);
```
