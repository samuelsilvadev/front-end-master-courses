# core concepts

1 - Entry

-   Is the first file that will trigger the modules loading.

2 - Output

-   It's where I can tell webpack of WHERE and HOW it should distribute the compilations.

3 - Loaders + Rules

-   rule:

-   It's a way to tell webpack on HOW to transform a specific file.

    -   Each rule is composed by a 'rule set'
    -   a rule set can have
        -   test, use, include, exclude, issuer, enforce

-   loaders

-   are the functions that will transform our code. They take a source and return a source.
-   when chained it will be executed from right to left

the next rule can be read as

```js
{
	use: [style, css, less];
}

// reading the object above

style(css(less()));
```

-   plugins

-   Adds additional functionality to compilations
-   Has access to the CompilerAPI
