var names = ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8"];
var questionList = [
    {
       "question":"Top 8 Most Common English Letters",
       "wrong":"U",
       "correct":[
          "E",
          "T",
          "A",
          "I",
          "N",
          "O",
          "S",
          "R"
       ]
    },
    {
       "question":"Leap Years",
       "wrong":"1900",
       "correct":[
          "2004",
          "2016",
          "1484",
          "1876",
          "2000",
          "2400",
          "1992",
          "852"
       ]
    },
    {
       "question":"2015 movies",
       "wrong":"Zootopia",
       "correct":[
          "Inside Out",
          "Minions",
          "Avengers: Age of Ultron",
          "Star Wars: The Force Awakens",
          "Jurassic World",
          "Paddington",
          "Paul Blart: Mall Cop 2",
          "The Martian"
       ]
    },
    {
       "question":"Movies sponsored by the Department of Defense",
       "wrong":"X-Men: Days of Future Past (2014)",
       "correct":[
          "The Karate Kid Part II (1986)",
          "Godzilla (1998)",
          "King Kong (2005)",
          "Transformers (2007)",
          "The Silence of the Lambs (1991)",
          "Indiana Jones and the Last Crusade (1989)",
          "Top Gun (1986)",
          "Iron Man (2008)"
       ]
    },
    {
       "question":"Top 10 Highest Nominal GDP Countries(According to IMF 2022)",
       "wrong":"South Korea",
       "correct":[
          "Brazil",
          "Italy",
          "Canada",
          "France",
          "India",
          "United Kingdom",
          "Germany",
          "Japan"
       ]
    },
    {
       "question":"Ivy Leagues",
       "wrong":"Northwestern",
       "correct":[
          "UPenn",
          "Princeton",
          "Columbia",
          "Yale",
          "Brown",
          "Harvard",
          "Dartmouth",
          "Cornell"
       ]
    },
    {
       "question":"Girl's Generation Members",
       "wrong":"Sohee",
       "correct":[
          "Taeyeon",
          "Sunny",
          "Tiffany",
          "Hyoyeon",
          "Yuri",
          "Sooyoung",
          "Yoona",
          "Seohyun"
       ]
    },
    {
       "question":"Romance languages",
       "wrong":"German",
       "correct":[
          "Spanish",
          "Portuguese",
          "French",
          "Italian",
          "Romanian",
          "Catalan",
          "Sicilian",
          "Ligurian"
       ]
    },
    {
       "question":"Kit Kat Flavors",
       "wrong":"Takoyaki",
       "correct":[
          "Hot Chili Pepper",
          "Edamame Milkshake",
          "Sakura Sake",
          "Maple",
          "Ice Cream",
          "Fruity Cereal",
          "Wasabi",
          "Pumpkin Pie"
       ]
    },
    {
       "question":"Invertebrates",
       "wrong":"Snake",
       "correct":[
          "Sea Urchin",
          "Fly",
          "Crawfish",
          "Centipede",
          "Sea Star",
          "Scallop",
          "Spider",
          "Snail"
       ]
    },
    {
       "question":"Books in the Old Testament",
       "wrong":"The Gospel of John",
       "correct":[
          "Esther",
          "Daniel",
          "Exodus",
          "Leviticus",
          "Numbers",
          "Deuteronomy",
          "Song of Solomon",
          "Job"
       ]
    },
    {
       "question":"Jupiter Moons",
       "wrong":"Phobos",
       "correct":[
          "Europa",
          "Ganymede",
          "Io",
          "Callisto",
          "Thebe",
          "Adrastea",
          "Metis",
          "Amalthea"
       ]
    },
    {
       "question":"Andy Warhol Artworks",
       "wrong":"Rose Ring",
       "correct":[
          "Shot Diptych",
          "Campbell's Soup Cans",
          "Banana",
          "Gun",
          "Green Coca-Cola Bottles",
          "Eight Elvis",
          "Silver Car Crash",
          "Cow Wallpaper"
       ]
    },
    {
       "question":"Elements on the Periodic Table",
       "wrong":"Delirium",
       "correct":[
          "Osmium",
          "Tanalum",
          "Rutherfordium",
          "Nihonium",
          "Americium",
          "Californium",
          "Einsteinium",
          "Fermium"
       ]
    },
    {
       "question":"Minecraft Biomes",
       "wrong":"Eroded End",
       "correct":[
          "Sunflower Plains",
          "Beach",
          "Meadow",
          "Lukewarm Ocean",
          "Snowy Slopes",
          "Windswept Savanna",
          "Sparse Jungle",
          "Birch Forest"
       ]
    },
    {
       "question":"La Croix Flavors",
       "wrong":"Lily Durazno",
       "correct":[
          "Coffea Exotica",
          "Beach Plum",
          "Cubana",
          "Guava São Paulo",
          "Pastèque",
          "LimonCello",
          "Múre Pepino",
          "Pomme Bayá"
       ]
    },
    {
       "question":"Renaissance Paintings",
       "wrong":"Song of the Shepherd",
       "correct":[
          "Vitruvian Man",
          "Pietà",
          "Holy Trinity",
          "Delivery of the Keys",
          "Virgin of the Rocks",
          "Lady with an Ermine",
          "The School of Athens",
          "Venus of Urbino"
       ]
    },
    {
       "question":"The Noble Eightfold Path",
       "wrong":"Right Faithfulness",
       "correct":[
          "Right Understanding",
          "Right Thought",
          "Right Speech",
          "Right Action",
          "Right Livelihood",
          "Right Effort",
          "Right Mindfulness",
          "Right Concentration"
       ]
    },
    {
       "question":"Japanese Inventions",
       "wrong":"MP3 player",
       "correct":[
          "Emoji",
          "Jet Ski",
          "Laptop",
          "Selfie Stick",
          "Agar",
          "CRISPR",
          "Fortune cookie",
          "Instant noodle"
       ]
    },
    {
       "question":"Words spelled correctly",
       "wrong":"Liquify",
       "correct":[
          "Dilate",
          "Pharaoh",
          "Unnecessary",
          "Narcissistic",
          "Manoeuvre",
          "Bureaucracy",
          "Pronunciation",
          "Entrepreneur"
       ]
    },
    {
       "question":"States Who Voted Red in the 2020 Election",
       "wrong":"Georgia",
       "correct":[
          "Texas",
          "Florida",
          "Virginia",
          "Utah",
          "Idaho",
          "Iowa",
          "West Virginia",
          "Alabama"
       ]
    },
    {
       "question":"Rice Cakes",
       "wrong":"Num Poh Peay",
       "correct":[
          "Dango",
          "Lontong",
          "Idli",
          "Tangyuan",
          "Puto",
          "Bánh bò",
          "Num Plae Ai",
          "Tteok"
       ]
    },
    {
       "question":"Reproductive Parts",
       "wrong":"Amathern Gland",
       "correct":[
          "Fallopian Tubes",
          "Endometrium",
          "Epididymis",
          "Vans Deferens",
          "Seminal Vesicles",
          "Frimbriae",
          "Cervix",
          "Glans"
       ]
    }
 ];