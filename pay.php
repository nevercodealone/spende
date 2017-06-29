<?php
error_reporting(2047);
ini_set('display_errors', true);

require_once(__DIR__ . '/vendor/autoload.php');

\Stripe\Stripe::setApiKey(getenv('sk')); // "sk_test_4a88DnIYqkODZPXlEwd4riSV"

if (!isset($_POST['amount'])) {
  exit;
}

$charge = \Stripe\Charge::create(array(
  "amount" => $_POST['amount'],
  "currency" => "eur",
  "source" => $_POST['source'],
  "receipt_email" => $_POST['email'],
  "metadata" => $_POST,
));

