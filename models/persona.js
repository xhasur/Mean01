/**
 * Created by andreslopez.exe@gmail.com
 */
(function () {
    "use strict";
    module.exports = function (mongoose) {

        var schema = mongoose.Schema,
            personaSchema = new schema({
                "nombre"  : {"type": String, "required": true,"unique": true},
                "apellido": {"type": String,"required": true},
                "date"    : {"type": Date}
            });

        //antes de-
        personaSchema.pre("save", function (next) {
            var self = this;
            if (self.isNew) {
                self.date = Date.now()
            }
            next();
        });


        return mongoose.model("persona", personaSchema);
    };
}());