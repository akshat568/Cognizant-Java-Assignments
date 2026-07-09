/*Write a PL/SQL block that loops through all customers, checks their age, 
and if they are above 60, apply a 1% discount to their current loan interest rates.*/

DECLARE
    Cursor c_customers is
        Select c.CustomerID, c.Name, c.DOB, l.LoanID, l.InterestRate
        from Customer c join loan l 
        on c.CustomerID = l.CustomerID;
    
    v_age Number;
    v_new_rate Number;

BEGIN
    for rec in c_customer loop

        v_age := TRUNC(months_between(sysdate, rec.DOB)/12);

        if v_age > 60 then
            v_new_rate := rec.InterestRate - 1;
        
            update loans
            set rec.InterestRate = v_new_rate
            where LoanID = rec.LoanID;

        end if
    end loop;

    Commit;
    DBMS_OUTPUT.PUT_LINE("File is updated successfully")

EXCEPTION
    with other then
    rollback;
    DBMS_OUTPUT.PUT_LINE("Error: " || SQLEARM);

END;

--Write a PL/SQL block that iterates through all customers and sets a flag IsVIP to TRUE for those with a balance over $10,000.

Alter table customer add IsVip varchar(20) Default = 'FALSE'

DECLARE 
    Cursor c_customer is 
        select customerid, name, balance
        from customer
    
    for rec in c_customer loop:
        if rec.Balance > 10000 then 
            Update Customers
            Set rec.IsVip = 'TRUE'
            where customerid = rec.customerid;
            DBMS_OUTPUT.PUT_LINE("Customer " || rec.name || "is VIP")

        else 
            Update Cutomers
            set rec.IsVipt = 'False'
            where customerid = rec.customerid
            DBMS_OUTPUT.PUT_LINE("Customer " || rec.name || "is not VIP")
        
        end if
    end loop

EXCEPTION
    when others then
    rollback
    DBMS_OUPUT.PUT_LINE("Error: " || SQLERM)

END;

--Write a PL/SQL block that fetches all loans due in the next 30 days and prints a reminder message for each customer.

DECLARE
cursor c_customer is

    select c.CustomerId, c.Name, l.LoanId, l.EndDate, l.LoanAmount
    from Customer c join Loan l
    on c.CustomerId = l.CustomerId
    where l.EndDate between sysdate and sysdate + 30
    order by l.EndDate


    v_days_count Number := 0
    v_count Number;

BEGIN

    for rec in c_customer loop
        v_days_count := TRUNC(l.EndDate - sysdate)
        v_count := v_count+1

        DBMS_OUTPUT.PUT_LINE("Name" || rec.Name ||
                            "loanId"|| rec.loadId ||
                            "loanAmount"|| rec.loanAmount ||
                            "due date" || TO_CHAR(rec.EndDate, "DD-MM-YY"),
                            "days remaining" || v_days_count)

        if v_count = 0 then
            DBMS_OUTPUT.PUT_LINE("No lons due the next 30 days")
        end if;

        DBMS_OUTPUT.PUT_LINE("The total days remaining are" || v_count)
EXCEPTION
    when others then
    rollback
    DBMS_OUTPUT.PUT_LINE("Error", SKLERM)
END;
