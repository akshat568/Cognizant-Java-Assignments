CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
);

INSERT INTO Customers VALUES (1, 'John Doe',       TO_DATE('1985-05-15', 'YYYY-MM-DD'), 12000, SYSDATE);
INSERT INTO Customers VALUES (2, 'Jane Smith',      TO_DATE('1990-07-20', 'YYYY-MM-DD'),  8500, SYSDATE);
INSERT INTO Customers VALUES (3, 'Robert Brown',    TO_DATE('1955-03-10', 'YYYY-MM-DD'), 25000, SYSDATE);
INSERT INTO Customers VALUES (4, 'Mary Johnson',    TO_DATE('1960-11-25', 'YYYY-MM-DD'),  3000, SYSDATE);
INSERT INTO Customers VALUES (5, 'James Wilson',    TO_DATE('1958-08-05', 'YYYY-MM-DD'), 15000, SYSDATE);
INSERT INTO Customers VALUES (6, 'Patricia Davis',  TO_DATE('1995-02-14', 'YYYY-MM-DD'),   500, SYSDATE);
INSERT INTO Customers VALUES (7, 'Michael Lee',     TO_DATE('1952-09-30', 'YYYY-MM-DD'), 32000, SYSDATE);
INSERT INTO Customers VALUES (8, 'Linda Martinez',  TO_DATE('2000-06-18', 'YYYY-MM-DD'),  2000, SYSDATE);
INSERT INTO Customers VALUES (9, 'David Garcia',    TO_DATE('1948-12-01', 'YYYY-MM-DD'), 11000, SYSDATE);
INSERT INTO Customers VALUES (10,'Barbara Taylor',  TO_DATE('1972-04-22', 'YYYY-MM-DD'),  9500, SYSDATE);

COMMIT;

INSERT INTO Accounts VALUES (1,  1,  'Savings',  12000, SYSDATE);
INSERT INTO Accounts VALUES (2,  2,  'Checking',  8500, SYSDATE);
INSERT INTO Accounts VALUES (3,  3,  'Savings',  25000, SYSDATE);
INSERT INTO Accounts VALUES (4,  4,  'Checking',  3000, SYSDATE);
INSERT INTO Accounts VALUES (5,  5,  'Savings',  15000, SYSDATE);
INSERT INTO Accounts VALUES (6,  6,  'Checking',   500, SYSDATE);
INSERT INTO Accounts VALUES (7,  7,  'Savings',  32000, SYSDATE);
INSERT INTO Accounts VALUES (8,  8,  'Checking',  2000, SYSDATE);
INSERT INTO Accounts VALUES (9,  9,  'Savings',  11000, SYSDATE);
INSERT INTO Accounts VALUES (10, 10, 'Checking',  9500, SYSDATE);
-- Extra accounts for customers 1 and 3
INSERT INTO Accounts VALUES (11,  1, 'Checking',  5000, SYSDATE);
INSERT INTO Accounts VALUES (12,  3, 'Checking',  8000, SYSDATE);

COMMIT;

INSERT INTO Transactions VALUES (1,  1,  SYSDATE,      2000,  'Deposit');
INSERT INTO Transactions VALUES (2,  2,  SYSDATE,       500,  'Withdrawal');
INSERT INTO Transactions VALUES (3,  3,  SYSDATE - 5,  10000, 'Deposit');
INSERT INTO Transactions VALUES (4,  4,  SYSDATE - 2,    300, 'Withdrawal');
INSERT INTO Transactions VALUES (5,  5,  SYSDATE - 10,  5000, 'Deposit');
INSERT INTO Transactions VALUES (6,  6,  SYSDATE - 1,    100, 'Withdrawal');
INSERT INTO Transactions VALUES (7,  7,  SYSDATE - 3,  15000, 'Deposit');
INSERT INTO Transactions VALUES (8,  8,  SYSDATE - 7,    200, 'Withdrawal');
INSERT INTO Transactions VALUES (9,  9,  SYSDATE - 4,   3000, 'Deposit');
INSERT INTO Transactions VALUES (10, 10, SYSDATE - 6,    700, 'Withdrawal');
INSERT INTO Transactions VALUES (11, 11, SYSDATE - 2,   1000, 'Deposit');
INSERT INTO Transactions VALUES (12, 12, SYSDATE - 8,   4000, 'Withdrawal');

COMMIT;

INSERT INTO Loans VALUES (1,  1,  5000,  5.0, SYSDATE, ADD_MONTHS(SYSDATE, 60)); -- 5 years
INSERT INTO Loans VALUES (2,  2,  3000,  4.0, ADD_MONTHS(SYSDATE,-12), SYSDATE + 10);  -- due in 10 days
INSERT INTO Loans VALUES (3,  3, 20000,  6.0, ADD_MONTHS(SYSDATE,-24), SYSDATE + 25);  -- due in 25 days
INSERT INTO Loans VALUES (4,  4,  8000,  7.0, ADD_MONTHS(SYSDATE, -6), SYSDATE + 5);   -- due in 5 days
INSERT INTO Loans VALUES (5,  5, 12000,  5.5, SYSDATE, ADD_MONTHS(SYSDATE, 24));        -- 2 years
INSERT INTO Loans VALUES (6,  6,  1500,  8.0, ADD_MONTHS(SYSDATE, -3), SYSDATE + 15);  -- due in 15 days
INSERT INTO Loans VALUES (7,  7, 50000,  4.5, SYSDATE, ADD_MONTHS(SYSDATE, 36));        -- 3 years
INSERT INTO Loans VALUES (8,  8,  2000,  9.0, ADD_MONTHS(SYSDATE,-18), SYSDATE + 7);   -- due in 7 days
INSERT INTO Loans VALUES (9,  9, 15000,  6.5, SYSDATE, ADD_MONTHS(SYSDATE, 12));        -- 1 year
INSERT INTO Loans VALUES (10,10,  7000,  5.0, ADD_MONTHS(SYSDATE, -9), SYSDATE + 20);  -- due in 20 days

COMMIT;

INSERT INTO Employees VALUES (1,  'Alice Johnson', 'Manager',          70000, 'HR',         TO_DATE('2015-06-15', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (2,  'Bob Brown',      'Developer',        60000, 'IT',         TO_DATE('2017-03-20', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (3,  'Carol White',    'Analyst',          55000, 'Finance',    TO_DATE('2018-09-10', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (4,  'Daniel Harris',  'Clerk',            35000, 'Operations', TO_DATE('2020-01-05', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (5,  'Eva Clark',      'Senior Developer', 85000, 'IT',         TO_DATE('2013-11-22', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (6,  'Frank Lewis',    'HR Executive',     48000, 'HR',         TO_DATE('2019-07-30', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (7,  'Grace Walker',   'Finance Head',     95000, 'Finance',    TO_DATE('2010-04-18', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (8,  'Henry Hall',     'Support Staff',    30000, 'Operations', TO_DATE('2022-02-28', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (9,  'Irene Young',    'DBA',              75000, 'IT',         TO_DATE('2016-08-14', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (10, 'Jack King',      'Loan Officer',     52000, 'Finance',    TO_DATE('2021-05-09', 'YYYY-MM-DD'));

COMMIT;

SELECT 'Customers'    AS TableName, COUNT(*) AS Records FROM Customers    UNION ALL
SELECT 'Accounts'     AS TableName, COUNT(*) AS Records FROM Accounts     UNION ALL
SELECT 'Transactions' AS TableName, COUNT(*) AS Records FROM Transactions  UNION ALL
SELECT 'Loans'        AS TableName, COUNT(*) AS Records FROM Loans        UNION ALL
SELECT 'Employees'    AS TableName, COUNT(*) AS Records FROM Employees;