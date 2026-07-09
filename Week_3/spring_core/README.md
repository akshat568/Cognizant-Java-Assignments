# Spring Learn Core Project

This project demonstrates Spring Core concepts including bean configuration, dependency injection, and logging.

## Features
- Spring Boot Application Setup
- Spring XML Configuration for Beans
- Loading SimpleDateFormat bean from XML
- Loading Country bean with properties
- Collection of beans (ArrayList)
- Singleton and Prototype scope demonstration
- SLF4J Logging integration

## Project Structure
```
spring-learn-core/
├── src/main/java/com/cognizant/springlearn/
│   ├── SpringLearnApplication.java (Main class)
│   └── Country.java (POJO with logging)
├── src/main/resources/
│   ├── application.properties (Logging configuration)
│   ├── date-format.xml (SimpleDateFormat bean)
│   └── country.xml (Country beans and list)
└── pom.xml (Maven configuration)
```

## How to Import in Eclipse

1. Go to Eclipse > File > Import > Maven > Existing Maven Projects
2. Browse to this folder (spring-learn-core)
3. Click Next and Finish
4. Right-click project > Maven > Update Project (to download dependencies)

## How to Run

### Option 1: Run from Eclipse
1. Right-click SpringLearnApplication.java
2. Select Run As > Java Application

### Option 2: Run from Command Line
```bash
cd spring-learn-core
mvn clean install
mvn spring-boot:run
```

### Option 3: Build and Run JAR
```bash
mvn clean package
java -jar target/spring-learn-core-1.0.0-SNAPSHOT.jar
```

## What the Application Does

The application demonstrates:

1. **displayDate()** - Loads SimpleDateFormat bean from date-format.xml and parses a date string
2. **displayCountry()** - Loads a single Country bean (Singleton scope) twice and shows they're the same instance
3. **displayCountries()** - Loads a list of all four countries from the XML configuration

Check the console logs to see the detailed execution flow with logging patterns.

## Logging Output Format
```
Date|Time|Thread|Level|Logger|Method|Message
```

## Notes
- Server runs on port 8083
- All bean instantiation and method calls are logged at DEBUG level
- Framework logs are set to INFO level
