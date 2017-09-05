<?php

$message = '<h2>Новая заявка с сайта "VGBuildings"</h2>';

if (isset($_POST['name']))
    $message .= '<p>Имя <b>' . $_POST['name'] . '</b></p>';

if (isset($_POST['phone']))
    $message .= '<p>Контактный телефон <b>' . $_POST['phone'] . '</b></p>';

if (isset($_POST['area']))
    $message .= '<p>Площадь стен: <b>' . $_POST['area'] . '</b></p>';

if (isset($_POST['angular-elements']))
    $message .= '<p>Угловые элементы: <b>' . $_POST['angular-elements'] . '</b></p>';

if (isset($_POST['help-spec']))
    $message .= '<p>Помощь специалиста: <b>' . $_POST['help-spec'] . '</b></p>';

if (isset($_POST['help-team']))
    $message .= '<p>Помощь команды: <b>' . $_POST['help-spec'] . '</b></p>';




include "class.phpmailer.php";

$mail = new PHPMailer();
$mail->From = $_REQUEST['email'] ? $_REQUEST['email'] : "orders@next-team.ru";
$mail->FromName = $_REQUEST['name'];
$mail->AddAddress('sv@next-team.ru, v.g.buildings@gmail.com');
$mail->IsHTML(true);
$mail->Subject = "Новая заявка с сайта «VGBuildings»";
$mail->Body = $message;

if (!$mail->Send()) print ('Mailer Error: ' . $mail->ErrorInfo);

?>
