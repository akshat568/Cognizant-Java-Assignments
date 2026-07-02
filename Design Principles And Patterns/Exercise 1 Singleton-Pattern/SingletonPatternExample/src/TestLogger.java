public class TestLogger {

    public static void main(String[] args) {

        // Get the first Logger instance
        Logger logger1 = Logger.getInstance();

        // Log a message
        logger1.log("Application Started");

        // Get the second Logger instance
        Logger logger2 = Logger.getInstance();

        // Log another message
        logger2.log("User Logged In");

        // Check whether both references point to the same object
        if (logger1 == logger2) {
            System.out.println("Both logger objects are the same instance.");
        } else {
            System.out.println("Different logger objects.");
        }
    }
}