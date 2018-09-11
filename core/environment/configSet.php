<?php
$devServerList = array("127.0.0.1","::1","192.168.0.102","localhost");
$folderDev = "n";
$anioDev     = date("o");

if(!in_array($_SERVER['SERVER_NAME'], $devServerList)){
    $urlHost = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
    $urlHost .= $_SERVER['SERVER_NAME'] . '/' . $folderDev . '/';
    define("_HOST", $urlHost);
    define("_ANIO", $anioDev);
} else {
    $urlHost = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
    //if ($_SERVER['SERVER_NAME'] . $ip_local) {
    if ($_SERVER['SERVER_NAME']) {
        $urlHost .= $_SERVER['SERVER_NAME'] . '/' . $folderDev . '/';
    } else {
        $urlHost .= $_SERVER['SERVER_NAME'] . '/' . $folderDev . '/';
    }
    define("_HOST", $urlHost);
    define("_ANIO", $anioDev);
}

?>
