# Copyright 2022 Camptocamp SA (https://www.camptocamp.com).
# @author Iván Todorovich <ivan.todorovich@camptocamp.com>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

from odoo.tests import tagged
from odoo.addons.point_of_sale.tests.test_frontend import TestPointOfSaleHttpCommon


@tagged("post_install", "-at_install")
class TestUi(TestPointOfSaleHttpCommon):
    @classmethod
    def setUpClass(cls, **kwargs):
        super().setUpClass(**kwargs)
        # Do some configuration ...

    def test_custom_button_tour_raw(self):
        self.main_pos_config.open_session_cb(check_coa=False)
        self.start_tour(
            f"/pos/ui?config_id={self.main_pos_config.id}",
            "CustomButtonRaw",
            login="accountman",
        )
        # Optionally, check created records, etc.. after the tour has finished
        # ...

    def test_custom_button_tour_new(self):
        self.main_pos_config.open_session_cb(check_coa=False)
        self.start_tour(
            f"/pos/ui?config_id={self.main_pos_config.id}",
            "CustomButton",
            login="accountman",
        )
        # Optionally, check created records, etc.. after the tour has finished
        # ...
