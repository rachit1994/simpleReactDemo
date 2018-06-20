// import npm packages
import queryString from 'query-string';

// import tekion packages
import tJSLog from 'tJSLog';

// import files from local file system
import config from './../app-config';
import constants from './constants';

const setHeaders = (cfg) => {
  const myHeaders = new Headers();
  const headerKeys = (config && config.headerKeys) || {};
  const configKeys = Object.keys(headerKeys);
  configKeys.forEach((key) => {
    myHeaders.append(headerKeys[key], config[key]);
  });
  myHeaders.delete('Content-Type');
  myHeaders.append('Content-Type', 'application/json');
  if (cfg && Object.keys(cfg).length > 0) {
    if (cfg.tenantName) {
      myHeaders.set('tenantName', cfg.tenantName);
    }
    if (cfg.dealerId) {
      myHeaders.set('dealerId', cfg.dealerId);
    }
    if (cfg.clientId) {
      myHeaders.append('clientId', cfg.clientId);
    }
		// check access_token
    if (cfg.access_token) {
      myHeaders.append('tekion-api-token', cfg.access_token);
    }
    if (cfg.roleID) {
      myHeaders.append('roleID', cfg.roleID);
    }
  }
  return myHeaders;
};

const getUrl = urlConstant =>
	`${config.TEKION_BASE_URL}/${constants[urlConstant]}`;

const getFetch = (endPoint, myInit) => {
  tJSLog.info('hitting:', endPoint);
  tJSLog.info('headers:', myInit.headers);
  return new Promise((resolve, reject) =>
		fetch(endPoint, myInit)
			.then(
				(response) => {
					// fetch call came back with some response
  response.json().then(
						(data) => {
  if (response.ok && data.meta.code === 200) {
    tJSLog.info('api success');
    resolve(data);
  } else {
    tJSLog.error('api failed', JSON.stringify(data.meta));
								// changing this to pass meta obj becuase we need error code back
    reject(JSON.stringify(data.meta));
  }
},
						(error) => {
  tJSLog.error('error occurred', error);
							// failed to change response to json
  reject(error);
},
					);
},
				(error) => {
  tJSLog.error('error occurred', error);
					// fatal error
  reject(error);
},
			)
			.catch(error => reject(error)),
	);
};

const withoutBody = (cfg, urlConstant, append, data, type) =>
	new Promise((resolve, reject) => {
  const query =
			data && Object.keys(data).length > 0
				? queryString.stringify(data, { arrayFormat: 'index' })
				: null;
  let endPoint = '';
  endPoint = `${getUrl(urlConstant)}${append}`;
  if (query) {
    endPoint = `${endPoint}?${query}`;
  }
  const myInit = {
    method: type,
    mode: 'cors',
    cache: 'default',
  };
  getFetch(endPoint, myInit)
			.then(result => resolve(result))
			.catch(error => reject(error));
});

const withBody = (cfg, urlConstant, append, data, type) =>
	new Promise((resolve, reject) => {
  const endPoint = `${getUrl(urlConstant)}${append}`;
  const myInit = {
    method: type,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(data),
  };
  getFetch(endPoint, myInit)
			.then(result => resolve(result))
			.catch(error => reject(error));
});

const get = (cfg, urlConstant, append, data) =>
	withoutBody(cfg, urlConstant, append, data, 'GET');
const post = (cfg, urlConstant, append, data) =>
	withBody(cfg, urlConstant, append, data, 'POST');
const put = (cfg, urlConstant, append, data) =>
	withBody(cfg, urlConstant, append, data, 'PUT');
const deleteData = (cfg, urlConstant, append, data) =>
	withoutBody(cfg, urlConstant, append, data, 'DELETE');

export default { get, post, put, delete: deleteData };
