<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<title>DDtank2 server</title>
</head>
<body>
<?php 
$dbhost = 'DRIVER={SQL Server};SERVER=DANILO\SQLEXPRESS22;DATABASE=Db_Tank';
$dbuser = "sa";
$dbpass = "4591";
$connection = odbc_connect($dbhost, $dbuser, $dbpass);

$verifica = "SELECT TOP 10 * FROM Sys_Users_Detail WHERE UserName != 'slimshady' ORDER BY Grade DESC";
$verifica2 = "SELECT TOP 10 * FROM Sys_Users_Detail WHERE UserName != 'slimshady' ORDER BY FightPower DESC";

echo '<table align="center" ><tr><td class="rank_texto_nick"></td>';

$rank = odbc_exec($connection, $verifica2);

if($pg == 1 or $pg == 0){
    $i = 1;
}else if($pg > 1){
    $i = $ini+1;
}
while($dados = odbc_fetch_array($rank))
{
    $id=$i+1;
    echo ($i % 2) ? "<tr>" : "<tr>";
    echo '<td width="50" align="left" class="rank_texto_nick">'.$i.'</td>';
    echo '<td width="200" align="left"  class="rank_texto_nick">'.$dados['UserName'].'</td>';
    echo '<td width="150" align="left" class="rank_texto_nick">'.$dados['Grade'].'</td>';
    echo '<td width="200" align="left" class="rank_texto_nick">'.$dados['FightPower'].'</td>';
    echo '</tr>';
    $i++;
}
echo '</table>';
?>
</body>
</html>