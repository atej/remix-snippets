# Remix Snippets

Easy to remember, atomic [Remix](https://remix.run) snippets.

> Intended for use in TypeScript projects.

## Usage

Type `rr:` (short for remix.run) in a `.ts` or `.tsx` file to see corresponding snippets.

## Snippets

### Imports

>Snippets related to importing modules.

#### Namespace: `rr:imp`

|Prefix          |Description                              |
|----------------|-----------------------------------------|
|`rr:imp`        |Import common helpers, hooks & components|
|`rr:imp:types`  |Import Remix provided type definitions   |
|`rr:imp:util`   |Import a module from `~/utils`            |


### Types

> Snippets relating to typing data.

#### Namespace: `rr:type`

|Prefix                |Description                        |
|----------------------|-----------------------------------|
|`rr:type:LoaderData`  |Type a route's loader data         |
|`rr:type:ActionData`  |Type a route's action data         |

### Hooks

> Snippets related to Remix hooks.

#### Namespace: `rr:use`

|Prefix                |Description                                              |
|----------------------|---------------------------------------------------------|
|`rr:use:loaderdata`   |Assignment of `useLoaderData`'s return value             |
|`rr:use:d:loaderdata` |Destructured assignment of `useLoaderData`'s return value|
|`rr:use:actiondata`   |Assignment of `useActionData`'s return value             |
|`rr:use:d:actiondata` |Destructured assignment of `useActionData`'s return value|


### Loader

> Snippets related to a route's loader.

#### Namescpace: `rr:loader`

|Prefix                |Description                         |
|----------------------|------------------------------------|
|`rr:loader`           |Define a route's loader             |
|`rr:loader:json`      |Return JSON using the `json` helper |


### Action

> Snippets related to a route's action.

#### Namespace: `rr:action`

|Prefix                 |Description                                          |
|-----------------------|-----------------------------------------------------|
|`rr:action`            |Define a route's action                              |
|`rr:action:file`       |Define a route's file upload action                  |
|`rr:action:redirect`   |Redirect from a route's action                       |
|`rr:action:redirect:o` |Redirect with options (custom status and/or headers) |



### Header

> Snippets related to a route's headers

#### Namespace: `rr:header`

|Prefix                |Description                         |
|----------------------|------------------------------------|
|`rr:headers`          |Define a route's HTTP headers       |


### Cookies

> Snippets related to Remix's `Cookie` API

#### Namespace: `rr:cookie`

|Prefix                |Description                         |
|----------------------|------------------------------------|
|`rr:cookie:create`    | Create a cookie                    |
