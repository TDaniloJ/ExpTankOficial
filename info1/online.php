<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<title>DDtank2 server</title>
</head>
<body>
<?php
define('SERVER','ZHEKA-PC');
define('USER','sa');
define('SENHA','zhekasql');
define('DB','Db_Tank');

$conexao = odbc_connect("Driver={SQL Server};Server=".SERVER.";Database=".DB.";", USER, SENHA);

$Server_List = odbc_exec($conexao,"SELECT * FROM Server_List");
while($server = odbc_fetch_array($Server_List)){
if($server["State"] == 1){
	$server_onoff = "<font style='color:red'>Offline</font>"; 
}else{
	$server_onoff = "<font style='color:green'>Online</font>";
}
if($_GET["real"] <> "1"){
if($server["Online"] > 10){
$B = $server["Online"] + 0;
}else{
$B = $server["Online"];
}
}else{
$B = $server["Online"];
}
echo "<p>Há <b>" . $B . "</b> users Online no servidor <b>" . $server["Name"] . "</b> [Que está <b>" .$server_onoff. "</b>]</p>";
}
?>
</body>
</html>