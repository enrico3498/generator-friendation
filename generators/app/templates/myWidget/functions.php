<?php

namespace Flynt\Components\<%= componentType %><%= componentName %>;

function getACFLayout()
{
    return [
        'name' => '<%= componentType %><%= componentName %>',
        'label' => '<%= componentType %>: <%= componentName %>',
        'sub_fields' => [
            [
                'label' => 'General',
                'name' => 'generalTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0
            ],
            [
                'label' => 'Options',
                'name' => 'optionsTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0
            ],
            [
                'label' => 'Show Component',
                'name' => 'showComponent',
                'type' => 'true_false',
                'default_value' => 1,
                'ui' => 1
            ],
            [
                'label' => 'Component Title',
                'name' => 'componentTitle',
                'type' => 'text'
            ],
            [
                'label' => 'Anchor ID',
                'name' => 'anchorId',
                'type' => 'text'
            ],
            [
                'label' => 'Background Color ?',
                'name' => 'backgroundColorEnable',
                'type' => 'true_false',
                'default_value' => 0,
                'ui' => 1
            ],
            [
                'label' => 'Select Color',
                'name' => 'backgroundColor',
                'type' => 'select',
                'allow_null' => 0,
                'multiple' => 0,
                'ui' => 1,
                'ajax' => 0,
                'choices' => [
                    'backgroundOne' => 'Background One',
                    'backgroundTwo' => 'Background Two',
                    'backgroundThree' => 'Background Three',
                ],
                'default_value' => 'backgroundTwo',
                'conditional_logic' => [
                    [
                        [
                            'fieldPath' => 'backgroundColorEnable',
                            'operator' => '==',
                            'value' => 1
                        ]
                    ]
                ]
            ]
        ],
    ];
}
