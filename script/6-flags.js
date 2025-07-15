console.log("6 flags loaded")

const possibleCoasters = [
    "American Eagle",
    "Batman: The Ride",
    "Demon",
    "Goliath",
    "Joker",
    "Little Dipper",
    "Maxx Force",
    "Raging Bull",
    "The Dark Knight Coaster",
    "Vertical Velocity (The Flash retheme)",
    "Whizzer",
    "X-Flight",
    "Spacely’s Sprocket Rockets",
    "Superman: Ultimate Flight",
    "Mardi Gras Hangover",
    "Joker Free Fly",
    "Wrath of Rakshasa (2025)"
  ];

const possibleFlatAndWaterRides = [
    "Giant Drop",
    "Hometown Fun Machine",
    "Revolution",
    "Sky Trek Tower",
    "Condor",
    "East River Crawler",
    "Fiddler’s Fling",
    "Mardi Gras Hangover", // if counted as flat ride instead of coaster
    "Big Easy Balloons",
    "Krazy Kars",
    "Rue Le Dodge (bumper cars)",
    "Chubasco (teacups)",
    "Buccaneer Battle (water interactive ride)",
    "Logger’s Run (log flume)",
    "Yankee Clipper (flume ride)",
    "Roaring Rapids (rapids ride)",
    "Scenic Railway (train ride around park)",
    "Triple Play",
    "The Lobster",
    "Castaway Creek (Lazy River)",
    "Bahama Mama & Bubba Tubba (Family raft slides)",
    "Paradise Plunge & Riptide (Dual speed raft slides)",
    "Skull Island & Buccaneer Bay (Interactive group splash zone with slides)",
    "Hammerhead & Barracuda (Dual raft slide complex)",
    "Vortex & Typhoon (Twin bowl rafting slides)",
    "Tornado (Giant funnel raft ride)",
    "Surf Rider (Stand-up/sit-down surf simulator)",
    "Wahoo Racer (Six-lane mat/raft racer)",
    "Wipeout (Double-funnel raft slide)",
    "Tsunami Surge (Water coaster – uphill blasts + drops)",
    "Hurricane Bay (Wave pool)",
    "Monsoon Lagoon (Interactive wave/tidal pool)"
];

const possibleChallenges = [
    "Find a food stand that sells churros or funnel cake (no purchase needed)",
    "Take a selfie with a costumed character or statue",
    "Find someone wearing a coaster shirt and compliment them",
    "Find a map sign and point at it like you’re lost",
    "Get sprayed by a mist fan or cooling station",
    "Find a sign with your birth month on it",
    "Locate a pressed penny machine (no need to buy)",
    "High five any staff member",
    "Spot someone with a matching shirt color to you",
    "Take a group photo in front of the park entrance sign",
    "Spot a ride mechanic walking to or from a ride",
    "Sit and relax for 5 minutes without checking your phone",
    "Compliment a stranger’s outfit or hair",
    "Find and photograph something purple in the park",
    "Spot someone wearing Mickey or Disney apparel",
    "Get a stranger to take a picture of you",
    "Count how many people are wearing sunglasses in line (choose a line)",
    "Wave dramatically to people on a ride while you’re on the ground",
    "Take a photo imitating a ride photo pose while standing in line",
    "Find a duck, squirrel, or bird in the park",
    "Spot someone wearing socks with sandals",
    "Wave to a staff member and get them to wave back",
    "Compliment a food stand worker",
    "Find a hidden or overlooked bench to sit on for a minute",
    "Spot a ride with no line (even if you don’t ride it)",
    "Find and read a safety sign aloud in a dramatic voice",
    "You suck draw a punishment card now",
    "You suck draw a punishment card now",
    "You suck draw a punishment card now",
    "You suck draw a punishment card now",
    "You suck draw a punishment card now"
  ];

const possiblePerks = [
    { name: "Draw a Challenge Card", description: "Immediately draw an extra challenge card. If already holding one, choose which to keep.", quantity: 5 },
    { name: "Steal and Complete a Player’s Next Challenge Card", description: "Choose a player. You take their next drawn challenge and complete it as your own.", quantity: 2 },
    { name: "Pick Any Challenge to Complete", description: "Announce any challenge by name. If it’s on your card, it’s marked complete.", quantity: 1 },
    { name: "Reveal a Space on Your Bingo Card", description: "Choose B/I/N/G/O and 1-5. Your tracker reveals if that space is marked and what it is.", quantity: 5 },
    { name: "Force a 5 Minute Timeout for All Other Players", description: "All other players must sit/rest for 5 minutes while you proceed to your next ride.", quantity: 2 },
    { name: "Ride Wrath of Rakshasa for 2 Challenge and 2 Perk Cards", description: "If you ride Wrath of Rakshasa, draw two Challenge and two Perk Cards instead of one each.", quantity: 1 },
    { name: "For Next 3 Rides, Any Ride Yields a Perk Card", description: "For the next 3 rides by any player, all riders draw a Perk Card. Stacks if multiple copies are played.", quantity: 1 },
    { name: "Collect 5 for Auto Win", description: "If you collect 5 of these cards, you may immediately declare victory regardless of your bingo progress.", quantity: 5 },
    { name: "Force a Player to Discard All Perk Cards", description: "Choose a player; they must discard all perk cards they currently hold. Play immediately upon drawing.", quantity: 10 },
    { name: "Transfer Your Punishment to Another Player", description: "If you draw a punishment challenge, you may transfer it to another player.", quantity: 5 }
];

const possiblePunishments = [
    "Find 5 people wearing red",
    "Make ride sounds only for 5 minutes",
    "Ask a stranger 'What year is it?'",
    "Get into a line, wait a little, then announce loudly 'I’m too scared for this ride!' and leave.",
    "Get a person to record you for 1 minute doing something weird",
    "Give a stranger one of the blank cards (these are included with the decks)",
    "Sit on a bench next to a stranger and start the Forrest Gump monologue",
    "On your next ride, once it starts, yell 'Mommy, hold me!' even if your mom isn’t there.",
    "Do the sideways crab walk for the next 5 minutes",
    "Skip (literally skip) instead of walk for the next 5 minutes",
    "You’re dehydrated – drink water now",
    "You’re dehydrated – drink water now",
    "You’re dehydrated – drink water now",
    "You’re dehydrated – drink water now",
    "You’re dehydrated – drink water now",
    "Mimic a stranger. If they ask what you’re doing, show them this card",
    "Ride a little kiddie ride that you’re allowed to ride",
    "Speak in a British accent for the next 5 minutes",
    "Hug a trash can (gently, don’t knock it over)",
    "Walk backwards for 3 minutes",
    "Compliment every stranger you pass for the next 5 minutes",
    "Pretend to narrate everything you see like a nature documentary for 5 minutes",
    "Dance in place for 1 minute wherever you are",
    "Ask a staff member where the 'portal to Narnia' is",
    "Walk up to a stranger, point dramatically at something random, and say 'Behold… the prophecy is true.'",
    "Pretend to be a robot for the next 3 minutes",
    "Make your arms airplane wings and hold them out for 3 minutes",
    "Do 10 squats right where you stand",
    "Walk like a zombie for 2 minutes",
    "Sniff the air dramatically and say 'I smell adventure!'",
    "Say 'meow' at the end of every sentence for 5 minutes",
    "Ask a stranger if they’ve 'seen the dragon' today",
    "Stomp your feet like a dinosaur for 1 minute",
    "Try to high five every person you walk past for 3 minutes"
  ];

const discard = [];

function generateBingoCard() {
    // Check if bingo card already exists in localStorage
    let savedCard = JSON.parse(localStorage.getItem('bingoCard'));
    if (savedCard) {
      console.log("Bingo card loaded from localStorage.");
      return savedCard;
    }
  
    console.log("Generating new bingo card...");
  
    // Shuffle helper
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
  
    // Clone arrays to avoid mutating originals
    let coasters = shuffle([...possibleCoasters]);
    let flatWaterRides = shuffle([...possibleFlatAndWaterRides]);
    let challenges = shuffle([...possibleChallenges]);
  
    // Select required numbers
    let selectedCoasters = coasters.slice(0, 5);
    let selectedFlatWater = flatWaterRides.slice(0, 10);
    let selectedChallenges = challenges.slice(0, 10);
  
    // Combine all into one array and shuffle for placement
    let bingoItems = shuffle([...selectedCoasters, ...selectedFlatWater, ...selectedChallenges]);
  
    // Create 5x5 card structure
    let bingoCard = [];
    let index = 0;
    for (let row = 0; row < 5; row++) {
      let rowItems = [];
      for (let col = 0; col < 5; col++) {
        rowItems.push(bingoItems[index] || "FREE"); // Fallback safety
        index++;
      }
      bingoCard.push(rowItems);
    }
  
    // Save to localStorage
    localStorage.setItem('bingoCard', JSON.stringify(bingoCard));
    console.log("Bingo card generated and saved to localStorage.");
  
    return bingoCard;
}

function populateBingoTable(bingoCard) {
    // Get all rows of the table body
    const tableRows = document.querySelectorAll('.bingo-table tbody tr');
  
    for (let row = 0; row < 5; row++) {
      // Get all cells (td) in this row, skipping the first th cell (row number)
      const cells = tableRows[row].querySelectorAll('td');
  
      for (let col = 0; col < 5; col++) {
        cells[col].innerText = bingoCard[row][col];
      }
    }
  }

  function shuffle(deck, storageKey = 'shuffledDeck') {
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    localStorage.setItem(storageKey, JSON.stringify(shuffled));
    console.log(`${storageKey} shuffled and saved to localStorage.`);
    return shuffled;
  }
  
  
  // Generate or load bingo card
  const myBingoCard = generateBingoCard();
  
  // Populate the table visually
  populateBingoTable(myBingoCard);
  
  
  
  