---
title: REST vs RPC - API Design Paradigms
description: Understanding the fundamental differences between REST and RPC-style APIs
sidebar:
    label: "REST vs RPC"
    order: 2
---



## What is RPC?

**RPC (Remote Procedure Call)** is a programming paradigm that allows a program to execute a procedure (function) on another computer as if it were a local function call. The goal is to make distributed computing feel like local programming.

### RPC History and Evolution

**1970s-1980s**: RPC was first developed at Xerox PARC and later standardized by Sun Microsystems. The concept was revolutionary; it allowed programmers to call functions on remote machines without worrying about network details.

**Key milestones:**
- **1984**: Sun RPC (ONC RPC) became widely adopted
- **1990s**: CORBA (Common Object Request Broker Architecture) for object-oriented RPC
- **1990s**: Microsoft DCOM (Distributed Component Object Model)
- **2000s**: XML-RPC and SOAP brought RPC to the web
- **2010s**: JSON-RPC and gRPC modernized the approach

### How Traditional RPC Works
```
Client Code:
result = calculateTax(income, country)

Network Layer:
1. Serialize parameters (income, country)
2. Send to remote server
3. Server executes calculateTax() function
4. Return serialized result
5. Client deserializes result
```

The programmer writes code as if calling a local function, but the RPC framework handles all the network communication behind the scenes.

---

## What is the Difference?

**REST** and **RPC** represent two fundamentally different approaches to designing web APIs:

- **REST (Representational State Transfer):** Resource-oriented architecture
- **RPC (Remote Procedure Call):** Action-oriented architecture

Understanding these paradigms helps explain why REST uses different HTTP verbs instead of **just POST** for everything.

---

## Core Philosophy Differences

### REST: Resource-Oriented Thinking
- **Focus**: What **things** (resources) does your system manage?
- **Approach**: Expose resources and let HTTP verbs define operations
- **Example**: "I have planets, and I want to manipulate them"

### RPC: Action-Oriented Thinking  
- **Focus**: What **actions** can your system perform?
- **Approach**: Expose functions/procedures that can be called remotely
- **Example**: "I have functions that do things with planets"

---

## URL Structure Comparison

### REST Approach
```http
GET    /api/planets           # Get all planets
GET    /api/planets/123       # Get specific planet
POST   /api/planets           # Create new planet
PUT    /api/planets/123       # Update planet 123
DELETE /api/planets/123       # Delete planet 123
```

**Key characteristics:**
- URLs represent **resources** (nouns)
- HTTP verbs indicate **operations**
- Same URL, different operations based on HTTP method

### RPC Approach
```http
POST /api/getAllPlanets
POST /api/getPlanetById
POST /api/createPlanet
POST /api/updatePlanet
POST /api/deletePlanet
```

**Key characteristics:**
- URLs represent **actions** (verbs)
- All operations use POST
- Different URL for each function

---

## Detailed API Comparison

Let's compare how both approaches handle planet management:

### REST API Design

#### Get All Planets
```http
GET /api/planets
Accept: application/json

Response: 200 OK
[
  {"id": 1, "name": "Mercury", "diameter": 4879},
  {"id": 2, "name": "Venus", "diameter": 12104}
]
```

#### Get Single Planet
```http
GET /api/planets/123
Accept: application/json

Response: 200 OK
{"id": 123, "name": "Earth", "diameter": 12742}
```

#### Create New Planet
```http
POST /api/planets
Content-Type: application/json

{
  "name": "Kepler-442b",
  "diameter": 13800,
  "distanceFromStar": 1.2
}

Response: 201 Created
Location: /api/planets/456
```

#### Update Planet
```http
PUT /api/planets/123
Content-Type: application/json

{
  "name": "Earth",
  "diameter": 12742,
  "moons": 1,
  "atmosphere": "nitrogen-oxygen"
}

Response: 200 OK
```

#### Delete Planet
```http
DELETE /api/planets/123

Response: 204 No Content
```

---

### RPC API Design

#### Get All Planets
```http
POST /api/getAllPlanets
Content-Type: application/json

{}

Response: 200 OK
{
  "result": [
    {"id": 1, "name": "Mercury", "diameter": 4879},
    {"id": 2, "name": "Venus", "diameter": 12104}
  ]
}
```

#### Get Single Planet
```http
POST /api/getPlanetById
Content-Type: application/json

{
  "planetId": 123
}

Response: 200 OK
{
  "result": {"id": 123, "name": "Earth", "diameter": 12742}
}
```

#### Create New Planet
```http
POST /api/createPlanet
Content-Type: application/json

{
  "name": "Kepler-442b",
  "diameter": 13800,
  "distanceFromStar": 1.2
}

Response: 200 OK
{
  "result": {"id": 456, "message": "Planet created successfully"}
}
```

#### Update Planet
```http
POST /api/updatePlanet
Content-Type: application/json

{
  "planetId": 123,
  "name": "Earth",
  "diameter": 12742,
  "moons": 1,
  "atmosphere": "nitrogen-oxygen"
}

Response: 200 OK
{
  "result": {"message": "Planet updated successfully"}
}
```

#### Delete Planet
```http
POST /api/deletePlanet
Content-Type: application/json

{
  "planetId": 123
}

Response: 200 OK
{
  "result": {"message": "Planet deleted successfully"}
}
```

---

## Key Advantages of REST

### 1. HTTP Semantics and Caching
```http
# REST - GET requests can be cached by browsers/CDNs
GET /api/planets/123
Cache-Control: max-age=3600

# RPC - POST requests are never cached
POST /api/getPlanetById
# No caching possible
```

### 2. Idempotency Guarantees
```http
# REST - Safe to retry GET, PUT, DELETE
GET /api/planets/123     # Always safe to call
PUT /api/planets/123     # Same result if called multiple times
DELETE /api/planets/123  # Safe to retry if network fails

# RPC - No guarantees about safety of retrying
POST /api/getPlanetById  # What if this has side effects?
POST /api/updatePlanet   # What happens if called twice?
```

### 3. Clear Resource Relationships
```http
# REST - Hierarchical and intuitive
GET /api/planets/123/moons          # Get moons of planet 123
GET /api/planets/123/moons/456      # Get specific moon
POST /api/planets/123/moons         # Add moon to planet

# RPC - Relationships less clear
POST /api/getMoonsOfPlanet
POST /api/getMoonById
POST /api/addMoonToPlanet
```

### 4. Standard HTTP Status Codes
```http
# REST - Uses HTTP status codes meaningfully
GET /api/planets/999
404 Not Found               # Planet doesn't exist

PUT /api/planets/123
422 Unprocessable Entity    # Validation failed

# RPC - Everything returns 200 OK
POST /api/getPlanetById
200 OK
{"error": "Planet not found", "code": 404}
```

### 5. Uniform Interface
```http
# REST - Same patterns across all resources
GET /api/planets      GET /api/stars       GET /api/galaxies
POST /api/planets     POST /api/stars      POST /api/galaxies
PUT /api/planets/123  PUT /api/stars/456   PUT /api/galaxies/789

# RPC - Each resource may have different function names
POST /api/getAllPlanets    POST /api/listStars        POST /api/fetchGalaxies
POST /api/createPlanet     POST /api/addStar          POST /api/makeGalaxy
POST /api/updatePlanet     POST /api/modifyStar       POST /api/editGalaxy
```

---

## When to Use Each Approach

### Choose REST When:
- Building **CRUD-heavy applications**
- Need **caching benefits** (GET requests)
- Want **standard HTTP semantics**
- Building **public APIs** for multiple clients
- Need **discoverable resources**
- Want **stateless communication**

**Examples:**
- E-commerce platforms
- Content management systems
- Social media APIs
- Mobile app backends

### Choose RPC When:
- **Complex business operations** that don't map to CRUD
- **Internal microservices** communication
- Need **high performance** (binary protocols like gRPC)
- **Action-oriented** workflows
- **Real-time operations**

**Examples:**
- `calculateShippingCost()`
- `processPayment()`
- `sendNotification()`
- `generateReport()`

---

## Hybrid Approaches

Many real-world APIs combine both approaches:

```http
# RESTful resource operations
GET /api/planets/123
PUT /api/planets/123
DELETE /api/planets/123

# RPC-style actions when CRUD doesn't fit
POST /api/planets/123/actions/calculate-orbit
POST /api/planets/123/actions/simulate-climate
POST /api/planets/123/actions/send-probe
```

---

## Migration Considerations

### From RPC to REST

**Common RPC anti-patterns to avoid:**
```http
# ❌ RPC-style URLs in REST
POST /api/createPlanet
GET /api/getPlanet/123
POST /api/deletePlanet

# ✅ RESTful approach
POST /api/planets
GET /api/planets/123  
DELETE /api/planets/123
```
---

## Summary

| Aspect | REST | RPC |
|--------|------|-----|
| **Philosophy** | Resource-oriented | Action-oriented |
| **URLs** | Nouns (resources) | Verbs (actions) |
| **HTTP Methods** | Full spectrum (GET, POST, PUT, DELETE) | Mostly POST |
| **Caching** | Excellent (GET requests) | Limited |
| **Idempotency** | Built-in guarantees | No guarantees |
| **Status Codes** | Semantic HTTP codes | Usually 200 OK |
| **Discoverability** | High | Low |
| **Learning Curve** | Medium | Low |
| **Best For** | CRUD operations, public APIs | Complex actions, internal services |

:::tip[Key Insight]
REST isn't just about using different HTTP verbs; it's about thinking in terms of **resources and their state** rather than **remote function calls**. This fundamental shift leads to more predictable, cacheable, and maintainable APIs.
:::
