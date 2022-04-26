const fruits = [
    {
        ref: "fruit_1",
        category: 0,
        name: "Citrons",
        price: 1.99,
        unit: "pièce",
        image: "citron.png"
    },
    {
        ref: "fruit_2",
        category: 0,
        name: "Citrons vert",
        price: 1.99,
        unit: "pièce",
        image: "lime.png"
    },
    {
        ref: "fruit_3",
        category: 0,
        name: "Fraises",
        price: 2.99,
        unit: "kg",
        image: "fraise.png"
    },
    {
        ref: "fruit_4",
        category: 0,
        name: "Noix de coco",
        price: 3.99,
        unit: "pièce",
        image: "coconut.png"
    },
    {
        ref: "fruit_5",
        category: 0,
        name: "Clémentine",
        price: 3.99,
        unit: "kg",
        image: "clementine.png"
    },
    {
        ref: "fruit_6",
        category: 0,
        name: "Figues",
        price: 5.99,
        unit: "kg",
        image: "figues.png"
    },
    {
        ref: "fruit_7",
        category: 0,
        name: "Raisins",
        price: 4.59,
        unit: "kg",
        image: "grapes.png"
    },
    {
        ref: "fruit_8",
        category: 0,
        name: "Kiwi",
        price: 4.99,
        unit: "kg",
        image: "kiwi.png"
    },
    {
        ref: "fruit_9",
        category: 0,
        name: "Poires",
        price: 3.49,
        unit: "kg",
        image: "poires.png"
    }
];

const legumes = [
    {
        ref: "legumes_1",
        category: 1,
        name: "Oignons",
        price: 0.99,
        unit: "kg",
        image: "oignons.png",
    },
    {
        ref: "legumes_2",
        category: 1,
        name: "Poivrons",
        price: 2.99,
        unit: "kg",
        image: "poivrons.png",
    },
    {
        ref: "legumes_3",
        category: 1,
        name: "Radis",
        price: 3.99,
        unit: "kg",
        image: "radis.png",
    },
    {
        ref: "legumes_4",
        category: 1,
        name: "Tomato",
        price: 3.99,
        unit: "kg",
        image: "tomato.png",
    },
    {
        ref: "legumes_5",
        category: 1,
        name: "Brocolis",
        price: 3.99,
        unit: "kg",
        image: "brocolis.png",
    },
    {
        ref: "legumes_6",
        category: 1,
        name: "Aubergine",
        price: 3.99,
        unit: "kg",
        image: "aubergine.png",
    },
    {
        ref: "legumes_7",
        category: 1,
        name: "Carottes",
        price: 2.99,
        unit: "kg",
        image: "carot.png",
    },
    {
        ref: "legumes_8",
        category: 1,
        name: "Choux",
        price: 1.99,
        unit: "kg",
        image: "chou.png",
    }
];

const fresh = [
    {
        ref: "fresh_1",
        category: 2,
        name: "Milk",
        price: 2.99,
        unit: "pièce",
        image: "milk.png",
    },
    {
        ref: "fresh_2",
        category: 2,
        name: "Beurre à tartiner",
        price: 1.99,
        unit: "pièce",
        image: "beurre.png",
    },
    {
        ref: "fresh_3",
        category: 2,
        name: "Oeufs",
        price: 3.99,
        unit: "pièce",
        image: "oeuf.png",
    },
    {
        ref: "fresh_4",
        category: 2,
        name: "Yaourts Nature",
        price: 10.19,
        unit: "pièce",
        image: "yaourts_fruits.png",
    }
];

const epicerie = [
    {
        ref: "epicerie_1",
        category: 3,
        name: "Thon",
        price: 2.99,
        unit: "pièce",
        image: "thon.png",
    },
    {
        ref: "epicerie_2",
        category: 3,
        name: "Sardines",
        price: 1.99,
        unit: "pièce",
        image: "sardines.png",
    },
    {
        ref: "epicerie_3",
        category: 3,
        name: "Cookies",
        price: 3.99,
        unit: "pièce",
        image: "cookies.png",
    },
    {
        ref: "epicerie_4",
        category: 3,
        name: "Biscottes",
        price: 5.99,
        unit: "pièce",
        image: "biscottes.png",
    },
    {
        ref: "epicerie_5",
        category: 3,
        name: "Thé",
        price: 3.59,
        unit: "pièce",
        image: "thé.png",
    },
    {
        ref: "epicerie_6",
        category: 3,
        name: "Soupes",
        price: 3.59,
        unit: "pièce",
        image: "soupes.png",
    },
    {
        ref: "epicerie_7",
        category: 3,
        name: "Pâtes",
        price: 3.59,
        unit: "pièce",
        image: "pates.png",
    }
];

const boissons = [
    {
        ref: "boissons_1",
        category: 4,
        name: "Vin Rouge",
        price: 12.99,
        unit: "pièce",
        image: "bordeaux.png",
    },
    {
        ref: "boissons_2",
        category: 4,
        name: "Vin blanc",
        price: 11.99,
        unit: "pièce",
        image: "white_wine.png",
    },
    {
        ref: "boissons_3",
        category: 4,
        name: "Riesling",
        price: 25.99,
        unit: "pièce",
        image: "riesling.png",
    },
    {
        ref: "boissons_4",
        category: 4,
        name: "Coca",
        price: 2.49,
        unit: "pièce",
        image: "coke.png",
    },
    {
        ref: "boissons_5",
        category: 4,
        name: "Sprite",
        price: 1.49,
        unit: "pièce",
        image: "sprite.png",
    },
    {
        ref: "boissons_6",
        category: 4,
        name: "Finley",
        price: 1.49,
        unit: "pièce",
        image: "finley.png",
    },
    {
        ref: "boissons_7",
        category: 4,
        name: "Nestea",
        price: 1.19,
        unit: "pièce",
        image: "nestea.png",
    },
    {
        ref: "boissons_8",
        category: 4,
        name: "Sprite zero",
        price: 1.49,
        unit: "pièce",
        image: "sprite_zero.png",
    }
];

export const list = [fruits, legumes, fresh, epicerie, boissons];