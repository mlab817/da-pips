
$serverApi = new ServerApi(ServerApi::V1);
$client = new MongoDB\Client(
    'mongodb+srv://root:marklester@cluster0.24zt0ie.mongodb.net/?retryWrites=true&w=majority', [], ['serverApi' => $serverApi]);

$db = $client->test;
