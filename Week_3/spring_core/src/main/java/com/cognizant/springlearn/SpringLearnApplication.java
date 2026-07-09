package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

@SpringBootApplication
public class SpringLearnApplication {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("START - main()");
        SpringApplication.run(SpringLearnApplication.class, args);
        
        SpringLearnApplication app = new SpringLearnApplication();
        app.displayDate();
        app.displayCountry();
        app.displayCountries();
        
        LOGGER.info("END - main()");
    }

    public void displayDate() {
        LOGGER.info("START - displayDate()");
        try {
            ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
            SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
            Date date = format.parse("31/12/2018");
            LOGGER.debug("Parsed Date: {}", date);
        } catch (Exception e) {
            LOGGER.error("Error in displayDate()", e);
        }
        LOGGER.info("END - displayDate()");
    }

    public void displayCountry() {
        LOGGER.info("START - displayCountry()");
        try {
            ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
            Country country = context.getBean("country", Country.class);
            Country anotherCountry = context.getBean("country", Country.class);
            
            LOGGER.debug("Country 1 : {}", country.toString());
            LOGGER.debug("Country 2 : {}", anotherCountry.toString());
            LOGGER.debug("Are they same instance (Singleton)? {}", country == anotherCountry);
        } catch (Exception e) {
            LOGGER.error("Error in displayCountry()", e);
        }
        LOGGER.info("END - displayCountry()");
    }

    public void displayCountries() {
        LOGGER.info("START - displayCountries()");
        try {
            ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
            @SuppressWarnings("unchecked")
            ArrayList countryList = (ArrayList) context.getBean("countryList", ArrayList.class);
            
            for (Object Obj : countryList) {
            	Country country = (Country) Obj;
                LOGGER.debug("Country : {}", country.toString());
            }
        } catch (Exception e) {
            LOGGER.error("Error in displayCountries()", e);
        }
        LOGGER.info("END - displayCountries()");
    }
}
