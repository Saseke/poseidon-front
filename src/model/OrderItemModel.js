export const OrderItemModel = {
  id: null,
  itemId: null,
  orderId: null,
  itemNum: null,
  itemPrice: null,
  itemTotalPrice: null,
  itemName: null,
  itemSellPoint: null
};

export function itemToOrderItem(items) {
  let ret = [];
  items.forEach((item) => {
    ret.push({
      'id': null,
      'itemId': item.itemId,
      'itemNum': item.quantity,
      'itemPrice': item.price,
      'itemTotalPrice': item.price * item.quantity,
      'itemName': item.itemName,
      'itemSellPoint': item.itemSellPoint,
      'itemImage': item.itemImage
    });
  });
  return ret;
}