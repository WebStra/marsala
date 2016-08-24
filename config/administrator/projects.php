<?php

use App\Company;
use Illuminate\Database\Eloquent\Builder;

return [
    'title'  => 'Projects',
    'model'  => \App\Project::class,

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

        'name',

        'image' => [
            'output' => function($row) {
                return output_image($row, 'image', ['style' => 'border: 1px dashed purple', 'width' => 150]);
            }
        ],

        'company_id' => [
            'output' => function($row){
                return sprintf('Company: %s', $row->company->name);
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
        'company_id' => [
            'type' => 'select',
            'options' => function(){
                $items = [
                    '' => '-- Any --'
                ];

                $collection = (new Company)->active()->get();

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

        'company_id' => [
            'type' => 'select',
            'label' => 'Company',
            'description' => 'Choose which company have a project',
            'options' => function(){
                $items = [];

                $collection = (new Company)->active()->get();

                foreach ($collection as $item)
                {
                    $items[$item->id] = $item->name;
                }

                return $items;
            }
        ],

        'name' => form_text(),

        'image' => [
            'label' => 'Project Image',
            'description' => 'Upload project image preview',
            'type' => 'image',
            'location' => 'upload/projects'
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