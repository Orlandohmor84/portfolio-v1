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
        <h1 class="page-header">Dependencies</h1>
    <ul class="media-list">
        <li class="media">
            <div class="pull-left">
            <img class="media-object" src="../assets/img/icons/magic-wand.png" alt="magic wand">
            </div>
            <div class="media-body">
                <h4 class="media-heading">Associate of Science, Web and Graphic Design</h4>
                <h5>Florida Technical College, Kissimmee, FL</h5>
                <p class="lead"><strong>GPA:</strong> 3.9</p>
                </p><strong>Courses:</strong> Theory and Elements of Design, Web Programming, Implementing and Maintaining Websites</p>
            </div><!-- /.media-body -->
        </li><!-- /.media -->
        <li class="media">
            <div class="pull-left">
            <img class="media-object" src="../assets/img/icons/browser.png" alt="browser">
            </div>
            <div class="media-body">
                <h4 class="media-heading">CIW Web Design Professional</h4>
                <p class="lead"><strong>Topics:</strong> Web and Graphic Design, Web Marketing, Site Development/Infrastructure, Digital Advertising</p>
            </div><!-- /.media-body -->
        </li><!-- /.media -->
        <li class="media">
            <div class="pull-left">
            <img class="media-object" src="../assets/img/icons/startup.png" alt="startup">
            </div>
            <div class="media-body">
                <h4 class="media-heading">CIW Ecommerce Specialist</h4>
                <p class="lead"><strong>Topics:</strong> E-commerce Site Development, E-commerce Technology and Security, E-commerce Business, Marketing, and Legal Issues</p>
            </div><!-- /.media-body -->
        </li><!-- /.media -->
        <li class="media">
            <div class="pull-left">
            <img class="media-object" src="../assets/img/icons/tablet.png" alt="tablet">
            </div>
            <div class="media-body">
                <h4 class="media-heading">CIW Web Design Specialist</h4>
                <p class="lead"><strong>Topics:</strong> Site Development Essentials, Web Design Elements, Basic Web Technologies, Advanced Web Technologies</p>
            </div><!-- /.media-body -->
        </li><!-- /.media -->
        <li class="media">
            <div class="pull-left">
            <img class="media-object" src="../assets/img/icons/layers.png" alt="layers">
            </div>
            <div class="media-body">
                <h4 class="media-heading">CIW Web Foundations</h4>
                <p class="lead"><strong>Topics:</strong> Site Development Associate, Internet Business Associate, Networking Technology Associate</p>
            </div><!-- /.media-body -->
        </li><!-- /.media -->
        <li class="media">
            <div class="pull-left">
            <img class="media-object" src="../assets/img/icons/computing-cloud.png" alt="computing cloud">
            </div>
            <div class="media-body">
                <h4 class="media-heading">CompTIA Network+</h4>
                <p class="lead"><strong>Topics:</strong> Network Architecture, Network Operations, Network Security, Troubleshooting, Industry Standards, Practices, and Network Theory</p>
            </div><!-- /.media-body -->
        </li><!-- /.media -->
        <li class="media">
            <div class="pull-left">
            <img class="media-object" src="../assets/img/icons/cpu.png" alt="cpu">
            </div>
            <div class="media-body">
                <h4 class="media-heading">CompTIA A+</h4>
                <p class="lead"><strong>Topics:</strong> PC Hardware, Networking, Laptops, Printers, Operational Procedures, Security, Mobile Devices, Troubleshooting</p>
            </div><!-- /.media-body -->
        </li><!-- /.media -->
    </ul>
    <p class="cta"><a class="btn btn-primary btn-lg" role="button" href="deploy.php">Deploy</a></p>
    </div><!-- /.container -->

    <?php include 'includes/footer.php'; ?>

    <script src="../assets/js/scripts.js"></script>

    <script>
        $(document).ready(function() {
            learnTab();
        });
    </script>

</body>
</html>