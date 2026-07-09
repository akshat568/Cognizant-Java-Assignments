package com.cognizant.springlearn.service;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CountryService {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public CountryService() {
        LOGGER.debug("Inside CountryService Constructor.");
    }

    public Country getCountry(String code) throws CountryNotFoundException {
        LOGGER.info("START - getCountry({})", code);
        
        try {
            ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
            ArrayList<Country> countryList = context.getBean("countryList", ArrayList.class);
            
            // Case insensitive search using lambda expression
            Country country = countryList.stream()
                    .filter(c -> c.getCode().equalsIgnoreCase(code))
                    .findFirst()
                    .orElse(null);
            
            if (country == null) {
                LOGGER.error("Country with code {} not found", code);
                throw new CountryNotFoundException("Country with code " + code + " not found");
            }
            
            LOGGER.debug("Found country: {}", country.toString());
            LOGGER.info("END - getCountry({})", code);
            return country;
        } catch (CountryNotFoundException e) {
            throw e;
        } catch (Exception e) {
            LOGGER.error("Error in getCountry()", e);
            throw new CountryNotFoundException("Error retrieving country", e);
        }
    }

    public ArrayList<Country> getAllCountries() {
        LOGGER.info("START - getAllCountries()");
        
        try {
            ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
            ArrayList<Country> countryList = context.getBean("countryList", ArrayList.class);
            
            LOGGER.debug("Retrieved {} countries", countryList.size());
            LOGGER.info("END - getAllCountries()");
            return countryList;
        } catch (Exception e) {
            LOGGER.error("Error in getAllCountries()", e);
            return new ArrayList<>();
        }
    }

    public Country getIndiaCountry() {
        LOGGER.info("START - getIndiaCountry()");
        
        try {
            ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
            Country country = context.getBean("in", Country.class);
            
            LOGGER.debug("Retrieved India country: {}", country.toString());
            LOGGER.info("END - getIndiaCountry()");
            return country;
        } catch (Exception e) {
            LOGGER.error("Error in getIndiaCountry()", e);
            return null;
        }
    }
}
