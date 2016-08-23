<?php

use App\Company;
use App\MarketingCategory;
use Illuminate\Database\Eloquent\Builder;

return [
    'title'  => 'Marketing company projects',
    'model'  => \App\MarketingCategoryCompanyProject::class,

    /*
    |-------------------------------------------------------
    | Columns/Groups
    |-------------------------------------------------------
    |
    | Describe here full list of columns that should be presented
    | on main listing page
    |
    */
    'columns' => [
        'id',

        'm_cat_company_id' => [
            'title' => 'Marketing category company relation',
            'output' => function($row){
                return sprintf('%s to: %s >> %s',
                    $row->m_cat_companies->company->name,
                    $row->m_cat_companies->category->marketing->name,
                    $row->m_cat_companies->category->name
                );
            }
        ],

        'project_id' => [
            'title' => 'Project',
            'output' => function ($row){
                return sprintf('%s', $row->project->name);
            }
        ],

        'active' => [
            'visible' => function() {},
            'output' => function($row) {
                return output_boolean($row);
            }
        ],

        'dates' => [
            'elements' => [
                'created_at',
                'updated_at'
            ]
        ]
    ],

    /*
    |-------------------------------------------------------
    | Actions available to do, including global
    |-------------------------------------------------------
    |
    | Global actions
    |
    */
    'actions' => [],

    /*
    |-------------------------------------------------------
    | Eloquent With Section
    |-------------------------------------------------------
    |
    | Eloquent lazy data loading, just list relations that should be preloaded
    |
    */
    'with' => [],

    /*
    |-------------------------------------------------------
    | QueryBuilder
    |-------------------------------------------------------
    |
    | Extend the main scaffold index query
    |
    */
    'query' => function(Builder $query)
    {
        return $query;
    },

    /*
    |-------------------------------------------------------
    | Global filter
    |-------------------------------------------------------
    */
    'filters' => [
        'm_cat_company_id' => [
            'type' => 'select',
            'options' => function(){
                $items = [
                    '' => '-- Any --'
                ];

                $collection = (new \App\MarketingCategoryCompanyRelation)->active()->get();

                foreach ($collection as $item)
                {
                    $items[$item->id] = $item->name;
                }

                return $items;
            }
        ],

        'project_id' => [
            'type' => 'select',
            'options' => function(){
                $items = [
                    '' => '-- Any --'
                ];

                $collection = (new \App\Project)->active()->get();

                foreach ($collection as $item)
                {
                    $items[$item->id] = $item->name;
                }

                return $items;
            }
        ],

        'active' => [
            'type' => 'select',
            'options' => [
                '' => '-- Any --',
                0 => 'No',
                1 => 'Yes'
            ]
        ],

        'created_at' => [
            'type' => 'date'
        ]
    ],

    /*
    |-------------------------------------------------------
    | Editable area
    |-------------------------------------------------------
    |
    | Describe here all fields that should be editable
    |
    */
    'edit_fields' => [
        'id'       => ['type' => 'key'],

        'm_cat_company_id' => [
            'label' => 'Company',
            'type' => 'select',
            'description' => 'Choose marketing category company relation witch you want attach for an a project',
            'options' => function(){
                $items = [];

                $collection = (new \App\MarketingCategoryCompanyRelation)->active()->get();

                foreach ($collection as $item)
                {
                    $items[$item->id] = sprintf('%s to: %s >> %s',
                        $item->company->name,
                        $item->category->marketing->name,
                        $item->category->name
                    );
                }

                return $items;
            }
        ],

        'project_id' => [
            'label' => 'Marketing category',
            'type' => 'select',
            'description' => 'Choose witch project you want to use',
            'options' => function(){
                $items = [];

                $collection = (new \App\Project)->active()->get();

                foreach ($collection as $item)
                {
                    $items[$item->id] = sprintf('%s-(%s)', $item->name, $item->company->name);
                }

                return $items;
            }
        ],

        'active' => [
            'title' => 'Active',
            'type' => 'select',
            'options' => [
                1 => 'Keep enabled',
                0 => 'Keep disabled'
            ]
        ]
    ]
];