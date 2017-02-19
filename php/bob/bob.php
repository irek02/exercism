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

        if ($this->isUpperCase($str)) {
            return "Whoa, chill out!";
        }

        if ($this->isQuestion($str)) {
            return "Sure.";
        }

        return "Whatever.";
    }

    private function isUpperCase($str)
    {
        $str_only_letters = preg_replace("/[^a-zA-Z]+/", "", $str);
        return ctype_upper($str_only_letters);
    }

    private function isQuestion($str)
    {
        return substr($str, -1) === '?';
    }
}
