# Copyright 2022 Camptocamp SA (https://www.camptocamp.com).
# @author Iván Todorovich <ivan.todorovich@camptocamp.com>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

{
    "name": "POS Tour Example",
    "summary": "POS Tour Example",
    "version": "15.0.1.0.0",
    "author": "Camptocamp",
    "maintainers": ["ivantodorovich"],
    "website": "https://www.camptocamp.com",
    "license": "AGPL-3",
    "depends": ["point_of_sale"],
    "assets": {
        "point_of_sale.assets": [
            "pos_tour/static/src/js/**/*.js",
        ],
        "web.assets_qweb": [
            "pos_tour/static/src/xml/**/*.xml",
        ],
        "web.assets_tests": [
            "pos_tour/static/tests/tours/**/*",
        ],
    },
}
