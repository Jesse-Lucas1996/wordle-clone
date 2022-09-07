Write-Host "Enter connection details:"

$server = "localhost"
$server_maybe = (Read-Host -Prompt "Server [$server]")
If($server_maybe -ne "") {
	$server = $server_maybe
}

$db = "postgres"
$db_maybe = (Read-Host -Prompt "Database [$db]")
If($db_maybe -ne "") {
	$db = $db_maybe
}

$port = 5432
[int]$port_maybe = (Read-Host -Prompt "Port [$port]")
If($port_maybe -ne "") {
	$port = $port_maybe
}

$username = "postgres"
$username_maybe = (Read-Host -Prompt "Username [$username]")
If($username_maybe -ne "") {
	$username = $username_maybe
}

Write-Host "Running psql"
Write-Host

psql -h $server -U $username -d $db -p $port -c