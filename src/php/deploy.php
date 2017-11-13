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

    <div class="container">
        <h1 class="page-header">Deploy</h1>
        <ul class="media-list">
            <li class="media">
                <a class="pull-left" href="#">
                <img class="media-object" src="../assets/img/icons/poster.png" alt="poster">
                </a>
                <div class="media-body">
                    <h4 class="media-heading">Send Me a Message</h4>
                        <a href="mailto:orlando@ibuildweb.solutions?subject=Awesome Website&body=Hello">Email</a>
                </div><!-- /.media-body -->
            </li><!-- /.media -->
            <li class="media">
                <a class="pull-left" href="https://github.com/Orlandohmor84" target="new">
                <img class="media-object" src="../assets/img/logos/github216.png" alt="Github">
                </a>
                <div class="media-body">
                    <h4 class="media-heading"><a href="https://github.com/Orlandohmor84" target="new">Github</a></h4>
                    <p class="lead">Check out how neat my code is!</p>
                    <p>P.S. I hid instructions for a <strong>special gift</strong> in one of my projects. Can you find it?</p>
                </div><!-- /.media-body -->
            </li><!-- /.media -->
            <li class="media">
                <a class="pull-left" href="https://stackoverflow.com/users/5922652/orlando-morales-cochran?tab=profile" target="new">
                <img class="media-object" src="../assets/img/logos/stackoverflow216.png" alt="Stack Overflow">
                </a>
                <div class="media-body">
                    <h4 class="media-heading"><a href="https://stackoverflow.com/users/5922652/orlando-morales-cochran?tab=profile" target="new">Stack Overflow</a></h4>
                    <p class="lead">Check me out helping others within the global coding community!</p>
                </div><!-- /.media-body -->
            </li><!-- /.media -->
            <li class="media">
                <a class="pull-left" href="https://www.behance.net/ibuildwebs" target="new">
                <img class="media-object" src="../assets/img/logos/behance216.png" alt="Behance">
                </a>
                <div class="media-body">
                    <h4 class="media-heading"><a href="https://www.behance.net/ibuildwebs" target="new">Behance</a></h4>
                    <p class="lead">Check out how elegant my designs are!</p>
                </div><!-- /.media-body -->
            </li><!-- /.media -->
        </ul>
    </div><!-- /.container -->

    <?php include 'includes/footer.php'; ?>

    <script src="../assets/js/scripts.js"></script>

    <script>
        $(document).ready(function() {
            deployTab();
        });
    </script>

</body>
</html>