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
        <h1 class="page-header">Nodes</h1>
        
        <div class="row">
            <div class="col-xs-12 col-sm-5">
                <a href="https://vacaexclusive.com" target="_blank">
                    <img class="img-responsive" src="../assets/img/screenshots/exploreResort-01.jpg" alt="Vaca Exclusive">
                </a>
            </div><!-- /.col -->
            <div class="col-xs-12 col-sm-7">
                <h4 class="media-heading">Web Designer/Developer</h4>
                <h5><a href="https://vacaexclusive.com" target="_blank">VacaExclusive.com</a></h5>
                <p>Designed and developed progressive web app using agile, iteration based, just-in-time approach. Project ongoing.</p>
                <p class="lead">NodeJS, GulpJS, HTML5, CSS3, PHP, jQuery, JavaScript, AJAX, LESS, Git, 3rd Party APIs, SEO, Jira, Bitbucket, Visual Studio Code</p>
            </div><!-- /.col -->
        </div><!-- /.row -->

        <div class="row">
            <div class="col-xs-12 col-sm-5">
                    <img class="img-responsive" src="../assets/img/screenshots/vacaAgent-01.png" alt="Vaca Exclusive Agent Dasboard">
            </div><!-- /.col -->
            <div class="col-xs-12 col-sm-7">
                <h4 class="media-heading">Web Designer/Developer</h4>
                <h5>Web App Agent Dashboard</h5>
                <p>Independently designed and developed web app tool integrated with company CRM for sales agents which includes business logic to intelligently modify form based on user input. Also integrated with Google Sheets to provide real-time data in charts and graphs.</p>
                <p class="lead">NodeJS, GulpJS, HTML5, CSS3, PHP, jQuery, JavaScript, AJAX, LESS, Git, Google Sheets, Jira, Bitbucket, Visual Studio Code</p>
            </div><!-- /.col -->
        </div><!-- /.row -->
        
        <div class="row">
            <div class="col-xs-12 col-sm-5">
                <a href="http://4minutequote.com" target="_blank">
                    <img class="img-responsive" src="../assets/img/screenshots/4min-02.png" alt="4 Minute Quote">
                </a>
            </div><!-- /.col -->
            <div class="col-xs-12 col-sm-7">
                <h4 class="media-heading">Web Designer/Developer</h4>
                <h5><a href="http://4minutequote.com" target="_blank">4minutequote.com</a></h5>
                <p>Design, developed, and launched using modern frameworks, agile worklow and tools, and third-party API integration and customization.</p>
                <p class="lead">HTML5, CSS3, PHP, jQuery, JavaScript, Bootstrap, LESS, Git, GulpJS, APIs, Copywriting, SEO, Jira, Bitbucket, Google Cloud Platform, Sublime Text 3</p>
            </div><!-- /.col -->
        </div><!-- /.row -->

        <div class="row">
            <div class="col-xs-12 col-sm-5">
                <a href="http://superiorincomebooster.com" target="_blank">
                <img class="img-responsive" src="../assets/img/screenshots/sib-01.png" alt="Superior Income Booster">
                </a>
            </div><!-- /.col -->
            <div class="col-xs-12 col-sm-7">
                <h4 class="media-heading">Web Designer/Developer</h4>
                <h5><a href="http://superiorincomebooster.com" target="_blank">SuperiorIncomeBooster.com</a></h5>
                <p>Designed and developed brand story to create user-centered progressive web app for start-up agency with a multiple third party API integrations. Setup sales pipeline using MailChimp.</p>
                <p class="lead">NodeJS, GulpJS, HTML5, CSS3, PHP, jQuery, JavaScript, AJAX, LESS, Git, Facebook API, Twitter API, LinkedIn API, MailChimp API, SEO, Jira, Bitbucket, Visual Studio Code</p>
            </div><!-- /.col -->
        </div><!-- /.row -->

        <div class="row">
            <div class="col-xs-12 col-sm-5">
                <a href="https://orlandohmor84.github.io/mathis/public/" target="_blank">
                <img class="img-responsive" src="../assets/img/screenshots/mathis-01.png" alt="Mathis A/C">
                </a>
            </div><!-- /.col -->
            <div class="col-xs-12 col-sm-7">
                <h4 class="media-heading">Web Designer/Developer</h4>
                <h5><a href="https://orlandohmor84.github.io/mathis/public/" target="_blank">View Page</a></h5>
                <p>Successfully designed and developed user-friendly splash page within the alloted two hour deadline.</p>
                <p class="lead">NodeJS, GulpJS, HTML5, CSS3, jQuery, JavaScript, LESS, Git, Jira, Bitbucket, Visual Studio Code</p>
            </div><!-- /.col -->
        </div><!-- /.row -->
        
        <div class="row">
            <div class="col-xs-12 col-sm-5">
                <img class="img-responsive" src="../assets/img/screenshots/healthAgent-01.png" alt="Obamacare Agent Form">
            </div><!-- /.col -->
            <div class="col-xs-12 col-sm-7">
                <h4 class="media-heading">Web Developer</h4>
                <h5>Intuitive Web Form</h5>
                <p>Developed jQuery based intuitive web form to guide agents through extensive enrollment process.</p>
                <p class="lead">NodeJS, GulpJS, HTML5, CSS3, PHP, jQuery, JavaScript, AJAX, LESS, Git, 3rd Party APIs, Jira, Bitbucket, Sublime Text 3</p>
            </div><!-- /.col -->
        </div><!-- /.row -->
        
        <div class="row">
            <div class="col-xs-12 col-sm-5">
                <a href="http://examsimulator.xyz" target="_blank">
                    <img class="img-responsive" src="../assets/img/screenshots/exam-simulator-01.png" alt="Exam Simulator">
                </a>
            </div><!-- /.col -->
            <div class="col-xs-12 col-sm-7">
                <h4 class="media-heading">Project Manager/Lead Developer</h4>
                <h5><a href="http://examsimulator.xyz" target="_blank">Exam Simulator</a></h5>
                <p>Leading small team in agile web app development of JavaScript-based practice exam platform. My primary responsibilities include project management, AngularJS development, and front-end design.</p>
                <p class="lead">AngularJS, HTML5, CSS3, JavaScript, Bootstrap, LESS, JSON, Git, GulpJS, Bitbucket, Sublime Text 3 QuickEdit Pro</p>
            </div><!-- /.col -->
        </div><!-- /.row -->
        
        <div class="row">
            <div class="col-xs-12 col-sm-5">
                <a class="pull-left" href="http://creative.ibuildweb.solutions" target="_blank">
                    <img class="img-responsive" src="../assets/img/screenshots/portfolioOld-01.png" alt="Portfolio">
                </a>
            </div><!-- /.col -->
            <div class="col-xs-12 col-sm-7">
                <h4 class="media-heading">Web Designer/Developer</h4>
                <h5><a href="http://creative.ibuildweb.solutions" target="_blank">Creative.ibuildweb.solutions</a></h5>
                <p>Entire site designed, developed, and deployed on Android mobile device from start to finish!</p>
                <p class="lead">HTML5, CSS3, Bootstrap, PHP, jQuery, JavaScript, Git, Copywriting, SEO</p>
            </div><!-- /.col -->
        </div><!-- /.row -->
        <p class="cta"><a class="btn btn-primary btn-lg" role="button" href="tools.php">See Tools</a></p>
    </div><!-- /.container -->

    <?php include 'includes/footer.php'; ?>

    <script src="../assets/js/scripts.js"></script>

    <script>
        $(document).ready(function() {
            nodesTab();
        });
    </script>

</body>
</html>