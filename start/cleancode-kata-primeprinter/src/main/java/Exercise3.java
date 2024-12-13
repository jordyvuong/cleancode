public class Exercise3 {
    /**
     * @param amount price
     * @param type Account status (NotRegistered = 1, SimpleCustomer = 2, ValuableCustomer = 3, MostValuableCustomer = 4)
     * @param years Time in years that the client is our customer
     * @return THE PRICE
     */
    public double calculate(double amount, int type, int years) {
        double discountRate = (years > 5) ? 0.05 : (double) years / 100;

        switch (type) {
            case 1: // NotRegistered
                return amount;

            case 2: // SimpleCustomer
                return applyDiscount(amount, 0.1, discountRate);

            case 3: // ValuableCustomer
                return applyDiscount(amount, 0.3, discountRate);

            case 4: // MostValuableCustomer
                return applyDiscount(amount, 0.5, discountRate);

            default:
                throw new IllegalArgumentException("Invalid account type");
        }
    }

    private double applyDiscount(double amount, double discount, double discountRate) {
        double discountedAmount = amount * (1 - discount);
        return discountedAmount * (1 - discountRate);
    }
}
