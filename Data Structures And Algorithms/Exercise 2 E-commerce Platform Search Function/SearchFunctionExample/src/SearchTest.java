import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(103, "Laptop", "Electronics"),
                new Product(101, "Shoes", "Fashion"),
                new Product(105, "Phone", "Electronics"),
                new Product(102, "Book", "Education"),
                new Product(104, "Watch", "Accessories")
        };

        // Linear Search
        Product result1 = Search.linearSearch(products, 102);

        if (result1 != null) {
            System.out.println("Linear Search Found:");
            System.out.println(result1.productName + " - " + result1.category);
        } else {
            System.out.println("Product not found.");
        }

        // Sort array for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // Binary Search
        Product result2 = Search.binarySearch(products, 102);

        if (result2 != null) {
            System.out.println("\nBinary Search Found:");
            System.out.println(result2.productName + " - " + result2.category);
        } else {
            System.out.println("Product not found.");
        }
    }
}
