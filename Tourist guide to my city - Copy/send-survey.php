<?php
// send-survey.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $feedback = htmlspecialchars($_POST['feedback']);
    $suggestions = htmlspecialchars($_POST['suggestions']);

    $to = "hmada12hoka@gmail.com";
    $subject = "استبيان رأي من $name";
    $message = "الاسم: $name\nرقم التليفون: $phone\nالبريد الإلكتروني: $email\nرأيك: $feedback\nمقترحات: $suggestions";
    $headers = "From: $email";

    if(mail($to, $subject, $message, $headers)){
        echo "<h3 style='text-align:center;'>تم الإرسال بنجاح!</h3>";
    } else {
        echo "<h3 style='text-align:center; color:red;'>حدث خطأ أثناء الإرسال.</h3>";
    }
}
?>