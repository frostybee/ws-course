---
title: HTTP Verbs
description: HTTP methods and their usage in REST Web services
sidebar:
    label: "HTTP Verbs"
    order: 1
---

## What Are HTTP Verbs?

HTTP verbs (also called HTTP methods) define the **type** of **operation** to be performed on a resource in REST Web services. While the HTTP specification defines many verbs, RESTful APIs typically use a **core set of five verbs** that map to CRUD operations.

## Core HTTP Verbs for REST

### GET - Retrieve Data
- **Purpose**: Retrieve representation of a resource
- **Safe**: Yes (no side effects)
- **Idempotent**: Yes (multiple calls return same result)
- **Request Body**: Not used
- **Success Status**: 200 OK

**Examples:**
- `GET /api/planets` - Retrieve all planets
- `GET /api/planets/123` - Retrieve planet with ID 123

---

### POST - Create Resources
- **Purpose**: Create a new resource
- **Safe**: No (has side effects)
- **Idempotent**: No (multiple calls create multiple resources)
- **Request Body**: Contains resource data
- **Success Status**: 201 Created

**Examples:**
- `POST /api/planets` - Create a new planet
- Request body contains planet data (name, diameter, distance from sun, etc.)

### PUT - Update/Replace Resources
- **Purpose**: Update existing resource or create if doesn't exist
- **Safe**: No (has side effects)
- **Idempotent**: Yes (multiple calls have same effect)
- **Request Body**: Contains complete resource representation
- **Success Status**: 200 OK (update) or 201 Created (new resource)

**Examples:**
- `PUT /api/planets/123` - Update planet 123 with complete data
- Request body contains all planet fields

--- 

### DELETE - Remove Resources
- **Purpose**: Delete a resource
- **Safe**: No (has side effects)
- **Idempotent**: Yes (deleting already deleted resource is safe)
- **Request Body**: Not typically used
- **Success Status**: 204 No Content or 200 OK

**Examples:**
- `DELETE /api/planets/123` - Delete planet with ID 123

### PATCH - Partial Updates
- **Purpose**: Apply partial modifications to a resource
- **Safe**: No (has side effects)
- **Idempotent**: Depends on implementation
- **Request Body**: Contains partial resource data
- **Success Status**: 200 OK or 204 No Content

**Examples:**
- `PATCH /api/planets/123` - Update only specific fields of planet 123
- Request body contains only fields to update

--- 

## REST Verb Usage Matrix

| Endpoint | GET | POST | PUT | DELETE | PATCH |
|----------|-----|------|-----|---------|--------|
| `/api/planets` | List all planets | Create new planet | Bulk update (uncommon) | Delete all (dangerous) | Bulk partial update |
| `/api/planets/123` | Get planet 123 | ❌ Method not allowed | Update/create planet 123 | Delete planet 123 | Partially update planet 123 |

---

## Key Principles

### Idempotency
An operation is idempotent if calling it multiple times produces the same result:
- **Idempotent**: GET, PUT, DELETE
- **Not Idempotent**: POST, PATCH (usually)

### Safety
A safe method doesn't modify server state:
- **Safe**: GET
- **Unsafe**: POST, PUT, DELETE, PATCH

### Proper Resource Design
- Use nouns for resources, not verbs
- Let HTTP verbs indicate the action
- Example: `GET /api/planets/123` not `GET /api/getPlanet/123`

---

## Common Mistakes to Avoid

1. **Using GET for operations that modify data**
   ```
   ❌ GET /api/planets/123/delete
   ✅ DELETE /api/planets/123
   ```

2. **Using POST for everything**
   ```
   ❌ POST /api/getPlanetById
   ✅ GET /api/planets/123
   ```

3. **Ignoring idempotency**
   - PUT should replace entire resource
   - DELETE should be safe to call multiple times
