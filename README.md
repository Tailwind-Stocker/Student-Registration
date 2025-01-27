# Student-Registration

## Description: 
  A web application for student registration built using Java, Tomcat, and MySQL. The frontend is developed from scratch using HTML, CSS, and JavaScript.

## Table of Contents:
- Description
- Technologies Used
- Installation
- Usage
- Contributing
- License

## Technologies Used:
- Java
- Apache Tomcat
- MySQL
- HTML
- CSS
- JavaScript

## Installation:
To install and run this project locally, follow these steps:
1. Clone the repository:
   git clone https://github.com/Tailwind-Stocker/Student-Registration.git
   cd Student-Registration
2. Set up the MySQL database:
   - Create a new database.
   - Run the provided SQL scripts in the sql directory to set up the necessary tables.
3. Configure the application:
   - Update the database connection settings in the src/main/resources/application.properties file.
4. Build and deploy the application using Apache Tomcat:
   ./mvnw clean install
   cp target/Student-Registration.war <path-to-tomcat>/webapps/
5. Start Apache Tomcat and access the application at http://localhost:8080/Student-Registration.

## Usage:
Provide a brief overview of how to use the application. Include screenshots if possible.

## Contributing:
Contributions are welcome! Please follow these steps to contribute:
  1. Fork the repository.
  2. Create a new branch (git checkout -b feature/YourFeature).
  3. Commit your changes (git commit -m 'Add some feature').
  4. Push to the branch (git push origin feature/YourFeature).
  5. Open a pull request.

## License:
This project is licensed under the MIT License. See the LICENSE file for details.
