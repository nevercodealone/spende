<?php

require_once(__DIR__ . '/vendor/autoload.php');

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey("sk_test_4a88DnIYqkODZPXlEwd4riSV");

$charge = \Stripe\Charge::create(array(
  "amount" => $_POST['amount'],
  "currency" => "eur",
  "source" => $_POST['source'],
));
