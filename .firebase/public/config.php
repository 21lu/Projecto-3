<?php

require __DIR__.'/vendor/autoload.php';

use Kreait\Firebase\Factory;

$factory = (new Factory())
    ->withProjectId('credenciais.json')
    ->withDatabaseUri('https://paineis-51f7b-default-rtdb.firebaseio.com');
    
$database = $factory->createDatabase();