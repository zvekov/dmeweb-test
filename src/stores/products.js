import {apiAuth, apiUrl} from "../services/apiAuth"
import {defineStore} from 'pinia'
import {useStorage} from '@vueuse/core'

export const useProductStore = defineStore({

    id: 'product',
    state: () => ({
        allProducts: [],
        productsByCategory: [],
        product: null,
        loading: false,
        error: null
    }),
    getters: {},
    actions: {

        //* Get products
        async fetchProducts() {
            this.allProducts = []
            this.loading = true
            try {
                this.allProducts = await fetch(`${apiUrl}/products?per_page=100`, {
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
        async fetchProductsByCategory(id) {
            this.productsByCategory = []
            this.loading = true
            try {
                this.productsByCategory = await fetch(`${apiUrl}/products?category=${id}&per_page=100`, {
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
                this.product = await fetch(`${apiUrl}/products/${id}`, {
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
