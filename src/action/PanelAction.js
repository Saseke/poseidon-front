import {PANEL, PANEL_WITH_CATID, PANEL_WITH_REMARK} from '../constants/Constants';

/**
 * fetch data depend on cat id
 */
export async function fetchPanelByCatId(catId) {
  return await fetch(`${PANEL_WITH_CATID}/${catId}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error('请求错误');
    }
  }).then(json => {
    return json.data;
  })
    .catch(error => {
      console.error(error);
    });
}

// fetch panel data with item info
export async function fetchPanelByRemark(remark, panelLimit, itemLimit) {
  return await fetch(`${PANEL_WITH_REMARK}/${remark}/${panelLimit}/${itemLimit}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error('请求错误');
    }
  }).then(json => {
    return json.data;
  })
    .catch(error => {
      console.error(error);
    });
}

// 点击首页的根分类,显示每行两个分类下的具体内容
export async function fetchPanelByCatIds(catId1, catId2, itemLimit) {
  return await fetch(`${PANEL_WITH_CATID}/${catId1}/${catId2}/${itemLimit}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error('请求错误');
    }
  }).then(json => {
    return json.data;
  })
    .catch(error => {
      console.error(error);
    });
}


/**
 * 根据版块的id查询板块信息，包含版块下面的所有的商品信息
 */
export async function fetchPanelWithItemsByPanelId(panelId) {
  return await fetch(`${PANEL}/${panelId}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error('请求错误');
    }
  }).then(json => {
    return json.data;
  })
    .catch(error => {
      console.error(error);
    });
}
