/*
    Copyright 2022 Camptocamp SA (https://www.camptocamp.com).
    @author Iván Todorovich <ivan.todorovich@camptocamp.com>
    License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).
*/
odoo.define("web_qunit.utils", function (require) {
    "use strict";

    return {
        greet(name) {
            //throw Exception("Someting went wrong");
            return `Hello ${name}, welcome to the OCA Days!`;
        }
    }
});
