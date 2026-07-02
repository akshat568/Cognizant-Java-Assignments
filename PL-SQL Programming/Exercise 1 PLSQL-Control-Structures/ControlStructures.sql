DECLARE
    CURSOR customer_cursor IS
        SELECT CustomerID, Age
        FROM Customers;

BEGIN
    FOR customer_rec IN customer_cursor LOOP

        IF customer_rec.Age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = customer_rec.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Loan interest rates updated successfully.');

END;
/

DECLARE
    CURSOR customer_cursor IS
        SELECT CustomerID, Balance
        FROM Customers;

BEGIN
    FOR customer_rec IN customer_cursor LOOP

        IF customer_rec.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = customer_rec.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP customers updated successfully.');

END;
/

DECLARE
    CURSOR loan_cursor IS
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN

    FOR loan_rec IN loan_cursor LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' || loan_rec.LoanID ||
            ' for Customer ' || loan_rec.CustomerID ||
            ' is due on ' || loan_rec.DueDate
        );

    END LOOP;

END;
/