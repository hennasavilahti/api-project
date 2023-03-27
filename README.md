# API Project - Cities Database

## Course project for school's API course.

#### Cities database includes data from randomised cities, such as name, country, country code and time zone.

#### Project was made using Nodejs and the assignment was to make it possible for client to send an URL request with search criteria parameter. Results are returned from the database that's running on Docker.

#### Grading of the project was from 1-3 and this project represents grade 3. Criteria for this grade is listed below:

#### Nodejs project that implements a service using:

- HTTP server with response as JSON format
- API which allows:
  - Searching information with HTTP GET
  - Adding information with HTTP post
    with error handling for invalid or unknown parameters. (HTTP RFC standard error codes)
- Database that:
  - Has no raw SQL queries
  - Uses Sequelize framework with class Model and methods
