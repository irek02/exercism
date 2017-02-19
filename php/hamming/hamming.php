<?php

function distance($a, $b)
{
    $arr1 = str_split($a);
    $arr2 = str_split($b);

    if (count($arr1) != count($arr2)) {
        throw new InvalidArgumentException('DNA strands must be of equal length.');
    }

    $count = 0;

    foreach ($arr1 as $key => $value) {
        if ($arr1[$key] != $arr2[$key]) {
            $count += 1;
        }
    }

    return $count;
}
