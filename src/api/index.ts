import request from './request'

export type category = {
  categoryId: number
  categoryName: string
  categoryChild?: { categoryId: number; categoryName: string }[]
}

export const getProduct = () => request({ url: '/product/getBaseCategoryList' })
