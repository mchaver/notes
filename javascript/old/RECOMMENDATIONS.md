##Retrieving data without relaoding the page
=============
#####Ajax
The client requests data from the server without reloading the page.

#####Long Polling
Ajax requests data from the server with a timer. If data is received then the timer stops, performs actions, and the client can poll again.

#####Comet (Reverse-Ajax)
The server pushes data to the client without request.

#####WebSockets (HTML5)
Open connection between the server and the client. Good for realtime requirements (chat, messenger, games).


##Stackoverflow Recommendations
=============
http://stackoverflow.com/questions/72394/what-should-a-developer-know-before-building-a-public-web-site
#####Security  

 * Filter and validate incoming user input ('amount' does not need to accept alphabetical characters) and escape outgoing user input (a ' in user input, is NOT the same as an SQL ').   
 *  Never trust any data given by the user.
 * And the above will help with protecting against SQL injection.
 * Understand SSL
 * Keep your systems up to date with the latest patches.
 * Protect yourself from cross site scripting
 * How to resist session hijacking
 * Find out about HTTPOnly cookies
 * How to handle authentication/permissions
 * Understand PKI (public keys)
 * Keep up to date! This is the most important thing, make sure to follow all the latest information about possible security issues and vulnerabilities that affect your platform.

#####SEO

 * Create SEO friendly URLs - example.com/articles/rampaging-bull-tramples-unicorn NOT example.com?article=45
 * Use an XML sitemap so that site engines can crawl your site more intelligently
 * Set up Google Analytics (or another analytics package) from the start
 * Learn the difference between 301 and 302 redirects: it's not the same for search engines.
 * Set up a robots.txt file

#####Performance

 * How to cache
 * What not to cache
 * How to gzip
 * Make regular backups. Don't just rely on your hosting provider - have another backup source in case something critical is destroyed (like a database table)
 * Read Yahoo's best practices (http://developer.yahoo.com/performance/rules.html) for information on improving performance
 * Set up an Operation Database (http://ayende.com/Blog/archive/2008/05/13/DevTeach-Home-Grown-Production-System-Monitoring-and-Reports.aspx) to quickly identify bottlenecks.
 * Look into performance monitoring

#####Productivity

 * Documentation!
 * Code from the beginning with maintainability in mind
 * Have a good deployment strategy - don't save it to the very end to figure this out.
URLs designed with REST in mind could save you a headache in the future.
 * Use patterns like MVC to separate your application flow from your database logic.
 * Be aware of the many frameworks out there that will speed up your development
 * Use staging and a version control system to deploy updates so that your users won't be affected
 * Set up an error logging system. No matter how well coded your website will have errors when it is released. Don't wait for the user to let you know; be proactive in identifying errors and bugs
 * Have a bug tracker
 * Know your environment. Your OS, language, database. When you need to debug it will be important to understand how these things work at a basic level in the least.

#####User experience

 * Be aware of accessibility. This is a legal requirement for some programmers in some jurisdictions. Even if it's not, you should bear it in mind.
 * Never put email addresses in plain text, or they will be spammed to death.
 * Have some method for users to submit their comments and suggestions
 * Catch errors and don't display them to the user; display something they can understand instead
 * Remember that cell phones and other mobile devices with browsers are becoming more common.  Sometimes they have very poor JavaScript support. Will your site look okay on one of these?

#####Core Web technologies

 * Understand HTTP, and things like GET, POST, cookies and sessions.
 * How to work with absolute and relative paths
 * Realize that web applications are inherently multi-threaded, you will have lots of visitors (typically much more than in non-public websites), and threads are not unlimited.
 
##Resources
============
#####Javascript
 * http://yuilibrary.com/theater/  
 * JavaScript: The Good Parts  