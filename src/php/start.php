<?php include 'includes/var.php'; ?>
<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo $description; ?>">
    <meta name="author" content="<?php echo $author; ?>">
    <meta name="keywords" content="<?php echo $keywords; ?>">

    <title><?php echo $title; ?> - <?php echo $tagline; ?></title>
		
    <!-- Twitter Card Data -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="<?php echo $twittername; ?>">
    <meta name="twitter:title" content="<?php echo $title; ?> - <?php echo $tagline; ?>">
    <meta name="twitter:description" content="<?php echo $description; ?>">
    <meta name="twitter:creator" content="<?php echo $twittername; ?>">
    <meta name="twitter:image:src" content="">
    <!-- Twitter summary card with large image must be at least 280x150px -->

    <!-- Open Graph for Facebook and Other Sites -->
    <meta property="og:title" content="<?php echo $title; ?> - <?php echo $tagline; ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://ibuildweb.site">
    <meta property="og:image" content="">
    <meta property="og:description" content="<?php echo $description; ?>">
    <meta property="fb:admins" content="">
    
    <link href="../assets/css/styles.css" rel="stylesheet">

    <!-- Vendors -->
    <script src="../vendor/jquery/jquery-2.2.4.min.js"></script>
    <script src="../vendor/bootstrap-3.3.7/js/bootstrap.js"></script>
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script type="application/ld+json">
        {
            "@context": "http://schema.org/",
            "@type": "website",
            "name": "ibuildwebsite",
            "image": "http://ibuildweb.site/mstile-310x310.png",
            "description": "<?php echo $description; ?>",
        }
            
    </script>

</head>

<body>

    <?php include 'includes/nav.php'; ?> 
	
	<div class="jumbotron">
        <div class="container">
            <h1><?php echo $title; ?></h1>
            <h2 class="version">PHP Version</h2>
            <p>Agile <strong>JavaScript/PHP/Node Web Developer</strong> Project Manager UI/UX Designer Digital Marketing Strategist</p>
            <p>This is my story. Told in content-driven design...</p>
            <p class="cta"><a class="btn btn-primary btn-lg" role="button" href="nodes.php">See Nodes</a></p>
            <img class="img-responsive" src="../assets/img/icons/screen-1.png" alt="computer and phone responsive web design">
        </div><!-- /.container -->
    </div><!-- /.jumbotron -->

    <?php include 'includes/footer.php'; ?>

    <script src="../assets/js/scripts.js"></script>

    <script>
        $(document).ready(function() {
            startTab();
        });
    </script>

</body>
</html>