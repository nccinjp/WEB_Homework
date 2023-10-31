<?php
//　POSTでーたを保存
$postData = [];

// データの存在をチェック
if( isset( $_POST[ "name" ] )&& $_POST[ "name" ] !== "" ){
    $postData[ "name" ]    = $_POST[ "name" ];
}
else{
    $postData[ "name" ]    = "お名前が未入力です"; 
}

if( isset( $_POST[ "email" ] ) && $_POST[ "email" ] !== "" ){
    $postData[ "email" ]    = $_POST[ "email" ];
}
else{
    $postData[ "email" ]    = "メールが未入力です"; 
}
//カテゴリー
if( isset( $_POST[ "category" ] ) ){
    $postData[ "category" ]    = $_POST[ "category" ];
    switch( $postData [ "category" ] ){
        case 1: $postData["category"] = "カフェについて"; break;
        case 2: $postData["category"] = "その他";         break;
    }
}
else{
    $postData[ "category" ]    = "選択されてません"; 
}
//お得な情報
if( isset( $_POST[ "deals" ] ) ){
    $postData[ "deals" ]    = "希望する" ;
}
else{
    $postData[ "deals" ]    = "希望しない"; 
}

if( isset( $_POST[ "content" ] ) ){
    $postData[ "content" ]    = $_POST[ "content" ];
}
else{
    $postData[ "content" ]    = ""; 
}
print_r( $_POST );

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>CONTACT | スローライフカフェ</title>
</head>

<body>
    
    <p>
        <img 
        src="images/kadai04_logo.png"
        alt="ecc.web.kadai05_2.cafe.logo"
        >
    </p>
    
    <ul>
        <li>Home</li>
        <li>Food</li>
        <li>Drink</li>
        <li>Dessert</li>
        <li>Access</li>
        <li>SHOP INFORMATION</li>
    </ul>

    <p>
        <img 
        src="images/kadai06_contact.jpg"
        alt="スローライフカフェへのお問い合わせ"
        width="850"
        height="370"
        >
    </p>

    <p>スローライフカフェへのお問い合わせ内容の確認</p>
    
    <table>
    <tr>     
        <th>お名前（必須）</th> 
            <td>
                <?= htmlspecialchars( $postData[ "name" ], ENT_QUOTES, "UTF-8"  ) ?>
            </td>     
    </tr>
     
    <tr>     
        <th>メールアドレス（必須）</th> 
            <td>
                <?= htmlspecialchars( $postData[ "email" ], ENT_QUOTES, "UTF-8"  ) ?>
           </td>     
    </tr>
    
    <tr>
        <th>お問い合わせ内容について</th>
            <td>
                <?= htmlspecialchars( $postData[ "category" ], ENT_QUOTES, "UTF-8"  ) ?>
            </td>
    </tr>

    <tr>
        <th>お得な情報</th>
            <td>
                <?= htmlspecialchars( $postData[ "deals" ], ENT_QUOTES, "UTF-8"  ) ?>
            </td>
    </tr>

    <tr>
        <th>メッセージ</th>
            <td>
                <?= nl2br(htmlspecialchars( $postData[ "content" ], ENT_QUOTES, "UTF-8"  ) ) ?>
            </td>
    </tr>    

     
    </table>

           
  

</body>
</html>
