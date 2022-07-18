import {apiAuth, apiUrl} from "../services/apiAuth"
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useProductStore = defineStore({

    id: 'product',
    state: () => ({
        products: useStorage('productsStorage',[]),
        product: useStorage('productStorage',null),
        productsByCategory: useStorage('productsByCategoryStorage',[]),
        loading: false,
        error: null
    }),
    getters: {},
    actions: {

        //* Get products
        async fetchProducts() {
            this.products = []
            this.loading = true
            try {
                this.products = await fetch(`${apiUrl}/products?per_page=100`, {
                    headers: {"Authorization": apiAuth}
                })
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        //* Get products by category
        async fetchProductsByCategory(categoryId) {
            this.products = []
            this.loading = true
            try {
                this.products = await fetch(`${apiUrl}/products?category=${categoryId}&per_page=100`, {
                    headers: {"Authorization": apiAuth}
                })
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        //* Get product by {id}
        async fetchProduct(id) {
            this.product = null
            this.loading = true
            try {
                this.product = await fetch(`${apiUrl}/products/${id}`,{
                    headers: {"Authorization": apiAuth}
                })
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        }

    }
})
