<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/ PHPMailer.php';

$mail = new PHPMailer (true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage ('ru', "phpmailer/language/");
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom("hardworking1337@gmail.com", "Название вашей компании или сайта");

// Кому отправить: укажите вашу почту
$mail->addAddress('panov1337.lp@gmail.com');

// Тема письма
$mail->Subject = 'Новая заявка с вашего сайта';

//Тело письма
$body = '<h1>Заголовок письма!</h1>';
if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))) {
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
}
if(trim(!empty($_POST['number']))) {
    $body.='<p><strong>Телефон:</strong> '.$_POST['number'].'</p>';
}

$mail->Body = $body;

// Отправка
if(!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}


$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>