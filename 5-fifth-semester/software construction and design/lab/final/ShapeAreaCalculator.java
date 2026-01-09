import java.util.Scanner;

abstract class Shape {
    abstract double calculateArea();
}

// Square class
class Square extends Shape {
    private double sideLength;

    Square(double sideLength) {
        this.sideLength = sideLength;
    }

    @Override
    double calculateArea() {
        return sideLength * sideLength;
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;

    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    double calculateArea() {
        return length * width;
    }
}

// Triangle class
class Triangle extends Shape {
    private double baseLength;
    private double height;

    Triangle(double baseLength, double height) {
        this.baseLength = baseLength;
        this.height = height;
    }

    @Override
    double calculateArea() {
        return 0.5 * baseLength * height;
    }
}

class ShapeFactory {
    public static Shape createShape(int choice, Scanner scanner) {
        switch (choice) {
            case 1:
                System.out.print("Enter the side length of the square: ");
                double side = scanner.nextDouble();
                return new Square(side);
            case 2:
                System.out.print("Enter the length of the rectangle: ");
                double length = scanner.nextDouble();
                System.out.print("Enter the width of the rectangle: ");
                double width = scanner.nextDouble();
                return new Rectangle(length, width);
            case 3:
                System.out.print("Enter the base length of the triangle: ");
                double base = scanner.nextDouble();
                System.out.print("Enter the height of the triangle: ");
                double height = scanner.nextDouble();
                return new Triangle(base, height);
            default:
                System.out.println("Invalid choice. Please select a valid option.");
                return null;
        }
    }
}

public class ShapeAreaCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Select a shape to calculate area:");
        System.out.println("1. Square");
        System.out.println("2. Rectangle");
        System.out.println("3. Triangle");

        int choice = scanner.nextInt();
        Shape shape = ShapeFactory.createShape(choice, scanner);

        if (shape != null) {
            System.out.println("Area: " + shape.calculateArea());
        }

        scanner.close();
    }
}