// const domain = "https://api.isg.moscow/api";

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
                phone: "+77762747213",
                bday: "2023-12-31",
                gender: "male",
                friends: [1, 2, 3]
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
            comments: getPostComments(1)
        })
    }
    return posts;
}

export function getPostLike() {
    return ;
}

export function getPost(post_id) {
    const posts = getPosts();
    for (const post of posts) {
        if (post.id === post_id) {
            return post;
        }
    }
}

export function getPostComments(post_id) {
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

export function getPostLikes() {
    return;
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
    let models = []
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

export function getChats() {
    let chats = []
    for (let i=0; i<5; i++){
        chats.push({
            id: i+1,
            user_1: 1,
            user_2: 1,
            messages: ["Hi", "Hello"]
        })
    }
    return chats
}

export function getChatMessages() {
    return;
}

export function getMessage() {
    return;
}

export function getChat() {
    return getChats()[0]
}

export function getFarms() {
    let farms = []
    for (let i=0; i<5; i++) {
        farms.push({
            id: i+1,
            garden_list: ["garden1", "garden2", "garden3"],
            size: "155mb"
        })
    }
    return farms;
} 

export function getFarm() {
    return getFarms()[0]
}

export function getGifts() {
    let gifts = []
    for (let i=0; i<5; i++) {
        gifts.push({
            id: i+1,
            from: 1,
            to: 1,
            count: [getModels().slice(0, 4)],
            comment: "Gift comment"
        })
    }
    return gifts;
}

export function getGift() {
    return getGifts()[0]
}

export function getSeeds() {
    let seeds = []
    for (let i=0; i<5; i++) {
        seeds.push({
            id: i+1,
            name: "Seed 1",
            picture: getPicture(1),
            category: 1,
            description: "Description of seed",
            url_pics: [getPicture(1), getPicture(1)],
            levels: [],
            seeds_list: [],
            start: "12-12-2023",
            information: "",
            note: "Some note"
        })
    }
    return seeds
}

export function getSeed() {
    return getSeeds()[0]
}

export function getReviews() {
    let reviews = []
    for (let i=0; i<5; i++) {
        reviews.push({
            id: i+1,
            owner_id: 1,
            timestamp: "12-12-2023",
            text: "Some text",
            rate: 5.0,
            magazine_answer: "Magazine answer", 
            pictures: [1, 2, 3],
            likes: 15,
            dislikes: 15
        })
    }
    return reviews;
}

export function getReview() {
    return getReviews()[0]
}

export function getReviewLikes() {
    return
}

export function getReviewDislikes() {
    return
}

export function getLikeToReview() {
    return ;
}

export function getDislikeToReview() {
    return 
}

export function getGarden() {
    return 
}

export function getGardenCell() {
    return 
}

export function getSeedInformation() {
    return 
}

export function getSeedLevels() {
    return
}

export function getLots() {
    return
}

export function getLotCategories() {
    return
}

export function getPlantedSeed() {
    return
}

export function getLot() {
    return;
}

export function getLotDescription() {
    return;
}

export function getLotCategory() {
    return;
}

export function getPrinters() {
    return;
}

export function getPrinter() {
    return;
}

export function get3DLevels() {
    return;
}

export function getLevel3D() {
    return;
}

export function get3DGifts() {
    return
}

export function getFarmGifts() {
    return
}