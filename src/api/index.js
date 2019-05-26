import {get } from './helper'
import { post } from './helper'

const getGoods = get('api/goods')
const getPurchase = get('api/purchase')
const getUserInfo = get('api/userInfo')
const getAnno = get('api/anno')
const checkOrder = post('api/checkOrder')

export {
  getGoods,
  getPurchase,
  checkOrder,
  getUserInfo,
  getAnno
}