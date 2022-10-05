/*
    Copyright 2022 Camptocamp SA (https://www.camptocamp.com).
    @author Iván Todorovich <ivan.todorovich@camptocamp.com>
    License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).
*/
odoo.define("pos_tour.tour.ProductScreenTourMethods", function (require) {
    "use strict";

    const {createTourMethods} = require("point_of_sale.tour.utils");
    const {Do, Check, Execute} = require("point_of_sale.tour.ProductScreenTourMethods");

    class DoExt extends Do {
        clickCustomButton() {
            return [
                {
                    content: "Click the custom button",
                    trigger: '.control-buttons .control-button span:contains("Custom Button")',
                },
            ];
        }
    }

    class CheckExt extends Check {}

    class ExecuteExt extends Execute {}

    return createTourMethods("ProductScreen", DoExt, CheckExt, ExecuteExt);
});
