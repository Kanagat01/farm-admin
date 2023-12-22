const domain = "api.isg.moscow/api";

export function getUsers() {
    const users = [];
    for (let i=0; i < 5; i++) {
        users.push(
            {
                id: i+1,
                name: "Иван Иванов",
                username: "Ivan01",
                email: "example@mail.com",
                description: "Люблю всякую всячину",
                subscription_type: "standart",
                phone: "+77762747213",
                birthday: "2023-12-31",
                gender: "male",
                other_accounts: ["username1", "username2", "username3"],
                photo: "https://kartinkof.club/uploads/posts/2022-10/1664696332_29-kartinkof-club-p-kartinka-vecher-v-gorakh-35.jpg"
            }
        )
    }
    return users;
}

export function getUser(user_id) {
    const users = getUsers();
    for (const user of users) {
        if (user.id === user_id) {
            return user;
        }
    }
}

export function getAdmins() {
    const admins = [];
    for (let i=0; i < 5; i++) {
        admins.push({
            id: i+1,
            name: "Иван Иванов",
            username: "Ivan01",
            role: "Админ 3D",
        },)
    }
    return admins;
}


export function getPosts(){
    const posts = []
    for (let i=0; i < 5; i++) {
        posts.push({
            id: i+1,
            owner_id: 1,
            timestamp: "12-12-2023 09:00",
            post_text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
            picture: getPicture(1),
            likes: 15,
            views: 800,
            comments: getComments(1)
        })
    }
    return posts;
}

export function getPost(post_id) {
    const posts = getPosts();
    for (const post of posts) {
        if (post.id === post_id) {
            return post;
        }
    }
}

export function getComments(post_id) {
    const comments = []
    for (let i=0; i<5; i++) {
        comments.push({
            id: 1,
            comment_owner: 1,
            text: "comments text"
        })
    }
    return comments;
}
export function getComment(comment_id) {
    return {id: 1,
        comment_owner: 1,
        text: "comments text"}
}

export function getOrders(){
    const orders = []
    for (let i =0; i< 5; i++) {
        orders.push(
            {
                id: i+1,
                name: "order",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. ",
                buyer: "",
                cost: "15$"
            }
        )
    }
    return orders;
} 

export function getOrder(order_id) {
    const orders = getOrders();
    for (const order of orders) {
        if (order.id === order_id) {
            return order;
        }
    }
}

export function getCultures() {
    const cultures = []
    for (let i=0; i < 5; i++) {
        cultures.push({
            id: i+1,
            name: "Кукуруза",
            description: "Описание кукурузы",
            levels: 12,
            planting_time: "2023-12-31",
            days_in_garden: 12,
            amount: 5,  
            family_of_plants: "Семейство кукуруз",
            max_height: 12
        })
    }
    return cultures;
}

export function getCulture(culture_id) {
    const cultures = getCultures();
    for (const culture of cultures) {
        if (culture.id === culture_id) {
            return culture;
        }
    }
}
export function getModels() {
    const models = []
    for (let i=0; i < 5; i++) {
        models.push({
            id: i+1,
            name: `Модель ${i+1}`, 
            x: 15, 
            y: 20, 
            z: 25, 
            top_temp: 30, 
            bottom_temp: 25, 
            ventilation_temp: 20, 
            data_transfer_rate: 155, 
            speed_of_movement: 55, 
            feed_rate: 455, 
            max_top_temp: 40, 
            max_bottom_temp: 30, 
            start_from_center: true, 
            high_temperature_mode: false
        })
    }
    return models;
}

export function getModel(model_id) {
    const models = getModels();
    for (const model of models) {
        if (model.id === model_id) {
            return model;
        }
    }
}

export function getPicture(picture_id) {
    let picture= {
        url: "https://kartinkof.club/uploads/posts/2022-10/1664696332_29-kartinkof-club-p-kartinka-vecher-v-gorakh-35.jpg"
    }
    return picture;
}
