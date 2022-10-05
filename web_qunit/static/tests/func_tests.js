odoo.define("web_qunit.func_tests", function (require) {
    "use strict";

    const {greet} = require("web_qunit.utils");

    QUnit.module(
        "web_qunit.func_tests",
        {
            beforeEach: function () {
                this.people = ["John", "Jane"];
            },
        },
        function () {
            QUnit.test(
                "greet people",
                function (assert) {
                    assert.strictEqual(greet("Iván"), "Hello Iván, welcome to the OCA Days!");
                    assert.strictEqual(greet(this.people[0]), "Hello John, welcome to the OCA Days!");
                    assert.strictEqual(greet(this.people[1]), "Hello Jane, welcome to the OCA Days!");
                }
            );
        }
    );
});
