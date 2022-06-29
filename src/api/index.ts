import request from './request'
import mockRequest from './mockApi'
export type category = {
  categoryId: number
  categoryName: string
  categoryChild?: { categoryId: number; categoryName: string }[]
}

export const getProduct = () =>
  request({ url: '/product/getBaseCategoryList', method: 'GET' })

export const getBaner = () => mockRequest.get('/banner')
