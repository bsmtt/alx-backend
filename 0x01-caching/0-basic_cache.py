#!/usr/bin/env python3

'''Basic dictionary
'''


from base_caching import BaseCaching


class BasicCache(BaseCaching):
    '''a caching system
    '''

    def put(self, key, item):
        '''assign value for the key `key`
        '''
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        '''return the value
        '''

        return self.cache_data.get(key, None)
