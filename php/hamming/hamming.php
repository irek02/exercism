<?php

function distance($a, $b)
{
    $dna1 = str_split($a);
    $dna2 = str_split($b);

    if (count($dna1) != count($dna2)) {
        throw new InvalidArgumentException('DNA strands must be of equal length.');
    }

    $distance = 0;

    foreach ($dna1 as $key => $value) {
        if ($dna1[$key] != $dna2[$key]) {
            $distance += 1;
        }
    }

    return $distance;
}
