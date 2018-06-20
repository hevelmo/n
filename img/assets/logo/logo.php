<?php

header('Content-Type: image/png');

$file = 'logo-nupali.png'; // path to png image

$img = imagecreatefrompng($file); // open image

imagealphablending($img, true); // setting alpha blending on

imagesavealpha($img, true); // save alphablending setting (important)

imagepng($img);

?>