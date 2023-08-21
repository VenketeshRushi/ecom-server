const express = require("express");
const router = express.Router();

const handleErrors = require("../middleware/handleErrors");
const authorization = require("../../module_auth/middleware/authorization");
const productController = require("../controllers/ProductController");

// HANDLING ERRORS
router.use(handleErrors);

// GET ALL PRODUCTS
router.get("/getallproducts", productController.getAllProducts);

// GET SPECIFIC CATEGORY PRODUCTS
router.get("/getfourproducts", productController.getProductsByVerity);

// GET SINGLE PRODUCTS
router.get("/getsingleproduct/:id", productController.getSingleProduct);

//ADD TO CART
router.post("/add/:id", productController.addToFavorite);

//ADD TO FAVOURITE
router.post("/add/favourite", authorization, productController.addToFavorite);

//GET TO FAVOURITE
router.get("/get/favourite", authorization, productController.getAllFavorites);

//DELETE TO FAVOURITE
router.delete(
  "/delete/favourite/:id",
  authorization,
  productController.deleteFavorite
);

module.exports = router;
{
  /*
[
    {
        "id": 2,
        "title": "Nike Jr. Mercurial Dream",
        "gender": "Kids",
        "description": "Younger Kids' Shoes",
        "category": "Shoes",
        "price": 4495,
        "size": [
            "Medium",
            "Large"
        ],
        "color": "Green",
        "rating": 4.9,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7f137e2f-ba32-4c48-ad58-47420103c843/jr-mercurial-dream-speed-superfly-8-club-mg-younger-and-older-multi-ground-football-boot-J8N1d8.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1c654909-74be-4418-945c-9ce9d8b73791/jr-mercurial-dream-speed-superfly-8-club-mg-younger-and-older-multi-ground-football-boot-J8N1d8.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e31933de-0e12-4285-a2a5-bfd9bc371fb5/jr-mercurial-dream-speed-superfly-8-club-mg-younger-and-older-multi-ground-football-boot-J8N1d8.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b0ad80fc-0c2c-462e-a2e6-22dba2273d88/jr-mercurial-dream-speed-superfly-8-club-mg-younger-and-older-multi-ground-football-boot-J8N1d8.png"
        ]
    },
    {
        "id": 3,
        "title": "Nike Sportswear Swoosh",
        "gender": "Women",
        "description": "Women's Woven High-Rise Trousers",
        "category": "Cloths",
        "price": 4695,
        "size": [
            "Medium",
            "Large"
        ],
        "color": "White",
        "rating": 4.2,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/627b0b6d-3695-46f6-bfb5-3caa3178d6b8/sportswear-swoosh-woven-high-rise-trousers-1nFxKt.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7517aa60-f758-47d9-9239-c129f747b36e/sportswear-swoosh-woven-high-rise-trousers-1nFxKt.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/02cc575b-cbb0-4253-9bde-eb442166dcf2/sportswear-swoosh-woven-high-rise-trousers-1nFxKt.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cc890250-7a26-4bcd-9942-7205acdb1910/sportswear-swoosh-woven-high-rise-trousers-1nFxKt.png"
        ]
    },
    {
        "id": 4,
        "title": "Nike Pro Dri-FIT",
        "gender": "Men",
        "description": "Men's Short-Sleeve Top",
        "category": "Cloths",
        "price": 1999,
        "size": [
            "Medium",
            "Large"
        ],
        "color": "Green",
        "rating": 4.3,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/78931a42-171b-4a32-b9bb-e990d0ba708a/pro-dri-fit-short-sleeve-top-xrfWkz.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ed33dc0a-d111-428d-9026-eb7de80f3ac9/pro-dri-fit-short-sleeve-top-xrfWkz.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d6016705-e7ba-4449-8789-43a494a6ea8f/pro-dri-fit-short-sleeve-top-xrfWkz.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/70380bf4-190c-49ed-8399-19eeb738db9d/pro-dri-fit-short-sleeve-top-xrfWkz.png"
        ]
    },
    {
        "id": 5,
        "title": "NikeCourt Legacy",
        "gender": "Women",
        "description": "Women's Slip-On",
        "category": "Shoes",
        "price": 4495,
        "size": [
            "Small"
        ],
        "color": "Black",
        "rating": 4.9,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/15756e4c-e029-4d6f-95b5-445853d6ce2a/nikecourt-legacy-slip-on-wv7DQ8.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d0ea8291-6fec-4b7f-b4e2-fcdd177090af/nikecourt-legacy-slip-on-wv7DQ8.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d15a87aa-eb72-4167-955a-bbf0db0e9aec/nikecourt-legacy-slip-on-wv7DQ8.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f46306e3-7747-4b7e-9145-d99b4749d821/nikecourt-legacy-slip-on-wv7DQ8.png"
        ]
    },
    {
        "id": 6,
        "title": "Nike SB Zoom Blazer Mid Premium",
        "gender": "Women",
        "description": "Skate Shoe",
        "category": "Shoes",
        "price": 7837,
        "size": [
            "Small",
            "Large"
        ],
        "color": "Red",
        "rating": 4.7,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b2a5de1d-d18f-46d3-86c6-0515bc30e91a/sb-zoom-blazer-mid-skate-shoe-RdNrlK.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/71d2e6f7-aaaa-4509-b8be-223500693ffe/sb-zoom-blazer-mid-skate-shoe-RdNrlK.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0095b430-34be-4540-8f5d-cfee6adc39b6/sb-zoom-blazer-mid-skate-shoe-RdNrlK.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ae905c0f-cb5c-426d-816f-fd4619a2eb44/sb-zoom-blazer-mid-skate-shoe-RdNrlK.png"
        ]
    },
    {
        "id": 7,
        "title": "Nike Air Force 1 '07",
        "gender": "Men",
        "description": "Men's Shoes",
        "category": "Shoes",
        "price": 7450,
        "size": [
            "Small",
            "Large"
        ],
        "color": "White",
        "rating": 4.1,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoe-WrLlWX.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3cc96f43-47b6-43cb-951d-d8f73bb2f912/air-force-1-07-shoe-WrLlWX.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/00375837-849f-4f17-ba24-d201d27be49b/air-force-1-07-shoe-WrLlWX.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/120a31b0-efa7-41c7-9a84-87b1e56ab9c3/air-force-1-07-shoe-WrLlWX.png"
        ]
    },
    {
        "id": 8,
        "title": "Nike Dunk High Retro SE",
        "gender": "Men",
        "description": "Men's Shoes",
        "category": "Shoes",
        "price": 10999,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Blue",
        "rating": 4.6,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2a617295-4b1a-46e1-91e2-6963fd252c59/dunk-high-retro-se-shoes-tXRLdK.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1af80254-b653-42f8-8702-61b39feca583/dunk-high-retro-se-shoes-tXRLdK.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9142d4aa-ef07-40b9-bb64-0a057cf8a1a3/dunk-high-retro-se-shoes-tXRLdK.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/433f980c-d56b-43d2-8475-fa917e4f2a7b/dunk-high-retro-se-shoes-tXRLdK.png"
        ]
    },
    {
        "id": 9,
        "title": "Nike Air Zoom SuperRep 3",
        "gender": "Men",
        "description": "Nike Air Zoom SuperRep 3",
        "category": "Shoes",
        "price": 7590,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Green",
        "rating": 3.7,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/243e7532-d741-4dce-9ab5-b08c492939ad/air-zoom-superrep-3-hiit-class-shoes-dSzQgH.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/79c057ab-4aa7-4d4e-9dcb-7a61d008c064/air-zoom-superrep-3-hiit-class-shoes-dSzQgH.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1cf80232-e7b6-464c-92e3-150e138d2860/air-zoom-superrep-3-hiit-class-shoes-dSzQgH.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bfe7c203-6c7b-484a-b2d0-33e313ea51b3/air-zoom-superrep-3-hiit-class-shoes-dSzQgH.png"
        ]
    },
    {
        "id": 10,
        "title": "Nike Dri-FIT One",
        "gender": "Women",
        "description": "Women's Mid-Rise Leggings",
        "category": "Cloths",
        "price": 2599,
        "size": [
            "Large"
        ],
        "color": "Green",
        "rating": 2.9,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4dd9eaf8-2cc7-447c-bd92-6b458343fb4b/dri-fit-one-mid-rise-leggings-TCMcDf.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/eb5883cf-6773-4b9d-98d9-a8c1bec2f940/dri-fit-one-mid-rise-leggings-TCMcDf.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/52327ee1-741f-4740-b11a-70ee2675f1a0/dri-fit-one-mid-rise-leggings-TCMcDf.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6b709790-b1dc-4362-bdd8-e7f7a01d40b3/dri-fit-one-mid-rise-leggings-TCMcDf.png"
        ]
    },
    {
        "id": 11,
        "title": "Nike Pro Dri-FIT",
        "gender": "Kids",
        "description": "Boys Training Top",
        "category": "Cloths",
        "price": 1695,
        "size": [
            "Small",
            "Large"
        ],
        "color": "Blue",
        "rating": 4.1,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d08a3fad-11f5-4031-af20-fb08be3dff17/pro-dri-fit-older-short-sleeve-training-top-S71vqC.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5a7f9c48-5261-42cc-b02a-9fc4d6e3d169/pro-dri-fit-older-short-sleeve-training-top-S71vqC.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7536d0a-c7f6-48fe-8b21-129a35776add/pro-dri-fit-older-short-sleeve-training-top-S71vqC.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c9dfae0a-53b6-4cd8-9f0f-cbbcb1dae2d9/pro-dri-fit-older-short-sleeve-training-top-S71vqC.png"
        ]
    },
    {
        "id": 12,
        "title": "Nike ESC",
        "gender": "Men",
        "description": "Men's Woven Shirt",
        "category": "Cloths",
        "price": 4999,
        "size": [
            "Small",
            "Large"
        ],
        "color": "White",
        "rating": 3.2,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/931b43ac-fd2e-451b-a2bf-138a7f5cda52/esc-woven-shirt-X106Bb.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a2064801-e814-41c7-94bc-f13ce30cdd79/esc-woven-shirt-X106Bb.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/76777a38-8e51-4417-8080-48ffd29136aa/esc-woven-shirt-X106Bb.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6b405d30-7958-4e8b-9fc6-97d5a0734e16/esc-woven-shirt-X106Bb.png"
        ]
    },
    {
        "id": 13,
        "title": "Nike ZoomX Vaporfly Next% 2",
        "gender": "Men",
        "description": "Men's Road Racing Shoes",
        "category": "Shoes",
        "price": 19695,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Black",
        "rating": 4.8,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1622d34a-b828-4483-a974-74ca66bfb8b5/zoomx-vaporfly-next-2-road-racing-shoes-D4ntS0.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0248af3c-9a7a-409d-bfc5-d963280d4a1b/zoomx-vaporfly-next-2-road-racing-shoes-D4ntS0.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ca0ada64-ee55-41d4-b68d-bba8c577d8f8/zoomx-vaporfly-next-2-road-racing-shoes-D4ntS0.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5cfa0cf1-dbf5-48a0-9ede-bcc60fe5daec/zoomx-vaporfly-next-2-road-racing-shoes-D4ntS0.png"
        ]
    },
    {
        "id": 14,
        "title": "Nike Dri-FIT Academy",
        "gender": "Kids",
        "description": "Girls' Football Top",
        "category": "Cloths",
        "price": 895,
        "size": [
            "Small",
            "Medium"
        ],
        "color": "Red",
        "rating": 4.1,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f9efd38c-29da-4ab7-a728-280941cda75c/dri-fit-academy-older-short-sleeve-football-top-JFSSPT.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ed75826b-5089-4a3a-acf7-04ae5aebb515/dri-fit-academy-older-short-sleeve-football-top-JFSSPT.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f8f45740-b049-4112-b366-37febddf9ca1/dri-fit-academy-older-short-sleeve-football-top-JFSSPT.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a7a6e285-9e6e-4f59-94dc-01d9b95e99f6/dri-fit-academy-older-short-sleeve-football-top-JFSSPT.png"
        ]
    },
    {
        "id": 15,
        "title": "Nike Renew Serenity Run",
        "gender": "Women",
        "description": "Women's Road Running Shoes",
        "category": "Shoes",
        "price": 5695,
        "size": [
            "Medium",
            "Large"
        ],
        "color": "Red",
        "rating": 4.3,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/50d176f5-9083-4489-b1c2-4dcbf23ad531/renew-serenity-run-road-running-shoes-BVzhTq.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0ff2de46-de9c-4a6a-aeaf-00a92048fe66/renew-serenity-run-road-running-shoes-BVzhTq.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a7f4123c-701c-4df1-a865-e8a8a3b1a725/renew-serenity-run-road-running-shoes-BVzhTq.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/012ebe13-0000-4af5-877e-fb9a6f93705d/renew-serenity-run-road-running-shoes-BVzhTq.png"
        ]
    },
    {
        "id": 16,
        "title": "Nike Air Force 1 '07 SE",
        "gender": "Kids",
        "description": "Girls' T-Shirt",
        "category": "Cloths",
        "price": 995,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "White",
        "rating": 4.2,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bed097c0-92e0-45d1-86b0-4cf5ef19e972/sportswear-older-t-shirt-52lrmn.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e446876e-8473-437b-8b74-6d9cdb8d9d81/sportswear-older-t-shirt-52lrmn.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1b3d3093-7763-482b-8a68-8c584926c594/sportswear-older-t-shirt-52lrmn.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f597dade-4ae5-4f4d-a2b2-12e206d6ec3b/sportswear-older-t-shirt-52lrmn.png"
        ]
    },
    {
        "id": 17,
        "title": "Nike Dri-FIT Victory",
        "gender": "Kids",
        "description": "Boys' Golf Polo",
        "category": "Cloths",
        "price": 1495,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Green",
        "rating": 4.8,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b12c9d5c-3d0c-439c-9939-09ad78f6373e/dri-fit-victory-older-golf-polo-FbWd8B.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a6d099f2-67e2-40a6-90b0-3e4fcf40cd38/dri-fit-victory-older-golf-polo-FbWd8B.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bec1b7fa-cbf7-4333-b06d-c23ea7109df2/dri-fit-victory-older-golf-polo-FbWd8B.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8107c59c-a36e-4a7b-9ed4-94ddc8d9dcb1/dri-fit-victory-older-golf-polo-FbWd8B.png"
        ]
    },
    {
        "id": 18,
        "title": "Nike Sportswear",
        "gender": "Kids",
        "description": "Boys Seasonal Printed Top",
        "category": "Cloths",
        "price": 2317,
        "size": [
            "Small",
            "Medium"
        ],
        "color": "White",
        "rating": 4.3,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8a2eb0df-0a6a-4fef-8e69-3e4a5858f3b3/sportswear-older-seasonal-printed-top-BWV1Jg.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/990c1df6-b69a-4bd5-bdcf-cc359508814b/sportswear-older-seasonal-printed-top-BWV1Jg.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5caf0fe7-8a6c-43c4-aa46-8a18a5cb39d9/sportswear-older-seasonal-printed-top-BWV1Jg.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/60ee3adf-9cae-48e5-9777-2e69195010c3/sportswear-older-seasonal-printed-top-BWV1Jg.png"
        ]
    },
    {
        "id": 19,
        "title": "Nike Air Max Dawn",
        "gender": "Men",
        "description": "Men's Shoes",
        "category": "Shoes",
        "price": 6999,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "White",
        "rating": 3.9,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7de8cc00-5e27-46ca-8bfc-3a92b0e94d58/air-max-dawn-shoe-VbDN84.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5c09b0c9-24c1-47a7-b7c6-2c1014d75e20/air-max-dawn-shoe-VbDN84.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f6d2f879-e7c3-4117-81ca-65131f654a49/air-max-dawn-shoe-VbDN84.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fc06b770-e5f6-444c-9be4-ced0551f21d7/air-max-dawn-shoe-VbDN84.png"
        ]
    },
    {
        "id": 20,
        "title": "Jordan Essentials",
        "gender": "Men",
        "description": "Men's T-Shirt",
        "category": "Cloths",
        "price": 2599,
        "size": [
            "Medium"
        ],
        "color": "White",
        "rating": 4.3,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8f2fa3a2-651d-475b-a94b-4aa8301effbb/jordan-essentials-t-shirt-JQXCdV.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bde017b7-f7ce-4cd9-9a8e-fc480959ea09/jordan-essentials-t-shirt-JQXCdV.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4368b18d-e3a1-4946-a117-ff3b7c1e7c26/jordan-essentials-t-shirt-JQXCdV.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7ac2aaa6-c2e9-489e-9ed0-5ea0be6f75ee/jordan-essentials-t-shirt-JQXCdV.png"
        ]
    },
    {
        "id": 21,
        "title": "Nike Dri-FIT One",
        "gender": "Women",
        "description": "Women's Mid-Rise Leggings",
        "category": "Cloths",
        "price": 3695,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Red",
        "rating": 4.6,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d3ceebd4-4985-4bfa-a679-9ac419c432ff/dri-fit-one-mid-rise-shine-leggings-PDfWDT.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/341cebfd-e450-4c69-bbb7-f73d622a4b02/dri-fit-one-mid-rise-shine-leggings-PDfWDT.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ebe28537-4ea2-4a80-ae6e-ed43115fc728/dri-fit-one-mid-rise-shine-leggings-PDfWDT.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0fa83105-1a42-401c-8d3f-30bf264377e6/dri-fit-one-mid-rise-shine-leggings-PDfWDT.png"
        ]
    },
    {
        "id": 22,
        "title": "Nike Air Dri-FIT",
        "gender": "Women",
        "description": "Women's Running Tank",
        "category": "Cloths",
        "price": 2495,
        "size": [
            "Medium",
            "Large"
        ],
        "color": "Red",
        "rating": 4.6,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4f035c6d-002f-481a-80ea-23a049ce3f8d/air-dri-fit-running-tank-LSxSqB.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dd098dcc-8db8-4b63-a0db-8df3012d6830/air-dri-fit-running-tank-LSxSqB.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ed2c626c-0eaf-41c2-806a-604eb9f2ce11/air-dri-fit-running-tank-LSxSqB.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a7ecce11-9e99-4645-84c5-b819656db894/air-dri-fit-running-tank-LSxSqB.png"
        ]
    },
    {
        "id": 23,
        "title": "Nike SB Zoom Blazer ",
        "gender": "Women",
        "description": "Skate Shoes",
        "category": "Shoes",
        "price": 7495,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Blue",
        "rating": 4.1,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/232bdc70-052f-42ae-8ac7-c3414126ba57/sb-zoom-blazer-low-pro-gt-skate-shoes-xMq2vr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6a641828-b7d7-4a6e-a8fe-b71bab72af11/sb-zoom-blazer-low-pro-gt-skate-shoes-xMq2vr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8aadabf4-1b35-45d8-8ba5-53a3203ff232/sb-zoom-blazer-low-pro-gt-skate-shoes-xMq2vr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cdf143ef-adce-4317-8dfb-6c28ebbc3d11/sb-zoom-blazer-low-pro-gt-skate-shoes-xMq2vr.png"
        ]
    },
    {
        "id": 24,
        "title": "Nike Shorts",
        "gender": "Men",
        "description": "Men's 2-in-1 Shorts",
        "category": "Cloths",
        "price": 4199,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Black",
        "rating": 3.5,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/611fef89-d44c-4770-bf13-986db4df85ea/2-in-1-shorts-ScqnT4.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d340631b-fcde-4eb3-aef4-259c44d7c902/2-in-1-shorts-ScqnT4.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3fc6e54b-c57c-4a91-99dc-d60e7cb1fd23/2-in-1-shorts-ScqnT4.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/14d7e75a-bd38-4ed8-bb18-7520eb81dd50/2-in-1-shorts-ScqnT4.png"
        ]
    },
    {
        "id": 25,
        "title": "Nike Revolution 6",
        "gender": "Kids",
        "description": "Younger Kids' Shoes",
        "category": "Shoes",
        "price": 3495,
        "size": [
            "Small",
            "Medium"
        ],
        "color": "Blue",
        "rating": 4.5,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7e2b0969-0655-4833-89c7-9ab2561bb67c/revolution-6-younger-shoes-d8d8lG.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4373cb85-54dd-4df2-89aa-19c7afb2e31b/revolution-6-younger-shoes-d8d8lG.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ce984bde-74e0-4a34-837b-2b03b66567a4/revolution-6-younger-shoes-d8d8lG.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dbfe9de0-a26e-47f4-a282-9a7da85ad250/revolution-6-younger-shoes-d8d8lG.png"
        ]
    },
    {
        "id": 26,
        "title": "Nike ESC",
        "gender": "Men",
        "description": "Men's Worker Trousers",
        "category": "Cloths",
        "price": 7999,
        "size": [
            "Medium",
            "Large"
        ],
        "color": "Black",
        "rating": 4.1,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3d577270-ec4b-4777-959c-40a6f6b6828f/esc-worker-trousers-BlJZD3.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e2e77983-0799-4ca0-a922-f5a41a7b406a/esc-worker-trousers-BlJZD3.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8b734d47-c2ec-43d7-a226-0fbeb14aa5a1/esc-worker-trousers-BlJZD3.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/25273c0a-e5ff-4c37-8fe0-3443546d57d2/esc-worker-trousers-BlJZD3.png"
        ]
    },
    {
        "id": 27,
        "title": "Nike Dri-FIT Challenger",
        "gender": "Men",
        "description": "Men's Woven Running Trousers",
        "category": "Cloths",
        "price": 3595,
        "size": [
            "Small",
            "Medium"
        ],
        "color": "Blue",
        "rating": 3.3,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e7995547-eb31-40d7-a5f9-0c6228604e81/dri-fit-challenger-woven-running-trousers-xv3kZX.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/afa1665b-b599-436a-9649-94ecd9e77cc2/dri-fit-challenger-woven-running-trousers-xv3kZX.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1966e401-7b33-433d-815b-0d841d33243e/dri-fit-challenger-woven-running-trousers-xv3kZX.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3e01f140-85e9-40ed-a466-19ad2e825ac7/dri-fit-challenger-woven-running-trousers-xv3kZX.png"
        ]
    },
    {
        "id": 28,
        "title": "Nike Sportswear Femme",
        "gender": "Women",
        "description": "Women's Jacket",
        "category": "Cloths",
        "price": 2999,
        "size": [
            "Small",
            "Large"
        ],
        "color": "White",
        "rating": 4.6,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c495400-c00c-4d67-a3d0-65e7d42d5a71/sportswear-jacket-rr7JWZ.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d0336735-fcc5-43d4-b58f-8ee440903329/sportswear-jacket-rr7JWZ.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a5bf4f84-752a-4709-8ac9-130076cb2667/sportswear-jacket-rr7JWZ.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/15c87e78-c29c-4b95-b4e3-37c10fe2f60e/sportswear-jacket-rr7JWZ.png"
        ]
    },
    {
        "id": 29,
        "title": "Nike Force 1",
        "gender": "Kids",
        "description": "Baby & Toddler Shoes",
        "category": "Shoes",
        "price": 2995,
        "size": [
            "Small"
        ],
        "color": "White",
        "rating": 3.9,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cac2c91a-460f-42d8-9747-da96f2fe0d23/force-1-shoes-PfZNkZ.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/40097eb7-b310-4d28-ac08-20f48b572bab/force-1-shoes-PfZNkZ.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cc733a7b-3a49-4ef0-8ea4-c245fa8a63ef/force-1-shoes-PfZNkZ.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3ef0f74c-d16e-4102-8f2d-3f94dd7c1042/force-1-shoes-PfZNkZ.png"
        ]
    },
    {
        "id": 30,
        "title": "Jordan Dri-FIT Sport",
        "gender": "Men",
        "description": "Men's T-Shirt",
        "category": "Cloths",
        "price": 3859,
        "size": [
            "Large"
        ],
        "color": "Red",
        "rating": 3.9,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/29954374-a879-4f9a-a1f1-56262ed614a4/jordan-dri-fit-sport-t-shirt-n3lwwm.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fafcdc31-4c67-4b9b-9b33-4fc2a81c6d54/jordan-dri-fit-sport-t-shirt-n3lwwm.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ac05b482-3c89-49f8-8767-209973b195b0/jordan-dri-fit-sport-t-shirt-n3lwwm.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d9ffb036-c53b-48b6-b32c-1d45ac16db85/jordan-dri-fit-sport-t-shirt-n3lwwm.png"
        ]
    },
    {
        "id": 31,
        "title": "Kyrie Infinity",
        "gender": "Kids",
        "description": "Younger Kids' Shoes",
        "category": "Shoes",
        "price": 6295,
        "size": [
            "Medium",
            "Large"
        ],
        "color": "White",
        "rating": 4.7,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a418899c-bb9a-4923-8d81-5a69a24ce0f7/kyrie-infinity-younger-shoes-1TqJGG.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0e265fd7-1f06-43b7-9922-fcd23ae08b1b/kyrie-infinity-younger-shoes-1TqJGG.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/455e7e9e-aeda-4a55-b1f3-e1009d025500/kyrie-infinity-younger-shoes-1TqJGG.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a884f62d-2255-46ed-858b-842ac7d7a4a2/kyrie-infinity-younger-shoes-1TqJGG.png"
        ]
    },
    {
        "id": 32,
        "title": "Nike Air Force 1 LV8",
        "gender": "Kids",
        "description": "Younger Kids' Shoes",
        "category": "Shoes",
        "price": 6795,
        "size": [
            "Small",
            "Medium"
        ],
        "color": "Red",
        "rating": 4.9,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a68467cc-0885-43a9-a983-59b249623e56/air-force-1-lv8-older-shoes-wRzCfF.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/de5c9888-1013-47ba-bb7a-68c646175e6c/air-force-1-lv8-older-shoes-wRzCfF.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/df78323b-c69d-4355-ae8e-6267362d6ab0/air-force-1-lv8-older-shoes-wRzCfF.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/617abdf6-457f-4795-a332-af6051792ab3/air-force-1-lv8-older-shoes-wRzCfF.png"
        ]
    },
    {
        "id": 33,
        "title": "NikeLab",
        "gender": "Women",
        "description": "Women's T-Shirt",
        "category": "Cloths",
        "price": 1999,
        "size": [
            "Small",
            "Medium"
        ],
        "color": "Green",
        "rating": 3.3,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e892b701-8aa5-4dc3-95d8-af961288561e/nikelab-t-shirt-Q89CVt.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0cacecf2-03be-43b1-acc7-636b1183435d/nikelab-t-shirt-Q89CVt.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8311e9ce-05a2-48b6-a756-7a0aecf19492/nikelab-t-shirt-Q89CVt.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/81c6461e-70d9-4cc1-b1f3-857bc97d93e9/nikelab-t-shirt-Q89CVt.png"
        ]
    },
    {
        "id": 34,
        "title": "Nike Sportswear Max90",
        "gender": "Men",
        "description": "Men's T-Shirt",
        "category": "Cloths",
        "price": 3859,
        "size": [
            "Small",
            "Large"
        ],
        "color": "Blue",
        "rating": 3.1,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/511420ef-697a-49e7-9937-b6e69cffad43/sportswear-max90-t-shirt-v810Kp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/11b7f388-e48d-4602-aff3-6917341e79f8/sportswear-max90-t-shirt-v810Kp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c56e31c6-2160-4fe4-b1aa-68ac3b668e44/sportswear-max90-t-shirt-v810Kp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cd7a3c79-91d7-4303-bddb-9d4badc67303/sportswear-max90-t-shirt-v810Kp.png"
        ]
    },
    {
        "id": 35,
        "title": "Zoom Freak 3",
        "gender": "Women",
        "description": "Basketball Shoes",
        "category": "Shoes",
        "price": 10895,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Green",
        "rating": 4.4,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/26539751-d716-40e0-80f9-2edc5bb33662/zoom-freak-3-basketball-shoes-J8hcQW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f646591d-9ca9-4edf-b942-f5e845b442f9/zoom-freak-3-basketball-shoes-J8hcQW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/674d1d2f-a549-4adf-a465-6d05cde24280/zoom-freak-3-basketball-shoes-J8hcQW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8a05458b-3117-414b-9021-8c3f66cabceb/zoom-freak-3-basketball-shoes-J8hcQW.png"
        ]
    },
    {
        "id": 36,
        "title": "Nike pro T-Shirt",
        "gender": "Kids",
        "description": "Girls' T-Shirt",
        "category": "Cloths",
        "price": 1195,
        "size": [
            "Medium",
            "Large"
        ],
        "color": "Black",
        "rating": 4.4,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7072015c-ce20-4d91-8e5b-4f84348a3b3c/older-t-shirt-V5qgRM.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d4720f62-8154-4260-9a19-fc3c58c9283a/older-t-shirt-V5qgRM.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7044bd92-d331-4315-84a3-c6e180a41c8d/older-t-shirt-V5qgRM.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1e42b104-fbe0-4364-9014-402f60fef50b/older-t-shirt-V5qgRM.png"
        ]
    },
    {
        "id": 37,
        "title": "Nike Air Force 1 '07",
        "gender": "Women",
        "description": "Women's Shoes",
        "category": "Shoes",
        "price": 10695,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "White",
        "rating": 4.1,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/580431d1-f50c-463e-b015-338ae08bfaa0/air-force-1-07-shoes-ZMwtBc.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f7fcca23-19df-426f-8656-9505b17d19ff/air-force-1-07-shoes-ZMwtBc.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ec7d255e-dd87-47fa-9470-0e4baa64c941/air-force-1-07-shoes-ZMwtBc.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ce32d1ea-0026-470c-844b-8b080f3e04ae/air-force-1-07-shoes-ZMwtBc.png"
        ]
    },
    {
        "id": 38,
        "title": "Nike Air Zoom SuperRep 3",
        "gender": "Women",
        "description": "Women's Road Running Shoes",
        "category": "Shoes",
        "price": 5695,
        "size": [
            "Small",
            "Medium"
        ],
        "color": "Black",
        "rating": 4.8,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/45b7bc03-4e5a-4dff-8680-d37692d48787/air-zoom-superrep-3-hiit-class-shoes-ptglrj.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bf4fa458-70ca-433f-bc1b-929746a941ab/air-zoom-superrep-3-hiit-class-shoes-ptglrj.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/19b8c5f6-dfc6-41b0-a537-413381599501/air-zoom-superrep-3-hiit-class-shoes-ptglrj.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0e6935a5-bb9f-42d0-9a43-b7ebf46c57e9/air-zoom-superrep-3-hiit-class-shoes-ptglrj.png"
        ]
    },
    {
        "id": 39,
        "title": "Nike Air Force",
        "gender": "Kids",
        "description": "Older Kids' Shoes",
        "category": "Shoes",
        "price": 5995,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Black",
        "rating": 4.1,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/06bf8616-d3f9-4398-aba9-efd35aca4307/air-force-1-crater-next-nature-older-shoes-L22xFl.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/94de52fd-87df-4561-bac8-c1ea19b45795/air-force-1-crater-next-nature-older-shoes-L22xFl.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e180493b-58b0-4d5e-9ce9-df1449b6066d/air-force-1-crater-next-nature-older-shoes-L22xFl.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cb1ea24f-8ae3-40b7-8621-0704c9189f7c/air-force-1-crater-next-nature-older-shoes-L22xFl.png"
        ]
    },
    {
        "id": 40,
        "title": "Nike Dri-FIT Swoosh",
        "gender": "Women",
        "description": "Women's Metallic Graphic Sports Bra",
        "category": "Cloths",
        "price": 2195,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Black",
        "rating": 4.4,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/008f0322-4389-492a-a5af-f158dba4ced1/dri-fit-swoosh-support-non-padded-metallic-graphic-sports-bra-h6rFbS.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/52b583c4-e5ad-4c8f-828f-50bb43ba0f44/dri-fit-swoosh-support-non-padded-metallic-graphic-sports-bra-h6rFbS.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f8a92bca-7dc7-461c-af64-c3e5adb976ed/dri-fit-swoosh-support-non-padded-metallic-graphic-sports-bra-h6rFbS.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/61ff05b3-64b5-4891-b165-5d155370721d/dri-fit-swoosh-support-non-padded-metallic-graphic-sports-bra-h6rFbS.png"
        ]
    },
    {
        "id": 41,
        "title": "Nike Dri-FIT Standard Issue",
        "gender": "Men",
        "description": "Men's Basketball Hoodie",
        "category": "Cloths",
        "price": 6599,
        "size": [
            "Small",
            "Medium"
        ],
        "color": "Green",
        "rating": 4.6,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cc20de69-f982-4662-ad93-a709ea7443ad/dri-fit-standard-issue-basketball-hoodie-qkBG3N.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c70a3650-1102-4d92-9953-43db6fff4bdf/dri-fit-standard-issue-basketball-hoodie-qkBG3N.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/67e14ad1-4a4c-40db-afaf-7f057f002e87/dri-fit-standard-issue-basketball-hoodie-qkBG3N.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2208e6ea-23f8-4b22-a2cd-fb646f6f9e25/dri-fit-standard-issue-basketball-hoodie-qkBG3N.png"
        ]
    },
    {
        "id": 42,
        "title": "Nike Air Force 1 '07 SE",
        "gender": "Women",
        "description": "Women's Shoes",
        "category": "Shoes",
        "price": 9695,
        "size": [
            "Large"
        ],
        "color": "White",
        "rating": 4.6,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4673f6c6-cabe-452c-87d7-1be1d4156d33/air-force-1-07-se-shoes-LJGpf5.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7f8f8af8-3f7d-4743-bf9f-fa0134596029/air-force-1-07-se-shoes-LJGpf5.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/21e06d52-908c-4687-930b-c44978077c78/air-force-1-07-se-shoes-LJGpf5.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/803875dd-1ac1-4d0a-9d0a-64a959c755d2/air-force-1-07-se-shoes-LJGpf5.png"
        ]
    },
    {
        "id": 43,
        "title": "LeBron 19",
        "gender": "Men",
        "description": "Basketball Shoes",
        "category": "Shoes",
        "price": 12595,
        "size": [
            "Medium",
            "Large"
        ],
        "color": "Red",
        "rating": 4.9,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/48a90a81-63d1-4e07-af8d-c6f09f9e5f54/lebron-19-basketball-shoes-pbfCF3.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/18e39e9d-bf62-4b05-a1b3-9a4852051313/lebron-19-basketball-shoes-pbfCF3.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b0d2ee00-0ef1-4ff5-8042-52d110a34d44/lebron-19-basketball-shoes-pbfCF3.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f6af0766-4057-4dc0-ab9d-6c58c9e932c7/lebron-19-basketball-shoes-pbfCF3.png"
        ]
    },
    {
        "id": 44,
        "title": "Nike Dri-FIT Swoosh",
        "gender": "Women",
        "description": "Women's Print Sports Bra",
        "category": "Cloths",
        "price": 2295,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Black",
        "rating": 4.9,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8f70748c-7896-497a-a7d2-9cf519b847ec/dri-fit-swoosh-support-1-piece-pad-all-over-print-sports-bra-pX9Q0V.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8576a86a-e553-456f-bd6a-99e0f435e222/dri-fit-swoosh-support-1-piece-pad-all-over-print-sports-bra-pX9Q0V.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b772d85f-7a26-4545-afaa-689989f65e7e/dri-fit-swoosh-support-1-piece-pad-all-over-print-sports-bra-pX9Q0V.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/83da0ed4-445e-4ea5-8264-f43613740df9/dri-fit-swoosh-support-1-piece-pad-all-over-print-sports-bra-pX9Q0V.png"
        ]
    },
    {
        "id": 45,
        "title": "Nike Revolution 6 Next Nature",
        "gender": "Women",
        "description": "Women's Road Running Shoes",
        "category": "Shoes",
        "price": 3395,
        "size": [
            "Small",
            "Large"
        ],
        "color": "Green",
        "rating": 4.7,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5394cc7b-4d2a-446c-a771-cde95f04ba78/revolution-6-next-nature-road-running-shoes-vjrrwc.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/88e63311-32f4-457f-9cbf-ff1c6b929cf0/revolution-6-next-nature-road-running-shoes-vjrrwc.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/458bccb2-4ee5-4a13-9026-8e1595abeebd/revolution-6-next-nature-road-running-shoes-vjrrwc.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c2829ba7-cca0-4e23-aa5a-e553810f465c/revolution-6-next-nature-road-running-shoes-vjrrwc.png"
        ]
    },
    {
        "id": 46,
        "title": "Nike Sportswear",
        "gender": "Women",
        "description": "Women's Oversized Fleece Crew Top",
        "category": "Cloths",
        "price": 4595,
        "size": [
            "Small",
            "Medium",
            "Large"
        ],
        "color": "Blue",
        "rating": 4.2,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6a151124-b175-4736-9e3e-c7d1cfe54e7e/sportswear-oversized-fleece-crew-top-xVp5rS.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c8162478-d157-4878-9681-4d3b6d04e999/sportswear-oversized-fleece-crew-top-xVp5rS.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7ac06a22-190f-4efd-94c5-7c100ddc4f97/sportswear-oversized-fleece-crew-top-xVp5rS.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fc7d12cf-b78c-4e58-a6c7-70caa094391a/sportswear-oversized-fleece-crew-top-xVp5rS.png"
        ]
    },
    {
        "id": 47,
        "title": "Air Jordan 13 Retro",
        "gender": "Men",
        "description": "Nike Air Zoom SuperRep 3",
        "category": "Shoes",
        "price": 18999,
        "size": [
            "Small",
            "Large"
        ],
        "color": "Blue",
        "rating": 4.5,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/53221d8e-cd47-4d1f-b275-24269fc6cc98/air-jordan-13-retro-shoes-xcK6vg.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bb453390-144d-4995-8310-4218a9d532cc/air-jordan-13-retro-shoes-xcK6vg.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/607a79c6-99bc-4878-8a9e-71d586907ec8/air-jordan-13-retro-shoes-xcK6vg.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/49ceb8fb-4125-44bf-b027-fde8368e97ce/air-jordan-13-retro-shoes-xcK6vg.png"
        ]
    },
    {
        "id": 48,
        "title": "Nike React Infinity Run 3 By You",
        "gender": "Men",
        "description": "Nike Air Zoom SuperRep 3",
        "category": "Shoes",
        "price": 13999,
        "size": [
            "Medium",
            "Large"
        ],
        "color": "Green",
        "rating": 4.1,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c5a64874-56de-4c25-8c02-ab9b45093b80/air-force-1-07-lx-shoe-h1bmxB.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2cf31d1e-7626-415a-8c44-b4063c02c9a3/air-force-1-07-lx-shoe-h1bmxB.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d723b4eb-f677-421f-8068-89835d7aea35/air-force-1-07-lx-shoe-h1bmxB.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/be8f6135-e120-472d-af39-2a3eb9b52bad/air-force-1-07-lx-shoe-h1bmxB.png"
        ]
    },
    {
        "id": 1,
        "title": "Nike Air Zoom Rival Fly 3",
        "gender": "Men",
        "description": "Men's Road Racing Shoes",
        "category": "Shoes",
        "price": 8999,
        "size": [
            "Small",
            "Medium"
        ],
        "color": "Red",
        "rating": 4.4,
        "img": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3a2feef9-aad1-463f-8e7f-3afc02729817/air-zoom-rival-fly-3-road-racing-shoes-Sct72w.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d6f66c09-092e-4026-bd28-5edaee1147e3/air-zoom-rival-fly-3-road-racing-shoes-Sct72w.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fa319c0e-1888-4077-b3b5-a14384ac37ec/air-zoom-rival-fly-3-road-racing-shoes-Sct72w.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/59cc246f-5c61-412a-8638-2e313c4bf6ca/air-zoom-rival-fly-3-road-racing-shoes-Sct72w.png"
        ]
    }
]
*/
}
