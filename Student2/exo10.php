<?php
$user = [
    "firstname" => "estevan",
    "lastname" => "cerqueira",
    "age" => "20",
    "job" => "chomeur",
];

foreach ($user as $key => $value) {
    echo $key.":".$value.PHP_EOL;
}