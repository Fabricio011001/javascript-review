import { v4 as uuidv4 } from 'uuid';

export class SalesOrderItem {
    constructor(orderId, productId, quantity, unitPrice) {
        this._productId = productId;
        this._itemId = uuidv4();
        this._quantity = quantity;
        this._unitPrice = unitPrice;
        this._orderId = orderId;
    }

    get orderId() {
        return this._orderId;
    }

    get productId() {
        return this._productId;
    }

    get quantity() {
        return this._quantity;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    get itemId() {
        return this._itemId;
    }

    calculateItemPrice = () => this._quantity * this._unitPrice;

}