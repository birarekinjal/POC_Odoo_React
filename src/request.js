
export const getListData = {
  "jsonrpc": "2.0",
  "method": "call",
  "id": 1,
  "params": {
    "model": "sale.order",
    "fields": [

    ],
    "domain": [

    ],
    "offset": 0,
    "limit": 0,
    "sort": "id desc",
    "context": {
      "lang": "en_US",
      "tz": "Europe/Brussels",
      "uid": 13
    }
  }
}

export const getOptionsData = {
  "jsonrpc": "2.0",
  "method": "call",
  "id": 1,
  "params": {
    "model": "res.partner",
    "method": "name_search",
    "args": [],
    "kwargs": { "name": "", "args": [], "operator": "ilike", "limit": 0 },
    "context": {
      "lang": "en_US",
      "tz": "Europe/Brussels",
      "uid": 1
    }
  }
}

export const getOptionsDataForPrice = {
  "jsonrpc": "2.0",
  "method": "call",
  "id": 1,
  "params": {
    "model": "product.pricelist",
    "method": "name_search",
    "args": [],
    "kwargs": { "name": "", "args": [], "operator": "ilike", "limit": 0 },
    "context": {
      "lang": "en_US",
      "tz": "Europe/Brussels",
      "uid": 1
    }
  }
}


export const EmployeeGetAPI = {
  "id": 5,
  "jsonrpc": "2.0",
  "method": "call",
  "params": {
    "model": "employee.model",
    "domain": [],
    "fields": [
      "sequence",
      "user_id",
      "username",
      "email",
      "gender",
      "mobile_no",
      "skills"
    ],
    "limit": 80,
    "sort": "",
    "context": {
      "lang": "en_US",
      "tz": "Asia/Calcutta",
      "uid": 2,
      "allowed_company_ids": [
        1
      ],
      "params": {
        "cids": 1,
        "menu_id": 210,
        "action": 312,
        "model": "employee.model",
        "view_type": "list"
      },
      "bin_size": true
    }
  }
}


export const getEmpOptions = {
  "id": 8,
  "jsonrpc": "2.0",
  "method": "call",
  "params": {
    "args": [],
    "model": "res.users",
    "method": "name_search",
    "kwargs": {
      "name": "",
      "args": [],
      "operator": "ilike",
      "limit": 8,
      "context": {
        "lang": "en_US",
        "tz": "Asia/Calcutta",
        "uid": 2,
        "allowed_company_ids": [
          1
        ]
      }
    }
  }
}

export const getCreateData = {
  "id": 84,
  "jsonrpc": "2.0",
  "method": "call",
  "params": {
    "args": [
      {
        "user_id": 7,
        "username": "jon",
        "email": "jon@gmail.com",
        "gender": "male",
        "dob": "2022-07-25",
        "age": 11,
        "name": "test",
        "mobile_no": 873376890,
        "active": true,
        "manager_id": false,
        "skills": [
          [
            6,
            false,
            []
          ]
        ]
      }
    ],
    "model": "employee.model",
    "method": "create",
    "kwargs": {
      "context": {
        "lang": "en_US",
        "tz": "Asia/Calcutta",
        "uid": 2,
        "allowed_company_ids": [
          1
        ],
        "params": {
          "cids": 1,
          "menu_id": 210,
          "action": 312,
          "model": "employee.model",
          "view_type": "form"
        }
      }
    }
  }
}


export const getEditData = {
  "id": 37,
  "jsonrpc": "2.0",
  "method": "call",
  "params": {
    "args": [
      [
        1
      ],
      [
        "user_id",
        "username",
        "email",
        "gender",
        "dob",
        "age",
        "name",
        "mobile_no",
        "active",
        "manager_id",
        "skills",
        "display_name"
      ]
    ],
    "model": "employee.model",
    "method": "read",
    "kwargs": {
      "context": {
        "bin_size": true,
        "lang": "en_US",
        "tz": "Asia/Calcutta",
        "uid": 2,
        "allowed_company_ids": [
          1
        ],
        "params": {
          "cids": 1,
          "menu_id": 210,
          "action": 312,
          "model": "employee.model",
          "view_type": "form"
        }
      }
    }
  }
}

export const submitEditData = {
  "id": 20,
  "jsonrpc": "2.0",
  "method": "call",
  "params": {
    "args": [
      [
        59
      ],
      {
        "user_id": 6,
        "username": "Akash"
      }
    ],
    "model": "employee.model",
    "method": "write",
    "kwargs": {
      "context": {
        "lang": "en_US",
        "tz": "Asia/Calcutta",
        "uid": 2,
        "allowed_company_ids": [
          1
        ],
        "params": {
          "cids": 1,
          "menu_id": 210,
          "action": 312,
          "model": "employee.model",
          "view_type": "list"
        }
      }
    }
  }

}

export const createData = {
  "id": 84,
  "jsonrpc": "2.0",
  "method": "call",
  "params": {
    "args": [
      {
        "user_id": 7,
        "username": "jon",
        "email": "jon@gmail.com",
        "gender": "male",
        "dob": "2022-07-25",
        "age": 11,
        "name": "test",
        "mobile_no": 873376890,
        "active": true,
        "manager_id": false,
        "skills": [
          [
            6,
            false,
            []
          ]
        ]
      }
    ],
    "model": "employee.model",
    "method": "create",
    "kwargs": {
      "context": {
        "lang": "en_US",
        "tz": "Asia/Calcutta",
        "uid": 2,
        "allowed_company_ids": [
          1
        ],
        "params": {
          "cids": 1,
          "menu_id": 210,
          "action": 312,
          "model": "employee.model",
          "view_type": "form"
        }
      }
    }
  }
}

export const getCreateDataForOdoo = {
  "jsonrpc": "2.0",
  "method": "call",
  "id": 1,
  "params": {
    "model": "employee.model",
    "method": "create",
    "args": [
      {
        "user_id": 6,
        "username": "Marc Demo",
        "email": "Marc Demo@gmail.com",
        "gender": "male",
        "dob": "2022-07-25",
        "age": 17,
        "name": "test",
        "mobile_no": 87337689,
      }
    ],
    "kwargs": {},
    "context": {
      "lang": "en_US",
      "tz": "Europe/Brussels",
      "uid": 1
    }
  }
}

export const deleteData = {
  "id": 16,
  "jsonrpc": "2.0",
  "method": "call",
  "params": {
    "args": [
      [
        60
      ]
    ],
    "model": "employee.model",
    "method": "unlink",
    "kwargs": {
      "context": {
        "lang": "en_US",
        "tz": "Asia/Calcutta",
        "uid": 2,
        "allowed_company_ids": [
          1
        ]
      }
    }
  }
}

export const archiveData = {
  "id": 9,
  "jsonrpc": "2.0",
  "method": "call",
  "params": {
    "args": [
      [67]
    ],
    "model": "employee.model",
    "method": "action_archive",
    "kwargs": {
      "context": {
        "lang": "en_US",
        "tz": "Asia/Calcutta",
        "uid": 2,
        "allowed_company_ids": [
          1
        ]
      }
    }
  }
}

export const unArchive = {
  "id": 11,
  "jsonrpc": "2.0",
  "method": "call",
  "params": {
    "args": [
      [
        67
      ]
    ],
    "model": "employee.model",
    "method": "action_unarchive",
    "kwargs": {
      "context": {
        "lang": "en_US",
        "tz": "Asia/Calcutta",
        "uid": 2,
        "allowed_company_ids": [
          1
        ]
      }
    }
  }
}

export const dynamicCreateData = {
  "partner_id": 14,
  "partner_invoice_id": 14,
  "partner_shipping_id": 14,
  "sale_order_template_id": 1,
  "validity_date": "2022-08-19",
  "date_order": "2022-07-05 09:12:30",
  "show_update_pricelist": true,
  "pricelist_id": 1,
  "payment_term_id": 7,
  "order_line": [
    [
      0,
      "virtual_80",
      {
        "analytic_tag_ids": [
          [
            6,
            false,
            []
          ]
        ],
        "tax_id": [
          [
            6,
            false,
            []
          ]
        ],
        "name": "4 Person Desk",
        "sequence": 10,
        "price_unit": 2350,
        "discount": 0,
        "product_id": 33,
        "product_template_id": 25,
        "product_uom_qty": 1,
        "product_uom": 1,
        "qty_delivered": 0,
        "qty_delivered_manual": 0,
        "customer_lead": 0,
        "display_type": false,
        "product_packaging_id": false,
        "product_packaging_qty": 0,
        "invoice_lines": [
          [
            5,
            0,
            0
          ]
        ]
      }
    ]
  ],
  "note": "<p>adasd</p>",
  "sale_order_option_ids": [
    [
      0,
      "virtual_81",
      {
        "name": "Office Chair",
        "product_id": 5,
        "price_unit": 70,
        "discount": 0,
        "uom_id": 1,
        "quantity": 4,
        "sequence": 0
      }
    ]
  ],
  "user_id": 2,
  "team_id": 1,
  "company_id": 1,
  "require_signature": true,
  "require_payment": true,
  "client_order_ref": false,
  "tag_ids": [
    [
      6,
      false,
      []
    ]
  ],
  "fiscal_position_id": false,
  "analytic_account_id": false,
  "commitment_date": false,
  "origin": false,
  "campaign_id": false,
  "medium_id": false,
  "source_id": false,
  "signed_by": false,
  "signed_on": false,
  "signature": false,
  "__last_update": false,
  "message_follower_ids": [],
  "activity_ids": [],
  "message_ids": []

}
export const exportData = { "model": "employee.model", "fields": [{ "name": "sequence", "label": "Sequence" }, { "name": "user_id", "label": "User" }, { "name": "username", "label": "Username" }, { "name": "email", "label": "Email" }, { "name": "gender", "label": "Gender" }, { "name": "mobile_no", "label": "Mobile Number" }, { "name": "skills", "label": "Skills" }], "ids": [64], "domain": [], "groupby": [], "context": { "lang": "en_US", "tz": "Asia/Calcutta", "uid": 2, "allowed_company_ids": [1], "params": { "cids": 1, "menu_id": 210, "action": 312, "model": "employee.model", "view_type": "list" } }, "import_compat": false }