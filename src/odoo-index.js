"use strict";
const axios = require("axios").default;


var Odoo = function (config) {
  config = config || {};
  this.host = config.host;
  this.port = config.port || 80;
  this.database = config.database;
  this.username = config.username || null;
  this.password = config.password || null;
  this.session_id = config.session_id || null;
  this.context = config.context;
};

Odoo.prototype.authenticate = function () {
  var body = JSON.stringify({
    params: {
      db: this.database,
      login: this.username,
      password: this.password,
    },
  });
  var requestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      //"Access-Control-Allow-Origin": "*",
      //  "Content-Length": body.length,
    },
    data: body,
    withCredentials: false,
    // baseURL: this.host + ":" + this.port,
    baseURL: this.host,
    url: "/web/session/authenticate",
  };

  return axios(requestConfig).then(
    (response) => {
      if (response.data.error) {
        console.log(response?.data?.result?.user_context, " response?.data?.result?.user_context")
        this.context = response?.data?.result?.user_context;
        //cb(response.data.error, null);
        return response?.data?.error
      } else {
        return response?.data?.result
        //cb(null, response.data.result);
      }
    },
    (error) => {
      return error
      //cb(error, null);
    }
  );
};
Odoo.prototype.search = function (model, params, callback) {
  this._request(
    "/web/dataset/call_kw",
    {
      kwargs: {
        context: this.context,
      },
      model: model,
      method: "search",
      args: [params.domain],
    },
    callback
  );
};
Odoo.prototype.search_read = function (model, params, callback) {
  this._request(
    "/web/dataset/call_kw",
    {
      model: model,
      method: "search_read",
      args: [],
      kwargs: {
        context: this.context,
        domain: params.domain,
        offset: params.offset,
        limit: params.limit,
        order: params.order,
        fields: params.fields,
      },
    },
    callback
  );
};

Odoo.prototype.name_search = function (model, params, callback) {
  this._request(
    "/web/dataset/call_kw",
    {
      model: model,
      method: "name_search",
      args: [],
      kwargs: {
        context: this.context,
        domain: params.domain,
        offset: params.offset,
        limit: params.limit,
        order: params.order,
        fields: params.fields,
      },
    },
    callback
  );
};

Odoo.prototype.action_archive = function (model, params, callback) {
  this._request(
    "/web/dataset/call_kw",
    {
      model: model,
      method: "action_archive",
      args: params?.params?.args,
      kwargs: {},
    },
    callback
  );
};

Odoo.prototype.action_unarchive = function (model, params, callback) {
  console.log(params, "params")
  this._request(
    "/web/dataset/call_kw",
    {
      model: model,
      method: "action_unarchive",
      args: params?.params?.args,
      kwargs: {},
    },
    callback
  );
};

Odoo.prototype.read = function (model, params, callback) {
  this._request(
    "/web/dataset/call_kw",
    {
      model: model,
      method: "read",
      args: [params.ids],
      kwargs: {
        fields: params.fields,
      },
    },
    callback
  );
};
Odoo.prototype.create = function (model, params, callback) {
  this._request(
    "/web/dataset/call_kw",
    {
      kwargs: {
        context: this.context,
        //  args: params,
      },
      model: model,
      method: "create",
      args: params.params,
    },
    callback
  );
};
Odoo.prototype.update = function (model, id, params, callback) {
  if (id) {
    this._request(
      "/web/dataset/call_kw",
      {
        kwargs: {
          context: this.context,
        },
        model: model,
        method: "write",
        args: [[id], params],
      },
      callback
    );
  }
};

Odoo.prototype.delete = function (model, id, callback) {
  this._request(
    "/web/dataset/call_kw",
    {
      kwargs: {
        context: this.context,
      },
      model: model,
      method: "unlink",
      args: [[id]],
    },
    callback
  );
};

Odoo.prototype.loadMenu = function (sessionKey) {
  if (sessionKey) {
    this._request(
      `web/webclient/load_menus/${sessionKey}`,
      {},
      'GET'
    );
  }
};

Odoo.prototype.loadModelDetails = function (parms, callback) {
  this._request(
    `web/action/load`,
    parms,
    callback,
  )
};

// Call RPC Controller Generic
Odoo.prototype.rpc_call = function (endpoint, params, callback = {}) {
  this._request(endpoint, params, callback);
};
// Private functions
Odoo.prototype._request = function (path, params, method = 'POST') {
  params = params || {};
  // var url = this.host + ":" + this.port + (path || "/") + "";
  var url = this.host + (path || "/") + "";

  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (this.session_id) {
    headers["cookie"] = "session_id=" + this.session_id + ";";
  }
  var requestConfig = {
    method: method,
    headers: headers,
    data: JSON.stringify({
      jsonrpc: "2.0",
      id: new Date().getUTCMilliseconds(),
      method: "call",
      params: params,
    }),
    withCredentials: false,
    // baseURL: this.host + ":" + this.port,
    baseURL: this.host,
    url: (path || "/") + "",
  };

  console.log(requestConfig, "requestConfig")
  axios(requestConfig).then(
    (response) => {
      if (response.data.error) {
        return response.data.error
        // cb(response.data.error, null);
      } else {
        return response.data.result
        //cb(null, response.data.result);
      }
    },
    (err) => {
      return err
      // cb(err, null);
    }
  );
};

module.exports = Odoo;
