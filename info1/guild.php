<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>DDtank2 server</title>
</head>
<body>
    <?php 

    include "../global.php";

    $verifica = "SELECT TOP 10 * FROM Consortia WHERE ConsortiaName != 'Jeck' ORDER BY Level DESC";
    $verifica2 = "SELECT TOP 10 * FROM Consortia WHERE ConsortiaName != 'Jeck' ORDER BY FightPower DESC";

    echo '<table align="center" ><tr><td class="rank_texto_nick"></td>';

    $rank = odbc_exec($connection, $verifica);

    if($pg == 1 or $pg == 0){
    $i = 1;
    }else if($pg > 1) {
        $i = $ini+1;
    }
    while($dados = odbc_fetch_array($rank))
    {
    $id=$i+1;
    echo ($i % 2) ? "<tr>" : "<tr>";
    echo '<td width="50" align="left" class="rank_texto_nick">'.$i.'</td>';
    echo '<td width="200" align="left"  class="rank_texto_nick">'.$dados['ConsortiaName'].'</td>';
    echo '<td width="150" align="left" class="rank_texto_nick">'.$dados['Level'].'</td>';
    echo '<td width="200" align="left" class="rank_texto_nick">'.$dados['FightPower'].'</td>';
    echo '</tr>';
    $i++;
    }
    echo '</table>';
    ?>
</body>
</html>