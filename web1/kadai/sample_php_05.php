<?php

$student = [
    "name"  => "陳 鏡宇",
    "class" => "sk1a",
    "no"    => 23
];
print_r( $student );
$student[ "lesson" ] = [
    "web演習1",
    "SHR",
    "英会話",
    "Java"
];

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>HTML & CSS</title>
</head>

<body>
   
    <h1>連想配列とforeach</h1>
    
    <h2>連想配列のデータを表示</h2>
    <p><?= $student [ "name" ] ?></p>
    <p><?= $student [ "class" ] ?><?= $student [ "no" ] ?></p>
    <p><?= $student [ "lesson" ] ?></p>

    <h2>連想配列のデータをforeachで表示</h2>
    <?php foreach( $student as $value ): ?>
        <?php if( is_array( $value ) ): ?>
            <ul>
                <?php foreach( $value as $v ): ?>
                    <li><?= $v ?></li>
                <?php endforeach ?>
            </ul>
        <?php else: ?>
            <P><?= $value ?></p>
        <?php endif ?>
    <?php endforeach ?>

</body>
</html>
