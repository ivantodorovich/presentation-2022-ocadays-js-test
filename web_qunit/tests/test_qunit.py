# Copyright 2022 Camptocamp SA (https://www.camptocamp.com).
# @author Iván Todorovich <ivan.todorovich@camptocamp.com>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

from odoo.tests import HttpCase, tagged


@tagged("-at_install", "post_install")
class TestQunitFunction(HttpCase):
    def test_qunit(self):
        module_name = "web_qunit.func_tests"
        self.browser_js(
            f"/web/tests?module={module_name}&failfast",
            "",
            "",
            login="admin",
        )
