<?php

function toRna($dna)
{
    $search  = ['A', 'T', 'C', 'G', 'X'];
    $replace = ['U', 'A', 'X', 'C', 'G'];

    return str_replace($search, $replace, $dna);
}
