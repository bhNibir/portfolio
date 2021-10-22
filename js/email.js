const sentEmail = () =>{
    const sender_mail = document.getElementById("senderEmail").value
    const sender_name = document.getElementById("senderName").value
    const mail_subject = document.getElementById("Subject").value
    const mail_body = document.getElementById("mailBody").value

    if( sender_mail && mail_body ) {
        Email.send({
            Host: "smtp.gmail.com",
            Username : "nibirsmtp@gmail.com",
            Password : "cpobblmmgcfezbmo",
            // SecureToken : "2728028c-8ae6-4d53-a734-bf1605a41a0b",
            To : "biplob.asanibir@gmail.com",
            From : sender_mail,
            Subject : mail_subject,
            Body : "Name : " +sender_name + " \n\n\n "+ mail_body
        }).then(
          message => alert(message)
        );
    }
}