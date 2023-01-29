class Users {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.address = {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geo: {
                lat: user.address.geo.lat,
                lng: user.address.geo.lng
            }
        }
        this.phone = user.phone;
        this.website = user.website;
        this.company = {
            name: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs
        }
    }
}

class Comments {
    constructor(comment) {
        this.postId = comment.postId;
        this.id = comment.id;
        this.email = comment.email;
        this.body = comment.body;
    }
}

class Albums {
    constructor(album) {
        this.userId = album.userId;
        this.id = album.id;
        this.title = album.title;
    }
}

class Photos {
    constructor(photo) {
        this.albumId = photo.albumId;
        this.id = photo.id;
        this.title = photo.title;
        this.url = photo.url;
        this.thumbnailUrl = photo.thumbnailUrl;
    }
}

class Todos {
    constructor(todo) {
        this.userId = todo.userId;
        this.id = todo.id;
        this.title = todo.title;
        this.completed = todo.completed;
    }
}

class ManageServerData {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/';
    }

    getByDataType(type) {
        let allOfTypeUrl = this.baseUrl+type.toLowerCase()+'/';
        $.ajax(allOfTypeUrl, {
            method: 'GET',
            success: (jsonList) => {
                RenderHtmlActive.renderServerData(type,jsonList);
            },
            error: (err) => {
                $('#content').html(err);
            }
        })

    };
}

