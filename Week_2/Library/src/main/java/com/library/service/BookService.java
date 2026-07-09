package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter-based injection (matches the XML config below)
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("[BookService] Adding book: " + title);
        bookRepository.save(title);
    }

    public void listBooks() {
        System.out.println("[BookService] Books currently in library:");
        bookRepository.findAll().forEach(b -> System.out.println(" - " + b));
    }
}
