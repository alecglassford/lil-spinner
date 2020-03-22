# lil-spinner

A lil spinner custom element

## Know before you go

It'll only work in browsers with [custom elements v1 support](https://caniuse.com/#feat=custom-elementsv1). There's probably some polyfill that'll make it work in other browsers.

## Use it

Load this script somewhere in your HTML: `<script src="https://unpkg.com/lil-spinner"></script>` 

And use this in the HTML where you want a spinner to show up: `<lil-spinner></lil-spinner>`

Or, if you are using this in another Svelte 3 component, you can `import Spinner from 'lil-spinner';` (in conjunction with [`@rollup/plugin-node-resolve`](https://github.com/rollup/plugins/tree/master/packages/node-resolve#readme) or something like that).
