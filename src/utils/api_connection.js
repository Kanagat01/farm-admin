export function getUsers() {
    const users = [
        {
            id: 1,
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
        },
        {
            id: 2,
            name: "Петр Петров",
            username: "Peter02",
            email: "example@mail.com",
            description: "Люблю всякую всячину",
            subscription_type: "premium",
            phone: "+77762747213",
            birthday: "2023-12-31",
            gender: "male",
            other_accounts: ["username1", "username2", "username3"],
            photo: "https://kartinkof.club/uploads/posts/2022-10/1664696332_29-kartinkof-club-p-kartinka-vecher-v-gorakh-35.jpg"
        },
        {
            id: 3,
            name: "Мария Сидорова",
            username: "Maria03",
            email: "example@mail.com",
            description: "Люблю всякую всячину",
            subscription_type: "standart",
            phone: "+77762747213",
            birthday: "2023-12-31",
            gender: "female",
            other_accounts: ["username1", "username2", "username3"],
            photo: "https://kartinkof.club/uploads/posts/2022-10/1664696332_29-kartinkof-club-p-kartinka-vecher-v-gorakh-35.jpg"
        },
        {
            id: 4,
            name: "Анна Кузнецова",
            username: "Anna04",
            email: "example@mail.com",
            description: "Люблю всякую всячину",
            subscription_type: "premium",
            phone: "+77762747213",
            birthday: "2023-12-31",
            gender: "female",
            other_accounts: ["username1", "username2", "username3"],
            photo: "https://kartinkof.club/uploads/posts/2022-10/1664696332_29-kartinkof-club-p-kartinka-vecher-v-gorakh-35.jpg"
        },
        {
            id: 5,
            name: "Алексей Николаев",
            username: "Alex05",
            email: "example@mail.com",
            description: "Люблю всякую всячину",
            subscription_type: "standart",
            phone: "+77762747213",
            birthday: "2023-12-31",
            gender: "male",
            other_accounts: ["username1", "username2", "username3"],
            photo: "https://kartinkof.club/uploads/posts/2022-10/1664696332_29-kartinkof-club-p-kartinka-vecher-v-gorakh-35.jpg"
        },
    ];
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
    const users = [
        {
            id: 1,
            name: "Иван Иванов",
            username: "Ivan01",
            role: "Админ 3D",
        },
        {
            id: 2,
            name: "Петр Петров",
            username: "Peter02",
            role: "Админ Ферма",
        },
        {
            id: 3,
            name: "Мария Сидорова",
            username: "Maria03",
            role: "Админ 3D",
            },
        {
            id: 4,
            name: "Анна Кузнецова",
            username: "Anna04",
            role: "Админ 3D",
            },
        {
            id: 5,
            name: "Алексей Николаев",
            username: "Alex05",
            role: "Админ Ферма",
            },
    ];
    return users;
}


export function getPosts(){
    const posts = [
        {
            id: 1,
            name: "Название поста №1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. ",
            likes: 15,
            comments: 56,
            time_of_publication: "date.now",
            reposts: 89,
            views: 800
        },
        {
            id: 2,
            name: "Название поста №2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. ",
            likes: 15,
            comments: 56,
            time_of_publication: "date.now",
            reposts: 89,
            views: 800
        },
        {
            id: 3,
            name: "Название поста №3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. ",
            likes: 15,
            comments: 56,
            time_of_publication: "date.now",
            reposts: 89,
            views: 800
        },
        {
            id: 4,
            name: "Название поста №4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. ",
            likes: 15,
            comments: 56,
            time_of_publication: "date.now",
            reposts: 89,
            views: 800
        }
    ]
    return posts;
}

export function getPost(post_id) {
    const posts = getPosts();
    for (const post of posts) {
        if (post.id === post_id) {
            return post;
        }
        else {
            return post;
        }
    }
}
