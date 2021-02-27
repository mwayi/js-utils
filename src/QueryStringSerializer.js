class QueryStringSerializer {

    serialize(parameters) {
        return this._reduceParameters(parameters);
    }

    _reduceKeyValues(prefix, parameters) {
        let store = {};
        for (let i in parameters) {
            let key = `${prefix}[${i}]`;
            store[key] = parameters[i];
        }

        return store;
    }

    _reduceParameters(parameters) {
        let store = []
        for (let key in parameters) {
            let value = parameters[key];
            if (typeof value === 'object') {
                let reducedValue = this._reduceKeyValues(key, value);
                store.push(this._reduceParameters(reducedValue));
            } else {
                store.push(`${key}=${value}`);
            }
        }

        return store.join('&');
    }
}

module.exports = QueryStringSerializer;