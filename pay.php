<?php

require_once(__DIR__ . '/vendor/autoload.php');

$keys = json_decode(file_get_contents(__DIR__ . '/.stripe.json'), true);

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey($keys['sk']); // "sk_test_4a88DnIYqkODZPXlEwd4riSV"

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

var_dump($_POST);
