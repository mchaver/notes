# HTTPS

- HTTP over TLS
- HTTP over SSL
- HTTP Secure

Protocol for secure communication over a computer network. HTTPS is a connection encrypted by Transport Layer Security (previoulsy Secure Sockets Layer). Motivation is authetnication of the visited website and protection of the privacy and integrity of exchagned data. Protects against man-in-the-middle attacks. Provides bidirectional encryption of communications between a client and server.

HTTPS URI (uniform resource identifier) has identical syntax to the standar HTTP scheme. However, it signals the browser to use an added encryption layer of SSL/TLS to protect the traffic. It creates a secure channel over an insecure network. Ensures protection from eavesdroppers and man-in-the-middle attacks.

However, an eavesdropper can infer the IP address and port number of the web server that one is communicating with as well as the amount (data transferred) and duration (length of sessions) though not the content.

Web browsers know how to trust HTTPS websites based on certificate authorities that come pre-installed in the software. A user should trust HTTPS connection to a website iff:


- The user trusts that the browser software correctly implements HTTPS with correctly pre-installed certificate authorities.
- The user trusts the certificate authority to vouch only for legitimate websites.
- The website provides a valid certificate, which means it was signed by a trusted authority.
- The certificate correctly identifies the website (e.g., when the browser visits "https://example.com", the received certificate is properly for "example.com" and not some other entity).
- The user trusts that the protocol's encryption layer (SSL/TLS) is sufficiently secure against eavesdroppers.

Important over insecure networks (public Wi_Fi) as anyone on the same local network can packet-sniff and discover sensitive information not protected by HTTPS. Many WLAN networks use packet injection to serve their own ads. This can be exploited maliciously to inject malware.

Important for Tor anonymity newtork. HTTPS everywhere.

### Difference from HTTP

Uses port 443 by default.

### Network layers

Highest layer of TCP/IP model, the application layer as does TLS. Everything in HTTPS message is encrypted including the headers and the request/response load. 

### Setup 

Adminstrator must create a public key certificate for the web server. The certificate must be signed by a trusted certificate authority. 

[HTTPS](https://en.wikipedia.org/wiki/HTTPS)

packet-sniff
[Packet analyzer](https://en.wikipedia.org/wiki/Packet_analyzer)
[Packet injection](https://en.wikipedia.org/wiki/Packet_injection)
[X.509](https://en.wikipedia.org/wiki/X.509)
[Chosen-ciphertexr attack](https://en.wikipedia.org/wiki/Chosen-ciphertext_attack)
[Man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
[Forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy)
[Certificate authority](https://en.wikipedia.org/wiki/Certificate_authority)
[Public key certificate](https://en.wikipedia.org/wiki/Public_key_certificate)
[Root certificate](https://en.wikipedia.org/wiki/Root_certificate)