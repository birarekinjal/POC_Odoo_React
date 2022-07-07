import React, { useEffect, useState } from 'react';
import { odoo } from '../config';
import { dynamicCreateData, getListData, getOptionsData, getOptionsDataForPrice } from '../request';


const getData = (error, data) => {
  console.log(data, "error", error)
}



// odoo?.search_read('sale.order', getListData, getData)


// odoo?.name_search('res.partner', getOptionsData, getData)

// odoo?.name_search('product.pricelist', getOptionsDataForPrice, getData)


const Home = () => {

  const [state, setState] = useState({
    authentication: '',
    menu: '',
    translate: '',
    loadModelDetails: '',
    getList: '',
  })

  const { authentication, menu, translate, loadModelDetails } = state;

  const handleLogin = () => {
    odoo?.authenticate(getData).then((res) => {
      console.log(res, "res")
      setState({
        ...state,
        authentication: res
      })
    })
  }
  const getList = () => {

    let body = {
      "jsonrpc": "2.0",
      "method": "call",
      // "id": 1,
      "params": {
        method: "search_read",
        model: loadModelDetails?.result?.res_model,
        args: [],
        kwargs: {
          context: {
            "lang": translate?.lang_parameters?.code,
            "tz": "Europe/Brussels",
            "uid": 13
          },
          offset: 0,
          //domain: [["name", "ilike", "S00018"]], For searching
          limit: 0,
          order: 'id desc',
        },
      }
    }

    fetch('http://odoolocal.com/api/web/dataset/call_kw', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data, "dat+++++++++")
        setState({
          ...state,
          getList: data,
        })
      });

  }

  const createSales = () => {
    // model: model,
    // method: "create",
    // args: params.params,

    console.log(loadModelDetails?.result?.res_model, "loadModelDetails?.result?.res_model,")

    let body = {
      "jsonrpc": "2.0",
      "method": "call",
      // "id": 1,
      "params": {
        method: "create",
        model: loadModelDetails?.result?.res_model,
        args: [
          dynamicCreateData
        ],
        kwargs: {
          context: {
            "lang": translate?.lang_parameters?.code,
            "tz": "Europe/Brussels",
            "uid": 13
          },
        },
      }
    }

    fetch('http://odoolocal.com/api/web/dataset/call_kw', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data, "dat+++++++++")
        setState({
          ...state,
          getList: data,
        })
      });
  }

  // const getLoadMenu = () => {
  //   odoo?.loadMenu(authentication?.cache_hashes?.load_menus)

  // }

  const getMenu = () => {
    // odoo?.loadMenu(authentication?.cache_hashes?.load_menus)
    fetch(`http://odoolocal.com/api/web/webclient/load_menus/${authentication?.cache_hashes?.load_menus}`)
      .then(response => response.json())
      .then(data => {
        setState({
          ...state,
          menu: data,
        });
      });
  }

  const getTranslate = () => {
    let body = {
      lang: 'en_US',
    };
    fetch(`http://odoolocal.com/api/web/webclient/translations/${authentication?.cache_hashes?.translations}?lang=hi_IN`, body)
      .then(response => response.json())
      .then(data => {
        setState({
          ...state,
          translate: data,
        })
      });
  }

  const getModelDetails = () => {
    let body = {
      id: 0,
      jsonrpc: "2.0",
      method: "call",
      params: {
        action_id: menu?.[182]?.actionID || 4,
        additional_context: {}
      }

    }
    fetch('http://odoolocal.com/api/web/action/load', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(data => {
        setState({
          ...state,
          loadModelDetails: data,
        })
      });
  }
  // useEffect(() => {
  //   getLoadMenu()

  // }, [])

  //console.log(state.authentication)
  return (
    <div>
      <button onClick={() => handleLogin()}> Login</button>
      <button onClick={() => getMenu()}> getMenu</button>
      <button onClick={() => getTranslate()}> Translate</button>
      <button onClick={() => getModelDetails()}> Load Model Details</button>
      <button onClick={() => getList()}>getList</button>
      <button onClick={() => createSales()}>createSales</button>
      Welcome Home
    </div>
  );
};

export default Home;