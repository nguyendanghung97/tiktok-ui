export class Responses<T> {
  constructor(
    public statusCode?: 200 | 201 | 500 | 404,
    public message?: string,
    public data?: T,
    public count?: number,
  ) {}
}

export const keyUser = 'm8nvn*&hKwcgb^D-D#Hz^5CXfKySpY';
export const keyToken = 'b7a2bdf4-ac40-4012-9635-ff4b7e55eae0';
export const linkApi = 'http://dev1.geneat.vn:7100/api/v1';
export const API = {
  init: () =>
    ({
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + (localStorage.getItem(keyToken) || ''),
        'Accept-Language': localStorage.getItem('i18nextLng') || '',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    }) as RequestInit,
  responsible: async <T>(
    url: string,
    params: { [key: string]: string } = {},
    config: RequestInit,
    headers: RequestInit['headers'] = {},
  ) => {
    config.headers = { ...config.headers, ...headers };

    const linkParam = Object.keys(params)
      .map(
        (key) =>
          key + '=' + encodeURIComponent(typeof params[key] === 'object' ? JSON.stringify(params[key]) : params[key]),
      )
      .join('&');
    const response = await fetch(linkApi + url + (linkParam && '?' + linkParam), config);
    const res: Responses<T> = await response.json();
    if (response.ok) return res;


    if (response.status === 401) {
      localStorage.removeItem(keyUser);
      location.reload();
    }
    return res;
  },
  get: <T>(url: string, params = {}, headers?: RequestInit['headers']) =>
    API.responsible<T>(url, params, { ...API.init(), method: 'GET' }, headers),
  post: <T>(url: string, data = {}, params = {}, headers?: RequestInit['headers']) =>
    API.responsible<T>(url, params, { ...API.init(), method: 'POST', body: JSON.stringify(data) }, headers),
  put: <T>(url: string, data = {}, params = {}, headers?: RequestInit['headers']) =>
    API.responsible<T>(url, params, { ...API.init(), method: 'PUT', body: JSON.stringify(data) }, headers),
  delete: <T>(url: string, params = {}, headers?: RequestInit['headers']) =>
    API.responsible<T>(url, params, { ...API.init(), method: 'DELETE' }, headers),
};
