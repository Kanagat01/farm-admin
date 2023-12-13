export function getUsers() {
    const users = [
        {
            id: 1,
            name: "Иван Иванов",
            username: "Ivan01",
            subscription_type: "Стандарт",
            birthday: "2023-12-31",
            photo: "https://kartinkof.club/uploads/posts/2022-10/1664696332_29-kartinkof-club-p-kartinka-vecher-v-gorakh-35.jpg"
        },
        {
            id: 2,
            name: "Петр Петров",
            username: "Peter02",
            subscription_type: "Премиум",
            birthday: "2023-12-31",
            photo: "https://kartinkof.club/uploads/posts/2022-10/1664696332_29-kartinkof-club-p-kartinka-vecher-v-gorakh-35.jpg"
        },
        {
            id: 3,
            name: "Мария Сидорова",
            username: "Maria03",
            subscription_type: "Стандарт",
            birthday: "2023-12-31",
            photo: "https://kartinkof.club/uploads/posts/2022-10/1664696332_29-kartinkof-club-p-kartinka-vecher-v-gorakh-35.jpg"
        },
        {
            id: 4,
            name: "Анна Кузнецова",
            username: "Anna04",
            subscription_type: "Премиум",
            birthday: "2023-12-31",
            photo: "https://kartinkof.club/uploads/posts/2022-10/1664696332_29-kartinkof-club-p-kartinka-vecher-v-gorakh-35.jpg"
        },
        {
            id: 5,
            name: "Алексей Николаев",
            username: "Alex05",
            subscription_type: "Стандарт",
            birthday: "2023-12-31",
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
