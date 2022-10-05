/*
    Copyright 2022 Camptocamp SA (https://www.camptocamp.com).
    @author Iván Todorovich <ivan.todorovich@camptocamp.com>
    License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).
*/
odoo.define("pos_tour.tour.CustomButton.raw", function (require) {
    "use strict";

    const Tour = require("web_tour.tour");

    const steps = [
        // Startup steps
        {
            content: 'wait for loading to finish',
            trigger: 'body:not(:has(.loader))',
            run: function () {},
        },
        // Confirm opening popup
        {
            trigger: '.opening-cash-control .button:contains("Open session")',
        },
        // clickCustomButton
        {
            content: "Click the custom button",
            trigger: '.control-buttons .control-button span:contains("Custom Button")',
        },
        // Check popup is displayed
        {
            content: 'number popup is shown',
            trigger: '.modal-dialog .popup-number',
            run: () => {},
        },
        // Input number
        {
            content: 'input number 8',
            trigger: '.popup-numpad .number-char:contains("8")',
        },
        // Confirm popup
        {
            content: 'click confirm button',
            trigger: '.popup-number .footer .confirm',
        },
    ];

    Tour.register("CustomButtonRaw", {test: true, url: "/pos/ui"}, steps);
});
