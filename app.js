const content = document.getElementById('content');
const sideList = document.getElementById('side_list');
const addForm = document.querySelector('#addProduct form');

// create store instance
const server = new ManageServerData();


// top menu tabs active/inactive

// $('#top-nav').on('click', 'li',function () {
//     if ($(this).attr('id','productsLink'))
//         RenderHtmlStatic.displayProductsTopNav();
//     else if ($(this).attr('id','productsLink'))
//         RenderHtmlStatic.displayAddProductTopNav();
// })

document.getElementById('top-nav')
    .addEventListener('click', (e) => {
        const topNavId = e.target.getAttribute('id');
        if (topNavId === 'productsLink')
            RenderHtmlStatic.displayProductsTopNav();
        else if (topNavId === 'addLink')
            RenderHtmlStatic.displayAddProductTopNav();
    })

// render form inputs according to product type

// $('#type').on('change', function () {
//     RenderHtmlActive.renderFormInputs($(this).val());
// })

document.getElementById('type').addEventListener('change', e => {
    RenderHtmlActive.renderFormInputs(e.target.value)
})

// adding new product
addForm.addEventListener('submit',RenderHtmlActive.handleAddForm);

// products side tabs
sideList.addEventListener('click', e => {
    let outputType = e.target.dataset.name;
    if (outputType === 'users') {
        server.getByDataType('users')
        RenderHtmlStatic.showSideTabAsActive('users');
    } else if (outputType === 'posts') {
        server.getByDataType('posts')
        RenderHtmlStatic.showSideTabAsActive('posts');
    } else if (outputType === 'comments') {
        server.getByDataType('comments')
        RenderHtmlStatic.showSideTabAsActive('comments');
    } else if (outputType === 'albums'){
        server.getByDataType('albums')
        RenderHtmlStatic.showSideTabAsActive('albums');
    } else if (outputType === 'photos'){
        server.getByDataType('photos')
        RenderHtmlStatic.showSideTabAsActive('photos');
    } else if (outputType === 'todos'){
        server.getByDataType('todos')
        RenderHtmlStatic.showSideTabAsActive('todos');
    }
})

// load all products at the beginning
document.addEventListener('DOMContentLoaded', e => {
    server.getByDataType('users')
})




