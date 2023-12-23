import { generatePath, matchPath } from "react-router-dom";

import * as Routes from "./routes";

export function getAdminDB() {
    let relInfo = {
        name: {
            type: "text",
            verbose_name: "Имя",
        },
    	username: {
            type: "text",
            verbose_name: "Никнейм"
        },
        role: {
            type: "text",
            verbose_name: "Роль"
        }	
    }
    return relInfo;
}

export function getUserDB(user_id) {
    const generateURL = (route) => generatePath(route, { user_id: user_id });
    let relInfo = {
        email: {
            type: "email",
            verbose_name: "Электронная почта",
        },
        phone: {
            type: "phone",
            verbose_name: "Номер телефона",
        },
        icoins: {
            type: "number",
            verbose_name: "Айкоины",
        },
        plastic_bottels: {
            type: "number",
            verbose_name: "Пластиковые бутылки",
        },
        alum_bottels: {
            type: "number",
            verbose_name: "Алюминиевые бутылки",
        },
        name: {
            type: "text",
            verbose_name: "Имя",
        },
        description: {
            type: "textarea",
            verbose_name: "О себе",
        },
        username: {
            type: "text",
            verbose_name: "Имя пользователя",
        },
        gender: {
            type: "radio",
            verbose_name: "Пол",
            radio_inputs: [
                {
                    label: "М",
                    value: "male",
                },
                {
                    label: "Ж",
                    value: "female",
                },
            ],
        },
        bday: {
            type: "date",
            verbose_name: "Дата рождения",
        },
        achievments: {
            type: "text_array",
            verbose_name: "Достижения",
        },
    }
    if (user_id) {
        relInfo = Object.assign({}, relInfo, {
            friends: {
            type: "array",
            route: `${Routes.USERS_ROUTE}?user_friends=${user_id}`,
            verbose_name: "Друзья",
            },
            followers: {
                type: "array",
                route: `${Routes.USERS_ROUTE}?user_followers=${user_id}`,
                verbose_name: "Подписчики",
            },
            following: {
                type: "array",
                route: `${Routes.USERS_ROUTE}?user_followings=${user_id}`,
                verbose_name: "Подписки",
            },
            posts: {
                type: "array",
                route: `${Routes.POSTS_ROUTE}?user_posts=${user_id}`,
                verbose_name: "Посты",
            },
            chats: {
                type: "array",
                route: generateURL(Routes.CHATS_ROUTE),
                verbose_name: "Чаты",
            },
            farms: {
                type: "array",
                route: `${Routes.FARMS_ROUTE}?user_farms=${user_id}`,
                verbose_name: "Фермы",
            },
            seeds: { 
                type: "array", 
                route: `${Routes.SEEDS_ROUTE}?user_seeds=${user_id}`, 
                verbose_name: "Семена" 
            },
            "3d_models": {
                type: "array",
                route: `${Routes.MODELS_ROUTE}?user_models=${user_id}`,
                verbose_name: "3D модели",
            },
            gifts_3d: {
                type: "array",
                route: generateURL(Routes.GIFTS_3D_ROUTE),
                verbose_name: "Подарки 3D",
            },
            gifts_farm: {
                type: "array",
                route: generateURL(Routes.FARM_GIFTS_ROUTE),
                verbose_name: "Подарки Ферма",
            },
            reviews: {
                type: "array",
                route: `${Routes.REVIEWS_ROUTE}?user_reviews=${user_id}`,
                verbose_name: "Отзывы",
            },
        })
    }
    return relInfo;
}

export function getModelDB(model_id) {
    let relInfo = {
        name: {
            type: "text",
            verbose_name: "Название" 
        },
        timestamp: {
            type: "date",
            verbose_name: "Дата создания"
        },
        pictures: {
            type: "number",
            verbose_name: "Фото"
        },
        file_size: {
            type: "text",
            verbose_name: "Размер файла"
        },
        description: {
            type: "textarea",
            verbose_name: "Описание"
        },
        user_id: {
            type: "number",
            verbose_name: "ID пользователя"
        },
        curent_level: {
            type: "text",
            verbose_name: "Текущий уровень"
        },
        time_start: {
            type: "date",
            verbose_name: "Время начала"
        },
        models: {
            type: "text_array",
            verbose_name: "Модели"
        },
        model_size: {
            type: "text",
            verbose_name: "Размер модели"
        },
        model_h: {
            type: "text",
            verbose_name: "Высота"
        },
        status: {
            type: "radio",
            verbose_name: "Статус",
            radio_inputs: [
                {label: "Готово",
                value: "true"},
                {label: "Не готово", value: "false"}
            ]
        }
    }
    if (model_id) {
        relInfo = Object.assign({}, relInfo, {
            levels: {
                type: "array",
                route: `${Routes.LEVELS_3D_ROUTE}?model_id=${model_id}`,
                verbose_name: "Уровни"
            }
        })
    }
    return relInfo;
}

export function getPostDB(post_id) {
    let relInfo = {
        owner_id: {
            verbose_name: "Владелец",
            type: "number",
        },
        timestamp: {
            verbose_name: "Дата создания",
            type: "date",
        },
        post_text: {
            verbose_name: "Текст поста",
            type: "textarea",
        },
        picture: {
            verbose_name: "Фото",
            type: "image",
        },
        views: {
            verbose_name: "Просмотры",
            type: "number",
        },
        likes: {
            verbose_name: "Лайки",
            type: "number",
        }
    };
    if (post_id){
        relInfo.extend({
            route: generatePath(Routes.COMMENTS_ROUTE, { post_id: post_id }),
            verbose_name: "Комменты",
        })
    }
    return relInfo
}

export function getPostCommentsDB() {
    let relInfo = {
        comment_owner: {
            type: "number",
            verbose_name: "Владелец поста"
        },
        post: {
            type: "number",
            verbose_name: "ID поста"
        },
        text: {
            type: "text",
            verbose_name: "Текст"
        }
    }
    return relInfo;
}

export function getChatDB(chat_id) {
    let relInfo = {
        user_1: {
            type: "number",
            verbose_name: "От кого (id)"
        },
        user_2: {
            type: "number",
            verbose_name: "Кому (id)"
        }
    }
    if (chat_id) {
        relInfo = Object.assign({}, relInfo, {
            messages: {
                type: "array",
                route: `${window.location.href}/messages`,
                verbose_name: "Сообщения"
            }
        })
    }
    return relInfo;
}

export function getMessageDB() {
    let relInfo = {
        message_owner: {
            type: "number",
            verbose_name: "ID владелеца"
        },
        sendtime: {
            type: "date",
            verbose_name: "Время отправки"
        },
        text: {
            type: "textarea",
            verbose_name: "Текст"
        },
        is_readed: {
            type: "checkbox",
            verbose_name: "Прочитано"
        }
    }
    return relInfo;
}

export function getGiftDB(gift_id) {
    let relInfo = {
        from: {
            type: "number",
            verbose_name: "От кого (id)"
        },
        to: {
            type: "number",
            verbose_name: "К кому (id)"
        },
        comment: {
            type: "text",
            verbose_name: "Комментарий"
        }
    }
    if (gift_id) {
        relInfo = Object.assign({}, relInfo, {
            count: {
                type: "array",
                route: `${matchPath({path: Routes.GIFT_3D_ROUTE}, window.location.pathname) ? `${Routes.MODELS_ROUTE}?gift_id=${gift_id}` : `${Routes.SEEDS_ROUTE}?gift_id=${gift_id}`}`,
                verbose_name: "Подарки"
            }
        })
    }
    return relInfo
}

export function getLotsDB(lot_id) {
    let relInfo = {
        owner_id: {
            type: "number",
            verbose_name: "ID Владельца"
        },
        name: {
            type: "text",
            verbose_name: "Название"
        },
        picture: {
            type: "number",
            verbose_name: "ID Фото"
        },
        category_id: {
            type: "number",
            verbose_name: "ID Категории"
        },
        summ: {
            type: "number",
            verbose_name: "Цена лота"
        },
        review: {
            type: "number",
            verbose_name: "Количество отзывов"
        },
    }
    if (lot_id) {
        relInfo = Object.assign({}, relInfo, {
            reviews_list: {
                type: "array",
                route: `${Routes.REVIEWS_ROUTE}?lot_id=lot_id`, 
                verbose_name: "Отзывы"
            },
            descriptions_list: {
                type: "array",
                route: `${Routes.LOT_DESCRIPTION_ROUTE}`,
                verbose_name: "Список описаний"
            }
        })
    }
    return relInfo;
}

export function getCategoryDB() {
    let relInfo = {
        cat: {
            type: "text",
            verbose_name: "Название категории"
        }
    }
    return relInfo;
}

export function getReviewsDB(review_id) {
    let relInfo = {
        owner_id: {
            type: "number",
            verbose_name: "ID Пользователя"
        },
        timestamp: {
            type: "date",
            verbose_name: "Дата создания"
        },
        text: {
            type: "textarea",
            verbose_name: "Текст"
        },
        rate: {
            type: "number",
            verbose_name: "Оценка"
        },
        magazine_answer: {
            type: "textarea",
            verbose_name: "Ответ магазина"
        },
        likes: {
            type: "number",
            verbose_name: "Количество лайков"
        },
        dislikes: {
            type: "number",
            verbose_name: "Количество дизлайков"
        }
    }
    if (review_id) {
        relInfo = Object.assign({}, relInfo, {
            pictures: {
                type: "array",
                route: `${Routes.PICTURES_ROUTE}?review_id=${review_id}`,
                verbose_name: "Картинки"
            }
        })
    }
    return relInfo;
}

export function getLotDescriptionDB() {
    let relInfo = {
        lot_id: {
            type: "number",
            verbose_name: "ID Лота"
        },
        text_1: {
            type: "text",
            verbose_name: "Текст 1"
        },
        text_2: {
            type: "text",
            verbose_name: "Текст 2"
        }
    }
    return relInfo;
}

export function getOrderDB(order_id) {
    let relInfo = {
        owner_id: {
            type: "number",
            verbose_name: "ID Пользователя"
        },
        date: {
            type: "date",
            verbose_name: "Дата покупки"
        },
        price: {
            type: "number",
            verbose_name: "Сумма"
        },
        is_paidfor: {
            type: "checkbox",
            verbose_name: "Оплачено"
        }
    }
    if (order_id) {
        relInfo = Object.assign({}, relInfo, {
            lots: {
                type: "array",
                route: `${Routes.LOTS_ROUTE}?order_id=order_id`,
                verbose_name: "Список Лотов"
            }
        })
    }
    return relInfo;
}

export function getPrinterDB() {
    let relInfo = {
        status: {
            type: "radio",
            verbose_name: "Статус",
            radio_inputs: [
                {label: "Занят", value: "true"},
                {label: "Не Занят", value: "false"}
            ]
        },
        size: {
            type: "text",
            verbose_name: "Размер"
        },
        used: {
            type: "number",
            verbose_name: "Кто пользуется"
        },
        model: {
            type: "number",
            verbose_name: "Печатается модель (id)"
        }
    }
    return relInfo;
}

export function getLevels3DDB() {
    let relInfo = {
        pictures: {
            type: "number",
            verbose_name: "Фото"
        },
        text: {
            type: "text",
            verbose_name: "Текст"
        },
        description: {
            type: "textarea",
            verbose_name: "Описание"
        },
        end_time: {
            type: "date",
            verbose_name: "Время окончания"
        }
    }
    return relInfo;
}

export function getFarmDB(farm_id) {
    let relInfo = {
        size: {
            type: "text",
            verbose_name: "Размер"
        }
    }
    if (farm_id) {
        relInfo = Object.assign({}, relInfo, {
            garden_list: {
                type: "array",
                route: `${Routes.GARDENS_ROUTE}?farm_id=${farm_id}`,
                verbose_name: "Список садов"
            }
        })
    } else {
        relInfo = Object.assign({}, relInfo, {
            garden_list: {
                type: "text_array",
                verbose_name: "Список садов"
            }
        })
    }
    return relInfo;
}

export function getGardenDB(garden_id) {
    let relInfo = {
        name: {
            type: "text",
            verbose_name: "Название"
        },
        user: {
            type: "number",
            verbose_name: "Пользователь (id)"
        }
    }
    if (garden_id) {
        relInfo = Object.assign({}, {
            cells_list: {
                type: "array",
                route: `${Routes.GARDEN_CELLS_ROUTE}?garden_id=${garden_id}`,
                verbose_name: "Список ячеек"
            }
        }, relInfo)
    }
    return relInfo
}

export function getGardenCellDB() {
    let relInfo = {
        status: {
            type: "radio",
            verbose_name: "Статус",
            radio_inputs: [
                {label: "Занят", value: "true"}, 
                {label: "Свободен", value: "false"}
            ]
        },
        seed: {
            type: "number",
            verbose_name: "Семя"
        }
    }
    return relInfo;
}

export function getSeedDB(seed_id) {
    let relInfo = {
        name: {
            type: "text",
            verbose_name: "Название"
        },
        pictures: {
            type: "number",
            verbose_name: "Фото"
        },
        category: {
            type: "number",
            verbose_name: "ID категории",
        },
        description: {
            type: "textarea",
            verbose_name: "Описание"
        },
        start: {
            type: "date",
            verbose_name: "Запланированное начало посадки"
        },
        seeds_cnt: {
            type: "number",
            verbose_name: "Количество семени"
        },
        information: {
            type: "number",
            verbose_name: "Список информации"
        },
        note: {
            type: "text",
            verbose_name: "Заметка"
        }
    }
    if (seed_id) {
        relInfo = Object.assign({}, relInfo, {
            url_pics: {
                type: "array",
                route: `${Routes.PICTURES_ROUTE}?seed_id=${seed_id}`,
                verbose_name: "Другие фото" 
            },
            levels: {
                type: "array",
                route: generatePath(Routes.SEED_LEVELS_ROUTE, {seed_id: seed_id}),
                verbose_name: "Уровни"
            }
        })
    }
    return relInfo;
}

export function getSeedInformationDB() {
    let relInfo = {
        title: {
            type: "text",
            verbose_name: "Название"
        },
        text: {
            type: "text",
            verbose_name: "Текст"
        },
        planted_seed_id: {
            type: "number",
            verbose_name: "Посаженное Семя (id)"
        }
    }
    return relInfo;
}

export function getSeedLevelDB() {
    let relInfo = {
        picture: {
            type: "number",
            verbose_name: "Фото"
        },
        levels: {
            type: "text_array",
            verbose_name: "Уровни"
        },
        name: {
            type: "text",
            verbose_name: "Название"
        },
        description: {
            type: "textarea",
            verbose_name: "Описание"
        },
        end_date: {
            type: "date",
            verbose_name: "Время окончания уровня"
        }
    }
    return relInfo;
}

export function getPlantedSeedDB() {
    let relInfo = {
        seed_id: {
            type: "number",
            verbose_name: "Семя (id)"
        },
        owner_id: {
            type: "number",
            verbose_name: "Пользователь (id)"
        },
        level: {
            type: "number",
            verbose_name: "Уровень (id)"
        },
        start: {
            type: "date",
            verbose_name: "Время начала"
        }
    }
    return relInfo;
}

export function getPicturesDB() {
    let relInfo = {
        name: {
            type: "text",
            verbose_name: "Название"
        },
        image_oid: {
            type: "number",
            verbose_name: "image_oid"
        },
        image_data: {
            type: "text",
            verbose_name: "image_data"
        },
        url: {
            type: "text",
            verbose_name: "URL"
        }
    }
    return relInfo;
}

export function getLikeToPostDB() {
    let relInfo = {
        like_owner: {
            type: "number",
            verbose_name: "ID Пользователя"
        },
        post_id: {
            type: "number",
            verbose_name: "ID Поста"
        },
        timestamp: {
            type: "date",
            verbose_name: "Дата отметки"
        }
    }
    return relInfo;
}

export function getLikeToReview() {
    let relInfo = {
        review_id: {
            type: "number",
            verbose_name: "ID отзыва"
        },
        owner_id: {
            type: "number",
            verbose_name: "ID пользователя"
        },
        date: {
            type: "date",
            verbose_name: "Дата отметки"
        }
    }
    return relInfo;
}

export function getDislikeToReview() {
    let relInfo = {
        review_id: {
            type: "number",
            verbose_name: "ID отзыва"
        }, 
        owner_id: {
            type: "number",
            verbose_name: "ID пользователя"
        },
        date: {
            type: "date",
            verbose_name: "Дата отметки"
        }
    }
    return relInfo;
}
