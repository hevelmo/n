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
			 * 		[twig template] 404
			 */
				$app->notFound(function() use($app) {
					$view = $app->view();
					$app->render(
						'404/_index.twig',
						array(
							'title' => 'Página no encontrada.',
							'_section' => 'page_not_found',
							'_host' => _HOST
						)
					);
					//echo "<pre>", print_r($view), "</pre>";
				});
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
				$app->get('/como-ayudar', function() use($app){
					$app->render(
						'how_to_help/_index.twig',
						array( 
							'title' => '¿Cómo ayudar?',
							'_section' => 'how_to_help',
							'_host' => _HOST,
							'tag_description' => 'Nupali, ¿Cómo ayudar?',
							'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
							'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
							'tag_image' => 'img/logo/nupali.png'
						)
					);
				})->name('how_to_help');
			/*
			 *		[twig template] how to help -> donations and donors
			 */
				$app->get('/como-ayudar/donativos-y-donadores', function() use($app){
					$app->render(
						'how_to_help/donors/_index.twig',
						array( 
							'title' => '¿Cómo ayudar?',
							'_section' => 'how_to_help',
							'_host' => _HOST,
							'tag_description' => 'Nupali, ¿Cómo ayudar?',
							'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
							'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
							'tag_image' => 'img/logo/nupali.png'
						)
					);
				})->name('donors');
			/*
			 *		[twig template] legal
			 */
				$app->get('/legal', function() use($app){
					$app->render(
						'legal/_index.twig',
						array( 
							'title' => 'Legal',
							'_section' => 'legal',
							'_host' => _HOST
						)
					);
				})->name('legal');
			/*
			 *		[twig template] legal -> constitutive act
			 */
			/*
			 *		[twig template] legal -> sat
			 */
			/*
			 *		[twig template] legal -> ijas
			 */
			/*
			 *		[twig template] legal -> bbva
			 */
			/*
			 *		[twig template] legal -> deductibler receipts
			 */
		/* end -> [Sections] gets */

	/*
	 *		[run] run app
	 */
		/* */
			$app->run();
		/* end -> [run] reun app */
?>