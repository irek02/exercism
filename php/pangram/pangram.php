<?php

namespace Exercism;

function isPangram($str)
{
    if (!$str) {
        return false;
    }

    $str = strtolower($str);

    $chars_from_string = [];

    $alphabet = str_split('abcdefghijklmnopqrstuwxyz');

    foreach ($alphabet as $char) {
        if (isCharacterInString($char, $str)) {
            $chars_from_string[$char] = $char;
        }
    }

    return !array_diff($alphabet, $chars_from_string);
}

function isCharacterInString($char, $string)
{
    return strpos($string, $char) !== false;
}
