/**
 * Created by OscarAndres on 06/08/2015.
 */
(function () {
    "use strict";
    module.exports = function (mongoose) {
        var schema = mongoose.Schema,
            entitySchema = new schema({
                "name": {
                    "type": String,
                    "required": true
                },
                "date": {
                    "type": Date
                }
            });
        entitySchema.pre("save", function (next) {
            var self = this;
            if (self.isNew) {
                self.date = Date.now()
            }
            next();
        });
        return mongoose.model("entity", entitySchema);
    };
}());