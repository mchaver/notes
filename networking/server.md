# Servers

## Proxy Server

A server that acts as an intermediary for requests from clients seeking resources from other servers. The client connects to the proxy server and the proxy server evaluates the request as wy to simplify and control complexity.

- Tunneling proxy - passes requests and responses unmodified.
- Forward proxy - internet-facing proxy used to retrieve from a wide range of sources.
- Reverse proxy - internet-facing proxy used as a front-end to control and protect access to a server on a private network (load-balancing, authentication, decryption, caching, etc.)

#### Open Proxy

Forwaring proxy server that is accessible by any internet user. Anonymous open proxy allows users to conceal their IP address. Degrees of anonymity may vary and it is possible to trick the client into revealing its IP address.

#### Reverse proxies

Reverse proxies appear as normal servers to clients. Requests are fowrded to one or more proxy servers that will handle the request. The response from the proxy server is returned as if it came diretly from the original server, leaving the client no knowledge of the origin servers. 

- Encryption / SSL acceleration. SSL encryption is often performed by a reverse proxy that is equipped with SSL acceleration hardware. A host can provide a single SSL proxy to provide SSL encryption for an arbitrary number of hosts removing the need for a separate SSL Server Certificate for each host

- Load balancing: reverse proxy can distribute the load to serveral web servers, each web server serving its own application area.

- Serve/cache static content: offload the web servers by caching static content.

- Compression: proxy server can optimize and compress the content to speed up the load time.

- Spoon feeding: reduces resource usage caused by slow clients on the web servers by caching the content the web server sent and slowly spoon feedin g the client. Beneficial for dynamically generated pages

- Security: Additional layer of defense that can protect against some OS and Web Server specific attacks.

- Extranet Publishing: communicate to a firewall server internal to an organization

## see

X.509
## References

- [Wikipedia - Proxy server](https://en.wikipedia.org/wiki/Proxy_server)