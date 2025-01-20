---
title: HTTP Status Codes for CRUD Operations
description: A set of useful resources that helps you understand the material.
sidebar:
    label: "HTTP Status Codes"
    order: 2
---

## What Are HTTP Status Codes?

---

HTTP status codes are three-digit numbers sent by a web server in response to a client's request. They provide information about **the outcome** of the request and help determine what action should be taken next. 

Here's a quick overview of the main categories:

1. **Informational (100–199)**: These codes indicate that the request was received and is being processed.
   - **100 Continue**: The initial part of the request has been received, and the client should continue with the rest of the request.

2. **Success (200–299)**: These codes mean that the request was successfully received, understood, and accepted.
   - **200 OK**: The request was successful, and the server returned the requested data.
   - **201 Created**: The request was successful, and a new resource was created.

3. **Redirection (300–399)**: These codes indicate that further action is needed to fulfill the request, usually involving a redirection.
   - **301 Moved Permanently**: The resource has been permanently moved to a new URL.
   - **302 Found**: The resource is temporarily located at a different URL.

4. **Client Error (400–499)**: These codes indicate that there was an error with the client's request.
   - **400 Bad Request**: The server could not understand the request due to invalid syntax.
   - **404 Not Found**: The requested resource could not be found on the server.

5. **Server Error (500–599)**: These codes indicate that the server failed to fulfill a valid request.
   - **500 Internal Server Error**: The server encountered an unexpected condition that prevented it from fulfilling the request.
   - **503 Service Unavailable**: The server is currently unable to handle the request due to temporary overload or maintenance.

Each status code provides a specific piece of information about the response and helps both the client and server understand what happened during the request-response cycle.


The following table lists the HTTP response status codes for the `GET` (retrieve), `POST` (create), `PUT` (modify), and `DELETE` operations.

<div>
    <table>
        <colgroup>
            <col>
            <col>
            <col>
            <col>
        </colgroup>
        <thead>
            <tr>
                <th>Response Code</th>
                <th>HTTP Operation</th>
                <th>Response Body Contents</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>200</td>
                <td>GET, PUT, DELETE</td>
                <td>Resource</td>
                <td>No error, operation successful.</td>
            </tr>
            <tr>
                <td>201 Created</td>
                <td>POST</td>
                <td>Resource that was created</td>
                <td>Successful creation of a resource. The Location HTTP Header can provide a link to the newly created
                    resource.</td>
            </tr>
            <tr>
                <td>204 No Content</td>
                <td>POST, PUT, DELETE</td>
                <td>N/A</td>
                <td>The request was processed successfully, but no response body is needed.</td>
            </tr>
            <tr>
                <td>304 Not Modified</td>
                <td>conditional GET</td>
                <td>N/A</td>
                <td>Resource has not been modified. <span style="line-height: 1.4285;">Used when HTTP caching headers
                        are in play.</span></td>
            </tr>
            <tr>
                <td>400 Bad Request</td>
                <td>GET, POST, PUT, DELETE</td>
                <td>Error Message</td>
                <td>Malformed syntax or a bad query.</td>
            </tr>
            <tr>
                <td>401 Unauthorized</td>
                <td>GET, POST, PUT, DELETE</td>
                <td>Error Message</td>
                <td>Action requires user authentication.</td>
            </tr>
            <tr>
                <td>403 Forbidden</td>
                <td>GET, POST, PUT, DELETE</td>
                <td>Error Message</td>
                <td>
                    When authentication succeeded but authenticated user doesn't have access to the resource.
                </td>
            </tr>
            <tr>
                <td>404 Not Found</td>
                <td>GET, POST, PUT, DELETE</td>
                <td>Error Message</td>
                <td>Resource not found.</td>
            </tr>
            <tr>
                <td>405 Not Allowed</td>
                <td>GET, POST, PUT, DELETE</td>
                <td>Error Message</td>
                <td>Method not allowed on resource.</td>
            </tr>
            <tr>
                <td>406 Not Acceptable</td>
                <td>GET</td>
                <td>Error Message</td>
                <td>Requested representation not available for the resource.</td>
            </tr>
            <tr>
                <td>408 Request Timeout</td>
                <td>GET, POST</td>
                <td>Error Message</td>
                <td>Request has timed out.</td>
            </tr>
            <tr>
                <td>409 Resource Conflict</td>
                <td>PUT, PUT, DELETE</td>
                <td>Error Message</td>
                <td>State of the resource doesn't permit request.</td>
            </tr>
            <tr>
                <td>410 Gone</td>
                <td>GET, PUT</td>
                <td>Error Message</td>
                <td>
                    Indicates that the resource at this end point is no longer available. Useful as a blanket response
                    for old API versions
                </td>
            </tr>
            <tr>
                <td>411 Length Required</td>
                <td>POST, PUT</td>
                <td>Error Message</td>
                <td>The server needs to know the size of the entity body and it should be specified in the Content
                    Length header.</td>
            </tr>
            <tr>
                <td>412 Precondition failed</td>
                <td>GET</td>
                <td>Error Message</td>
                <td>Operation not completed because preconditions were not met.</td>
            </tr>
            <tr>
                <td>415 Unsupported Type</td>
                <td>POST, PUT</td>
                <td>Error Message</td>
                <td>Representation not supported for the resource.</td>
            </tr>
            <tr>
                <td>422 Unprocessable Entity</td>
                <td>POST, PUT</td>
                <td>Error Message</td>
                <td>
                    Used for validation errors
                </td>
            </tr>
            <tr>
                <td>500 Server Error</td>
                <td>GET, POST, PUT</td>
                <td>Error Message</td>
                <td>Internal server error.</td>
            </tr>
            <tr>
                <td>501 Not Implemented</td>
                <td>POST, PUT, DELETE</td>
                <td>Error Message</td>
                <td>Requested HTTP operation not supported.</td>
            </tr>
        </tbody>
    </table>
</div>
