import {defineStore} from 'pinia'

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        addCategoryFormShow: false,
        addSubCategoryFormShow: false,
        addProductFormShow: false,
        categoryFormShow: false,
        editItem: {}
    }),
    getters: {},
    actions: {
        categoryEdit(editItem) {
            this.categoryFormShow = true,
            this.editItem = editItem
        },
        toogleAddCategoryForm() {
            this.addCategoryFormShow = !this.addCategoryFormShow
        },
        toogleSubCategoryForm() {
            this.addSubCategoryFormShow = !this.addSubCategoryFormShow
        },
        toogleProductForm() {
            this.addProductFormShow = !this.addProductFormShow
        },
        toogleCategoryForm() {
            this.categoryFormShow = !this.categoryFormShow
        },
        toogleModal() {
            this.addCategoryFormShow = false
            this.addSubCategoryFormShow = false
            this.addProductFormShow = false,
            this.categoryFormShow = false
        }
    }
})
