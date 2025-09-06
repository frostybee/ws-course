---
title: HTTP Status Codes for REST APIs
description: HTTP status codes and their proper usage in RESTful Web services
sidebar:
    label: "HTTP Status Codes"
    order: 2
---

## What Are HTTP Status Codes?

- HTTP status codes are **three-digit numbers** returned by web servers to indicate the outcome of a client's request. 
- In REST APIs, proper use of status codes helps clients understand what happened and how to respond appropriately.

---

## Status Code Categories

HTTP status codes are organized into five categories based on their first digit:

### 1xx - Informational
Indicate that the request was received and is being processed.
- **100 Continue** - Request headers received, client should send request body
- **101 Switching Protocols** - Server is switching protocols as requested

### 2xx - Success
The request was successfully received, understood, and accepted.
- **200 OK** - Request successful, response body contains requested data
- **201 Created** - Resource successfully created
- **202 Accepted** - Request accepted for processing, but not completed
- **204 No Content** - Request successful, no response body needed

### 3xx - Redirection  
Further action needed to complete the request.
- **301 Moved Permanently** - Resource permanently moved to new URL
- **302 Found** - Resource temporarily at different URL
- **304 Not Modified** - Resource unchanged since last request (caching)

### 4xx - Client Error
The client made an error in their request.
- **400 Bad Request** - Malformed request syntax or invalid data
- **401 Unauthorized** - Authentication required
- **403 Forbidden** - Request understood but access denied
- **404 Not Found** - Requested resource doesn't exist
- **405 Method Not Allowed** - HTTP method not supported for this resource

### 5xx - Server Error
The server failed to fulfill a valid request.
- **500 Internal Server Error** - Generic server error
- **502 Bad Gateway** - Invalid response from upstream server
- **503 Service Unavailable** - Server temporarily unavailable

---

## REST API Status Codes by HTTP Method

### GET - Retrieve Resources

| Status Code | When to Use | Response Body |
|-------------|-------------|---------------|
| **200 OK** | Successfully retrieved resource(s) | Resource data |
| **304 Not Modified** | Resource unchanged (conditional GET) | Empty |
| **400 Bad Request** | Invalid query parameters or request format | Error details |
| **401 Unauthorized** | Authentication required | Error message |
| **403 Forbidden** | Access denied to authenticated user | Error message |
| **404 Not Found** | Resource doesn't exist | Error message |
| **406 Not Acceptable** | Requested format not available | Error message |
| **500 Internal Server Error** | Server error during retrieval | Error message |

**Examples:**
```http
GET /api/planets/123
200 OK - Returns planet data
404 Not Found - Planet doesn't exist
```

---

### POST - Create Resources

| Status Code | When to Use | Response Body |
|-------------|-------------|---------------|
| **201 Created** | Resource successfully created | Created resource + Location header |
| **202 Accepted** | Creation request accepted, processing async | Status information |
| **400 Bad Request** | Invalid or missing required data | Validation errors |
| **401 Unauthorized** | Authentication required | Error message |
| **403 Forbidden** | Not authorized to create resources | Error message |
| **409 Conflict** | Resource already exists or conflicts with current state | Error details |
| **422 Unprocessable Entity** | Valid syntax but semantic errors | Validation errors |
| **500 Internal Server Error** | Server error during creation | Error message |

**Examples:**
```http
POST /api/planets
201 Created - Planet created successfully
400 Bad Request - Missing required field "name"
409 Conflict - Planet with this name already exists
```

---

### PUT - Update/Replace Resources

| Status Code | When to Use | Response Body |
|-------------|-------------|---------------|
| **200 OK** | Resource successfully updated | Updated resource |
| **201 Created** | Resource created (if it didn't exist) | Created resource |
| **204 No Content** | Resource updated, no response body needed | Empty |
| **400 Bad Request** | Invalid data or request format | Error details |
| **401 Unauthorized** | Authentication required | Error message |
| **403 Forbidden** | Not authorized to update resource | Error message |
| **404 Not Found** | Resource to update doesn't exist | Error message |
| **409 Conflict** | Update conflicts with current resource state | Error details |
| **422 Unprocessable Entity** | Valid syntax but semantic errors | Validation errors |
| **500 Internal Server Error** | Server error during update | Error message |

**Examples:**
```http
PUT /api/planets/123
200 OK - Planet updated successfully
404 Not Found - Planet doesn't exist
422 Unprocessable Entity - Invalid diameter value
```

---

### PATCH - Partial Updates

| Status Code | When to Use | Response Body |
|-------------|-------------|---------------|
| **200 OK** | Partial update successful | Updated resource |
| **204 No Content** | Partial update successful, no response body | Empty |
| **400 Bad Request** | Invalid patch format or data | Error details |
| **401 Unauthorized** | Authentication required | Error message |
| **403 Forbidden** | Not authorized to update resource | Error message |
| **404 Not Found** | Resource to patch doesn't exist | Error message |
| **409 Conflict** | Patch conflicts with current state | Error details |
| **422 Unprocessable Entity** | Invalid field values | Validation errors |
| **500 Internal Server Error** | Server error during patch | Error message |

**Examples:**
```http
PATCH /api/planets/123
200 OK - Planet diameter updated
404 Not Found - Planet doesn't exist
```

---

### DELETE - Remove Resources

| Status Code | When to Use | Response Body |
|-------------|-------------|---------------|
| **200 OK** | Resource deleted, returning final state | Final resource state |
| **204 No Content** | Resource successfully deleted | Empty |
| **202 Accepted** | Delete request accepted, processing async | Status information |
| **401 Unauthorized** | Authentication required | Error message |
| **403 Forbidden** | Not authorized to delete resource | Error message |
| **404 Not Found** | Resource to delete doesn't exist | Error message |
| **409 Conflict** | Resource can't be deleted due to dependencies | Error details |
| **500 Internal Server Error** | Server error during deletion | Error message |

**Examples:**
```http
DELETE /api/planets/123
204 No Content - Planet deleted successfully
404 Not Found - Planet doesn't exist
409 Conflict - Planet has associated moons, can't delete
```

---

## Additional Important Status Codes

### 429 Too Many Requests
Used for rate limiting when client exceeds allowed request frequency.
```http
429 Too Many Requests
Retry-After: 60
```

### 415 Unsupported Media Type
When the request payload format is not supported.
```http
POST /api/planets
Content-Type: application/xml
415 Unsupported Media Type - Only JSON supported
```

### 412 Precondition Failed
When conditional headers (If-Match, If-Unmodified-Since) fail.
```http
PUT /api/planets/123
If-Match: "etag123"
412 Precondition Failed - Resource was modified
```
