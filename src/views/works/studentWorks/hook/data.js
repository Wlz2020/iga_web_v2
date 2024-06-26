export const levels = Object.freeze({
  All: 'All',
  BoardGame: 'Board Game',
  ConceptArt: 'Concept Art',
  DigtalGame: 'Digtal Game',
  Interactive: 'Interactive'
})

const imgPrePath = '/files/images/works/student/'
const imgSuffixPath = '.png'

export const studentWorksList = Object.freeze([
  {
    id: 1,
    img: imgPrePath + 's1/1' + imgSuffixPath,
    name: 'MAYFLY',
    subName: 'CUNXI GAO',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[DIGITAL GAME]',
    one: {
      img: imgPrePath + 's1/1' + imgSuffixPath,
      name: 'MAYFLY',
      subName: 'CUNXI GAO',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[DIGITAL GAME]'
    },
    two: {
      // isRight:true,
      desc: '"MAYFLY" is my first attempt at the unity engine and game development workflow. The player can only move indirectly by changing the terrain, and also have to overcome the chaotic gravity brought by shooting stars. Human power is easily dominated by external forces, but even every small effort is an attempt with all the strength. Just like the meaning of "mayfly" in Chinese, the one-day life of this creature is meaningless in human eyes, but for itself, that day is its splendid life.',
      list: [imgPrePath + 's1/2' + imgSuffixPath, imgPrePath + 's1/3' + imgSuffixPath]
    },
    three: [
      imgPrePath + 's1/4' + imgSuffixPath,
      imgPrePath + 's1/5' + imgSuffixPath,
      imgPrePath + 's1/6' + imgSuffixPath
    ]
  },
  {
    id: 2,
    img: imgPrePath + 's2/1' + imgSuffixPath,
    name: 'CON-SELOR',
    subName: 'CATHERINE LUO',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[BOARD GAME]',
    one: {
      img: imgPrePath + 's2/1' + imgSuffixPath,
      name: 'CON-SELOR',
      subName: 'CATHERINE LUO',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[BOARD GAME]'
    },
    two: {
      isRight: true,
      desc:
        "Con-selor is a betting, psychological and multilateral competition game inspired by the 2019 US Admission Bribery Scandal. The game was designed to expose the 'pull strings' in US admissions, and the racial preferences universities hold towards applicants. In this game, players may act as a college counsellor, \"work on\" the students they bet to meet the college's requirements and win the bonuses. As a corporate project, I was in charge of the game design and project management, while my teammate Lixue was responsible for the visual design.\n" +
        '\n' +
        'Genre\n' +
        '\n' +
        'Betting, Bluffing, Hand management, Psychological competition.\n',
      list: [imgPrePath + 's2/2' + imgSuffixPath, imgPrePath + 's2/3' + imgSuffixPath]
    },
    three: [imgPrePath + 's2/4' + imgSuffixPath]
  },
  {
    id: 3,
    img: imgPrePath + 's3/1' + imgSuffixPath,
    name: 'GUN SMITH',
    subName: 'ROUYU ZHANG',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[DIGITAL GAME]',
    one: {
      img: imgPrePath + 's3/1' + imgSuffixPath,
      name: 'GUN SMITH',
      subName: 'ROUYU ZHANG',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[DIGITAL GAME]'
    },
    two: {
      // isRight:true,
      desc: 'You recently took over a gun store. Place your favorite weapons on the shelf and customize them for your customers’ special requirements. Be a part of their stories with your weapon selections. Earn collections from your favorite customers and unlock more weapons and features.',
      list: [imgPrePath + 's3/2' + imgSuffixPath, imgPrePath + 's3/3' + imgSuffixPath]
    },
    three: [imgPrePath + 's3/4' + imgSuffixPath]
  },
  {
    id: 4,
    img: imgPrePath + 's4/1' + imgSuffixPath,
    name: 'BLOOD LAKE',
    subName: 'LIU CHANG',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[CONCEPT ART] [3D]',
    one: {
      img: imgPrePath + 's4/1' + imgSuffixPath,
      name: 'BLOOD LAKE',
      subName: 'LIU CHANG',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[CONCEPT ART] [3D]'
    },
    two: {
      // isRight:true,
      desc:
        'Background\n' +
        '\n' +
        'On the road to the Lake of Blood is a stone tablet which reads: "The Lake of Blood is a lake where the tears of the sorrowful gather, for the tears will eventually run out, but the endless sorrow will continue to flow in blood."\n' +
        'The Lake of Blood is a place only accessible to the "voiceless", of whom there are very few records, and who are often said to sob in the shadows. The gods mourned for them and took away their voices so that they would never cry again.\n' +
        '\n' +
        'Synopsis\n' +
        '\n' +
        'The protagonist is under pressure from work and is very ill, so he decides to travel by car, but is affected by the fog and the night. The protagonist is lost in the darkness and when he gets out of the car to look for his target, he sees a stone monument with the word "Blood Lake" engraved on it. The protagonist feels that something is wrong and wants to get out of here. As he escapes, memories from the past keep flashing through his mind and he starts to encounter some strange things ......\n',
      list: [imgPrePath + 's4/2' + imgSuffixPath, imgPrePath + 's4/3' + imgSuffixPath]
    },
    three: [
      imgPrePath + 's4/4' + imgSuffixPath,
      imgPrePath + 's4/5' + imgSuffixPath,
      imgPrePath + 's4/6' + imgSuffixPath,
      imgPrePath + 's4/7' + imgSuffixPath
    ]
  },
  {
    id: 5,
    img: imgPrePath + 's5/1' + imgSuffixPath,
    name: 'STAR WAR - THE FIVE GUARDIANS',
    subName: 'LIU CHANG',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[CONCEPT ART] [3D]',
    one: {
      img: imgPrePath + 's5/1' + imgSuffixPath,
      name: 'STAR WAR - THE FIVE GUARDIANS',
      subName: 'LIU CHANG',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[CONCEPT ART] [3D]'
    },
    two: {
      isRight: true,
      desc:
        'Star Wars: The Five Guardians is a turn-based combat game. Players need to build their own five-person team to resist the attack from the dark empire, and further gather like-minded comrades to form your own resistance army\n' +
        '\n' +
        'Genre: Turn-based \n' +
        'Audience: Star war addict, turn-based fanatic\n' +
        ' My Role in project: Designer, Programmer \n' +
        'Artist: Unity Asset Store :)',
      list: [imgPrePath + 's5/2' + imgSuffixPath, imgPrePath + 's5/3' + imgSuffixPath]
    },
    three: [imgPrePath + 's5/4' + imgSuffixPath]
  },
  {
    id: 6,
    img: imgPrePath + 's6/1' + imgSuffixPath,
    name: 'THE WAY HOME',
    subName: 'ZIXUAN HE',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[RHYTHM GAME]',
    one: {
      img: imgPrePath + 's6/1' + imgSuffixPath,
      name: 'THE WAY HOME',
      subName: 'ZIXUAN HE',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[RHYTHM GAME]'
    },
    two: {
      // isRight:true,
      desc:
        'background setting: The story happened in the very far future of an unknown universe, the human races have already extinct, and earth was occupied by robots, they build their own civilization up on the ruins of the previous one.\n' +
        '\n' +
        '- the background setting and art concept took references from the game Death Stranding, Detroit: Become Human, Horizon, and TV series West World.\n' +
        '\n' +
        '- The story begins in a robot structure built by a waterfall. Far to the other side of the horizon, there is a tall tower. and one day, the main character, Lucy, felt a strong sense of calling from the tower, and she began to see strange illusions. So she take her friend Rob and sneak out of the “home”, set off on her search for the answers.\n' +
        '\n' +
        'On the way from the town to the tower, Lucy walked through sev- eral different scenes and terrains (see the map), but there are no one out there, only broken human ruins, or some cowardly robot peeking from the dark. Lucy’s goal is to go to the landmark of each area, explore the human remains and their stories.\n' +
        '\n',
      list: [imgPrePath + 's6/2' + imgSuffixPath, imgPrePath + 's6/3' + imgSuffixPath]
    },
    three: [
      imgPrePath + 's6/4' + imgSuffixPath,
      imgPrePath + 's6/5' + imgSuffixPath,
      imgPrePath + 's6/6' + imgSuffixPath
    ]
  },
  {
    id: 7,
    img: imgPrePath + 's7/1' + imgSuffixPath,
    name: 'DUNHUANG: A LOST TALE OF SPIRITUAL GAME',
    subName: 'RUOCHEN WU',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[CONCEPT DESIGN]',
    one: {
      img: imgPrePath + 's7/1' + imgSuffixPath,
      name: 'DUNHUANG: A LOST TALE OF SPIRITUAL GAME',
      subName: 'RUOCHEN WU',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[CONCEPT DESIGN]'
    },
    two: {
      isRight: true,
      desc: 'Based on a Buddhist tale from the Mogao Grottoes in Dunhuang, I designed a music rhythm game that incorporates the aesthetics of traditional murals. In the game, the player will take on the role of the Spiritual Deer and embark on a fantastical adventure as they complete their mission in the world of music. During the process, I explored the formal possibilities of communicating and preserving cultural heritage, including the creation of a multifaceted immersive experience.',
      list: [imgPrePath + 's7/2' + imgSuffixPath, imgPrePath + 's7/3' + imgSuffixPath]
    },
    three: [
      imgPrePath + 's7/4' + imgSuffixPath,
      imgPrePath + 's7/5' + imgSuffixPath,
      imgPrePath + 's7/6' + imgSuffixPath,
      imgPrePath + 's7/7' + imgSuffixPath
    ]
  },
  {
    id: 8,
    img: imgPrePath + 's8/1' + imgSuffixPath,
    name: 'DON’T MAKE IT EXPLOSION',
    subName: 'LIXIN YOU',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[COOPERATIVE SHOOTING GAME]',
    one: {
      img: imgPrePath + 's8/1' + imgSuffixPath,
      name: 'DON’T MAKE IT EXPLOSION',
      subName: 'LIXIN YOU',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[COOPERATIVE SHOOTING GAME]'
    },
    two: {
      // isRight:true,
      desc: 'In this game, one player needs to role-play an nucleus and another player needs to role-play an electron of the nucleus in the Microcosm. The goal of nucle- us is to avoid collision with other nucleus and the goal of electron is to protect its own nucleus and destroy all other nucleus that may collide its nucleus.',
      list: [imgPrePath + 's8/2' + imgSuffixPath, imgPrePath + 's8/3' + imgSuffixPath]
    },
    three: [
      imgPrePath + 's8/4' + imgSuffixPath,
      imgPrePath + 's8/5' + imgSuffixPath,
      imgPrePath + 's8/6' + imgSuffixPath
    ]
  },
  {
    id: 9,
    img: imgPrePath + 's9/1' + imgSuffixPath,
    name: 'LITTLE SHOP OF HORRORS',
    subName: 'ZIHE WANG',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[PROJECT PROPOSAL]',
    one: {
      img: imgPrePath + 's9/1' + imgSuffixPath,
      name: 'LITTLE SHOP OF HORRORS',
      subName: 'ZIHE WANG',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[PROJECT PROPOSAL]'
    },
    two: {
      isRight: true,
      desc: 'This project proposal introduces a narrative adventure game inspired from the Broadway musical "The Little Shop of Horrors". Seymour (You) is a flower shop staff who pines for co-worker Audrey. During a total eclipse, he bought an unusual plant from a Chinese businessman. However, Seymour soon discovers that the flower is drinking blood to survive. Between conscience and fame, the battle of good and evil begins.',
      list: [imgPrePath + 's9/2' + imgSuffixPath, imgPrePath + 's9/3' + imgSuffixPath]
    },
    three: [
      imgPrePath + 's9/4' + imgSuffixPath,
      imgPrePath + 's9/5' + imgSuffixPath,
      imgPrePath + 's9/6' + imgSuffixPath
    ]
  },
  {
    id: 10,
    img: imgPrePath + 's10/1' + imgSuffixPath,
    name: 'PUDDINGVERSE',
    subName: 'LI ZHANG',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[UI/UX] [PRODUCT DESIGN] [SERVICE DESIGN]',
    one: {
      img: imgPrePath + 's10/1' + imgSuffixPath,
      name: 'PUDDINGVERSE',
      subName: 'LI ZHANG',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[UI/UX] [PRODUCT DESIGN] [SERVICE DESIGN]'
    },
    two: {
      isRight: true,
      desc:
        'Design Challenge\n' +
        '\n' +
        'The original problem space focuses on picky-eating be- havior of toddlers. During the research, I identified this as a common issue among young children aged 4-8, which is also one of the most serious issues that troubles parents.\n' +
        '\n' +
        'Design Response\n' +
        '\n' +
        'I designed and developed PuddingVerse, an interactive dinning, featuring gamified quest and dynamic interac- tion, which aims at improving the dinning behavior of toddlers.\n',
      list: [imgPrePath + 's10/2' + imgSuffixPath, imgPrePath + 's10/3' + imgSuffixPath]
    },
    three: [imgPrePath + 's10/4' + imgSuffixPath]
  },
  {
    id: 11,
    img: imgPrePath + 's11/1' + imgSuffixPath,
    name: 'IMPASSE',
    subName: 'RUIHAO ZHANG',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[NARRATIVE PUZZLE GAME]',
    one: {
      img: imgPrePath + 's11/1' + imgSuffixPath,
      name: 'IMPASSE',
      subName: 'RUIHAO ZHANG',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[NARRATIVE PUZZLE GAME]'
    },
    two: {
      // isRight:true,
      desc: 'This is a 3D narrative puzzle game based on Unreal 5 Engine. In game, the player takes on the role of a soldier suffering from PTSD and wanders between reality and fantasy. During the game, the player will constantly get negative feedback, causing the player not to enter a state of flow and focus more on the narrative than on the gameplay.',
      list: [imgPrePath + 's11/2' + imgSuffixPath, imgPrePath + 's11/3' + imgSuffixPath]
    },
    three: [
      imgPrePath + 's11/4' + imgSuffixPath,
      imgPrePath + 's11/5' + imgSuffixPath,
      imgPrePath + 's11/6' + imgSuffixPath,
      imgPrePath + 's11/7' + imgSuffixPath
    ]
  },
  {
    id: 12,
    img: imgPrePath + 's12/1' + imgSuffixPath,
    name: 'WHITEBRIDGE CAVALRY',
    subName: 'MIKE WU',
    time: '[2023 FALL]',
    school: '[NYU]',
    desc: '[BOARD GAME]',
    one: {
      img: imgPrePath + 's12/1' + imgSuffixPath,
      name: 'WHITEBRIDGE CAVALRY',
      subName: 'MIKE WU',
      time: '[2023 FALL]',
      school: '[NYU]',
      desc: '[BOARD GAME]'
    },
    two: {
      // isRight:true,
      desc: 'Before Wilt founded the Whitebridge, human beings lived in some harsh environments, such as the lava lode in the southernmost part of the Midworld, where the billowing smoke obscured the sky and only the most stubborn plants and animals were strong enough to live in here. People in here developed the alchemy, to change the lava into the drinking water and hunt the most powerful and tenacious beasts in the leylines for food, of course this includes dragons. Another area with harsh conditions is the northernmost region of the eastern world. During summer, people can grow crops, and then consume it in winter. The summer environment is harsh, but warm enough to provide some space for plants to grow, and sometimes there are Animals move in. In winter, it’s the coldest place in the world. There is no sun shining upon the head, there’s no animals or living plants, and the value of food is as high as gold.\n',
      list: [imgPrePath + 's12/2' + imgSuffixPath, imgPrePath + 's12/3' + imgSuffixPath]
    },
    three: [imgPrePath + 's12/4' + imgSuffixPath]
  }
])
