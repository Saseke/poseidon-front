export const GATEWAY_URL = 'http://www.poseidon.com:8769';


// 商品展示服务
export const ITEM_SERVICE = `${GATEWAY_URL}/view`;

// item cat base url
export const ITEM_CAT = `${ITEM_SERVICE}/itemCat`;
// root categories with items
export const ITEM_CAT_ROOT_WITH_ITEMS = `${ITEM_CAT}/ro`;
// nav categories with items
export const ITEM_CAT_NAV_WITH_ITEMS = `${ITEM_CAT}/nav`;

// item base url
export const ITEM = `${ITEM_SERVICE}/item`;

// panel base url
export const PANEL = `${ITEM_SERVICE}/panel`;
export const PANEL_WITH_CATID = `${PANEL}/cat`;
export const PANEL_WITH_REMARK = `${PANEL}/re`;


export const ITEM_CAT_ROOT_URL = `${ITEM_CAT}/ro`;
export const CAT_PANEL_ITEMS_URL = `${PANEL}/pi`;
export const ITEM_PANEL_REMARK_URL = `${PANEL}/re`;


// 购物车服务
export const WEB_CART_SERVICE = `${GATEWAY_URL}/cart`;

// member service
export const MEMBER_SERVICE = `${GATEWAY_URL}/member`;

// 登录认证服务
export const AUTH_SERVICE_URL = `${GATEWAY_URL}/auth`;

// order service
export const ORDER_SERVICE_URL = `${GATEWAY_URL}/order`;

// 各种错误的信息
export const NETWORK_BUSY = '网络繁忙,请重试';
