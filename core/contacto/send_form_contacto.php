<?php
    $f_cont_nombre = htmlspecialchars($_POST["nombre"]);
    $f_cont_correo = htmlspecialchars($_POST["correo"]);
    $f_cont_mensaje = htmlspecialchars($_POST["mensaje"]);
    $f_cont_host = htmlspecialchars($_POST["host"]);

    $to = "hevelmo060683@gmail.com";
    //$to = "contacto@nupali.org";
    $subject = "Contacto Nupali";

    $cuerpo = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'> 
        <html xmlns:v='urn:schemas-microsoft-com:vml'>
        <head>

            <!-- Define Charset -->
            <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
            
            <!-- Responsive Meta Tag -->
            <meta name='viewport' content='width=device-width; initial-scale=1.0; maximum-scale=1.0;' />

            <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
            
            <title>Notification 12- Responsive Email Template</title><!-- Responsive Styles and Valid Styles -->

            <style type='text/css'>
            
                body{
                    width: 100%; 
                    background-color: #0ca6a4; 
                    margin:0; 
                    padding:0; 
                    -webkit-font-smoothing: antialiased;
                    mso-margin-top-alt:0px; mso-margin-bottom-alt:0px; mso-padding-alt: 0px 0px 0px 0px;
                }
                
                p,h1,h2,h3,h4{
                    margin-top:0;
                    margin-bottom:0;
                    padding-top:0;
                    padding-bottom:0;
                }
                
                span.preheader{display: none; font-size: 1px;}
                
                html{
                    width: 100%; 
                }
                
                table{
                    font-size: 14px;
                    border: 0;
                }
                
                 /* ----------- responsivity ----------- */
                @media only screen and (max-width: 640px){
                    /*------ top header ------ */   
                    body[yahoo] .main-header{font-size: 22px !important;}
                    body[yahoo] .main-section-header{font-size: 25px !important;}
                    body[yahoo] .show{display: block !important;}
                    body[yahoo] .hide{display: none !important;}
                    
                    /*----- main image -------*/
                    body[yahoo] .main-image img{width: 440px !important; height: auto !important;}
                     
                    /* ====== divider ====== */
                    body[yahoo] .divider img{width: 440px !important;}
                    body[yahoo] .align-center{text-align: center !important;}
                    
                    /*--------- banner ----------*/
                    body[yahoo] .banner img{width: 440px !important; height: auto !important;}
                    /*-------- container --------*/         
                    body[yahoo] .container590{width: 440px !important;}
                    body[yahoo] .container580{width: 400px !important;}
                    body[yahoo] .half-container590{width: 200px !important;}
                   
                    /*-------- secions ----------*/
                    body[yahoo] .section-item{width: 440px !important;}
                    body[yahoo] .section-img img{width: 440px !important; height: auto !important;}        
                }

                @media only screen and (max-width: 479px){
                    /*------ top header ------ */
                    body[yahoo] .main-header{font-size: 20px !important;}
                    
                    /*----- main image -------*/
                    body[yahoo] .main-image img{width: 280px !important; height: auto !important;}
                     
                    /* ====== divider ====== */
                    body[yahoo] .divider{width: 280px !important;}
                    body[yahoo] .align-center{text-align: center !important;}
                    
                    /*--------- banner ----------*/
                    body[yahoo] .banner img{width: 280px !important; height: auto !important;}
                    /*-------- container --------*/         
                    body[yahoo] .container590{width: 280px !important;}
                    body[yahoo] .container580{width: 260px !important;}
                    body[yahoo] .half-container590{width: 280px !important;}
                   
                    /*-------- secions ----------*/
                    body[yahoo] .section-item{width: 280px !important;}
                    body[yahoo] .section-item-iphone{width: 280px !important;}
                    body[yahoo] .section-img img{width: 280px !important; height: auto !important;}  
                    body[yahoo] .section-iphone-img img{width: 280px !important; height: auto !important;}
                    
                    /*------- CTA -------------*/
                    body[yahoo] .cta-btn{width: 200px !important;}
                    
                }
                
        </style>
        </head>

        <body yahoo='fix' leftmargin='0' topmargin='0' marginwidth='0' marginheight='0'>
            
            <!-- ======= main section ======= -->
            <table border='0' width='100%' cellpadding='0' cellspacing='0' bgcolor='0ca6a4' style='background-image: url(http://themastermail.com/alerta/notif12/img/bg.png); background-size: 100% 100%; background-position: top center;' background='http://themastermail.com/alerta/notif12/img/bg.png'>
                
                <tr><td height='120' style='font-size: 120px; line-height: 120px;'>&nbsp;</td></tr>
                                                    
                <tr>
                    <td>
                        <table border='0' align='center' width='510' cellpadding='0' cellspacing='0' bgcolor='ffffff' class='container590 bodybg_color'>
                            
                            <tr><td height='30' style='font-size: 30px; line-height: 30px;'>&nbsp;</td></tr>
                            
                            <tr>
                                <td>
                                    <table border='0' align='center' width='460' cellpadding='0' cellspacing='0' bgcolor='ffffff' class='container590 bodybg_color'>
                                        <tr>
                                            <td>
                                                <table border='0' width='260' align='left' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;' class='section-item'>
                                                    <tr>
                                                        <td>
                                                            <table border='0' width='100' align='left' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;' class='hide'>
                                                                
                                                                <tr><td height='5' style='font-size: 5px; line-height: 5px;'>&nbsp;</td></tr>
                                                                
                                                                <tr>
                                                                    <td align='left' style='color: #7e8385; font-size: 14px; font-family: 'Montserrat', sans-serif; line-height: 22px;' class='main-header title_color'>
                                                                        <!-- ======= section text ====== -->
                                                                        
                                                                        <div style='line-height: 22px'> 
                                                                            
                                                                        </div>
                                                                    </td>   
                                                                </tr>
                                                                                                        
                                                            </table>
                                                            
                                                            <table border='0' width='2' align='left' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;' class='container590'>
                                                                <tr><td width='2' height='30' style='font-size: 30px; line-height: 30px;'></td></tr>
                                                            </table>
                                                            
                                                            <table border='0' align='right' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;' class='section-item'>
                                                                <tr>
                                                                    <!-- ======= logo ======= -->
                                                                    <td align='center'>
                                                                        <a href='http://nupali.org' style='display: block; border-style: none !important; border: 0 !important;'><img width='95' border='0' style='display: block; width: 95px;' src='http://nupali.org/img/assets/logo/logo.php' alt='Nupali A.C.' /></a>
                                                                    </td>           
                                                                </tr>   
                                                                <tr>
                                                                    <!-- ======= logo ======= -->
                                                                    <td align='center'>
                                                                        <b>CONTACTO</b>
                                                                    </td>           
                                                                </tr>                                                                        
                                                            </table>
                    
                                                        </td>
                                                    </tr>
                                                </table>
                                                
                                                <table border='0' width='2' align='left' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;' class='container590'>
                                                    <tr><td width='2' height='30' style='font-size: 30px; line-height: 30px;'></td></tr>
                                                </table>
                                                <table border='0' align='right' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;' class='section-item'>
                                                    <tr><td height='5' style='font-size: 5px; line-height: 5px;'>&nbsp;</td></tr>
                                                    <tr>
                                                        <td align='center' style='color: #7e8385; font-size: 14px; font-family: 'Montserrat', sans-serif; line-height: 22px;' class='main-header title_color'>
                                                            <!-- ======= section text ====== -->
                                                            <div style='line-height: 22px'>
                                                            </div>
                                                        </td>   
                                                    </tr>                                       
                                                </table>
                                                
                                            </td>
                                        </tr>
                                        
                                        <tr><td height='30' style='font-size: 30px; line-height: 30px;'>&nbsp;</td></tr>  
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table border='0' align='center' width='510' cellpadding='0' cellspacing='0' bgcolor='ffffff' class='container590 bg_color'>
                            <tr><td height='40' style='font-size: 40px; line-height: 40px;'>&nbsp;</td></tr>
                            <tr>
                                <td>
                                    <table border='0' align='center' width='450' cellpadding='0' cellspacing='0' class='container580 bg_color'>
                                        <tr>
                                            <td>                 
                                                <table border='0' width='398' align='right' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;' class='container580'>
                                                    <tr>
                                                        <td align='left' style='color: #7e8385; font-size: 14px; font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; line-height: 24px;' class='text_color align-center'>
                                                            <!-- ======= section text ======= -->
                                                            <div style='line-height: 24px'>
                                                                    <b>Nombre:</b> <span>$f_cont_nombre</span>
                                                            </div>
                                                        </td>   
                                                    </tr>
                                                    <tr><td height='15' style='font-size: 15px; line-height: 15px;'>&nbsp;</td></tr>
                                                    <tr>
                                                        <td align='left' style='color: #16b4ba; font-size: 14px; font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; line-height: 22px;' class='text_color align-center'>
                                                            <!-- ======= section text ======= -->
                                                            <div style='line-height: 22px'>
                                                                <p>
                                                                    <span>$f_cont_mensaje</span>
                                                                </p>
                                                            </div>
                                                        </td>   
                                                    </tr>
                                                    <tr><td height='15' style='font-size: 15px; line-height: 15px;'>&nbsp;</td></tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr><td height='40' style='font-size: 40px; line-height: 40px;'>&nbsp;</td></tr>
                        </table>   
                    </td>
                </tr>
                <tr>
                    <td>
                        <table border='0' align='center' width='510' cellpadding='0' cellspacing='0' bgcolor='f5f5f5' class='container590 bodybg_color'>
                            <tr><td height='40' style='font-size: 40px; line-height: 40px;'>&nbsp;</td></tr>
                            <tr>
                                <td align='center'>
                                    <table border='0' align='center' width='225' cellpadding='0' cellspacing='0' bgcolor='16b4ba' style='border-radius: 5px;' class='cta-btn main_color'>
                                        <tr><td height='15' style='font-size: 15px; line-height: 15px;'>&nbsp;</td></tr>
                                        <tr>
                                            <td>
                                                <table border='0' align='center' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;'>
                                                    <tr>
                                                        <td align='center' style='color: #ffffff; font-size: 16px; font-family: 'Montserrat', sans-serif;'>
                                                            <!-- ======= main section button ======= -->
                                                            
                                                            <div style='line-height: 24px;'>
                                                                <a href='mailto:$f_cont_correo?subject=Respuesta Contacto Nupali A.C.' style='color: #ffffff; text-decoration: none;'>Responder</a> 
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr><td height='15' style='font-size: 15px; line-height: 15px;'>&nbsp;</td></tr>       
                                    </table>
                                </td>
                            </tr>
                            <tr><td height='30' style='font-size: 30px; line-height: 30px;'>&nbsp;</td></tr>
                            <tr>
                                <td>
                                    <table border='0' width='460' align='center' cellpadding='0' cellspacing='0' class='container580'>
                                        <tr>
                                            <td align='center' style='color: #7e8385; font-size: 14px; font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; line-height: 30px;' class='text_color'>
                                                <div style='line-height: 30px'>
                                                    <!-- ======= section text ======= -->
                                                        &copy; 2018 CONTACTO NUPALI
                                                </div>
                                            </td>   
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr><td height='40' style='font-size: 40px; line-height: 40px;'>&nbsp;</td></tr>
                        </table>
                    </td>
                </tr>
                
                <tr><td height='120' style='font-size: 120px; line-height: 120px;'>&nbsp;</td></tr>
                
            </table>
            <!-- ======= end header ======= -->
            
            
        </body>
        </html>";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8" . "\r\n";

    $headers .= "From: ". $f_cont_nombre ." <". $f_cont_correo .">" . "\r\n" . "Reply-To: ". $f_cont_correo . "\r\n" . "X-Mailer: PHP/" . phpversion();
    $success = mail($to,$subject,$cuerpo,$headers);
    if (!$success) {
        echo "\r\nMensaje no enviado. \r\n";
    } else {
        echo "\r\nSe envio el correo. \r\n";
    }
?>