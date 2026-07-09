package com.example;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class AaaPatternTest 
{
    private int a;
    private int b;

    @Before
    public void setUp()
    {
        System.out.println("Setting up test data...");
        a = 5;
        b = 3;
    }

    @Test
    public void testAddition()
    {
        int expected = 8;
        int result = a + b;
        assertEquals(expected, result);
    }

    @Test
    public void testSubtraction()
    {
        int expected = 2;
        int result = a - b;
        assertEquals(expected, result);
    }

    @After
    public void tearDown()
    {
        System.out.println("Cleaning up after test...");
    }
}
