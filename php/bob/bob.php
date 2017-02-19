<?php

namespace Exercism;

class Bob
{

    public function respondTo($str)
    {

        $str = trim($str);

        if (!$str) {
            return "Fine. Be that way!";
        }

        $str_only_letters = preg_replace("/[^a-zA-Z]+/", "", $str);
        $is_upper_case = ctype_upper($str_only_letters);

        if ($is_upper_case) {
            return "Whoa, chill out!";
        }

        $is_question = (substr($str, -1) === '?');

        if ($is_question) {
            return "Sure.";
        }

        return "Whatever.";
    }
}
