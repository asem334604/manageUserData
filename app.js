const content = document.getElementById('content');
const sideList = document.getElementById('side_list');
const addForm = document.querySelector('#addProduct form');

// create store instance
const store = new Store();

// top menu tabs active/inactive
document.getElementById('top-nav')
    .addEventListener('click', (e) => {
        const topNavId = e.target.getAttribute('id');
        if (topNavId === 'productsLink')
            RenderHtmlStatic.displayProductsTopNav();
        else if (topNavId === 'addLink')
            RenderHtmlStatic.displayAddProductTopNav();
    })

// render form inputs according to product type
document.getElementById('type').addEventListener('change', e => {
    RenderHtmlActive.renderFormInputs(e.target.value)
})

// adding new product
addForm.addEventListener('submit',RenderHtmlActive.handleAddForm);

// products side tabs
sideList.addEventListener('click', e => {
    let outputType = e.target.dataset.name;
    if (outputType === 'all') {
        content.innerHTML = RenderHtmlActive.renderProducts(store.getAll());
        RenderHtmlStatic.showSideTabAsActive('all');
    } else if (outputType === 'milk') {
        content.innerHTML = RenderHtmlActive.renderProducts(store.getByType('milk'));
        RenderHtmlStatic.showSideTabAsActive('milk');
    } else if (outputType === 'chocolate') {
        content.innerHTML = RenderHtmlActive.renderProducts(store.getByType('chocolate'));
        RenderHtmlStatic.showSideTabAsActive('chocolate');
    } else if (outputType === 'wine'){
        content.innerHTML = RenderHtmlActive.renderProducts(store.getByType('wine'));
        RenderHtmlStatic.showSideTabAsActive('wine');
    }
})

// load all products at the beginning
document.addEventListener('DOMContentLoaded', e => {
    content.innerHTML = RenderHtmlActive.renderProducts(store.getAll());
})

const milk1 = new Milk('12345', 'Tnuva Milk', 'Tnuva Inc', 5.60, 3);
const milk2 = new Milk('12346', 'Tara Milk', 'Tara Inc', 5.90, 5);
const milk3 = new Milk('12345', 'Yotvata Milk', 'Yotvata Inc', 6.20, 1);
const chocolate1 = new Chocolate('123535', 'Elit Chocolate', 'Elit Inc', 5.20, 'black');
const chocolate2 = new Chocolate('1213345', 'Milka Chocolate', 'Milka Inc', 7.20, 'white');
const chocolate3 = new Chocolate('1246345', 'Snickers Chocolate', 'Snickers Inc', 5.20, 'with peanuts');
const wine1 = new Wine('12546345', 'Yardeni wine', 'Yardeni Winery', 40.20, 11);
const wine2 = new Wine('122342345', 'Yekev wine', 'Yekev Winery', 55.60, 10.5);
const wine3 = new Wine('1246345', 'Golan wine', 'Golan Winery', 50.10, 10.5);


store.add(milk1);
store.add(milk2);
store.add(milk3);
store.add(chocolate1);
store.add(chocolate2);
store.add(chocolate3);
store.add(wine1);
store.add(wine2);
store.add(wine3);


