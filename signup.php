<?php
$host='localhost';
$user='root';
$DBpassword='';
$db='lab1_DB';

$con = mysqli_connect($host,$user,$DBpassword);
mysqli_select_db($con,$db);

session_start();

if(isset($_POST['email']))
{
    $email=$_post['email'];
    $name=$_post['name'];
    $password=md5($password);

    $sql="INSERT INTO users (email,name,password) VALUES ('".$email."','".$name."','".$password."')";

    $if(mysqli_query($con, $sql)){
        $_SESSION['name']=$name;
        header('location: Hi.php');
    } else{
        echo "ERROR: Could't be able to execute this file $sql. " . mysqli_error($con);
    }

  }
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>

	<link rel="stylesheet" href="mainStyle.css">

  </head>

  <body>

    <div class="container">
    	<div class="header">
    		<h2>Login to your Account</h2>
    	</div>

    	<form class="form" id="form" method="$ POST" action="#" >

        <div class="form-control ">
          <label >Username</label>
          <input type="text" name="name" placeholder="Enter your username"
           id="username" />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>

        <div class="form-control ">
          <label >Email</label>
          <input type="email" name="email" placeholder="x@Xmail.com"
           id="email" />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>

        <div class="form-control">
          <label >Password</label>
          <input type="password" name="password" placeholder="Password"
          id="password"/>
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>

        <div class="form-control">
          <label >Password check</label>
          <input type="password" name="password2" placeholder="Password Confirmation"
           id="password2"/>
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>

      	<button>Submit</button>

      </form>

    </div>

<script src="validationLogin.js" type="text/javascript"></script>

  </body>
</html>
