# Ruby on Rails

Server-side web application framework written in Ruby. It uses a model-view-controller framework that provides default structures for databases, web service and web pages. It uses JSON or XML to transfer datat, HTML, CSS and JavaScript to display data and provide a user interface. It uses convention over configuration, don't repeat yourself and active record pattern.

## Action Pack

Handles and responds to web requests. 

- routing (mapping request URLs to actions).
- controllers that impement actions.
- views that are generated for responses.

#### Action Dispatch 

It parses information about the web request, handles routing, processes HTTP such as MIME-type negotation, decoding parameters in POST, PATCH, PUT  bodies, HTTP caching logic, cookies and sessions.

#### Action Controller 
It provides a base controller class that can be subclassed to implement filters and actions to handle requests.

[Action Pack](https://github.com/rails/rails/tree/master/actionpack)

## Active Record

ORM (Object Relational Mapping) connect objects of an application to table in a relational database management system. Can easily store and retrieve objects from a database without writing SQL statements directly.

- Represent models and their data.
- Represent associations between these models.
- Represent inheritance hierarchies through related models.
- Validate models before they get persisted to the database.
- Perform database operations in an object-oriented fashion.

[Active Record Basics](http://guides.rubyonrails.org/active_record_basics.html)
[MartinFowloer - Active Record](http://www.martinfowler.com/eaaCatalog/activeRecord.html)

## Active Model

Contains various modules used to develop classes that need some features present in Active Record.

#### Attribute Methods
#### Callbacks
#### Conversion
#### Dirty
#### Validations
#### Naming
#### Model
#### Serialization
#### Translation
#### Lint Tests

[Active Model Basics](http://guides.rubyonrails.org/active_model_basics.html)

MVC model-view-controller 
database
web service
web pagaes
Convention over configuration
don't repeat yourself
active record pattern

activerecordstore

authlogic 
cancan authorization library
nokogiri (html, xml, sax, reader parser)
capistrano (execute commands in parallel on multiple remtoe machines via ssh)
active merchat (extraction from the ecommerce system shopfiy)
eventmachine (single-threaded engine for arbitrary networkcommunications)
Passenger web application deployment
chef configuration management
better_errors