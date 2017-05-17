<?php

namespace Statamic\Addons\Conditional;

use Statamic\Extend\Fieldtype;

class ConditionalFieldtype extends Fieldtype
{
    /**
     * The blank/default value
     *
     * @return array
     */
    public function blank()
    {
        if($this->getFieldConfig('sub_type') == 'select')
        {
            return  [];
        }
        return null;
    }

    /**
     * Pre-process the data before it gets sent to the publish page
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        if ($this->getFieldConfig('max_items') === 1) {
            $data = [$data];
        }

        return $data;
    }

    /**
     * Process the data before it gets saved
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        if (($this->getFieldConfig('max_items') === 1) && is_array($data)) {
            $data = reset($data);
        }

        return $data;
    }
}