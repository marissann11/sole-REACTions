const db = require("./connection");
const { User, Shoe } = require("../models");



db.once("open", async () => {
  await Shoe.deleteMany();
  const shoes = await Shoe.insertMany([
    {
      name: "Adidas Yeezy Boost 380 Alien",
      brand: "Adidas",
      year: 2019,
      description: `Yeezy has introduced a new silhouette to their product line with the adidas Yeezy Boost 
      380 Alien, now available on StockX. This model was originally known to be the Yeezy Boost 350 V3, 
      but upon release it was given its own name. This 380 Alien features a never before seen Primeknit 
      pattern on its upper and lacks the traditional lateral side strip. An upgraded thicker Boost midsole 
      and engineered outsole grip complete the design.`,
      price: 315,
      color: "Grey",
      model: "380",
      sku: "FB6878",
      collab: "N/A",
      sport: "Casual",
      image: "Alien.jpg",
    },
    {
      name: "Nike Air Max 1 x Atmos Animal Pack (2018)",
      brand: "Nike",
      year: 2018,
      description: `The Jungle Book has got nothing on these Nike Air Max 1 Atmos Animal Packs. Made in collaboration 
      with Atmos, these are a new take on the classic "Animal" AM95, originally released in 2007. Coming in wheat, sport 
      red, bison and classic green, they feature a synthetic tiger, leopard, zebra and pony printed upper. Red accents the 
      "Swoosh" on the sides while black detailing on the upper, replacing the ivory found on the OG’s finishes this pair off.`,
      price: 430,
      color: "Multi",
      model: "Air Max 1",
      sku: "AQ0928-700",
      collab: "Atmos",
      sport: "Casual",
      image: "Animal.jpg",
    },
    {
      name: "Nike Air Max 1 x Atmos Safari (2016)",
      brand: "Nike",
      year: 2016,
      description: `The Atmos x Air Max 1 'Safari' is a 2016 re-release of a classic 2002 collaboration 
      with Japanese brand Atmos. The reissue features the same color-blocking as the original but swaps 
      out the 2002s canvas toe box and gum sole for a hairy suede toe box and ice-blue translucent sole.`,
      price: 615,
      color: "Brown",
      model: "Air Max 1",
      sku: "665873-200",
      collab: "Atmos",
      sport: "Casual",
      image: "AtmosSafari.jpg",
    },
    {
      name: "Adidas Yeezy Boost 350 V2 Beluga 2.0",
      brand: "Adidas",
      year: 2017,
      description: `The Yeezy Beluga 2.0 takes Kanye West's famous adidas sneakers full circle by returning to the 
      colors of the first adidas Yeezy Boost 350 V2. While the original colorway featured a bright orange 
      (officially Solar Red) stripe across the side, the 2017 release of the Yeezy Beluga colorway is much more subtle. 
      This colorway utilizes the same Zebra-like stripes as the original but the SPLY-350 branding is the only part of the 
      upper with a contrasted color-this time called Bold Orange.`,
      price: 575,
      color: "Grey",
      model: "350 V2",
      sku: "AH2203",
      collab: "N/A",
      sport: "Casual",
      image: "Beluga2.jpg",
    },
    {
      name: "New Balance 550 Shadow",
      brand: "NewBalance",
      year: 2021,
      description: `The New Balance 550 Shadow features a black and grey leather upper with mesh paneling around the collars. 
      A puffed New Balance logo and "550" branding on the quarter panels nods to the origins of New Balance's basketball line.`,
      price: 115,
      color: "Black",
      model: "550",
      sku: "BB550SR1",
      collab: "N/A",
      sport: "Basketball",
      image: "Black550.jpg",
    },
    {
      name: "Air Jordan 4 Bred (2019)",
      brand: "Jordan",
      year: 2019,
      description: `Looking for a classic sneaker to add to your collection? Then you need to buy the latest and greatest Jordan 4 
      Retro Bred (2019). This AJ 4, also known as "Black Cement 4," comes with a black upper plus grey accents, white midsole plus 
      black, white and grey accents, and a red sole.`,
      price: 570,
      color: "Black",
      model: "Jordan 4",
      sku: "308497-060",
      collab: "N/A",
      sport: "Basketball",
      image: "Bred.jpg",
    },
    {
      name: "Nike SB Dunk High x Thomas Campbell What The Dunk",
      brand: "Nike",
      year: 2017,
      description: `Multimedia artist Thomas Campbell, who served as Art Director for the skate film Nike SB Chronicles Vol. 3, is adding 
      his touch to the category's most recognizable sneaker silhouette. Campbell's 'What The' style Nike SB Dunk High features colorful 
      quilt-like panels bearing original artwork, similar to the poster art for Nike SB Chronicles Vol. 3. The design is settled down a 
      bit with a white midsole and gum rubber outsole.`,
      price: 775,
      color: "Multi",
      model: "SB Dunk",
      sku: "918321-381",
      collab: "Thomas Campbell",
      sport: "Skateboard",
      image: "Campbell.jpg",
    },
    {
      name: "Air Jordan 6 Retro Carmine (2021)",
      brand: "Jordan",
      year: "2021",
      description: `The Air Jordan 6 Carmine returned in its original form in 2021. The nearly 20-year-old colorway 
      first made its appearance in 1991 during Michael Jordan’s ’91-’92 season and brought in a new form of color 
      blocking to the signature silhouette. The Air Jordan 6 Carmine combines red, white, and black colors to 
      represent the Chicago Bulls’ signature colors. The upper features bold red and white colors that help the 
      model pop while on foot. From there, the upper is met with a white and black midsole, with hits of an icy blue 
      outsole appear as well. The final touch to this OG’s return is the signature “Nike Air” on the heel, replacing 
      2008 and 2012 retros’ “Jumpman” logo.`,
      price: 270,
      color: "Red",
      model: "Jordan 6",
      sku: "CT8529-106",
      collab: "N/A",
      sport: "Basketball",
      image: "Carmines.jpg",
    },
    {
      name: "Air Jordan 4 Cement",
      brand: "Jordan",
      year: 2016,
      description: `The Air Jordan 4 Retro OG 'Cement’ 2016 was one of the original four colorways released in 1989. 
      The sneaker features the original White, Fire Red, Black, and Tech Grey colorway, with the speckled Cement Grey 
      accents that give the sneaker its nickname. Released during the 2016 NBA All-Star weekend in Toronto, the sneaker 
      was also retro’d in 1999 and 2012. The 1999 and 2016 retros are the only models that feature the ‘Nike Air’ branding 
      on the heel, just like the 1989 OG sneakers.`,
      price: 675,
      color: "White",
      model: "Jordan 4",
      sku: "840606 192",
      collab: "N/A",
      sport: "Basketball",
      image: "Cement.jpg",
    },
    {
      name: "Air Jordan 12 Chinese New Year",
      brand: "Jordan",
      year: 2017,
      description: `The Air Jordan 12 Retro 'Chinese New Year' dropped in 2017 to kick off the Year of the Rooster. Dressed 
      in color blocking that recalls the silhouette’s OG ‘Taxi’ colorway, the mid-top features a number of unique details, 
      including Chinese characters on the tongue and a faux basket-weave texture on the black leather overlay. Additionally, 
      the shoe’s white leather upper is treated with a 3M reflective finish`,
      price: 300,
      color: "White",
      model: "Jordan 12",
      sku: "881427 122",
      collab: "N/A",
      sport: "Basketball",
      image: "CNY.jpg",
    },
    {
      name: "Air Jordan 11 Concord (2018)",
      brand: "Jordan",
      year: 2018,
      description: `Jordan Brand is reaching harder than MJ on Space Jam for the sneaker of the year crown by releasing the 
      Jordan 11 Retro Concord (2018). This Iconic Jordan 11 colorway is showcasing a white upper with black accents, white 
      midsole, and a freezing cold translucent sole`,
      price: 475,
      color: "White",
      model: "Jordan 11",
      sku: "378037 100",
      collab: "N/A",
      sport: "Basketball",
      image: "Concord.jpg",
    },
    {
      name: "Nike SB Dunk Low x Diamond Supply Company Black Diamond",
      brand: "Nike",
      year: 2018,
      description: `Before you throw your diamonds in the sky and feel the vibe, grab a pair of the Nike SB Dunk Low Diamond Supply Co 
      Black Diamond. This Nike SB Dunk comes with an a black upper, silver Nike “Swoosh”, white midsole, and a black sole`,
      price: 425,
      color: "Black",
      model: "SB Dunk",
      sku: "BV1310 001",
      collab: "Diamond Supply",
      sport: "Skateboard",
      image: "Diamond.jpg",
    },
    {
      name: "Nike Hot Step Air Terra Drake NOCTA White",
      brand: "Nike",
      year: 2022,
      description: `First teased in Drake's "Laugh Now Cry Later" music video, the Nike Hot Step Air Terra Drake NOCTA White is crafted 
      with white perforated tumbled leather similar to that of Air Jordan 14. Metallic mini Swoosh emblems at the toe and heel pop against 
      a clean background. In addition to Air Max cushioning, G-TEK is also present in the sole, a technology found in the 1999 ACG Air Terra 
      Humara. Subtle NOCTA branding moments on the tongue and insole nod to Drake's Nike sublabel.`,
      price: 300,
      color: "White",
      model: "Air Terra",
      sku: "DH4692 100",
      collab: "Drake",
      sport: "Casual",
      image: "Drake.jpg",
    },
    {
      name: "Air Jordan 13 Flint",
      brand: "Jordan",
      year: 2020,
      description: `With previous retros in 2005 and 2010, this is the third time that the Jordan 13 Flint has been 
      reintroduced. This Jordan 13 Retro consists of a navy mesh and white leather upper with flint grey suede underlays. 
      A Jumpman holograph on the ankle, 3M detailing throughout the upper, and Carolina blue branding on the tongue completes 
      the design.`,
      price: 300,
      color: "Blue",
      model: "Jordan 13",
      sku: "414571 404",
      collab: "N/A",
      sport: "Basketball",
      image: "Flint.jpg",
    },
    {
      name: "Air Jordan 1 Light Fusion Red",
      brand: "Jordan",
      year: 2021,
      description: `The Air Jordan 1 Light Fusion Red features a white leather upper with Light Fusion Red overlays and 
      Laser Orange on the Swoosh and ankle wrap. A woven Nike label stitched atop the tongue completes the design.`,
      price: 160,
      color: "Pink",
      model: "Jordan 1",
      sku: "555088 603",
      collab: "N/A",
      sport: "Basketball",
      image: "Fusion.jpg",
    },
    {
      name: "Air Jordan 6 Gatorade",
      brand: "Jordan",
      year: 2017,
      description: `The latest colorway for the Air Jordan VI is an homage to the 1991 "Like Mike" commercial that captured a 
      generation. It arrives in Gatorade green, dressed in suede from top to bottom. Details like a squeeze-bottle-inspired lace lock, 
      sockliner graphic and embroidered "If I Could Be" detailing on the inside tongue complete the tribute.`,
      price: 425,
      color: "Green",
      model: "Jordan 6",
      sku: "AJ5986 335",
      collab: "N/A",
      sport: "Basketball",
      image: "Gatorade.jpg",
    },
    {
      name: "Air Jordan 6 Gold Hoops",
      brand: "Jordan",
      year: 2021,
      description: `The women's Air Jordan 6 Gold Hoops (W) draws inspiration from gold hoop earrings and their allure. 
      Its design is composed of a white tumbled leather upper with hints of pale pink on the tongue. From there, interconnected 
      gold hoops and Jumpman emblems are attached to the shoe’s signature lace lock`,
      price: 200,
      color: "White",
      model: "Jordan 6",
      sku: "DH9696 100",
      collab: "N/A",
      sport: "Basketball",
      image: "Hoops.jpg",
    },
    {
      name: "New Balance 990v3 x JJJJound",
      brand: "NewBalance",
      year: 2022,
      description: `JJJJound and New Balance teamed up again for their second 990v3 design with the New Balance 990v3 JJJJound Olive.
      Arriving with olive mesh and premium suede uppers, the New Balance 990v3 JJJJound Olive uses a minimalist approach to create 
      a shoe geared for everyday wear. Black New Balance logos and overlays bring sharp contrast to the tonal green background. A silver 
      reflective heel wrap with JJJJound branding adds a custom touch. From there, a cream ENCAP sole at the base completes the design.`,
      price: 400,
      color: "Green",
      model: "990",
      sku: "M990JD3",
      collab: "JJJJound",
      sport: "Casual",
      image: "JJJJound.jpg",
    },
    {
      name: "Air Jordan 1 SB LA to Chicago",
      brand: "Jordan",
      year: 2019,
      description: `This AJ 1 SB comes with a white upper plus blue and yellow accents, 
      yellow Nike "Swoosh", white midsole, and a black sole. Underneath the purple and yellow coloring
      you can find some other colors, but only when the paint is irritated. GET TO SKATING!!!`,
      price: 590,
      color: "Purple",
      model: "Jordan 1",
      sku: "CD6578 507",
      collab: "N/A",
      sport: "Skateboarding",
      image: "LaToChi.jpg",
    },
    {
      name: "Air Jordan 4 Golf Military Blue",
      brand: "Jordan",
      year: 2022,
      description: `The Jordan 4 Golf Military Blue adds a course-ready spin to the OG Jordan 4 design. Its white leather upper 
      with grey Durabuck overlays and Military Blue "Wings" protect the heritage of the original colorway, but the addition of spikes 
      on the sole provides extra grip.`,
      price: 265,
      color: "White",
      model: "Jordan",
      sku: "CU9981 101",
      collab: "N/A",
      sport: "Golf",
      image: "Military.jpg",
    },
    {
      name: "Air Jordan 1 x Off White UNC ",
      brand: "Jordan",
      year: 2018,
      description: `The third installment of the Air Jordan and Virgil Agbloh collaboration. 
      This sneakers pays homage to the glory days of Jordan in college at UNC. 
      The sneakers come in a white, dark powder blue and cone colorway, with 
      a white and blue deconstructed leather upper and Off-White detailing throughout.`,
      price: 2500,
      color: "Blue",
      model: "Jordan 1",
      sku: "AQ0818 148",
      collab: "Off White",
      sport: "Basketball",
      image: "OffWhiteUNC.jpg",
    },
    {
      name: "Air Jordan 1 Mid Paris White",
      brand: "Jordan",
      year: 2022,
      description: `The Air Jordan 1 Mid ‘Paris’ showcases a familiar color palette that celebrates the 
      City of Light. The mid-top carries a white leather upper with a contrasting navy suede Swoosh. Breathable 
      white mesh is utilized on the mid-cut collar, overlaid with a grey leather flap that displays a Wings logo 
      tamped in red on the lateral side. Atop the nylon tongue, a leather tag captions a navy Jumpman with a crimson 
      Paris wordmark. The sneaker rides on a white rubber midsole that houses an Air-sole unit encapsulated in a lightweight foam wedge`,
      price: 170,
      color: "White",
      model: "Jordan 1 Mid",
      sku: "DR8038 100",
      collab: "N/A",
      sport: "Basketball",
      image: "Paris.jpg",
    },
    {
      name: "Nike Air Max 1 x Parra",
      brand: "Nike",
      year: 2018,
      description: `Legendary Dutch artist Parra and Nike have once 
      again teamed up for their first collab in over a decade!
      This Nike Air Max 1 takes abstract interpretations of cityscape and 
      landscape imagery, applying it to the Air Max's iconic silhouette. 
      Using his traditional color palette of white, light blue, red, grey, 
      and pink, this pair is sure to turn heads with its unique and vibrant style.`,
      price: 675,
      color: "Multi",
      model: "Air Max 1",
      sku: "AT3057 100",
      collab: "N/A",
      sport: "Casual",
      image: "ParraAM1.jpg",
    },
    {
      name: "Air Jordan 12 Playoffs (2022)",
      brand: "Jordan",
      year: 2022,
      description: `In celebration of its 25th Anniversary, Jordan Brand brought back the shoe that Michael Jordan wore while 
      winning his 5th NBA Title, the Air Jordan 12 Retro Playoffs. Debuted in 1997, the Air Jordan 12 Playoff captures Michael 
      Jordan and the Chicago Bulls' dominance in the 1990s era of NBA basketball. This 2022 model sticks to the original design, 
      featuring a black tumbled leather upper with a white textural mudguard and red Jumpman embroidery on the tongue. At the heel, 
      a woven Jordan label and "23" text add subtle branding. At the base, a white sole with carbon fiber detailing completes the design.`,
      price: 230,
      color: "Black",
      model: "Jordan 12",
      sku: "CT8013 006",
      collab: "N/A",
      sport: "Basketball",
      image: "Playoffs.jpg",
    },
    {
      name: "Air Jordan 1 Mid Pomegranate (W)",
      brand: "Jordan",
      year: 2022,
      description: `This edition of the Air Jordan 1 Mid SE shines bright in all-over red makeup. The base is made with smooth red leather 
      and is complemented with high-gloss overlays that make the sneakers pop. This high-gloss material is carried over to the signature Nike 
      Swoosh. The sneaker features monochromatic Air Jordan Wings embossed into the ankle strap, further elevating the overall appearance of the 
      shoe. To complete the look, the sneaker sits atop a white midsole and red outsole`,
      price: 150,
      color: "Red",
      model: "Jordan 1 Mid",
      sku: "DH5894-600",
      collab: "N/A",
      sport: "Basketball",
      image: "Pom.jpg",
    },
    {
      name: "Air Jordan 12 x PSNY",
      brand: "Jordan",
      year: 2015,
      description: `New York's fashion label Public School published the PSNY x Air Jordan 12 Retro in December 2015 as their first Air Jordan 
      collaboration accessible to the public. The shoe features a leather-aligned insole and gray hangtags that for Air Jordan 12s are not normal. 
      Also the sneakers came in a all black Air Jordan 11 box.`,
      price: 450,
      color: "Grey",
      model: "Jordan 12",
      sku: "130690-003",
      collab: "PSNY",
      sport: "Basketball",
      image: "PSNY.jpg",
    },
    {
      name: "Air Jordan 1 Rookie of the Year",
      brand: "Jordan",
      year: 2018,
      description: `What better way to celebrate MJs rookie of the year award than clinching 
      the Jordan 1 Retro High Rookie of the Year. This unique shoe comes with a white and 
      harvest leather upper, black Nike “Swoosh”, white midsole, and a black sole.`,
      price: 665,
      color: "Brown",
      model: "Jordan 1",
      sku: '555088 700',
      collab: 'N/A',
      sport: 'Basketball',
      image: "ROTY.jpg",
      
    },
    {
      name: "Air Jordan 1 Royal",
      brand: "Jordan",
      year: 2017,
      description: `The Jordan 1 Retro Royal (2017) is one of the original Air Jordan 1 colorways that debuted in 1985. It features a black and 
      blue leather upper, with the deep black tones acting as the base of the silhouette and giving way to the vibrant blues of Varsity Royal 
      on the overlays. From there, a black "Air Jordan" wings logo contrasts nicely with the Varsity Royal on the collar, and a matching blue Nike 
      "Swoosh" on the side completes the design.`,
      price: 475,
      color: "Blue",
      model: "Jordan 1",
      sku: '555088 007',
      collab: 'N/A',
      sport: 'Basketball',
      image: 'Royal.jpg'
    },
    {
      name: "Air Jordan 1 Royal Toe",
      brand: "Jordan",
      year: 2020,
      description: `The Royal Toe takes inspiration from the original Jordan 1 Royal colorway 
      (which released in 1985) and adds design elements of the Black Toe 1 to create a familiar, 
      but new dialogue. This AJ 1 features a white and royal leather upper with black leather overlays 
      and detailing. A white midsole, royal outsole, and branded leather tongue tag completes this design.`,
      price: 300,
      color: "Blue",
      model: "Jordan 1",
      sku: '555088 041',
      collab: 'N/A',
      sport: 'Basketball',
      image: "RoyalToe.jpg",
      
    },
    {
      name: "Air Jordan 1 Shattered Backboard",
      brand: "Jordan",
      year: 2015,
      description: `The name “Shattered Backboard” comes from a moment after Michael Jordans 
      rookie season, in the summer of 1985, when he played in an exhibition game in Italy. 
      Jordan, wearing the orange, black, and white of Stefanel Trieste, hit a dunk so hard 
      he shattered the glass backboard.`,
      price: 1600,
      color: "Orange",
      model: "Jordan 1",
      sku: '555088 005',
      collab: 'N/A',
      sport: 'Basketball',
      image: "SBB.jpg",
      
    },
    {
      name: "Air Jordan 1 OG Seafoam",
      brand: "Jordan",
      year: 2021,
      description: `The women's Air Jordan 1 High Seafoam (W) arrives in a smooth white leather 
      construction with Seafoam Durabuck overlays and Swooshes. On the laces, crisp bronze trimming 
      stands out against the design's subtle coloration.`,
      price: 270,
      color: "Green",
      model: "Jordan 1",
      sku: 'CD0461 002',
      collab: 'N/A',
      sport: 'Basketball',
      image: "Seafoam.jpg",
      
    },
    {
      name: "New Balance 550 Sea Salt Varsity Gold",
      brand: "New Balance",
      year: 2022,
      description: `The 550 'Varsity Gold' features a retro two-tone look on its retro basketball construction. 
      The shoe's leather upper sports a white base, with Varsity Gold bringing color to the branding, quarter panel and tongue lining. 
      Tonal seude overlays the forefoot, with microperforations on the midfoot overlay offering breathability. Underfoot, a rubber 
      cupsole anchors the build, housing an EVA wedge, visible on the medial side, for cushioning`,
      price: 140,
      color: "Yellow",
      model: "550",
      sku: 'BB550LA1',
      collab: 'N/A',
      sport: 'Basketball',
      image: 'SeaSalt.jpg'
    },
    {
      name: "Air Jordan 1 Shadow",
      brand: "Jordan",
      year: 2018,
      description: `Despite the name, the Air Jordan 1 Shadows are a pair that will put any fit of yours firmly 
      in the spotlight. This very rare OG colorway has now hit shelves only three times, making these a must-own 
      for any AJ1 collector. The shoe features a black and grey leather upper with original "Nike Air" branding 
      on the tongue tag and insoles, along with a white midsole and black outsole.`,
      price: 525,
      color: "Black",
      model: "Jordan 1",
      sku: '555088 013',
      collab: 'N/A',
      sport: 'Basketball',
      image: 'Shadow.jpg'
    },
    {
      name: "Air Jordan 11 Space Jam",
      brand: "Jordan",
      year: 2016,
      description: `The 2016 reissue of the Air Jordan 11 Retro ‘Space Jam’ was successful enough that it 
      surpassed all previous releases in Nike history to become the brand’s highest grossing sneaker to date. 
      The retro launch, marking the 20th anniversary of the shoe’s namesake film, features a design that’s true to 
      Michael Jordan’s original PE colorway, including the ‘45’ printed in white on the heel tab.`,
      price: 450,
      color: "Black",
      model: "Jordan 11",
      sku: '378037 003',
      collab: 'N/A',
      sport: 'Basketball',
      image: 'Space.jpg'
    },
    {
      name: "Nike x Stussy Air Zoom Spiridon Fossil",
      brand: "Nike",
      year: 2020,
      description: `Stussy teams up with Nike once again to deliver the Nike Air Zoom Spiridon 
      Cage 2 Stussy Fossil. After originally debuting in 2003, this design received a refresh 
      with the help of lifestyle label Stussy. This Spridion Cage 2 consists of a mesh upper with 
      woven textile overlays and a black Swoosh. A caged Zoom Air unit, Stussy branding on the heel 
      and toe, and Fossil sole completes the design.`,
      price: 565,
      color: "Brown",
      model: "Air Zoom Spiridon",
      sku: 'CQ5486 200',
      collab: 'Stussy',
      sport: 'Casual',
      image: "Spiridon.jpg",
      
    },
    {
      name: "Adidas Yeezy Boost 350 V2 Static (Non-Reflective)",
      brand: "Adidas",
      year: 2018,
      description: `Electrify your sneaker rotation with the adidas Yeezy Boost 350 V2 Static. 
      This Yeezy 350 V2 comes with a grey and white upper and a white sole. The see through upper helps
      you to show off the cool socks in you lost a long time ago.`,
      price: 400,
      color: "Grey",
      model: "350",
      sku: 'EF2905',
      collab: 'N/A',
      sport: 'Casual',
      image: "Static.jpg",
    },
    {
      name: "Adidas Yeezy Boost 700 V2",
      price: 300,
      description: `gnore the static, adidas and Kanye are teaming up to release the adidas Yeezy 700 V2 Static. 
      This Yeezy 700 comes with a grey upper with white accents, white midsole, and a black sole`,
      brand: "Adidas",
      year: 2022,
      color: "Grey",
      model: "700 V2",
      sku: 'EF2829',
      collab: 'N/A',
      sport: 'Casual',
      image: 'Static700.jpg'
    },
    {
      name: "Nike Air Force 1 Low x Supreme Wheat",
      brand: "Nike",
      year: 2021,
      description: `Drawing inspiration from classic work boots, the Nike Air Force 1 Low SP 
      Supreme Wheat features a Flax Durabuck upper with Supreme Box Logo insignias on the 
      lateral heels. At the base, a matching Flax Air sole completes the design. This model 
      was exclusively sold through Supreme stores and their online shops.`,
      price: 215,
      color: "Brown",
      model: "Air Force 1",
      sku: 'DN1555 200',
      collab: 'Supreme',
      sport: 'Casual',
      image: "SupAF1.jpg",
    },
    {
      name: "Nike Air Max 98 x Supreme Snakeskin",
      brand: "Nike",
      year: "2016",
      description: `The Supreme x Air Max 98 'Snakeskin' puts snakeskin detailing on its overlays. 
      The rest of the shoe incorporates a metallic silver mesh with reflective piping, while the 
      heel tab and toe sport Supreme branding, with 'World Famous' across the heels.`,
      price: 450,
      color: "Brown",
      model: "Air Max 98",
      sku: '844694 100',
      collab: 'Supreme',
      sport: 'Casual',
      image: "SupAM98.jpg",
    },
    {
      name: "Nike Flyknit Trainer+",
      brand: "Nike",
      year: 2013,
      description: `The Nike Flyknit Trainer+ Multicolor sneaker was released in the Summer 2013, bringing color 
      to an ultra-sleek and streamlined silhouette. The sneaker’s low-top design features a Blue Glow, Volt, pink and 
      yellow marled Flyknit upper. Its black Flywire is functional and aesthetic, working with the laces to help secure 
      a snug fit. The design is completed with a Blue Glow detailing decorating the white foam midsole.`,
      price: 350,
      color: "Multi",
      model: "Trainer",
      sku: '532984 014',
      collab: 'N/A',
      sport: 'Running',
      image: "Trainer.jpg"
    },
    {
      name: "Air Jordan 4 x Travis Scott Cactus Jack",
      brand: "Jordan",
      year: 2018,
      description: `The only way to describe the Travis Scott Air Jordan 4 Retros properly would be 
      to use the rappers own adlib: la flame. These Jordan 4s were made in collaboration with rapper, 
      Travis Scott and nicknamed the "Cactus Jack" edition. Similar in design to the infamous Eminem pair, 
      these feature a lighter shade of blue suede on the upper. Black accents, a red liner, paint splatter 
      detailing, a white midsole and "Cactus Jack" branding on the back heel tab finish things off for this pair.`,
      price: 1250,
      color: "Blue",
      model: "Jordan 4",
      sku: '308497 406',
      collab: 'Travis Scott',
      sport: 'Basketball',
      image: "Travis.jpg",
    },
    {
      name: "Nike Dunk SB High x Concepts Ugly Christmas Sweater Grey",
      brand: "Nike",
      year: 2013,
      description: `Cambridge shoe boutique Concepts teamed up with Nike SB for this ‘Ugly Christmas Sweater’ take on 
      the Dunk High SB Premium for the holiday season in 2013. The heathered grey construction of the upper sports an 
      allover Christmas print that features snowmen, holly and poinsettia leaves and snowflakes. It also comes with a 
      green nylon Swoosh, a red nylon tongue and a green outsole underfoot to complete the festive theme`,
      price: 1400,
      color: "Grey",
      model: "SB Dunk",
      sku: '635525 036',
      collab: 'Concepts',
      sport: 'Skateboard',
      image: 'Ugly.jpg'
    },
    {
      name: "New Balance 550 UNC White University Blue",
      brand: "NewBalance",
      year: "2022",
      description: `New Balance has a handful of firm favorites among the sneakerhead community, 
      but none have taken off quite like its 550 silhouette. As expected, the retro Basketball 
      Oxford shape is presented in white to show off its OG shapes and style, complete with a 
      padded “N” emblem on the mid-panel alongside old-school branding on the tongue, “NB” emblems 
      on the rear, and “550” gracing the vamp.`,
      price: 175,
      color: "Blue",
      model: "550",
      sku: 'BB550HL1',
      collab: 'N/A',
      sport: 'Basketball',
      image: "UNC550.jpg"
    },
    {
      name: "Nike Air Max 97 X Undefeated Black",
      brand: "Nike",
      year: 2017,
      description: `The Undefeated x Air Max 97 OG 'Black' pays tribute to Italy's special relationship 
      with the Air Max 97. The Gucci-inspired design features a black-based upper with a patent leather 
      mudguard and a Gucci-inspired Gorge Green/Speed Red wavy side panel stripe. Undefeated branding 
      runs the length of the red stripe, and the brand's tally logo hits up the insole`,
      price: 430,
      color: "Black",
      model: "Air Max 97",
      sku: 'AJ1986 001',
      collab: 'Undefeated',
      sport: 'Casual',
      image: 'UNDFTDBlack.jpg'
    },
    {
      name: "Nike Air Max 97 X Undefeated White",
      brand: "Nike",
      year: 2017,
      description: `The Undefeated x Air Max 97 OG 'Sail' pays tribute to Italy's special relationship with 
      the Air Max 97. The Gucci-inspired design features a white-based upper, white patent leather mudguard, 
      and a Gucci-inspired Gorge Green/Speed Red wavy side panel stripe. Undefeated branding runs the length 
      of the red stripe, and the brand's tally logo hits up the insole`,
      price: 575,
      color: "White",
      model: "Air Max 97",
      sku: 'AJ1986 100',
      collab: 'Undefeated',
      sport: 'Casual',
      image: 'UNDFTDWhite.jpg'
    },
    {
      name: "Adidas Yeezy Boost 700 Wave Runner",
      brand: "Adidas",
      year: 2017,
      description: `First releasing in November of 2017, the Yeezy Boost 700s represented what 
      was a significant shift in Kanyes design aesthetic, moving from the minimalistic silhouettes 
      of early Yeezy seasons to this chunky runner model. It once again showed how Kanye stays ahead 
      of the curve, as chunkier sneakers became more en vogue in 2018. The shoe features an upper with 
      grey and black suede overlays, premium leather with blue mesh underlays, neon green laces, and its 
      signature chunky midsole with encapsulated Boost technology.`,
      price: 400,
      color: "Green",
      model: "700",
      sku: 'B75571',
      collab: 'N/A',
      sport: 'Casual',
      image: "WaveRunner.jpg",
    },
    {
      name: "Adidas Yeezy Boost 350 V2 Zebra",
      brand: "Adidas",
      year: 2017,
      description: `Adidas is back with their latest Yeezy Boost 350 V2. Fresh off the heels of 
      NBA All-Star Weekend, these Yeezy's are nicknamed the "Zebras," and come in a classic white, 
      black and red color scheme. Sporting a white-based Primeknit upper with black accents giving 
      off a Zebra stripe vibe, “SPLY-350” displayed across the sides in red finished off by a translucent 
      BOOST cushioned sole. To date they are the most limited adidas Yeezy release and have instantly become 
      one of the most popular colorways`,
      price: 425,
      color: "White",
      model: "350",
      sku: 'CP9654',
      collab: 'N/A',
      sport: 'Casual',
      image: "Zebras.jpg",
      
    },
  ]);
  console.log("shoes seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Sneakie",
    lastName: "Sneakie",
    email: "sneak2@testmail.com",
    password: "password",
    isAdmin: true,
    orders: [
      {
      shoes: [shoes[0], shoes[3], shoes[1]],
      },
    ],
  });
  await User.create({
    firstName: 'Tobby',
    lastName: 'Brooks',
    email: 'tobe@testemail.com',
    password: 'password',
    isAdmin: true,
    orders: [
      {
        shoes: [shoes[2], shoes[8]],
      },
    ],
  });
  await User.create({
    firstName: 'Tam',
    lastName: 'Wilhite',
    email: 'tam@testemail.com',
    password: 'password',
    isAdmin: true,
    orders: [
      {
        shoes: [shoes[4], shoes[0], shoes[1]],
      },
    ],
  });
  await User.create({
    firstName: 'Marissa',
    lastName: 'Wilhite',
    email: 'mar@testemail.com',
    password: 'password',
    isAdmin: true,
    orders: [
      {
        shoes: [shoes[12]],
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
