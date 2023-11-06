# Public API Search
This project will return a list of public APIs and related information and an API matching the provided name.

---
## Setup
```
npm i
npm start
```

## Testing
```
npm test
npm start test:watch
```

---

## Usage
This api provides a two endpoints which allows for looking up public api listed in the [public api registry](api.publicapis.org). Specific apis can be looked up using their name

### Fetch All
```
<hostname>/api
```

**Returns**
```ts
[{
	"API": String,
	"Description": String,
	"Auth": String,
	"HTTPS": Boolean
	"Cors": String
	"Link": UrlString,
	"Category": String
}, ...]
```

### Fetch By Name
```
<hostname>/api/:API
```

**Parameters**
| key | type | description |
| --- | --- | --- |
| :API | string | The name privided in the "API" key |

**Returns:**
```ts
{
	"API": String,
	"Description": String,
	"Auth": String,
	"HTTPS": Boolean
	"Cors": String
	"Link": UrlString,
	"Category": String
}
```