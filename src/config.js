// import Odoo from 'odoo-react'

import Odoo from "./odoo-index";


export const odoo = new Odoo({
  host: "http://odoolocal.com/api/",  // 127.0.0.1
  // port: 8069,           /* Defaults to 80 if not specified */
  database: 'test_poc',
  username: 'admin', /* Optional if using a stored session_id */
  password: 'admin', /* Optional if using a stored session_id */
  session_id: '', /* Optional if using username/password */
  context: '', /* Optional Like Change Language */
});


// export const getData = (error, res) => {
//   console.log(error, res, "ress")
//   return [res, error]
// }
