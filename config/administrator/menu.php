<?php

/**
 * The menu structure of the site. For models, you should either supply the name of a model config file or an array of names of model config
 * files. The same applies to settings config files, except you must prepend 'settings.' to the settings config file name. You can also add
 * custom pages by prepending a view path with 'page.'. By providing an array of names, you can group certain models or settings pages
 * together. Each name needs to either have a config file in your model config path, settings config path with the same name, or a path to a
 * fully-qualified Laravel view. So 'users' would require a 'users.php' file in your model config path, 'settings.site' would require a
 * 'site.php' file in your settings config path, and 'page.foo.test' would require a 'test.php' or 'test.blade.php' file in a 'foo' directory
 * inside your view directory.
 *
 * @type array
 *
 * 	array(
 *		'E-Commerce' => array('collections', 'products', 'product_images', 'orders'),
 *		'homepage_sliders',
 *		'users',
 *		'roles',
 *		'colors',
 *		'Settings' => array('settings.site', 'settings.ecommerce', 'settings.social'),
 * 		'Analytics' => array('E-Commerce' => 'page.ecommerce.analytics'),
 *	)
 */
return [
//     'App' => [
//          'page_header' => 'Some Title' // work only for parent category
//          'dashboard' => [
//          'icon'  => 'fa-dashboard',
//          'route' => 'admin_dashboard',
//          ]
//     ]
//    'Roles' => [
//        'page_header' => 'not working',
////        'icon' => 'fa fa-circle-o',
//        'pages' => [
//            'admins' => [
//                'icon' => 'fa fa-user'
//            ],
//            'members' => [
//                'icon' => 'fa fa-users'
//            ]
//        ]
//    ],
    'Content' => [
        'page_header' => 'main content site',
//        'icon' => 'fa fa-circle-o',
        'pages' => [
            'pages' => [
                'icon' => 'fa fa-circle-o'
            ],

            'webDesign' => [
                'icon' => 'fa fa-circle-o'
            ],

            'strategies' => [
                'icon' => 'fa fa-circle-o'
            ],

            'social' => [
                'icon' => 'fa fa-circle-o'
            ],

            'books' => [
                'icon' => 'fa fa-circle-o'
            ],

            'metas' => [
                'icon' => 'fa fa-circle-o'
            ]
        ]
    ],

    'Marketings' => [
        'page_header' => 'advanced content site',
//        'icon' => 'fa fa-circle-o',
        'pages' => [
            'marketings' => [
                'icon' => 'fa fa-circle-o'
            ],

            'm_categories' => [
                'icon' => 'fa fa-circle-o'
            ],

            'm_cat_companies' => [
                'icon' => 'fa fa-circle-o'
            ],

            'm_cat_companies_projects' => [
                'icon' => 'fa fa-circle-o'
            ]
        ]
    ],

    'Companies' => [
        'pages' => [
            'companies' => [
                'icon' => 'fa fa-circle-o'
            ],

            'projects' => [
                'icon' => 'fa fa-circle-o'
            ],
        ]
    ]
];
