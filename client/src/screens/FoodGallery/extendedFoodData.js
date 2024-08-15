const foodData = [
    {
        "id": "9",
        "name": "Bruschetta",
        "src": "bruschetta.jpg",
        "type": "Fedda Ruscia, Appetizer",
        "path": "bruschetta",
        "number": "1",
        "query": "Bruschetta",
        "country": "ita",
        "countryName": "Italy",
        "category": "veg-appetizer",
        "rating": 4.2
    },
    {
        "id": "10",
        "name": "Kızartma",
        "src": "kizartma.jpg",
        "type": "Vegetable Dish, Side Dish",
        "path": "kizartma",
        "number": "2",
        "query": "kizartma",
        "country": "tur",
        "countryName": "Turkey",
        "category": "veg-appetizer",
        "rating": 4.1
    },
    {
        "id": "11",
        "name": "Guacamole",
        "src": "guacamole.jpg",
        "type": "Appetizer, Spread",
        "path": "guacamole",
        "number": "3",
        "query": "guacamole",
        "country": "mex",
        "countryName": "Mexico",
        "category": "veg-appetizer",
        "rating": 4.5
    },
    {
        "id": "12",
        "name": "Onion Rings",
        "src": "onion-rings.jpg",
        "type": "Appetizer, Deep-Fried Dish",
        "path": "onion-rings",
        "number": "2",
        "query": "Onion_ring",
        "country": "usa",
        "countryName": "United States of America",
        "category": "veg-appetizer",
        "rating": 3.8
    },
    {
        "id": "13",
        "name": "Caponata",
        "src": "caponata.jpg",
        "type": "Vegetable Dish, Appetizer",
        "path": "caponata",
        "number": "2",
        "query": "Caponata",
        "country": "ita",
        "countryName": "Italy",
        "category": "veg-appetizer",
        "rating": 4.2
    },
    {
        "id": "14",
        "name": "Gazpacho",
        "src": "gazpacho.jpg",
        "type": "Vegetable Soup, Cold Soup",
        "path": "gazpacho",
        "number": "2",
        "query": "Gazpacho",
        "country": "spa",
        "countryName": "Spain",
        "category": "soup",
        "rating": 3.7
    },
    {
        "id": "15",
        "name": "Ribollita",
        "src": "ribollita.jpg",
        "type": "Vegetable Soup, Bread Soup",
        "path": "taco-al-pastor",
        "number": "2",
        "query": "Ribollita",
        "country": "ita",
        "countryName": "Italy",
        "category": "soup",
        "rating": 4.0
    },
    {
        "id": "16",
        "name": "Houbová polévka",
        "src": "hpolev.jpg",
        "type": "Mushroom Soup, Mushroom Dish",
        "path": "houbova-polevka",
        "number": "2",
        "query": "houbova",
        "country": "cze",
        "countryName": "Czech Republic",
        "category": "soup",
        "rating": 4.1
    },
    {
        "id": "17",
        "name": "Lobster Bisque",
        "src": "bisque.jpg",
        "type": "Seafood Soup",
        "path": "lobster-bisque",
        "number": "2",
        "query": "Bisque_(food)",
        "country": "fra",
        "countryName": "France",
        "category": "soup",
        "rating": 4.2
    },
    {
        "id": "18",
        "name": "Miso Soup",
        "src": "miso.jpg",
        "type": "Soup, Vegan Dish",
        "path": "miso-soup",
        "number": "2",
        "query": "Miso_soup",
        "country": "jpn",
        "countryName": "Japan",
        "category": "soup",
        "rating": 4.1
    },
    {
        "id": "19",
        "name": "Borscht",
        "src": "borscht.jpg",
        "type": "Vegetable Soup",
        "path": "borscht",
        "number": "2",
        "query": "Borscht",
        "country": "ukr",
        "countryName": "Ukraine",
        "category": "soup",
        "rating": 4.3
    },
    {
        "id": "20",
        "name": "Pozole",
        "src": "pozole.jpg",
        "type": "Soup, Stew",
        "path": "pozole",
        "number": "2",
        "query": "pozole",
        "country": "mex",
        "countryName": "Mexico",
        "category": "soup",
        "rating": 4.6
    },
    {
        "id": "21",
        "name": "Clam Chowder",
        "src": "chowder.jpg",
        "type": "Seafood Soup, Clam Dish",
        "path": "new-england-clam-chowder",
        "number": "2",
        "query": "Clam_chowder",
        "country": "usa",
        "countryName": "United States of America",
        "category": "soup",
        "rating": 4.2
    },
    {
        "id": "22",
        "name": "Soupe à l’oignon",
        "src": "oignon.jpg",
        "type": "Onion Soup",
        "path": "soupe-a-loignon",
        "number": "2",
        "query": "French_onion_soup",
        "country": "fra",
        "countryName": "France",
        "category": "soup",
        "rating": 4.3
    },
    {
        "id": "23",
        "name": "Menestrón",
        "src": "menestron.jpg",
        "type": "Meat Soup",
        "path": "menestron",
        "number": "2",
        "query": "Menestron",
        "country": "per",
        "countryName": "Peru",
        "category": "soup",
        "rating": 4.1
    },
    {
        "id": "24",
        "name": "Orange Chicken",
        "src": "ochicken.jpg",
        "type": "Fried Chicken Dish, Deep-Fried Dish",
        "path": "orange-chicken",
        "number": "2",
        "query": "Orange_chicken",
        "country": "chn",
        "countryName": "China",
        "category": "appetizer-chicken",
        "rating": 4.2
    },
    {
        "id": "1",
        "name": "Buffalo Wings",
        "src": "bwings.jpg",
        "type": "Fried Chicken Dish, Deep-Fried Dish",
        "path": "buffalo-wings",
        "number": "1",
        "query": "Buffalo_wing",
        "country": "usa",
        "countryName": "United States of America",
        "category": "appetizer-chicken",
        "rating": 4.0
    },
    {
        "id": "25",
        "name": "Korean Fried Chicken",
        "src": "koreanfchicken.jpg",
        "type": "Fried Chicken Dish, Deep-Fried Dish",
        "path": "korean-fried-chicken",
        "number": "1",
        "query": "Korean_fried_chicken",
        "country": "kor",
        "countryName": "South Korea",
        "category": "appetizer-chicken",
        "rating": 4.7
    },
    {
        "id": "26",
        "name": "Chicken 65",
        "src": "chicken65.jpg",
        "type": "Fried Chicken Dish, Deep-Fried Dish",
        "path": "chicken-65",
        "number": "1",
        "query": "Chicken_65",
        "country": "ind",
        "countryName": "India",
        "category": "appetizer-chicken",
        "rating": 4.4
    },
    {
        "id": "27",
        "name": "Chicken Parmigiana",
        "src": "prmgchicken.jpg",
        "type": "Fried Chicken Dish, Breaded Cutlet",
        "path": "chicken-parmigiana",
        "number": "1",
        "query": "Chicken_parmesan",
        "country": "usa",
        "countryName": "United States of America",
        "category": "appetizer-chicken",
        "rating": 4.1
    },
    {
        "id": "28",
        "name": "Pozharsky Cutlet",
        "src": "pcutlet.jpg",
        "type": "Fried Chicken Dish",
        "path": "pozharsky-cutlet",
        "number": "1",
        "query": "Pozharsky_cutlet",
        "country": "rus",
        "countryName": "Russia",
        "category": "appetizer-chicken",
        "rating": 4.2
    },
    {
        "id": "29",
        "name": "Barberton Chicken",
        "src": "barbchicken.jpg",
        "type": "Fried Chicken Dish, Deep-Fried Dish",
        "path": "barberton-chicken",
        "number": "1",
        "query": "Barberton_chicken",
        "country": "srb",
        "countryName": "Serbia",
        "category": "appetizer-chicken",
        "rating": 4.5
    },
    {
        "id": "30",
        "name": "Chef's Special Fried Chicken",
        "src": "cschicken.jpg",
        "type": "Fried Chicken Dish, Deep-Fried Dish",
        "path": "chef-special-fried-chicken",
        "number": "1",
        "query": "Fried_chicken",
        "country": "usa",
        "countryName": "United States of America",
        "category": "appetizer-chicken",
        "rating": 5.0
    },
    {
        "id": "2",
        "name": "Fish 'n' Chips",
        "src": "fishchips.jpg",
        "type": "Saltwater Fish Dish, Deep-Fried Dish",
        "path": "fish-and-chips",
        "number": "2",
        "query": "Fish_and_chips",
        "country": "uk",
        "countryName": "United Kingdom",
        "category": "appetizer-fish",
        "rating": 4.0
    },
    {
        "id": "31",
        "name": "Lutefisk",
        "src": "lutefisk.jpg",
        "type": "Saltwater Fish Dish",
        "path": "lutefisk",
        "number": "1",
        "query": "Lutefisk",
        "country": "nor",
        "countryName": "Norway",
        "category": "appetizer-fish",
        "rating": 2.5
    },
    {
        "id": "32",
        "name": "Grilled Sardines",
        "src": "grilledsardines.jpg",
        "type": "Saltwater Fish Dish",
        "path": "grilled-sardines",
        "number": "1",
        "query": "Sardines_as_food",
        "country": "prt",
        "countryName": "Portugal",
        "category": "appetizer-fish",
        "rating": 4.0
    },
    {
        "id": "33",
        "name": "Saba Sushi",
        "src": "sabasushi.jpg",
        "type": "Rice Dish, Saltwater Fish Dish",
        "path": "saba-sushi",
        "number": "1",
        "query": "Sushi",
        "country": "jpn",
        "countryName": "Japan",
        "category": "appetizer-fish",
        "rating": 4.0
    },
    {
        "id": "34",
        "name": "Sole meunière",
        "src": "solemeun.jpg",
        "type": "Saltwater Fish Dish",
        "path": "sole-meuniere",
        "number": "1",
        "query": "Sole_meunière",
        "country": "fra",
        "countryName": "France",
        "category": "appetizer-fish",
        "rating": 4.2
    },
    {
        "id": "35",
        "name": "Baccalà Mantecato",
        "src": "baccala.jpg",
        "type": "Appetizer, Saltwater Fish Dish",
        "path": "baccala-mantecato",
        "number": "1",
        "query": "Baccalà_mantecato",
        "country": "ita",
        "countryName": "Italy",
        "category": "appetizer-fish",
        "rating": 4.0
    },
    {
        "id": "36",
        "name": "Tian Bu La",
        "src": "tianbula.jpg",
        "type": "Saltwater Fish Dish, Deep-Fried Fish",
        "path": "tian-bu-la",
        "number": "1",
        "query": "Taiwanese_cuisine",
        "country": "twn",
        "countryName": "Taiwan",
        "category": "appetizer-fish",
        "rating": 3.1
    },
    {
        "id": "37",
        "name": "Ryba smażona",
        "src": "ryma.jpg",
        "type": "Fish Dish",
        "path": "ryba-smazona",
        "number": "1",
        "query": "Ryba",
        "country": "pol",
        "countryName": "Poland",
        "category": "appetizer-fish",
        "rating": 3.8
    },
    {
        "id": "37",
        "name": "Baliq Kebab",
        "src": "baliqkebab.jpg",
        "type": "Freshwater Fish Dish",
        "path": "baliq-kebab",
        "number": "1",
        "query": "Balyk",
        "country": "aze",
        "countryName": "Azerbaijan",
        "category": "appetizer-fish",
        "rating": 3.8
    },
]

export default foodData;