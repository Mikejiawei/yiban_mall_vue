import {get } from './helper'
import { post } from './helper'

const getGoods = get('api/goods')
const getPurchase = get('api/purchase')
const checkOrder = post('api/checkOrder')

export {
  getGoods,
  getPurchase,
  checkOrder
}