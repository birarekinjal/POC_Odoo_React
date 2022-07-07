import React, { useEffect } from 'react';
import { odoo } from '../config';
import { archiveData, createData, deleteData, EmployeeGetAPI, exportData, getCreateData, getCreateDataForOdoo, getEditData, getEmpOptions, submitEditData, unArchive, } from '../request';


const getData = (data, error) => {
  console.log(data, "error", error)
}

odoo?.authenticate(getData).then((res) => {
  console.log(res, "ress +++++++++++++")

});

// odoo?.delete('employee.model', deleteData, getData);


// odoo?.search_read('employee.model', EmployeeGetAPI, getData);


// odoo?.name_search('res.users', getEmpOptions, getData);


//odoo?.create('employee.model', getCreateDataForOdoo, getData) // This is not working using the custom API

//odoo?.read('employee.model', getEditData, getData);

// odoo?.update('employee.model', submitEditData, getData);

odoo?.action_archive('employee.model', archiveData, getData);
// odoo?.action_unarchive('employee.model', unArchive, getData);


const getFormData = () => {
  const formData = new FormData();
  formData.append('data', exportData);

  return formData;
}

const Employee = () => {

  useEffect(() => {

    //Create
    // fetch('http://odoolocal.com/api/web/dataset/call_kw', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(getCreateDataForOdoo),
    // })
    //   .then(response => {
    //     console.log(response)
    //     // handle the response
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     // handle the error
    //   });


    //Edit
    // fetch('http://odoolocal.com/api/web/dataset/call_kw', {
    //   method: 'put', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(submitEditData),
    // })
    //   .then(response => {
    //     console.log(response, "edittiiiii")
    //     // handle the response
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     // handle the error
    //   });

    //delete
    // fetch('http://odoolocal.com/api/web/dataset/call_kw', {
    //   method: 'delete', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(deleteData),
    // })
    //   .then(response => {
    //     console.log(response, "edittiiiii")
    //     // handle the response
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     // handle the error
    //   });

    // export 



    // fetch('http://localhost:8069/api/web/export/xlsx', {
    //   method: 'post', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: getFormData(),
    // })
    //   .then(response => {
    //     console.log(response, "edittiiiii")
    //     // handle the response
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     // handle the error
    //   });
  }, [])
  return (
    <div>
      Welcome Home
    </div>
  );
};

export default Employee;