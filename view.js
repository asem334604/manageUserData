

class RenderHtmlStatic {
    static displayProductsTopNav() {
        document.getElementById('showProducts').classList.remove('hide');
        document.getElementById('addProduct').classList.add('hide');
        document.getElementById('productsLink').classList.add('active');
        document.getElementById('addLink').classList.remove('active');
    }

    static displayAddProductTopNav() {
        document.getElementById('showProducts').classList.add('hide');
        document.getElementById('addProduct').classList.remove('hide');
        document.getElementById('productsLink').classList.remove('active');
        document.getElementById('addLink').classList.add('active');
    }

    static showSideTabAsActive(value) {
        const sideTabs = document.querySelectorAll('#side_list li');
        sideTabs.forEach(el => el.classList.remove('active'));
        sideTabs.forEach(el => {
            if (el.getAttribute('data-name') === value)
                el.classList.add('active');
        })

    }
}

class RenderHtmlActive {
    static renderFormInputs(productType) {
        const optInputs = document.getElementById('optional_inputs');
        switch (productType) {
            case ('milk'):
                optInputs.innerHTML =
                    `<input class="form-control" name="fat" placeholder="Type fat" type="number" min="0" required>`;
                break;
            case ('chocolate'):
                optInputs.innerHTML =
                    `<input class="form-control" name="kind" placeholder="Type kind" type="text" required>`;
                break;
            case ('wine'):
                optInputs.innerHTML =
                    `<input class="form-control" name="alcohol" placeholder="Type alcohol" type="number" min="0" required>`;
                break;
            default:
                optInputs.innerHTML =
                    `<input class="form-control" name="fat" placeholder="Type fat" type="number" min="0" required>`;
        }
    }

    static renderServerData(data) {
        // HTML wrapper for array element
        function cardHtmlWrap(obj) {
            let dataType = obj.constructor.name.toLowerCase();
            switch (dataType) {
                case ('users'): {
                    return `<div class="card">
                    <h2>${obj.constructor.name}</h2>
                    <h3>Id: ${obj.id}</h3>
                    <h3>Name: ${obj.name}</h3>
                    <h3>Username: ${obj.username}</h3>
                    <h3>Email: ${obj.email}</h3>
                    <h3>Adress:
                    <ul>
                        <li>Street: ${obj.address.street} </li>               
                        <li>Suite: ${obj.address.suite} </li>               
                        <li>City: ${obj.address.city} </li>               
                        <li>Zipcode: ${obj.address.zipcode} </li>               
                        <li>Geo:
                            <ul>
                            <li>Lattitude: ${obj.address.geo.lat}</li>
                            <li>Longittude: ${obj.address.geo.lng}</li>
                            </ul>
                        </li>
                        </ul>
                    </h3>
                    <h3>Phone: ${obj.phone}</h3>
                    <h3>Website: ${obj.website}</h3>
                    <h3>Company:
                            <ul>
                            <li>Name: ${obj.company.name}</li>
                            <li>Catch phrase: ${obj.company.catchPhrase}</li>
                            <li>Bs: ${obj.company.bs}</li>
                            </ul>
                     </h3>
                </div>`
                }
                case ('comments'): {
                    return `<div class="card">
                    <h2>${obj.constructor.name}</h2>
                    <h3>Post Id: ${obj.postId}</h3>
                    <h3>Id: ${obj.id}</h3>
                    <h3>Email: ${obj.email}</h3>
                    <h3>Commentary: ${obj.body}</h3>
                 </div>`
                }
                case ('albums'): {
                    return `<div class="card">
                    <h2>${obj.constructor.name}</h2>
                    <h3>User Id: ${obj.userId}</h3>
                    <h3>Id: ${obj.id}</h3>
                    <h3>Title: ${obj.title}</h3>
                 </div>`
                }
                case ('photos'): {
                    return `<div class="card">
                    <h2>${obj.constructor.name}</h2>
                    <h3>Album Id: ${obj.albumId}</h3>
                    <h3>Id: ${obj.id}</h3>
                    <h3>Title: ${obj.title}</h3>
                    <h3>Url: ${obj.url}</h3>
                    <h3>Thumbnail url: ${obj.thumbnailUrl}</h3>
                 </div>`
                }
                case ('todos'): {
                    return `<div class="card">
                    <h2>${obj.constructor.name}</h2>
                    <h3>User Id: ${obj.userId}</h3>
                    <h3>Id: ${obj.id}</h3>
                    <h3>Title: ${obj.title}</h3>
                    <h3>Complited: ${obj.completed}</h3>
                 </div>`
                }
            }
        }
        return data.map(cardHtmlWrap).join('');
    }

    static handleAddForm(e){
        e.preventDefault();
        // keep database clear from undefined and unnecessary values
        Util.validateFormFields(e.target);
        const productType = e.target.elements.type.value;
        let res = {};
        switch (productType) {
            case ('milk'):
                res = new Milk(e.target.elements.id.value,
                    e.target.elements.title.value,
                    e.target.elements.manufacture.value,
                    e.target.elements.price.value,
                    e.target.elements.fat.value);
                break;
            case ('chocolate'):
                res = new Chocolate(e.target.elements.id.value,
                    e.target.elements.title.value,
                    e.target.elements.manufacture.value,
                    e.target.elements.price.value,
                    e.target.elements.kind.value);
                break;
            case ('wine'):
                res = new Wine(e.target.elements.id.value,
                    e.target.elements.title.value,
                    e.target.elements.manufacture.value,
                    e.target.elements.price.value,
                    e.target.elements.alcohol.value);
                break;
        }
        store.add(res)
        console.log(store)
        addForm.reset();
        content.innerHTML = RenderHtmlActive.renderProducts(store.getAll());
    }
}