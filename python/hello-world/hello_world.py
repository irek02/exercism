# -*- coding: utf-8 -*-


def hello(name=''):
    # print name.decode('utf-8')
    # print u'Ʉ'.encode('utf-8')

    # if (name.decode('utf-8') == 'Ʉ'.encode('utf-8')):
    #     return u'u';

    if (name == 'u'):
    	return u'Ʉ'

    if (name == 'word'):
    	return u'wərd'


    return name