package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.exception.CountryNotFoundException;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class CountryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    public CountryController() {
        LOGGER.debug("Inside CountryController Constructor.");
    }

    /**
     * GET /api/country
     * Returns India country details
     */
    @GetMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START - getCountryIndia()");
        Country country = countryService.getIndiaCountry();
        LOGGER.debug("Returning country: {}", country);
        LOGGER.info("END - getCountryIndia()");
        return country;
    }

    /**
     * GET /api/countries
     * Returns list of all countries
     */
    @GetMapping("/countries")
    public ArrayList<Country> getAllCountries() {
        LOGGER.info("START - getAllCountries()");
        ArrayList<Country> countries = countryService.getAllCountries();
        LOGGER.debug("Returning {} countries", countries.size());
        LOGGER.info("END - getAllCountries()");
        return countries;
    }

    /**
     * GET /api/countries/{code}
     * Returns country by code (case insensitive)
     */
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) throws CountryNotFoundException {
        LOGGER.info("START - getCountry({})", code);
        Country country = countryService.getCountry(code);
        LOGGER.debug("Returning country: {}", country);
        LOGGER.info("END - getCountry({})", code);
        return country;
    }
}
