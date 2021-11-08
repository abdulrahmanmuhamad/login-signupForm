<?php   session_start(); ?>

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
    		<h2>WELCOME</h2><br>
        <P>
                <?php echo $_SESSION['name']; ?>
              </P>
    	</div>
    </div>
<?php  session_destroy();?>
  </body>
</html>
