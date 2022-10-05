/*
    Copyright 2022 Camptocamp SA (https://www.camptocamp.com).
    @author Iván Todorovich <ivan.todorovich@camptocamp.com>
    License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).
*/
odoo.define("pos_tour.Button", function (require) {
    "use strict";

    const PosComponent = require("point_of_sale.PosComponent");
    const ProductScreen = require("point_of_sale.ProductScreen");
    const {useListener} = require("web.custom_hooks");
    const Registries = require("point_of_sale.Registries");

    class CustomButton extends PosComponent {
        constructor() {
            super(...arguments);
            useListener("click", this.onClick);
        }
        async onClick() {
            const hasError = false;
            if (hasError) {
                return this.showPopup("ErrorPopup", {
                    title: this.env._t("Custom Button Error"),
                    body: this.env._t("Something went wrong"),
                });
            }
            const { confirmed, payload } = await this.showPopup("NumberPopup", {
                startingValue: 0,
                title: this.env._t("Select a number"),
            });
            if (confirmed) {
                console.log("Number selected:", payload);
            }
        }
    }
    CustomButton.template = "CustomButton";

    ProductScreen.addControlButton({
        component: CustomButton,
        condition: () => true,
    });

    Registries.Component.add(CustomButton);
    return CustomButton;
});
