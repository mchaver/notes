FTP 
exploitable nature
insecurity

Secure FTP (S/FTP)
H SCP

Lightweight Directory Access Protocol (LDAP)
security vulnerabilityies

Active Directory
eDirectory

IIS Servers

Secure Sockets Layer (SSL)

##Hypertext Transfer Protocol (HTTP)

request-response protocol, client requests HTTP to the server, server provides resoures such as HTML. 
Web browser is a user agent
stateless protocol

####HTTP Session

A sequence of network request-response transaction. An HTTP client intiates a request by establishing a TCP connection, typically on port 80 (sometimes 8080). When receiving a request, the server sends back a status line and a message. The body of the mesage is typically the requested resource or an error message.

####HTTP Authentication

challenge-reponse mechanism where the server identifices and isses a challenge vefore serving the request.

####Request Methods

- GET
- HEAD
- POST
- PUT
- DELETE
- TRACE
- OPTIONS
- CONNECT
- PATCH

####Persistent Connections
In HTTP/0.9 and HTTP/1.0, the connection is closed after a single request-response pair. 
HTTP/1.1 introduced a keep-alive-mechanism in which a connection can be reusued for more than one request. Reudces request latency because the client does not need to renegotiate the TCP 3-Way-Handshake after the first request.

##Message Format

####Request message

- Request line.
- Request header fields.
- Empty line.
- Optional message body.

####Response message

- Status line with status code and message.
- Response header fields.
- Empty line.
- Optional message body.


## Web cache

HTTP cache

temporary storage of web documents to reduce bandwidth usage, server load and lag.

#### Forward cache (client side)

Caches heavily accessed items. Web proxy between the client and server can evaluate HTTP headers and choose whether to store web content.

#### Reverse position system (content provider)

Sits in front of web servers and applications to accelearte requests from the Internet to reduce peak web server load. CDN retains copies of web content at various points through the network. Search engines may also cache websites.

#### Cache Control

##### Freshness
Allows a reposnse to be used without rechecking it on the origin server. It can be controlled by both the server and the client.

##### Validation
Use to check whether a cached reponse is good after it becomes stale.

##### Invalidation
Side effect of another request that passes through the cache.
idempotent ; multiple identical requests should have the same effect as a single request (state of the system after the request has completed

## Web Accelerator

A proxy server that reduces web site access time (hardware or software). 

##### Techniques

- Cache frequently
- Preemptively resolve hostnames present in a document
- Prefetch documents that are likely to be accessed
- Compress documents
- Optimize code
- Filter out ads
- Maintain persistent TCP connection
- TCP acceleration

Basic access authentication
Digest access authentication
Authentication Realms

resolve host names
User agent
HTTP Secure
chunked transfer encoding
HTTP pipelining
Byte serving
web robots
web crawlers
web cache
cross-site tracing
upstream servers
proxy servers
private network
Internet Protocol Suite
transport layer
TCP Transmission Control Protocol
User Datagram Protocol (UDP), for example in HTTPU and Simple Service Discovery Protocol (SSDP).
 uniform resource locators (URLs), using the uniform resource identifier (URI) 
HTTP/1.1
HTTP/2
Microsoft IIS supports a proprietary "TRACK" method
http compression
IP address

 Internet media type
 gzip
 gopher protocol
 spdy protocol
 
 
 ## References
 
 - [Wikipedia - Web accelerator](https://en.wikipedia.org/wiki/Web_accelerator)
 - [Wikipedia - Web cache](https://en.wikipedia.org/wiki/Web_cache)