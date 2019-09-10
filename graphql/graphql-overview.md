# GraphQL Overview

::: warning Beta

As we harden our types, expect minimal but possibly breaking changes.

:::

## What is GraphQL?
From the wonderful [How to GraphQL](https://www.howtographql.com/basics/0-introduction/) series:

GraphQL is a new API standard that provides a more efficient, powerful and flexible alternative to REST. It was developed and open-sourced by Facebook and is now maintained by a large community of companies and individuals from all over the world.

At its core, GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API. Instead of multiple endpoints that return fixed data structures, a GraphQL server only exposes a single endpoint and responds with precisely the data a client asked for.

## How does GraphQL compare to REST?
GraphQL and REST are both kinds of APIs. In many ways, they solve similar problems. But let's focus on the comparative differences for a moment. Three critical points of difference:

### Schemas and types mean fewer bugs
With REST, exposing API functionality requires developers to implement complicated "hypermedia" patterns. Most of the time, however, REST APIs simply do not expose functionality in automated ways. In contrast, GraphQL lets API consumers download a schema -- a complete representation of all of the functionality made available by the API. GraphQL APIs therefore offer strong predictability, which means fewer bugs!

### Built-in documentation means developer friendliness
GraphQL provides built-in ways of documenting API features via a field type called describe. Practically speaking, this means that every object in the system, and all of its fields, contain rich, navigable, plain-language descriptions of its functionality. This includes fields where the values might be one of a specific list (say, one of the currencies supported by Universe, or the state of an order). A richly documented, navigable API means developer friendliness and faster development times.

### Fewer requests means faster apps
In the REST paradigm, it's very typical to need to gather data by accessing multiple endpoints. For example, perhaps we have an `/orders/<id>` endpoint to fetch order data. An order might have a relationship to an object called ticket. We might represent access to that relationship at `/users/<id>/orders`. There might also be a buyer belonging to each order, available at `/orders/<id>/buyer`. We might need to make three separate requests to collect the information we need. In GraphQL, this is unnecessary - we can make a single request to the server, for exactly the data we need - including relationships. This means fewer network requests, and so faster apps.

## Why does Tribe use GraphQL?

GraphQL is strongly typed. Every entity available in the system defines exactly the structure of data it provides. Many bugs are created by type mismatching between client code and API fields, prime example mobile apps accidentally looking for a missing field in a JSON response might produce a runtime crash. With a strongly typed schema, queries can be validated and you can provide a guarantee that the field you need is actually going to be returned in the query you’re making (see a mobile example and a JavaScript example with Flow / TypeScript)

GraphQL provides self-documenting interfaces; docs are automatically generated and the developer can provide inline comments of types for more verbosity. This also gives the ability for client apps to generate the schema and never have to provide models or type definitions of their own.

GraphQL standardizes API responses, so every response is of the same format. This improves error handling, response parsing, paginated endpoints, etc.

GraphQL solves the expensive endpoint problem, more specifically slow side loading of unneeded data. With a complex architecture of data, there exists a lot of associations creating unnecessary joins and slowing queries down. GraphQL provides specifications and conventions for arguments, connections between objects (relationships), variables, fragments (for query compostability) to make sure only needed data is returned and returned fast.

Finally, GraphQL provides a way for Tribe to abstractly layer over new interfaces into our existing data structures. It gives us a fresh conceptual start so we can make sure the data associations make sense to the developer without having to explain internal legacy naming.
