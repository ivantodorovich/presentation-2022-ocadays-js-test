/*
    Copyright 2022 Camptocamp SA (https://www.camptocamp.com).
    @author Iván Todorovich <ivan.todorovich@camptocamp.com>
    License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).
*/
odoo.define("pos_tour.tour.CustomButton", function (require) {
    "use strict";

    const Tour = require("web_tour.tour");
    const {ProductScreen} = require("pos_tour.tour.ProductScreenTourMethods");
    const {NumberPopup} = require("point_of_sale.tour.NumberPopupTourMethods");
    const {getSteps, startSteps} = require("point_of_sale.tour.utils");

    startSteps();

    // Click the custom button
    ProductScreen.do.confirmOpeningPopup();
    ProductScreen.do.clickCustomButton();
    
    // Check input popup is displayed
    NumberPopup.check.isShown();
    NumberPopup.do.pressNumpad("8");
    NumberPopup.do.clickConfirm();

    Tour.register("CustomButton", {test: true, url: "/pos/ui"}, getSteps());
});
