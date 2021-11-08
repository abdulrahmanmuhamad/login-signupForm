<?php

$host='localhost';
$user='root';
$DBpassword='';
$db='lab1_DB';

$con = mysqli_connect($host,$user,$DBpassword);
mysqli_select_db($con,$db);

session_start();

if(isset($_POST['email'])){

    $email=$_POST['email'];
    $password=md5($password);
    $sql="select * from user where email='".$email."' AND password='".$password."' limit 1";

    $result = mysqli_query($con,$sql);

    if(mysqli_num_rows($result)==1){
        $row = mysqli_fetch_array($result);
        $name = $row['name'];
        $_SESSION['name']=$name;
        header('location: Hi.php');
    }
    else{
        echo "
            <script type=\"text/javascript\">
            alert('Wrong email or password');
            preventDefault();
            </script>";
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

    	<form class="form" id="form" method="POST" action="Hi.php" >

      	<div class="form-control ">
    			<label >Email</label>
    			<input type="text" placeholder="Enter your Email"
           id="Email" name="Email" />
    			<i class="fas fa-check-circle"></i>
    			<i class="fas fa-exclamation-circle"></i>
    			<small>Error message</small>
    		</div>


      	<div class="form-control">
    			<label >Password</label>
    			<input type="password" placeholder="Password"
          id="password" id="password"/>
    			<i class="fas fa-check-circle"></i>
    			<i class="fas fa-exclamation-circle"></i>
    			<small>Error message</small>
    		</div>


      	<button type="submit">Submit</button>

      </form>

    </div>

  </body>
</html>
