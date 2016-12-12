### ifconfig
Information about network interface, state and assigned IP address.
RX (receive)
TX (transmit) packet counts in bytes

### uptime
Information about uptime and load averages

### ping

Tellyou if you can reach a remote system. 

icmp protocol family

### traceroute

`traceroute google.com`

Provides a list of all routes your connections cross when contacting a remote system.

### netstat

On going connections in local system and ports.
`netstat -a` for more information
`netstat -a | grep LISTEN | grep LISTENING`
`netstat -an` don't translate IP address
`netstat -an | more`
`netstat -i` interface statistics

### nslookup

DNS query

### whois

Access public information about a website
`whois google.com`

### hostname

`hostname` system you are logged into
`hostname -d` domain
`hostname -i` ip address

### tcpdump

print out headers of network packets as they reach your saver

### finger

display information about users on a system

`finger`
`finger mchaver` information about a particular user
`finger @google.com` information about a remote machine
`finger mchaver@google.com` information about a user on a remote machine

### nmap

### top

process monitoring tool
cpu usage, memory usage, swap memory, cache size, buffer size, pid, user, commands

### telnet
`telnet hostname.com 53` see if port is poen
### tcpdump
### wireshark
### lsof
which process has a socket open

### ip
### scp

### nc
netcat test connectivity

### iftop

top for network connections

### pcap

packet capture, capture network traffic