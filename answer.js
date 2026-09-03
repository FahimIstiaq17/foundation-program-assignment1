// Answer 1: Value Detective
function describeValue (value) {
        const type = typeof value;
        const result = value ? "truthy" : "falsy";
       
        return `${type} ${result}`;
}

