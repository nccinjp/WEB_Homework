<?php
// PHPのプログラム処理を記述する場合
/*
    複数行コメント
*/

//画面に書き込む
print "printでデータを書き込む";

?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title><?php print "PHP - " ?>HTML & CSS</title>
</head>
<body>

    <h1>PHPデータの出力</h1>
    <h2>print</h2>
    <?php print "<p>PHPでタグも含めて出力</p>" ?>
    <p><?php print "PHPでタグを含まず出力" ?></p>

    <h3>省略書き</h3>
    <p><?= "PHPでタグを含まず出力" ?></p>

    <h2>エラーの表示</h2>
    <p><?php error ?></p>
    <p>PHPのエラーより下にあるHTML</p>
    
</body>
</html>