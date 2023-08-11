export const category = {
    registerCategory: {
        method: "POST",
        uri: "category",
        body: {
            categoryname: undefined,
            categoryslug: undefined
        },
        suggestions: {
            raw: "A raw example of the payload: {categoryname:'Electronics',categoryslug:'electronics'}.",
            categoryname: "Please enter caegory name.",
            categoryslug: "Please enter category slug."
        }
    },
    allCategory: {
        method: "GET",
        uri: "category",
        suggestions: {
            raw: "A raw example of the uri: 'category'.",
        }
    },
    deleteCategory: {
        method: "DELETE",
        uri: "deletecategory",
        body: {
            id: undefined
        },
        suggestions: {
            raw: "A raw example of the uri: 'deleteorder'.",
            id: "Please provide an array of id"
        }
    }
}