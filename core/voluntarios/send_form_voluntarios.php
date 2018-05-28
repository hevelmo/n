<?php
    $f_nombre = $_POST['nombre'];
    $f_correo = $_POST['correo']:
    $f_edad = $_POST['edad']
    $f_residencia = $_POST['residencia'];
    $f_gustos_pasatiempos = $_POST['gustos-pasatiempos'];
    $f_experiencia = $_POST['experiencia'];
    $f_horario = $_POST['apoyo'];

    $to = "contacto@nupali.org";
    $subject = "Voluntarios Nupali";

    $anio = date("o");
    $cuerpo = '';

    $headers = 'MIME-Version: 1.0' . "\r\n"; 
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 

    $headers .= 'From: '. $f_name .' <'. $f_email .'>' . "\r\n" . 'Reply-To: '. $f_email . "\r\n" . 'X-Mailer: PHP/' . phpversion();

    $success = mail($to,$subject,$cuerpo,$headers);
    if (!$success) {
        echo "\r\nMensaje no enviado. \r\n";
    } else {
        echo "\r\nSe envio el correo. \r\n";
    }
?>