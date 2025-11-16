// comics.js — master comic data (30 comics)

window.COMICS = [
  // ---------------------- NEW RELEASES ----------------------
  {
    id: 1,
    title: "Spider-Man: New Dawn",
    publisher: "Marvel",
    price: 299,
    cover: "assets/marvel/spiderman.jpg",
    category: "new",
    creators: "Stan Lee, Steve Ditko", // Creators of Spider-Man
    synopsis: `
Peter Parker’s life takes a drastic turn when a mysterious villain emerges with powers that challenge even Spider-Man’s agility and intellect. As Peter struggles to balance work, relationships, and responsibility, he must face a threat that forces him to evolve as a hero. “New Dawn” marks the beginning of a darker, more mature chapter for Spider-Man.
    `,
  },
  {
    id: 2,
    title: "Batman: Shadows",
    publisher: "DC",
    price: 349,
    cover: "assets/dc/bat.jpg",
    category: "new",
    creators: "Bob Kane, Bill Finger", // Creators of Batman
    synopsis: `
Gotham becomes the hunting ground of a silent mastermind manipulating the criminal underworld from the darkness. Batman follows a trail of clues that reveal connections to his past, pushing him deeper into psychological turmoil. As the shadows close in, Bruce must decide how far he’s willing to go to save Gotham again.
    `,
  },
  {
    id: 3,
    title: "Invincible: Reborn",
    publisher: "Image",
    price: 399,
    cover: "assets/marvel/invincible.jpg",
    category: "new",
    creators: "Robert Kirkman, Cory Walker", // Creators of the actual comic series Invincible
    synopsis: `
After surviving galaxy-shaking wars, Mark Grayson returns to Earth to rebuild his life—but peace is short-lived. Old enemies resurface while a new cosmic danger threatens the fragile balance between worlds. Mark must rediscover what being “Invincible” truly means when the fate of multiple dimensions rests on him.
    `,
  },
  {
    id: 4,
    title: "Thor: Godbreaker",
    publisher: "Marvel",
    price: 330,
    cover: "assets/marvel/thor.jpg",
    category: "new",
    creators: "Stan Lee, Larry Lieber, Jack Kirby", // Creators of the Marvel character Thor
    synopsis: `
An ancient cosmic executioner known as the Godbreaker awakens with one mission: to end all gods. Thor races across realms to prevent the collapse of divine order, confronting the limits of his strength and worthiness. The battle pushes him to rediscover the thunder within and what it means to be a god.
    `,
  },
  {
    id: 5,
    title: "Wonder Woman: Divine War",
    publisher: "DC",
    price: 360,
    cover: "assets/dc/wonder woman.jpg",
    category: "new",
    creators: "William Moulton Marston", // Creator of Wonder Woman
    synopsis: `
The forgotten gods of an ancient pantheon return and wage war against Olympus, dragging humanity into their conflict. Diana stands between two divine forces, fighting to protect Earth while confronting her own lineage. The war tests her compassion, strength, and identity as a true warrior of peace.
    `,
  },
  {
    id: 6,
    title: "Saga: Starfall",
    publisher: "Image",
    price: 350,
    cover: "assets/image/saga.jpg",
    category: "new",
    creators: "Brian K. Vaughan, Fiona Staples", // Creators of the actual comic series Saga
    synopsis: `
In a galaxy torn by political betrayal and endless war, a family struggles to stay together while being hunted by powerful factions. As a cosmic event called “Starfall” approaches, secrets are revealed that could rewrite galactic history. Their journey becomes a fight for survival—and hope.
    `,
  },

  // ---------------------- POPULAR SERIES ----------------------
  {
    id: 7,
    title: "X-Men: Phoenix Rising",
    publisher: "Marvel",
    price: 299,
    cover: "assets/marvel/x men.jpg",
    category: "popular",
    creators: "Stan Lee, Jack Kirby", // Creators of the X-Men
    synopsis: `
A new host for the Phoenix Force emerges unexpectedly, destabilizing the mutant world and triggering global panic. The X-Men must uncover the origins of this rebirth while navigating political tensions and internal divisions. But saving the host may mean sacrificing everything they stand for.
    `,
  },
  {
    id: 8,
    title: "Superman: Legacy",
    publisher: "DC",
    price: 399,
    cover: "assets/dc/superman.jpg",
    category: "popular",
    creators: "Jerry Siegel, Joe Shuster", // Creators of Superman
    synopsis: `
A powerful enemy challenges Superman’s ideals, questioning his place on Earth and his role as its protector. As society begins to doubt him, Clark must confront his past and redefine what his legacy truly means. The story explores hope, sacrifice, and the burden of being a symbol.
    `,
  },
  {
    id: 9,
    title: "Avengers: Eternal Storm",
    publisher: "Marvel",
    price: 399,
    cover: "assets/marvel/avengers.jpg",
    category: "popular",
    creators: "Stan Lee, Jack Kirby", // Creators of the Avengers
    synopsis: `
A cosmic entity capable of devouring entire star systems approaches Earth, creating catastrophic energy storms across the planet. The Avengers must unite with unlikely allies while facing personal conflicts that threaten to tear the team apart. Their battle becomes a test of endurance, unity, and destiny.
    `,
  },
  {
    id: 10,
    title: "Flash: Velocity Surge",
    publisher: "DC",
    price: 320,
    cover: "assets/dc/Flash.jpg",
    category: "popular",
    creators: "Gardner Fox, Harry Lampert", // Creators of the original (Jay Garrick) Flash
    synopsis: `
A strange energy burst disrupts the Speed Force, causing unpredictable time distortions across the world. Barry Allen must race through fractured timelines to fix the chaos before reality collapses. In doing so, he confronts alternate versions of himself and the limits of his speed.
    `,
  },
  {
    id: 11,
    title: "Spawn: Hell Rises",
    publisher: "Image",
    price: 380,
    cover: "assets/image/Spawn.jpg",
    category: "popular",
    creators: "Todd McFarlane", // Creator of Spawn
    synopsis: `
Ancient demon lords plot to merge Hell with Earth, unleashing horrors across the human world. Spawn must confront both external threats and the darkness within his own soul. Every choice he makes brings him closer to becoming either Earth's savior—or its destroyer.
    `,
  },
  {
    id: 12,
    title: "The Walking Dead: Afterlife",
    publisher: "Image",
    price: 320,
    cover: "assets/image/walking dead.jpg",
    category: "popular",
    creators: "Robert Kirkman, Tony Moore, Charlie Adlard", // Creators of the actual comic series The Walking Dead
    synopsis: `
A new settlement promises hope, safety, and a fresh start for survivors. But beneath the surface lies a dangerous ideology that threatens to break the fragile community apart. The line between the living and the dead becomes thinner than ever as trust fades.
    `,
  },

  // ---------------------- MARVEL ----------------------
  {
    id: 13,
    title: "Iron Man: Armored Vengeance",
    publisher: "Marvel",
    price: 350,
    cover: "assets/marvel/iron man.jpg",
    category: "regular",
    creators: "Stan Lee, Larry Lieber, Don Heck, Jack Kirby", // Creators of Iron Man
    synopsis: `
A stolen StarkTech suit falls into ruthless hands, causing chaos across the globe. Tony embarks on a mission to stop the technology he created from destroying innocent lives. Along the way, he confronts the consequences of his past innovations and the enemies they’ve made.
    `,
  },
  {
    id: 14,
    title: "Black Panther: Wakanda Legacy",
    publisher: "Marvel",
    price: 320,
    cover: "assets/marvel/black panther.jpg",
    category: "regular",
    creators: "Stan Lee, Jack Kirby", // Creators of Black Panther
    synopsis: `
A forgotten faction from Wakanda’s history rises to challenge the nation’s future. As traditions clash with modern values, T’Challa must protect his people while discovering hidden truths about ancient Wakandan bloodlines. The fate of both the throne and the kingdom hangs in the balance.
    `,
  },
  {
    id: 15,
    title: "Hulk: Gamma Rage",
    publisher: "Marvel",
    price: 280,
    cover: "assets/marvel/hulk.jpg",
    category: "regular",
    creators: "Stan Lee, Jack Kirby", // Creators of the Hulk
    synopsis: `
A new gamma monster emerges—stronger, smarter, and more ruthless than the Hulk. Bruce battles to control the beast within while trying to stop the creature from leaving a path of destruction. The fight becomes a struggle for identity, sanity, and survival.
    `,
  },
  {
    id: 16,
    title: "Doctor Strange: Mystic Realms",
    publisher: "Marvel",
    price: 360,
    cover: "assets/marvel/doctot strange.jpg",
    category: "regular",
    creators: "Stan Lee, Steve Ditko", // Creators of Doctor Strange
    synopsis: `
Dimensional barriers weaken as a rogue sorcerer begins draining magic from across the multiverse. Strange travels through surreal, collapsing realms to restore balance. His journey tests his mastery of the mystic arts and the burden of being Earth’s Sorcerer Supreme.
    `,
  },

  // ---------------------- DC ----------------------
  {
    id: 17,
    title: "Aquaman: Abyssal Crown",
    publisher: "DC",
    price: 310,
    cover: "assets/dc/aquaman.jpg",
    category: "regular",
    creators: "Mort Weisinger, Paul Norris", // Creators of Aquaman
    synopsis: `
Deep beneath the ocean lies an ancient kingdom long forgotten—and now rising again. Summoned by mysterious forces, Aquaman uncovers a threat that could drown the surface world. To stop it, he must face both mythical creatures and the ghosts of Atlantis’ past.
    `,
  },
  {
    id: 18,
    title: "Green Lantern: Cosmic Oath",
    publisher: "DC",
    price: 350,
    cover: "assets/dc/Green Lantern.jpg",
    category: "regular",
    creators: "Bill Finger, Martin Nodell (Alan Scott); John Broome, Gil Kane (Hal Jordan)", // Creators of the two main Green Lanterns
    synopsis: `
A prophecy tied to an ancient oath awakens a cosmic power that threatens the Lantern Corps. Hal Jordan is forced to journey to distant stars to unravel the truth. But the line between destiny and destruction becomes dangerously thin.
    `,
  },
  {
    id: 19,
    title: "Shazam: Thunder Born",
    publisher: "DC",
    price: 330,
    cover: "assets/dc/shazam.jpg",
    category: "regular",
    creators: "C. C. Beck, Bill Parker", // Creators of Shazam (Captain Marvel)
    synopsis: `
Billy Batson encounters a primordial storm entity that predates magic itself. As its power infects the world, he must unlock hidden abilities within the Shazam lineage. The battle forces Billy to grow from a child hero into a true champion.
    `,
  },
  {
    id: 20,
    title: "Joker: Laughing Madness",
    publisher: "DC",
    price: 340,
    cover: "assets/dc/joker.jpg",
    category: "regular",
    creators: "Bill Finger, Bob Kane, Jerry Robinson", // Creators of the Joker
    synopsis: `
The Joker unleashes a psychological game across Gotham—one with no rules and no clear end. As panic spreads, Batman must navigate traps designed to break his mind. The line between sanity and madness blurs in this tense thriller.
    `,
  },

  // ---------------------- IMAGE ----------------------
  {
    id: 21,
    title: "Witchblade: Bloodline",
    publisher: "Image",
    price: 310,
    cover: "assets/image/Witchblade.jpg",
    category: "regular",
    creators: "Marc Silvestri, David Wohl, Brian Haberlin, Christina Z", // Creators of Witchblade
    synopsis: `
A dark cult resurfaces seeking to reclaim the Witchblade for their own apocalyptic agenda. Its wielder is thrust into a conflict that blends supernatural forces with deadly human conspiracies. Her bond with the artifact becomes both her greatest weapon and her greatest curse.
    `,
  },
  {
    id: 22,
    title: "Kick-Ass: Rebellion",
    publisher: "Image",
    price: 280,
    cover: "assets/image/Kick ass.jpg",
    category: "regular",
    creators: "Mark Millar, John Romita Jr.", // Creators of the actual comic series Kick-Ass
    synopsis: `
A new vigilante adopts the Kick-Ass identity, inspiring a wave of rebellion against the city’s criminal underworld. But fame quickly brings danger as powerful enemies retaliate. The story combines brutal action with the struggle of becoming a true hero.
    `,
  },
  {
    id: 23,
    title: "Haunt: Phantoms Unleashed",
    publisher: "Image",
    price: 330,
    cover: "assets/image/haunt.jpg",
    category: "regular",
    creators: "Robert Kirkman, Todd McFarlane, Greg Capullo", // Creators of Haunt
    synopsis: `
The Haunt brothers are pulled into a conspiracy involving spirits escaped from a failed government experiment. Their powers intensify as they confront horrors from another dimension. Survival means understanding the source of their bond—and the enemies watching them.
    `,
  },
  {
    id: 24,
    title: "The Darkness: Void Rising",
    publisher: "Image",
    price: 350,
    cover: "assets/image/darkness.jpeg",
    category: "regular",
    creators: "Marc Silvestri, Garth Ennis, David Wohl", // Creators of The Darkness
    synopsis: `
Jackie Estacado faces a growing cosmic darkness that threatens to consume both him and the world. As the ancient power inside him awakens violently, Jackie must choose between embracing or resisting his cursed heritage. The consequences could reshape reality.
    `,
  },
  {
    id: 25,
    title: "Monstress: Dragonspire",
    publisher: "Image",
    price: 360,
    cover: "assets/image/monstress.jpg",
    category: "regular",
    creators: "Marjorie Liu, Sana Takeda", // Creators of the actual comic series Monstress
    synopsis: `
A long-slumbering dragon awakens, reigniting war between arcane factions. Maika becomes entangled in prophecies that point to her as either a savior or a destroyer. Her journey uncovers buried truths about magic, monsters, and herself.
    `,
  },
  {
    id: 26,
    title: "Shadowhawk: Night Assault",
    publisher: "Image",
    price: 280,
    cover: "assets/image/shadowhawk.jpg",
    category: "regular",
    creators: "Jim Valentino", // Creator of Shadowhawk
    synopsis: `
A militarized vigilante gang rises to take control of the city, spreading fear and violence. Shadowhawk returns with renewed purpose, battling corruption from streets to institutions. His fight reveals darker forces manipulating events behind the scenes.
    `,
  },

  // ---------------------- EXTRA ----------------------
  {
    id: 27,
    title: "Captain America: Sentinel",
    publisher: "Marvel",
    price: 300,
    cover: "assets/marvel/captain america.jpg",
    category: "regular",
    creators: "Joe Simon, Jack Kirby", // Creators of Captain America
    synopsis: `
Steve Rogers discovers a covert global operation manipulating governments and public opinion. As he exposes hidden enemies, Captain America must decide how far he’s willing to go to defend freedom. The mission pushes him beyond physical battles into moral ones.
    `,
  },
  {
    id: 28,
    title: "Green Arrow: Silent Hunt",
    publisher: "DC",
    price: 310,
    cover: "assets/dc/greenarrow.jpg",
    category: "regular",
    creators: "Mort Weisinger, George Papp", // Creators of Green Arrow
    synopsis: `
A series of silent killings lead Oliver Queen back to a deadly organization he once escaped from. Using stealth and precision, Green Arrow uncovers a conspiracy reaching deep into Star City’s elite. The hunt becomes intensely personal.
    `,
  },
  {
    id: 29,
    title: "Saga: Moonfall",
    publisher: "Image",
    price: 340,
    cover: "assets/image/sag.jpeg",
    category: "regular",
    creators: "Brian K. Vaughan, Fiona Staples", // Creators of the actual comic series Saga
    synopsis: `
A mysterious lunar event shifts gravitational forces, triggering chaos across the galaxy. A fugitive family becomes the key to understanding the phenomenon as they run from powerful factions. Their journey reveals ancient secrets hidden on—and beyond—the moon.
    `,
  },
  {
    id: 30,
    title: "Avengers: Titan Assault",
    publisher: "Marvel",
    price: 420,
    cover: "assets/marvel/avengerst.jpg",
    category: "regular",
    creators: "Stan Lee, Jack Kirby", // Creators of the Avengers
    synopsis: `
A Titan-class warlord invades Earth with an unstoppable cosmic army, overwhelming global defenses. The Avengers must unite stronger than ever, overcoming internal conflict to protect humanity. The battle stretches from Earth to distant galaxies in an epic showdown.
    `,
  },
];
