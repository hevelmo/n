<?php
	/*
	    PHP SITE

	    Type: templates
	    Object: 
	    Update: 
	    Author: Heriberto Velasco Mora
	*/
	/*
	 *		[required] vendor -> autoload
	 */
		/* */
			// use Monolog\Logger;
			// use Monolog\Handler\StreamHandler;

			// $log = new Logger('name');
			// $log->pushHandler(new StreamHandler('app.log', Logger::WARNING));
			// $log->addWarning('Oh Noes.');
			require_once "vendor/autoload.php";
			require_once "core/environment/configSet.php";

			date_default_timezone_set('America/New_York');
		/* end -> [required] vendor -> autoload */
	/* 
	 *		[Slim] view app object Slim twig
	 */
		/* */
			$app = new \Slim\Slim( array(
				'view' => new \Slim\Views\Twig()
			));

			$view = $app->view();
			$view->parserOptions = array(
			    'debug' => true,
			);

			$view->parserExtensions = array(
			    new \Slim\Views\TwigExtension(),
			);
		/* end -> [Slim] view app object Slim twig */
	/*
	 *		[Sections] gets
	 */
		/* */
			/*	
			 *		[twig template] home
			 */
				$app->get('/', function() use($app){
					$app->render(
						'home/_index.twig',
						array( 
							'title' => 'Nupali, A.C.',
							'_section' => 'home',
							'_host' => _HOST,
							'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
							'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
							'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
							'tag_image' => 'img/logo/nupali.png'
						)
					);
				})->name('home');
			/*
			 *		[twig template] how to help
			 */
				$app->get('/como-ayudar')
			// gallery
			// contact
		/* end -> [Sections] gets */

	/*
	 *		[run] run app
	 */
		/* */
			$app->run();
		/* end -> [run] reun app */
?>