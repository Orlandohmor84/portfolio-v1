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
        <h1 class="page-header">Tools</h1>
        <ul class="media-list">
            <li class="media">
                <div class="pull-left">
                <img class="media-object" src="../assets/img/icons/smartphone.png" alt="smartphone">
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Languages/Libraries</h4>
                    <p>Strength in front end development. Focus on full stack JavaScript craft.</p>
                    <p class="lead"><strong>Live:</strong> <span ng-class="{highlight : developer}">HTML5</span>, CSS3, JavaScript, AJAX, jQuery, Bootstrap, LESS, AngularJS, W3.JS, PHP, GulpJS, JSON, XML, Markdown</p>
                    </p><strong>Beta:</strong> NodeJS, ExpressJS, jQueryUI, YAML</p>
                    <p class="small"><strong>Alpha:</strong> MongoDB, MongooseJS, MySQL, MariaDB, SASS, GruntJS, Laravel</p>
                </div><!-- /.media-body -->
            </li><!-- /.media -->
            <li class="media">
                <div class="pull-left">
                <img class="media-object" src="../assets/img/icons/keyboard.png" alt="keyboard">
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Workflow</h4>
                    <p>Efficiently and effectively develop using either modern Agile or traditional Waterfall approach in a version-controlled, fast-paced environment using modular methods.</p>
                    <p class="lead"><strong>Tools:</strong> JIRA, Git, Bitbucket, Github, Visual Studio Code, Sublime Text 3, XAMPP, NodeJS, NPM, GulpJS, Bower, Yeomen, Bash Shell, Google Cloud Platform, Google Cloud Console, Google App Engine SDK</p>
                    <p>Also able to effectively code on the fly using Android mobile devices.</p>
                    <p class="lead"><strong>Mobile Development Tools:</strong> JIRA, Trello, Slack, QuickEdit Pro, PHP Server, MGit, Bitbucket, Photo Compress, Termux, Google Cloud Console</p>
                </div><!-- /.media-body -->
            </li><!-- /.media -->
            <li class="media">
                <div class="pull-left">
                <img class="media-object" src="../assets/img/icons/pie-charts.png" alt="pie charts">
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Project Management</h4>
                    <p>Effectively lead and manage teams using both an Agile and Waterfall approach, or any mix thereof, while maximizing resources.</p>
                    <p class="lead"><strong>Tools:</strong> JIRA, Bitbucket, Github, Slack, Google Cloud Platform, Microsoft Office, Google Apps, cPanel</p>
                </div><!-- /.media-body -->
            </li><!-- /.media -->
            <li class="media">
                <div class="pull-left">
                <img class="media-object" src="../assets/img/icons/statistics.png" alt="statistics">
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Expanded Tool Set</h4>
                    <p>Experience in all facets of web projects from planning and design to deployment and maintenance has expanded my toolbox to also add the following dimensions to any project.</p>
                    <p class="lead"><strong>User Interface/User Experience:</strong> Wireframing, Storytelling, Rapid Prototyping, Graphic Design, Adobe Creative Cloud, Efficient Site Architecture Planning, User Flow Optimization, Effective Research Gathering/Analysis</p>
                    <p class="lead"><strong>SEO/Content Development:</strong> Google Webmaster Tools, Google Analytics, Google Tag Manager, Google AdWords, Keyword Optimization, Rich Snippets, Microdata, Sales Copywriting, Content Editing</p>
                    <p class="lead"><strong>Email Marketing:</strong> HTML Email Design, Mailchimp, A/B Testing, Campaign Funnels</p>
                    <p class="lead"><strong>Sales Support</strong>: Solve360 CRM, Phone Burner Dialer, T-Max Predictive Dialer</p>
                </div><!-- /.media-body -->
            </li><!-- /.media -->
            <li class="media">
                <div class="pull-left">
                <img class="media-object" src="../assets/img/icons/chat.png" alt="chat">
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Soft Skills</h4>
                    <p>"When you love what you do, you're never really working!"</p>
                    <p class="lead">Excellent Communication  Skills, People-friendly, Analytical, Ambitious, Detail-Oriented, Goal-driven, Fast-paced workmanship, Punctual, Self-motivated</p>
                </div><!-- /.media-body -->
            </li><!-- /.media -->
        </ul>
        <p class="cta"><a class="btn btn-primary btn-lg" role="button" href="work.php">See Web Workers</a></p>
    </div><!-- /.container -->

    <?php include 'includes/footer.php'; ?>

    <script src="../assets/js/scripts.js"></script>

    <script>
        $(document).ready(function() {
            toolsTab();
        });
    </script>

</body>
</html>