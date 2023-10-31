<?php
// ページのタイトル 
$pageTitle = "PHPで変数と定数";

//定数
//define( "定数名"，值 )
//サイトの言語
define( "SITE_LANG", "ja" );
// サイトの文字コート
define( "SITE_CHARSET", "UTF-8");
//サイトの名前
define( "SITE_NAME", "HTML & CSS");

?>
<!DOCTYPE html>
<html lang="<?= SITE_LANG ?>">
<head>
    <meta charset="<?= SITE_CHARSET ?>">
    <title><?= $pageTitle ?> - <?= SITE_NAME ?></title>
</head>

<body>
    <!--ここにコンテンツを記述する-->

    


</body>
</html>