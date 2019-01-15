export const REMOTE_URL = 'http://localhost:8080';


//   商品展示请求的url
export const ITEM_VIEW_URL = `${REMOTE_URL}/itemCat`;
export const ITEM_URL = `${REMOTE_URL}/item`;
export const PANEL_BASE_URL = `${REMOTE_URL}/panel`;

// 购物车请求的url
export const SHOP_CART_URL = `${REMOTE_URL}/shop/cart`;

//   得到商品根分类的数据
export const ITEM_CAT_ROOT_URL = `${ITEM_VIEW_URL}/ro`;

//   得到首页的模块的数据

// 根据版块的remark查询对应的版块和商品信息
export const ITEM_PANEL_REMARK_URL = `${PANEL_BASE_URL}/re`;


export const CAT_PANEL_ITEMS_URL = `${PANEL_BASE_URL}/pi`;
