<?php
    if(isset($_POST['enviar'])){//si el botón con el name enviar es pulsado
        if(!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['email'])&&!empty($_POST['mensaje'])){
        //si no están vacios los inputs name, email y msg 
        //guardo el contenido de cada campo en variables
            $nombre=$_POST['nombre'];
            $apellido=$_POST['apellido'];
            $email=$_POST['email'];
            $asunto="Consulta";//puedo poner un input asunto o crearlo yo directamente  
            $mensaje="Nombre y apellido: ".$nombre." ".$apellido."\n".$_POST['mensaje'];
            $header="From: ".$email."\r\n";//la persona que escribió me dejo su email, entonces el remitente es ese email
            $header.="Reply-To: noreply@example.com"."\r\n";//Le mando un no responder o noreply
            $header.="X-Mailer: PHP/".phpversion();
            $tuCasilla="gabicalogero@gmail.com";
            $mail=mail($tuCasilla,$asunto,$mensaje,$header);//en "tu mail" tenes que colocar tu casilla de email de consultas,es decir, la casilla en la cual vas a recibir las consultas que deja la gente en tu página
            if($mail){// si el email se mando respondo éxito con javascript
                echo "<script>
                        alert('Gracias por tu contacto! en breves nos estaremos comunicando');
                        window.location='index.html'
                        </script>";
            }else{//si no se pudo enviar el email lo notifico
                echo "<script>
                        alert('Lamentamos decirle que no hemos podido enviar su consulta');
                        window.location='index.html'
                        </script>";
            }
        }
        else{//si los parámetros están vacios, aunque podemos controlar esto con required
            echo "<script>
            alert('Error faltan parametros');
                    window.location='../pages/sumate.html'
                  </script>"; 
        }
    }  
?>