<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);
    $pizza = $_POST['pizza'];
    $toppings = isset($_POST['topping']) ? implode(", ", $_POST['topping']) : "None";
    $delivery = htmlspecialchars($_POST['delivery']);
    $discountCode = htmlspecialchars($_POST['discountCode']);
    $totalPrice = $_POST['totalPrice'];

    // Apply discount
    if ($discountCode === "DISCOUNT10") {
        $totalPrice *= 0.9;
    }

    echo "<h1>Order Receipt</h1>";
    echo "<p>Name: $name</p>";
    echo "<p>Phone: $phone</p>";
    echo "<p>Address: $address</p>";
    echo "<p>Pizza: $pizza</p>";
    echo "<p>Toppings: $toppings</p>";
    echo "<p>Delivery: $delivery</p>";
    echo "<p>Total Price: $" . number_format($totalPrice, 2) . "</p>";
}
?>
