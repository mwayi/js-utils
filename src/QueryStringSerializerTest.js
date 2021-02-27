const QueryStringSerializer = require ('./QueryStringSerializer');
chai = require('chai');
assert = chai.assert;

describe('QueryStringSerializer', function() {
    it('Handles basic query string', function() {
        let parameters = {
            foo: 'bar'
        }
        let subject = new QueryStringSerializer().serialize(parameters)
        assert.equal(subject, 'foo=bar');
    });

    it('Handles recursive query string', function() {
        let parameters = {
            foo: {
                bar: {
                    baz: 'value'
                }
            }
        }
        let subject = new QueryStringSerializer().serialize(parameters)
        assert.equal(subject, 'foo[bar][baz]=value');
    });

    it('Handles arrays', function() {
        let parameters = {
            foo: ['bar', 'baz']
        }
        let subject = new QueryStringSerializer().serialize(parameters)
        assert.equal(subject, 'foo[0]=bar&foo[1]=baz');
    });
    
});
