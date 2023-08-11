/**
 * Prepares data for a request.
 *
 * @param {object} api - An object containing request data.
 * @param {string} type - The type of data to prepare. Possible values are 'params', 'queries', and 'body'. Default is 'params'.
 * @return {object} An object containing the prepared request data.
 *
 * @throws {Error} If a required parameter is missing.
 */
export default function prepareData(api, type = 'params') {
    const keys = Object.keys(api[type] || {});
    if (keys.length) {
        keys.some(k => {
            if (!api[type][k]) throw new Error(`${api.suggestions[k] || ''}\n${api.suggestions.raw || ''}`)
        });
    };


    switch (type) {
        case 'params': {
            const values = Object.values(api.params);
            if (values.length) api.uri = `${api.uri}/${values.join('/')}`;
            return prepareData(api, 'queries');
        }
        case 'queries': {
            const values = Object.values(api.queries);
            if (values.length) api.uri = `${api.uri}?${new URLSearchParams(api.queries)}`;
            return prepareData(api, 'body');
        }
        case 'body': {
            if (api.formData) {
                let formBody = new FormData();
                Object.keys(api.body).forEach(k => formBody.append(k, api.body[k]));
                return api = { ...api, body: formBody }
            }
            return api = { ...api, body: JSON.stringify(api.body), headers: { Accept: "application/json", "Content-Type": "application/json" } };
        }
    }
};