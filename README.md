# create-files-by-bemjson

## Usage
```js
require('create-files-by-bemjson')(bemjson, [level = 'blocks']);
```

## Example
```js
require('create-files-by-bemjson')({
    block : 'information',
    content : [
        {
            block : 'telephone',
            content : [
                {
                    elem : 'phone-number',
                    content : '8 (831) 280-96-51'
                },
                {
                    elem : 'opening-times',
                    content : 'Пн-Пт: 9:00-18:00'
                }
            ]
        },
        {
            block : 'telephone',
            content : [
                {
                    elem : 'phone-number',
                    content : '8 (800) 555-18-38'
                },
                {
                    elem : 'additional-information',
                    content : 'Звонок по России бесплатный'
                }
            ]
        }
    ]
}, 'common.blocks');
```
