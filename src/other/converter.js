const input = 
`Top 8 Most Common English Letters
U
E
T
A
I
N
O
S
R
Leap Years
1900
2004
2016
1484
1876
2000
2400
1992
852
2015 movies
Zootopia
Inside Out
Minions
Avengers: Age of Ultron
Star Wars: The Force Awakens
Jurassic World
Paddington
Paul Blart: Mall Cop 2
The Martian
Movies sponsored by the Department of Defense
X-Men: Days of Future Past (2014)
The Karate Kid Part II (1986)
Godzilla (1998)
King Kong (2005)
Transformers (2007)
The Silence of the Lambs (1991)
Indiana Jones and the Last Crusade (1989)
Top Gun (1986)
Iron Man (2008)
Common Misconceptions Which are False
Heart disease is the leading cause of death
Wolf packs have an alpha wolf 
There is a correlation between race and penis size
There's definitive proof of a vaginal G-spot
Goldfish have a 3 second memory
Female praying mantises usually eat the males during reproduction
Sugar causes hyperactivity in children
Alcohol makes the body warmer
The bermuda triangle has higher shipwreck rates
Top 10 Highest Nominal GDP Countries(According to IMF 2022)
South Korea
Brazil
Italy
Canada
France
India
United Kingdom
Germany
Japan
Ivy Leagues
Northwestern
UPenn
Princeton
Columbia
Yale
Brown
Harvard
Dartmouth
Cornell
Girl's Generation Members
Sohee
Taeyeon
Sunny
Tiffany
Hyoyeon
Yuri
Sooyoung
Yoona
Seohyun
Romance languages
German
Spanish
Portuguese
French
Italian
Romanian
Catalan
Sicilian
Ligurian
Kit Kat Flavors
Takoyaki
Hot Chili Pepper
Edamame Milkshake
Sakura Sake
Maple
Ice Cream
Fruity Cereal
Wasabi
Pumpkin Pie
Invertebrates
Snake
Sea Urchin
Fly
Crawfish
Centipede
Sea Star
Scallop
Spider
Snail
Books in the Old Testament
The Gospel of John
Esther
Daniel
Exodus
Leviticus
Numbers
Deuteronomy
Song of Solomon
Job
Jupiter Moons
Phobos
Europa
Ganymede
Io
Callisto
Thebe
Adrastea
Metis
Amalthea
Andy Warhol Artworks
Rose Ring
Shot Diptych
Campbell's Soup Cans
Banana
Gun
Green Coca-Cola Bottles
Eight Elvis
Silver Car Crash
Cow Wallpaper
Elements on the Periodic Table
Delirium
Osmium
Tanalum
Rutherfordium
Nihonium
Americium
Californium
Einsteinium
Fermium
Minecraft Biomes
Eroded End
Sunflower Plains
Beach
Meadow
Lukewarm Ocean
Snowy Slopes
Windswept Savanna
Sparse Jungle
Birch Forest
La Croix Flavors
Lily Durazno
Coffea Exotica
Beach Plum
Cubana
Guava São Paulo
Pastèque
LimonCello
Múre Pepino
Pomme Bayá
Renaissance Paintings
Song of the Shepherd
Vitruvian Man
Pietà
Holy Trinity
Delivery of the Keys
Virgin of the Rocks
Lady with an Ermine
The School of Athens
Venus of Urbino
The Noble Eightfold Path
Right Faithfulness
Right Understanding
Right Thought
Right Speech
Right Action
Right Livelihood
Right Effort
Right Mindfulness
Right Concentration
Japanese Inventions
MP3 player
Emoji
Jet Ski
Laptop
Selfie Stick
Agar
CRISPR
Fortune cookie
Instant noodle
Words spelled correctly
Liquify
Dilate
Pharaoh
Unnecessary
Narcissistic
Manoeuvre
Bureaucracy
Pronunciation
Entrepreneur
States Who Voted Red in the 2020 Election
Georgia
Texas
Florida
Virginia
Utah
Idaho
Iowa
West Virginia
Alabama
Rice Cakes
Num Poh Peay
Dango
Lontong
Idli
Tangyuan
Puto
Bánh bò
Num Plae Ai
Tteok
Reproductive Parts
Amathern Gland
Fallopian Tubes
Endometrium
Epididymis
Vans Deferens
Seminal Vesicles
Frimbriae
Cervix
Glans`;
let ar = input.split(/\r?\n/);
let output = "";
for(let i in ar) {
  if(i%10 == 0) {
    output += `{question:"${ar[i]}",`;
  } else if (i%10 == 1) {
    output += `wrong:"${ar[i]}",correct:[`;
  } else if (i%10 == 9) {
    output += `"${ar[i]}"]},`;
  } else {
    output += `"${ar[i]}",`;
  }
}
console.log(output.slice(0, output.length - 1));
