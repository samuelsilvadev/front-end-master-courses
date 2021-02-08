# Next.js course from Frontend masters

> [The course](https://hendrixer.github.io/nextjs-course/)

## Testing the notes api

### GET one

```ssh
curl http://host:port/api/notes/{noteId}
```

### GET all

```ssh
curl http://host:port/api/notes
```

### POST

```ssh
curl -X POST http://host:port/api/notes -H "Content-Type: application/json" -d '{ "title": "something to get done" }'
```

### PATCH

```ssh
curl -X PATCH http://host:port/api/notes/{noteId} -H "Content-Type: application/json" -d '{ "title": "updated" }'
```

### DELETE

```ssh
curl -X DELETE http://host:port/api/notes/{noteId}
```
