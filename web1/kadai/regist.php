<?php



?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>regist</title>
</head>

<body>
   <h1>GET & POST</h1>
   <h2>GETデータを扱う</h2>
        <p>$_GETの構造</p>
        <p><?php print_r( $_GET ) ?></p>

    <h2>POSTデータを扱う</h2>
        <p>$_POSTの構造</p>
        <p><?php print_r( $_POST ) ?></p>
            <form action="sample_php_06.php" method="post">
                <p><input type="text" name="user_name"></p>
                <p><textarea name="code"></textarea></p>
                <p><button type="submit">送信</button></p> 
            </form>
        <h3>受信したPOSTデータ</h3>
            <?php if ( isset(   $_POST[ "user_name" ] ) ): ?>   
        <p>ユーザー名：<?= $_POST [ "user_name" ] ?></p>
            <?php endif ?>

        <h3>クロスサイトスクリプティング</h3>
            <?php if ( isset(   $_POST[ "code" ] ) ): ?> 
        <p><?= $_POST[ "code" ] ?></p>
            <?php endif ?>

            <h4>クロスサイトスクリプティング対策</h4>
                <?php if ( isset(   $_POST[ "code" ] ) ): ?> 
            <p><?= htmlspecialchars( $_POST[ "code" ], ENT_QUOTES, "UTF-8"  )?></p>
                <?php endif ?>

</body>
</html>
