public class Forecast {

    // Recursive method to calculate future value
    public static double futureValue(double currentValue, double growthRate, int years) {

        if (years == 0) {
            return currentValue;
        }

        return futureValue(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double result = futureValue(currentValue, growthRate, years);

        System.out.printf("Future Value after %d years = %.2f%n", years, result);
    }
}