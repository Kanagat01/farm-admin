import * as models from "./models";
import * as apiConn from "./api_connection";
import { generatePath } from "react-router-dom";

export const DASHBOARD_ROUTE = ""
export const LOGIN_ROUTE = "/login"
export const LOGOUT_ROUTE = "/logout"

export const ADMINS_ROUTE = "/admins"

export const USERS_ROUTE = "/users"
export const USER_ROUTE = "/users/:user_id"

export const CHATS_ROUTE = "/users/:user_id/chats"
export const CHAT_ROUTE = "/users/:user_id/chats/:chat_id"
export const MESSAGES_ROUTE = "/users/:user_id/chats/:chat_id/messages"
export const MESSAGE_ROUTE = "/users/:user_id/chats/:chat_id/messages/:message_id"

export const POSTS_ROUTE = "/posts"
export const POST_ROUTE = "/posts/:post_id"
export const COMMENTS_ROUTE = "/posts/:post_id/comments"
export const COMMENT_ROUTE = "/posts/:post_id/comments/:comment_id"
export const POST_LIKES_ROUTE = "/posts/:post_id/likes"
export const POST_LIKE_ROUTE = "/posts/:post_id/likes/:like_id"

export const GIFTS_3D_ROUTE = "/gifts_3d"
export const GIFT_3D_ROUTE = "/gifts_3d/:gift_id"

export const FARM_GIFTS_ROUTE = "/farm_gifts"
export const FARM_GIFT_ROUTE = "/farm_gifts/:gift_id"

export const ORDERS_ROUTE = "/orders"
export const ORDER_ROUTE = "/orders/:order_id"

export const REVIEWS_ROUTE = "/reviews"
export const REVIEW_ROUTE = "/reviews/:review_id"
export const REVIEW_LIKES_ROUTE = "/reviews/:review_id/likes"
export const REVIEW_LIKE_ROUTE = "/reviews/:review_id/likes/:like_id"
export const REVIEW_DISLIKES_ROUTE = "/reviews/:review_id/dislikes"
export const REVIEW_DISLIKE_ROUTE = "/reviews/:review_id/dislikes/:dislike_id"

export const FARMS_ROUTE = "/farms"
export const FARM_ROUTE = "/farms/:farm_id"

export const GARDENS_ROUTE = "/gardens"
export const GARDEN_ROUTE = "/gardens/:garden_id"
export const GARDEN_CELLS_ROUTE = "/garden_cell"
export const GARDEN_CELL_ROUTE = "/garden_cell/:cell_id"

export const SEEDS_ROUTE = "/seeds"
export const SEED_ROUTE = "/seeds/:seed_id"

export const SEED_LEVELS_ROUTE = "seeds/:seed_id/levels"
export const SEED_LEVEL_ROUTE = "seeds/:seed_id/levels/:level_id"
export const SEED_INFORMATION_ROUTE = "seeds/:seed_id/information/:info_id"
export const PLANTED_SEED_ROUTE = "seeds/planted/:seed_id"

export const LOTS_ROUTE = "/lots"
export const LOT_ROUTE = "/lots/:lot_id"
export const LOT_DESCRIPTION_ROUTE = "/lots_description/:lot_desc_id"
export const LOT_CATEGORIES_ROUTE = "/lots/categories"
export const LOT_CATEGORY_ROUTE = "/lots/categories/:cat_id"

export const MODELS_ROUTE = "/models"
export const MODEL_ROUTE = "/models/:model_id"
export const PRINTERS_ROUTE = "/printers"
export const PRINTER_ROUTE = "/printers/:printer_id"
export const LEVELS_3D_ROUTE = "/levels_3d"
export const LEVEL_3D_ROUTE = "/levels_3d/:level_id"

export const PICTURES_ROUTE = "/pictures";
export const PICTURE_ROUTE = "/pictures/:picture_id";

export const listRoutes = {
    [USERS_ROUTE]: {
        relInfo: models.getUserDB,
        getData: apiConn.getUsers,
        generateURL: (params) => generatePath(USER_ROUTE, {...params, user_id: params.id}),
        title: "пользователя",
        create: true,
        exportData: true,
        mailing: true,
        block: true,
        searchPlaceholder: "Искать по ID, Имя или Никнейм",
        filterInputs: [
            {
                label: "По типу подписки",
                type: "radio",
                name: "subscryption_type",
                radio_inputs: [
                    {
                        label: "Стандарт",
                        value: "standart",
                    },
                    {
                        label: "Премиум",
                        value: "premium",
                    },
                ],
            },
        ],
    },
    [ADMINS_ROUTE]: {
        relInfo: models.getAdminDB,
        getData: apiConn.getAdmins,
        title: "админа",
        create: true,
        block: true,
    },
    [CHATS_ROUTE]: {
        relInfo: models.getChatDB,
        getData: apiConn.getChats,
        generateURL: (params) => generatePath(CHAT_ROUTE, {...params, chat_id: params.id}),
        title: "чат",
    }, 
    [MESSAGES_ROUTE]: {
        relInfo: models.getMessageDB,
        getData: apiConn.getChatMessages,
        generateURL: (params) => generatePath(MESSAGE_ROUTE, {...params, message_id: params.id}),
        title: "сообщение",
    },
    [POSTS_ROUTE]: {
        relInfo: models.getPostDB,
        getData: apiConn.getPosts,
        title: "пост",
        generateURL: (params) => generatePath(POST_ROUTE, {...params, post_id: params.id}),
    }, 
    [COMMENTS_ROUTE]: {
        relInfo: models.getPostCommentsDB,
        getData: apiConn.getPostComments,
        generateURL: (params) => generatePath(COMMENT_ROUTE, {...params, comment_id: params.id}),
        title: "комментарий",
    }, 
    [POST_LIKES_ROUTE]: {
        relInfo: models.getLikeToPostDB,
        getData: apiConn.getPostLikes,
        generateURL: (params) => generatePath(POST_LIKE_ROUTE, {...params, like_id: params.id}),
        title: "лайк",
    }, 
    [GIFTS_3D_ROUTE]: {
        relInfo: models.getGiftDB,
        getData: apiConn.get3DGifts,
        generateURL: (params) => generatePath(GIFT_3D_ROUTE, {...params, gift_id: params.id}),
        title: "подарок 3D",
    }, 
    [FARM_GIFTS_ROUTE]: {
        relInfo: models.getGiftDB,
        getData: apiConn.getFarmGifts,
        generateURL: (params) => generatePath(FARM_GIFT_ROUTE, {...params, gift_id: params.id}),
        title: "подарок Ферма",
    }, 
    [ORDERS_ROUTE]: {
        relInfo: models.getOrderDB,
        getData: apiConn.getOrders,
        generateURL: (params) => generatePath(ORDER_ROUTE, {...params, order_id: params.id}),
        title: "заказ",
    }, 
    [REVIEWS_ROUTE]: {
        relInfo: models.getReviewsDB,
        getData: apiConn.getReviews,
        generateURL: (params) => generatePath(REVIEW_ROUTE, {...params, review_id: params.id}),
        title: "отзыв",
    }, 
    [REVIEW_LIKES_ROUTE]: {
        relInfo: models.getLikeToReview,
        getData: apiConn.getReviewLikes,
        generateURL: (params) => generatePath(REVIEW_LIKE_ROUTE, {...params, like_id: params.id}),
        title: "лайк к отзыву",
    }, 
    [REVIEW_DISLIKES_ROUTE]: {
        relInfo: models.getDislikeToReview,
        getData: apiConn.getReviewDislikes,
        generateURL: (params) => generatePath(REVIEW_DISLIKE_ROUTE, {...params, dislike_id: params.id}),
        title: "дизлайк к отзыву",
    }, 
    [FARMS_ROUTE]: {
        relInfo: models.getFarmDB,
        getData: apiConn.getFarms,
        generateURL: (params) => generatePath(FARM_ROUTE, {...params, farm_id: params.id}),
        title: "ферму",
    },    
    [SEEDS_ROUTE]: {
        relInfo: models.getSeedDB,
        getData: apiConn.getSeeds,
        generateURL: (params) => generatePath(SEED_ROUTE, {...params, seed_id: params.id}),
        title: "семя",
    }, 
    [SEED_LEVELS_ROUTE]: {
        relInfo: models.getSeedLevelDB,
        getData: apiConn.getSeedLevels,
        generateURL: (params) => generatePath(SEED_LEVEL_ROUTE, {...params, level_id: params.id}),
        title: "уровень семени"
    },
    [LOTS_ROUTE]: {
        relInfo: models.getLotsDB,
        getData: apiConn.getLots,
        generateURL: (params) => generatePath(LOT_ROUTE, {...params, lot_id: params.id}),
        title: "лот",
    }, 
    [LOT_CATEGORIES_ROUTE]: {
        relInfo: models.getCategoryDB,
        getData: apiConn.getLotCategories,
        generateURL: (params) => generatePath(LOT_CATEGORY_ROUTE, {...params, cat_id: params.id}),
        title: "категорию лота",
    },
    [MODELS_ROUTE]: {
        relInfo: models.getModelDB,
        getData: apiConn.getModels,
        generateURL: (params) => generatePath(MODEL_ROUTE, {...params, model_id: params.id}),
        title: "3D модель",
    }, 
    [PRINTERS_ROUTE]: {
        relInfo: models.getPrinterDB,
        getData: apiConn.getPrinters,
        generateURL: (params) => generatePath(PRINTER_ROUTE, {...params, printer_id: params.id}),
        title: "принтер",
    }, 
    [LEVELS_3D_ROUTE]: {
        relInfo: models.getLevels3DDB,
        getData: apiConn.get3DLevels,
        generateURL: (params) => generatePath(LEVEL_3D_ROUTE, {...params, level_id: params.id}),
        title: "уровнень 3D",
    }
};

export const detailRoutes = {
    [USER_ROUTE]: {
        getObj: apiConn.getUser,
        relInfo: models.getUserDB,
        verbose_name: "пользователе",
        param: "user_id",
    },
    [CHAT_ROUTE]: {
        getObj: apiConn.getChat,
        relInfo: models.getChatDB,
        verbose_name: "чате",
        param: "chat_id",
    },
    [MESSAGE_ROUTE]: {
        getObj: apiConn.getMessage,
        relInfo: models.getMessageDB,
        verbose_name: "сообщении",
        param: "message_id",
    },
    [POST_ROUTE]: {
        getObj: apiConn.getPost,
        relInfo: models.getPostDB,
        verbose_name: "посте",
        param: "post_id",
    },
    [COMMENT_ROUTE]: {
        getObj: apiConn.getComment,
        relInfo: models.getPostCommentsDB,
        verbose_name: "комментарии",
        param: "comment_id",
    },
    [POST_LIKE_ROUTE]: {
        getObj: apiConn.getPostLike,
        relInfo: models.getLikeToPostDB,
        verbose_name: "лайке к посту",
        param: "like_id",
    },
    [GIFT_3D_ROUTE]: {
        getObj: apiConn.getGift,
        relInfo: models.getGiftDB,
        verbose_name: "подарке 3D",
        param: "gift_id",
    },
    [FARM_GIFT_ROUTE]: {
        getObj: apiConn.getFarm,
        relInfo: models.getGiftDB,
        verbose_name: "подарке Ферма",
        param: "gift_id",
    },
    [ORDER_ROUTE]: {
        getObj: apiConn.getOrder,
        relInfo: models.getOrderDB,
        verbose_name: "заказе",
        param: "order_id",
    },
    [REVIEW_ROUTE]: {
        getObj: apiConn.getReview,
        relInfo: models.getReviewsDB,
        verbose_name: "отзыве",
        param: "review_id",
    },
    [REVIEW_LIKE_ROUTE]: {
        getObj: apiConn.getLikeToReview,
        relInfo: models.getLikeToReview,
        verbose_name: "лайке к отзыву",
        param: "like_id",
    },
    [REVIEW_DISLIKE_ROUTE]: {
        getObj: apiConn.getDislikeToReview,
        relInfo: models.getDislikeToReview,
        verbose_name: "дизлайке к отзыву",
        param: "dislike_id",
    },
    [FARM_ROUTE]: {
        getObj: apiConn.getFarm,
        relInfo: models.getFarmDB,
        verbose_name: "ферме",
        param: "farm_id",
    },
    [GARDEN_ROUTE]: {
        getObj: apiConn.getGarden,
        relInfo: models.getGardenDB,
        verbose_name: "саде",
        param: "garden_id",
    },
    [GARDEN_CELL_ROUTE]: {
        getObj: apiConn.getGardenCell,
        relInfo: models.getGardenCellDB,
        verbose_name: "ячейке сада",
        param: "cell_id",
    },
    [SEED_ROUTE]: {
        getObj: apiConn.getSeed,
        relInfo: models.getSeedDB,
        verbose_name: "семени",
        param: "seed_id",
    },
    [SEED_LEVEL_ROUTE]: {
        getObj: apiConn.getSeed,
        relInfo: models.getSeedLevelDB,
        verbose_name: "уровне семени",
        param: "level_id",
    },
    [SEED_INFORMATION_ROUTE]: {
        getObj: apiConn.getSeedInformation,
        relInfo: models.getSeedInformationDB,
        verbose_name: "инфорамации о семени",
        param: "info_id",
    },
    [PLANTED_SEED_ROUTE]: {
        getObj: apiConn.getPlantedSeed,
        relInfo: models.getPlantedSeedDB,
        verbose_name: "посаженной семени",
        param: "seed_id",
    },
    [LOT_ROUTE]: {
        getObj: apiConn.getLot,
        relInfo: models.getLotsDB,
        verbose_name: "лоте",
        param: "lot_id",
    },
    [LOT_DESCRIPTION_ROUTE]: {
        getObj: apiConn.getLotDescription,
        relInfo: models.getLotDescriptionDB,
        verbose_name: "описании лота",
        param: "lot_desc_id",
    },
    [LOT_CATEGORY_ROUTE]: {
        getObj: apiConn.getLotCategory,
        relInfo: models.getCategoryDB,
        verbose_name: "категории лота",
        param: "cat_id",
    },
    [MODEL_ROUTE]: {
        getObj: apiConn.getModel,
        relInfo: models.getModelDB,
        verbose_name: "модели",
        param: "model_id",
    },
    [PRINTER_ROUTE]: {
        getObj: apiConn.getPrinter,
        relInfo: models.getPrinterDB,
        verbose_name: "принтере",
        param: "printer_id",
    },
    [LEVEL_3D_ROUTE]: {
        getObj: apiConn.getLevel3D,
        relInfo: models.getLevels3DDB,
        verbose_name: "уровне 3D",
        param: "level_id",
    },
};