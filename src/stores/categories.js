import {apiAuth, apiUrl} from "../services/apiAuth"
import {defineStore} from 'pinia'
import {useStorage} from '@vueuse/core'
import {useModalStore} from './modal'

const {toogleCategoryForm} = useModalStore()

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        category: {},
        categories: [],
        loading: false,
        error: null,
        alert: {
            type: '',
            text: ''
        }
    }),
    getters: {
        getMainCategories: (state) => {
            return state.categories.filter((category) => category.parent === 0)
        },
        getMainSubCategories: (state) => {
            return state.categories.filter((category) => category.parent === state.category?.id)
        },
        getSubCategoriesInSubcategory: (state) => {
            return state.categories.filter((category) => category.parent === state.category?.parent)
        }
    },
    actions: {

        //* Get categories
        async fetchCategories() {
            this.categories = []
            this.loading = true
            try {
                this.categories = await fetch(`${apiUrl}/products/categories?per_page=100`, {
                    headers: {"Authorization": apiAuth}
                })
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },

        //* Get category by {id}
        async fetchCategory(id) {
            this.category = null
            this.loading = true
            try {
                this.category = await fetch(`${apiUrl}/products/categories/${id}`, {
                    headers: {"Authorization": apiAuth}
                })
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },

        //* Add category
        async addCategory(data) {
            this.category = null
            this.loading = true
            this.alert = {}
            try {
                this.category = await fetch(`${apiUrl}/products/categories/`, {
                    body: JSON.stringify(data),
                    method: 'POST',
                    headers: {"Authorization": apiAuth}
                })
                    .then((response) => this.fetchCategories())
            } catch (error) {
                this.error = error
                this.alert = {
                    type: 'error',
                    text: 'Error: ' + error.message
                }
            } finally {
                this.loading = false
                this.alert = {
                    type: 'success',
                    text: 'Category added!'
                }
                toogleCategoryForm()
            }
        },

        //* Update category
        async updateCategory(data) {
            this.category = null
            this.loading = true
            this.alert = {}
            try {
                this.category = await fetch(`${apiUrl}/products/categories/${data.id}`, {
                    body: JSON.stringify(data),
                    method: 'PUT',
                    headers: {"Authorization": apiAuth}
                })
                    .then((response) => this.fetchCategories())
            } catch (error) {
                this.error = error
                this.alert = {
                    type: 'error',
                    text: 'Error: ' + error.message
                }
            } finally {
                this.loading = false
                this.alert = {
                    type: 'success',
                    text: 'Category updated!'
                }
                toogleCategoryForm()
            }
        },

        //* Delete category by {id}
        async deleteCategory(id) {
            this.category = null
            this.loading = true
            this.alert = {}
            try {
                this.category = await fetch(`${apiUrl}/products/categories/${id}?force=true`, {
                    method: 'DELETE',
                    headers: {"Authorization": apiAuth}
                })
                    .then((response) => this.fetchCategories())
            } catch (error) {
                this.error = error
                this.alert = {
                    type: 'error',
                    text: 'Error: ' + error.message
                }
            } finally {
                this.loading = false
                toogleCategoryForm()
                this.alert = {
                    type: 'success',
                    text: 'Category deleted!'
                }
            }
        }
    }
})
