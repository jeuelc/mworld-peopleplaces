<? /* i-C-a*/ ?>
<?
// $content = $_POST['htmlcontent'];
// $content = trim($content);
// $file = "avatarstate.txt";
// file_put_contents($file, $content);
// echo "success";

    
    // header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Origin: *');  
    // header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    // header('Access-Control-Max-Age: 1000');
    // header('Access-Control-Allow-Headers: Content-Type');
    $content = $_POST['htmlcontent'];
    $file = "avatarstate.txt";
    file_put_contents($file, $content);


//print "pindot duy";
// return true;
?>

