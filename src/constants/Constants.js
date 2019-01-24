export const GATEWAY_URL = 'http://www.test.com:8769';

// 商品展示服务
export const WEB_ITEM_SERVICE_URL = `${GATEWAY_URL}/view`;

export const ITEM_VIEW_URL = `${WEB_ITEM_SERVICE_URL}/itemCat`;
export const ITEM_URL = `${WEB_ITEM_SERVICE_URL}/item`;
export const PANEL_BASE_URL = `${WEB_ITEM_SERVICE_URL}/panel`;
export const ITEM_CAT_ROOT_URL = `${ITEM_VIEW_URL}/ro`;
export const CAT_PANEL_ITEMS_URL = `${PANEL_BASE_URL}/pi`;
export const ITEM_PANEL_REMARK_URL = `${PANEL_BASE_URL}/re`;


// 登录认证服务
export const AUTH_SERVICE_URL = `${GATEWAY_URL}/auth`;

// 购物车服务
export const WEB_CART_SERVICE = `${GATEWAY_URL}/cart`;

