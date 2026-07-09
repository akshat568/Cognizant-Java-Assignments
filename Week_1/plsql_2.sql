
--1 ProccessMonthlyInterest
CREATE or REPLACE PROCEDURE ProccessMonthlyInterest AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance * 1.01,
        LastModified = SYSDATE
    WHERE AccountType = "Savings";

    COMMIT;

    DBMS_OUTPUT.PUT_LINE("Monthly Interest Applied to all saving accounts");
EXCEPTION
    WITH others THEN
    ROLLBACK
    DBMS_OUTPUT.PUT_LINE("ERROR" || SQLERRM);
END;

--2 UpdateEmployeeBonus
CREATE or REPLACE PROCEDURE UpdateEmployeeBoune(
    p_departement IN Varchar(20),
    p_bonus_percentage IN NUMBER
)
AS
BEGIN
    Update Employess
    set Salary = Salary + (Salary*p_bonus_percentage)/100
    where Department = p_department

    IF SQL%ROWCOUNT = 0 THEN
        DBMS_OUTPUT.PUT_LINE("No empolyee found for bonus in "|| p_department)
    ELSE
        DBMS_OUTPUT.PUT_LINE("Bonus applied to "|| SQL%ROWCOUNT || "employees in" || p_department)
    END IF;

    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
    ROLLBACK
    DBMS_OUTPUT.PUT_LINE("Error " || SKLERRM)
END

--3 TransferFunds
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account   IN NUMBER,
    p_amount       IN NUMBER
) AS
    v_balance NUMBER;
BEGIN

    SELECT Balance INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account
    FOR UPDATE;

    IF v_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('Insufficient balance. Transfer failed.');
        RETURN;
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_from_account;

    UPDATE Accounts
    SET Balance = Balance + p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_to_account;

    -- Log transaction for source
    INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
    VALUES (transactions_seq.NEXTVAL, p_from_account, SYSDATE, p_amount, 'DEBIT');

    INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
    VALUES (transactions_seq.NEXTVAL, p_to_account, SYSDATE, p_amount, 'CREDIT');

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Transfer of ' || p_amount || ' successful.');
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Account not found.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/