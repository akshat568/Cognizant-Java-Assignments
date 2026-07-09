# Spring Learn REST Project

This project demonstrates RESTful Web Services using Spring Boot, including various HTTP GET endpoints that return JSON responses.

## Features
- Spring Boot REST Controller
- GET endpoints with different patterns
- JSON serialization of Java objects
- Path variables for dynamic requests
- Exception handling with custom exceptions
- Service layer for business logic
- Spring XML configuration for beans
- Comprehensive logging

## Project Structure
```
spring-learn-rest/
├── src/main/java/com/cognizant/springlearn/
│   ├── SpringLearnApplication.java (Main class)
│   ├── Country.java (POJO)
│   ├── controller/
│   │   ├── HelloController.java
│   │   └── CountryController.java
│   ├── service/
│   │   └── CountryService.java
│   └── exception/
│       └── CountryNotFoundException.java
├── src/main/resources/
│   ├── application.properties (Configuration)
│   └── country.xml (Spring bean configuration)
└── pom.xml (Maven configuration)
```

## How to Import in Eclipse

1. Go to Eclipse > File > Import > Maven > Existing Maven Projects
2. Browse to this folder (spring-learn-rest)
3. Click Next and Finish
4. Right-click project > Maven > Update Project (to download dependencies)

## How to Run

### Option 1: Run from Eclipse
1. Right-click SpringLearnApplication.java
2. Select Run As > Java Application

### Option 2: Run from Command Line
```bash
cd spring-learn-rest
mvn clean install
mvn spring-boot:run
```

### Option 3: Build and Run JAR
```bash
mvn clean package
java -jar target/spring-learn-rest-1.0.0-SNAPSHOT.jar
```

## REST Endpoints

The application exposes the following REST endpoints on `http://localhost:8083/api/`:

### 1. Hello World Endpoint
```
GET /hello
```
Returns a simple "Hello World!!" message

**Sample Request:**
```
http://localhost:8083/hello
```

**Sample Response:**
```
Hello World!!
```

---

### 2. Get India Country
```
GET /api/country
```
Returns India country details in JSON format

**Sample Request:**
```
http://localhost:8083/api/country
```

**Sample Response:**
```json
{
    "code": "IN",
    "name": "India"
}
```

---

### 3. Get All Countries
```
GET /api/countries
```
Returns all available countries as a JSON array

**Sample Request:**
```
http://localhost:8083/api/countries
```

**Sample Response:**
```json
[
    {"code": "IN", "name": "India"},
    {"code": "US", "name": "United States"},
    {"code": "JP", "name": "Japan"},
    {"code": "DE", "name": "Germany"}
]
```

---

### 4. Get Country by Code
```
GET /api/countries/{code}
```
Returns a specific country based on its code (case insensitive)

**Sample Request:**
```
http://localhost:8083/api/countries/in
http://localhost:8083/api/countries/US
```

**Sample Response:**
```json
{
    "code": "IN",
    "name": "India"
}
```

**Error Response (404 - Country Not Found):**
```json
{
    "timestamp": "2024-01-15T10:30:45.123+0000",
    "status": 404,
    "error": "Not Found",
    "message": "Country not found",
    "path": "/api/countries/az"
}
```

---

## Testing the Endpoints

### Using Browser
Simply open the URLs in your browser (GET requests):
```
http://localhost:8083/hello
http://localhost:8083/api/countries
```

### Using cURL
```bash
# Get Hello message
curl -i http://localhost:8083/hello

# Get India country
curl -i http://localhost:8083/api/country

# Get all countries
curl -i http://localhost:8083/api/countries

# Get country by code (case insensitive)
curl -i http://localhost:8083/api/countries/in
curl -i http://localhost:8083/api/countries/US

# Test error scenario
curl -i http://localhost:8083/api/countries/xx
```

### Using Postman
1. Create GET requests to the above URLs
2. Click "Send" to execute
3. View the response in the "Body" tab
4. Check headers in the "Headers" tab

## Architecture

### HelloController
- Handles simple "Hello World" greeting
- Single GET endpoint `/hello`

### CountryController
- REST controller for country-related operations
- Autowired CountryService for business logic
- Three main endpoints:
  - GET /api/country - Returns India
  - GET /api/countries - Returns all countries
  - GET /api/countries/{code} - Returns specific country by code

### CountryService
- Business logic layer
- Loads countries from country.xml configuration
- Case-insensitive country search
- Throws CountryNotFoundException when country not found

### CountryNotFoundException
- Custom exception for handling not-found scenarios
- Annotated with @ResponseStatus(404)
- Returns proper HTTP 404 error with JSON message

## Logging

All operations are logged with detailed information:
- Controller method entry/exit
- Service method execution
- Exception details
- Data being processed

**Log Format:**
```
Date|Time|Thread|Level|Logger|Method|Message
```

**Example Log Output:**
```
240115|10:30:45.123|main-thread|INFO|CountryController|getCountry|START - getCountry(in)
240115|10:30:45.124|main-thread|DEBUG|CountryService|getCountry|Retrieved India country: Country{code='IN', name='India'}
240115|10:30:45.124|main-thread|INFO|CountryController|getCountry|END - getCountry(in)
```

## Notes
- Server runs on port 8083
- Base URL path for country endpoints is `/api/`
- All responses are automatically serialized to JSON
- Country code search is case-insensitive
- Invalid country codes return HTTP 404 with descriptive message
