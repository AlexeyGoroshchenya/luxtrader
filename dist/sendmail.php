<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';
$mail->setLanguage('ru', 'phpmailer/language/')
$mail->isHTML(true);      

$mail->setFrom('375295509897@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('lastpaladin@yandex.ru');     // Кому будет уходить письмо 
$mail->Subject = 'Заявка с тестового сайта';



$body = '<h1>Новая заявка с сайта Luxtrader </h1>';
if(trim(!empty($_POST['fio']))){
    $body.= '<p> <strong>Имя:</strong> '.$_POST['fio'].' </p>';
}

if(trim(!empty($_POST['phone']))){
    $body.= '<p> <strong>Телефон:</strong> '.$_POST['phone'].' </p>';
}

if(trim(!empty($_POST['text']))){
    $body.= '<p> <strong>Сообщение:</strong> '.$_POST['text'].' </p>';
}


$mail->Body = $body;

if(!$mail->send()){
    $message = 'ошибка';
} else {
    $message = 'данные отправлены';
}

$response = ['message'=> $message];

header('Content-type: aplication/json');
echo json_encode($response)


?>