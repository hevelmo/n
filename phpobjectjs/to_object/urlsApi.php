<?php

function urlsApi() {
    //Especial Actions
    $get = "get";
    $snd = "send";
    $add = "add";

    //Tables
    $mdo = "modelos";

    //Others
    $cnt = "contactos";
    $job = "bolsa-de-trabajo";
    $inf = "informacion";

    //Root Api url
    $root = "api/v1";

    return array(
        //SELECT
        //"get_mdo" => "$root/$get/$mdo/",

        //INSERT
        //"add_cnt" => "$root/$add/$cnt/",

        //SEND
        //"snd_cnt" => "$root/$snd/$cnt",

        // SEND JOB BOARD
        //"snd_job" => "$root/$snd/$job",

        // SEND JOB BOARD
        //"snd_inf" => "$root/$snd/$inf"
    );
}
