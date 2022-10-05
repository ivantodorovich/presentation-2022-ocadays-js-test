# Copyright 2022 Camptocamp SA (https://www.camptocamp.com).
# @author Iván Todorovich <ivan.todorovich@camptocamp.com>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

{
    "name": "Web QUnit Demo",
    "summary": "Web QUnit Demo",
    "version": "15.0.1.0.0",
    "author": "Camptocamp",
    "maintainers": ["ivantodorovich"],
    "website": "https://www.camptocamp.com",
    "license": "AGPL-3",
    "depends": ["web"],
    "assets": {
        "web.assets_backend": [
            "web_qunit/static/src/js/**/*.js",
        ],
        "web.qunit_suite_tests": [
            "web_qunit/static/tests/**/*",
        ],
    },
}
