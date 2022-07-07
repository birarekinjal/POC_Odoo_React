Common Response 

http://localhost:8069/web/webclient/load_menus/



actionID: 312
actionModel: "ir.actions.act_window"
appID: 210
children: [211, 212, 213]
id: 210
name: "Employee Management"
webIcon: false
webIconData: false
xmlid: "employee_mgmt.employee_root_menu"



http://localhost:8069/web/webclient/translations

payload - lang: en_US

Response 
lang: "en_US"
lang_parameters: {name: "English (US)", direction: "ltr", date_format: "%m/%d/%Y", time_format: "%H:%M:%S",…}
code: "en_US"
date_format: "%m/%d/%Y"
decimal_point: "."
direction: "ltr"
grouping: "[3,0]"
name: "English (US)"
thousands_sep: ","
time_format: "%H:%M:%S"
week_start: 7
modules: {}
multi_lang: false

Load

 http://localhost:8069/web/action/load
Payload - id: 0
jsonrpc: "2.0"
method: "call"
params: {action_id: 312, additional_context: {}}
action_id: 312
additional_context: {}


Response
id: 0
jsonrpc: "2.0"
result: {id: 312, name: "Employee Profile", type: "ir.actions.act_window",…}
binding_model_id: false
binding_type: "action"
binding_view_types: "list,form"
context: "{}"
display_name: "Employee Profile"
domain: false
filter: false
groups_id: []
help: "<p>No Data Found..</p>"
id: 312
limit: 80
name: "Employee Profile"
res_id: 0
res_model: "employee.model"
search_view: "{'model': 'employee.model', 'field_parent': False, 'arch': '<search string=\"Employee Model\"><field name=\"name\" modifiers=\"{}\"/></search>', 'type': 'search', 'name': 'default', 'fields': {'name': {'id': None, 'select': None, 'views': {}, 'type': 'char', 'change_default': False, 'company_dependent': False, 'depends': (), 'manual': False, 'readonly': False, 'required': False, 'searchable': True, 'sortable': True, 'store': True, 'string': 'Name', 'translate': False, 'trim': True, 'name': 'name'}}}"
search_view_id: false
target: "current"
type: "ir.actions.act_window"
view_id: false
view_mode: "list,form"
views: [[false, "list"], [false, "form"]]
xml_id: "employee_mgmt.action_employee_management_tree_view"

List Data 

Payload 
id : 

