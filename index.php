<?php
	/*
	    PHP SITE

	    Type: templates
	    Object:
	    Update:
	    Author: Heriberto Velasco Mora
	*/
	// use Monolog\Logger;
	// use Monolog\Handler\StreamHandler;

	// $log = new Logger('name');
	// $log->pushHandler(new StreamHandler('app.log', Logger::WARNING));
	// $log->addWarning('Oh Noes.');
	/*
	 *		[required] vendor -> autoload
	 */
		/* */
			require_once "vendor/autoload.php";

		/* end -> [required] vendor -> autoload */
	/*
	 *		[] time zone
	 */
		/* */
			date_default_timezone_set('America/New_York');
		/* end -> [] vendor -> autoload */
	/*
	 *		[required] time zone
	 */
		/* */
			require_once "core/environment/configSet.php";
		/* end -> [required] environment -> config set */
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
							'_host' => _HOST,
							'_anio' => date("o")
						)
					);
					//echo "<pre>", print_r($view), "</pre>";
				});
			/*
			 *		[twig template] home
			 */
				$app->get('/', function() use($app){
					$app->render(
						'inicio/_index.twig',
						array(
							'title' => 'Nupali, A.C.',
							'_section' => 'home',
							'_host' => _HOST,
							'_anio' => date("o"),
							'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
							'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
							'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
							'tag_image' => _HOST . 'img/logo/nupali.png'
						)
					);
				})->name('home');
			/*
			 *		[twig template] projects
			 */
				$app->get('/proyectos', function() use($app){
					$app->render(
						'proyectos/_index.twig',
						array(
							'title' => 'Proyectos',
							'_section' => 'projects',
							'_host' => _HOST,
							'_anio' => date("o"),
							'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
							'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
							'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
							'tag_image' => _HOST . 'img/logo/nupali.png'
						)
					);
				})->name('projects');
				/*
				 *		[twig template] elemental-free-park
				 */
					$app->get('/proyectos/elemental-parque-libre', function() use($app){
						$app->render(
							'proyectos/elemental-parque-libre/_index.twig',
							array(
								'title' => 'Elemental parque libre.',
								'_section' => 'elemental-free-park',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('elemental-free-park');
				/*
				 *		[twig template] elemental-free-park
				 */
					$app->get('/proyectos/paseos-por-la-igualdad', function() use($app){
						$app->render(
							'proyectos/paseos-por-la-igualdad/_index.twig',
							array(
								'title' => 'Paseos por la igualdad.',
								'_section' => 'equality-rides',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('equality-rides');
			/*
			 *		[twig template] achievements
				$app->get('/logros', function() use($app){
					$app->render(
						'logros/_index.twig',
						array(
							'title' => 'Logros',
							'_section' => 'achievements',
							'_host' => _HOST,
							'_anio' => date("o"),
							'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
							'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
							'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
							'tag_image' => _HOST . 'img/logo/nupali.png'
						)
					);
				})->name('achievements');
			 */
				/*
				 *		[twig template] recognition
					$app->get('/logros/reconocimiento', function() use($app){
						$app->render(
							'logros/reconocimiento/_index.twig',
							array(
								'title' => 'Reconocimiento',
								'_section' => 'recognition',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('recognition');
				 */
				/*
				 *		[twig template] social impact
					$app->get('/logros/impacto-social', function() use($app){
						$app->render(
							'logros/impacto-social/_index.twig',
							array(
								'title' => 'Impacto Social',
								'_section' => 'social-impact',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('social-impact');
				 */
			/*
			 *		[twig template] galleries
			 */
				$app->get('/galerias', function() use($app){
					$app->render(
						'galerias/_index.twig',
						array(
							'title' => 'Galerias',
							'_section' => 'galleries',
							'_host' => _HOST,
							'_anio' => date("o"),
							'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
							'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
							'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
							'tag_image' => _HOST . 'img/logo/nupali.png'
						)
					);
				})->name('galleries');
				/*
				 *		[twig template] gallery equality rides
				 */
					$app->get('/galerias/fomento-derechos-humanos', function() use($app){
						$app->render(
							'galerias/fomento-a-los-derechos-humanos/_index.twig',
							array(
								'title' => 'Fomento a los Derechos Humanos',
								'_section' => 'fomento-derechos-humanos',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('fomento-derechos-humanos');
				/*
				 *		[twig template] gallery equality rides
				 */
					$app->get('/galerias/participacion-comunitaria', function() use($app){
						$app->render(
							'galerias/participacion-comunitaria/_index.twig',
							array(
								'title' => 'Participaciòn Comunitaria',
								'_section' => 'participacion-comunitaria',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('participacion-comunitaria');
				/*
				 *		[twig template] gallery equality rides
				 */
					$app->get('/galerias/asistencia-social', function() use($app){
						$app->render(
							'galerias/asistencia-social/_index.twig',
							array(
								'title' => 'Asistencia Social',
								'_section' => 'asistencia-social',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('asistencia-social');
				/*
				 *		[twig template] gallery workshops inclusion
				 */
					$app->get('/galerias/talleres-inclusion', function() use($app){
						$app->render(
							'galerias/talleres-inclusion/_index.twig',
							array(
								'title' => 'Talleres inclusión',
								'_section' => 'gallery-workshops-inclusion',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('gallery-workshops-inclusion');
				/*
				 *		[twig template] gallery public spaces recovery
				 */
					$app->get('/galerias/recuperacion-espacios-publicos', function() use($app){
						$app->render(
							'galerias/recuperacion-espacios-publicos/_index.twig',
							array(
								'title' => 'Recuperación espacios públicos',
								'_section' => 'gallery-public-spaces-recovery',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('gallery-public-spaces-recovery');
				/*
				 *		[twig template] gallery public spaces recovery
				 */
					$app->get('/galerias/grafiterias', function() use($app){
						$app->render(
							'galerias/grafiterias/_index.twig',
							array(
								'title' => 'Grafiterías',
								'_section' => 'gallery-grafiterias',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('gallery-grafiterias');
				/*
				 *		[twig template] gallery community work
				 */
					$app->get('/galerias/labor-comunitario', function() use($app){
						$app->render(
							'galerias/labor-comunitario/_index.twig',
							array(
								'title' => 'Labor comunitario',
								'_section' => 'gallery-community-work',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('gallery-community-work');
				/*
				 *		[twig template] gallery ecological work
				 */
					$app->get('/galerias/labor-ecologico', function() use($app){
						$app->render(
							'galerias/labor-ecologico/_index.twig',
							array(
								'title' => 'Labor ecológico',
								'_section' => 'gallery-ecological-work',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('gallery-ecological-work');
			/*
			 *		[twig template] blog
			 */
				$app->get('/noticias', function() use($app){
					$app->render(
						//'blog/_index.twig',
						'soon/_index.twig',
						array(
							'title' => 'Noticias',
							'_section' => 'blog',
							'_host' => _HOST,
							'_anio' => date("o"),
							'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
							'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
							'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
							'tag_image' => _HOST . 'img/logo/nupali.png'
						)
					);
				})->name('blog');
			/*
			 *		[twig template] how to help
			 */
				$app->get('/como-ayudar', function() use($app){
					$app->render(
						'como-ayudar/_index.twig',
						array(
							'title' => '¿Cómo ayudar?',
							'_section' => 'how-to-help',
							'_host' => _HOST,
							'_anio' => date("o"),
							'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
							'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
							'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
							'tag_image' => _HOST . 'img/logo/nupali.png'
						)
					);
				})->name('how-to-help');
				/*
				 *		[twig template] donations
				 */
					$app->get('/como-ayudar/donativos', function() use($app){
						$app->render(
							'como-ayudar/donativos/_index.twig',
							array(
								'title' => 'Donativos',
								'_section' => 'donations',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('donations');
				/*
				 *		[twig template] volunteers
				 */
					$app->get('/como-ayudar/voluntarios', function() use($app){
						$app->render(
							'como-ayudar/voluntarios/_index.twig',
							array(
								'title' => 'Voluntarios',
								'_section' => 'volunteers',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('volunteers');
				/*
				 *		[twig template] questionnaire
				 */
					$app->get('/como-ayudar/cuestionario', function() use($app){
						$app->render(
							'como-ayudar/cuestionario/_index.twig',
							array(
								'title' => 'Cuestionario',
								'_section' => 'questionnaire',
								'_host' => _HOST,
								'_anio' => date("o"),
								'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
								'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
								'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
								'tag_image' => _HOST . 'img/logo/nupali.png'
							)
						);
					})->name('questionnaire');
			/*
			 *		[twig template] contact
			 */
				$app->get('/contacto', function() use($app){
					$app->render(
						'contacto/_index.twig',
						array(
							'title' => 'Contacto',
							'_section' => 'contact',
							'_host' => _HOST,
							'_anio' => date("o"),
							'tag_description' => 'Nupali, Trabajando juntos por un espacio en equilibrio.',
							'tag_keywords' => 'Nupali, Nosotros, Como Ayudar, Legal, Proyectos, Ayudar, Contacto, Resultados, Noticias',
							'tag_author' => 'Mandala Web: Heriberto Velasco Mora - Front End Development.',
							'tag_image' => _HOST . 'img/logo/nupali.png'
						)
					);
				})->name('contact');
		/* end -> [Sections] gets */
	/*
	 *		[run] run app
	 */
		/* */
			$app->run();
		/* end -> [run] reun app */
?>