module.exports = {
    Note: class {
        constructor (json = null) {
            if (typeof json === "string") {
                json = JSON.parse(json);
                for (let p in JSON.parse(json)) {
                    this[p] = json[p];
                }
            } else {
                this.time = Date().now();
                
            }
        }
    }
}