<?php

$errorMsg = true;

//配列
//近畿地方の県名
$pref = [ 
    "大阪","京都"
];
//配列構造の表示
print_r( $pref );

//配列へデータの追加
$pref[] = "奈良" ;
$pref[] = "和歌山" ;
$pref[] = "兵庫" ;
$pref[] = "滋賀" ;

//配列構造の表示
print_r( $pref );

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>HTML & CSS</title>
</head>

<body>
    
    <h1>PHPで制御命令</h1>
    <h2>if</h2>
    <?php if ( $errorMsg ): ?>
        <p>入力内容に間違いがありました。</p>
    <?php endif ?>

    <h2>for</h2>
    <?php for( $i = 0 ; $i < 10 ; $i++): ?>
        <p><?= $i ?></p>
    <?php endfor ?>

    <p>日付の選択</p>
    <select name="day">
        <?php for( $day = 1 ; $day <= 31 ; $day++ ): ?>
        <option value="<?= $day ?>"><?= $day ?>日</option>
        <?php endfor ?>
    </select>
    
    <p>都道府県の選択</p>
    <p>
        <?php for($i = 0 ; $i < count( $pref) ; $i++): ?>
            <label>
                <input type="checkbox" name="pref[]" value="<?= $i + 1 ?>"><?= $pref[ $i ] ?>
            </label>
        <?php endfor ?>
    </p>

</body>
</html>
