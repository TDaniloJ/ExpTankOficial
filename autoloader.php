<?php
spl_autoload_register("autoloader");

function autoloader($classname) {


    $diretorios[] = "Controller";

    foreach ($diretorios as $dir) {
        $filename = "./$dir/" . ($classname) . ".php";
        if (file_exists("$filename")) {
            include_once($filename);
            return;
        }
    }
}
