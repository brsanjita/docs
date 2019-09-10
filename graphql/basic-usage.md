# Basic Usage

::: warning Beta

As we harden our types, expect minimal but possibly breaking changes.

:::


## The Easy Way!
The simplest way to get started is to use the interactive GraphQL Explorer. This is a live, working playground where you can construct and execute queries. If you're signed into tribe, your user account will automatically be authenticated.

## Endpoint
The current GraphQL API endpoint is https://graph.gettribe.com/graphql. All requests must be HTTP POST requests with application/json encoded bodies.

## Authentication
GraphQL requests can be authorization using an API Access Token with the GraphQL scope enabled. Pass the token in your GraphQL request using the Authorization HTTP header with a value `Bearer <token>`.

### cURL Example With Authorization

```curl
curl https://graph.gettribe.com/graphql \
  -H "Authorization: Bearer $token" \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ user(id: \"4f5e06cb2078f9730c000014\") { firstName } }"}'
```

response:

```
{
  "data": {
    "user": {
      "firstName": "Balamurali"
    }
  }
}
```