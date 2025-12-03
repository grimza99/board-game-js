const GAME_LIST = [
  {
    id: 1,
    name: "카탄의 개척자들 (Catan)",
    players: "3-4",
    playtime: 60,
    difficulty: "중간",
    image: "public/game-image/main/1-catan.jpeg",
    description: "자원을 모아 섬을 개척하는 전략 게임입니다.",
  },
  {
    id: 2,
    name: "티켓투라이드 (Ticket to Ride)",
    players: "2-4",
    playtime: 30,
    difficulty: "쉬움",
    image: "public/game-image/main/2-ticket_to_ride.jpeg",
    description: "자원을 모아 섬을 개척하는 전략 게임입니다.",
  },
  {
    id: 3,
    name: "루미큐브 (Rummikub)",
    players: "2-4",
    playtime: 20,
    difficulty: "쉬움",
    image: "public/game-image/detail/3-rummikub.jpeg",
    description:
      "세계에서 가장 인기있는 가족 게임 중 하나로, 숫자 타일을 이용해 다양한 조합을 만들어내는 전략 게임입니다.",
  },
  {
    id: 4,
    name: "할리갈리 (Halli Galli)",
    players: "2-6",
    playtime: 15,
    difficulty: "쉬움",
    image: "public/game-image/main/4-halli-galli.jpeg",
    description:
      "빠른 판단력과 반사 신경이 요구되는 카드 게임으로, 과일이 그려진 카드를 보고 종을 빠르게 치는 게임입니다.",
  },
  {
    id: 5,
    name: "스플렌더 (Splendor)",
    players: "2-4",
    playtime: 30,
    difficulty: "중간",
    image: "public/game-image/main/5-splendor.jpeg",
    description:
      "르네상스 시대의 보석 상인이 되어 보석을 수집하고, 건물을 건설하여 최고의 상인이 되는 전략 게임입니다.",
  },
  {
    id: 6,
    name: "아줄 (Azul)",
    players: "2-4",
    playtime: "40",
    difficulty: "쉬움",
    image: "public/game-image/main/6-Azul.jpeg",
    description:
      "공장에서 타일을 가져와 자신의 벽을 채우며 패턴과 콤보로 점수를 얻는 추상 전략 게임입니다.",
  },
  {
    id: 7,
    name: "스컬 (skull)",
    players: "3-6",
    playtime: "30",
    difficulty: "쉬움",
    image: "public/game-image/main/7-skull.jpeg",
    description:
      "꽃과 해골을 섞어 내고, 도전으로 상대의 블러핑을 꿰뚫는 심리전 게임",
  },
  {
    id: 8,
    name: "팬데믹 (Pandemic)",
    players: "2-4",
    playtime: "50",
    difficulty: "어려움",
    image: "public/game-image/main/8-pandemic.jpeg",
    description:
      "전 세계에 퍼진 질병을 치료하고 인류를 구하는 협력 전략 게임입니다.",
  },
  {
    id: 9,
    name: "라스베가스 (Las Vegas)",
    players: "2-5",
    playtime: "30",
    difficulty: "쉬움",
    image: "public/game-image/main/9-Las.Vegas.jpeg",
    description:
      "주사위를 굴려 카지노에 배치하고, 가장 많은 돈을 벌어 승리하는 게임입니다.",
  },
  {
    id: 10,
    name: "코드네임 (Codenames)",
    players: "4-8",
    playtime: "20",
    difficulty: "중간",
    image: "public/game-image/main/10-Codenames.jpeg",
    description:
      "스파이 마스터가 내는 단어 힌트를 통해, 팀원들이 우리 팀 단어를 찾는 팀 대결 단어 게임입니다.",
  },
  {
    id: 11,
    name: "보난자 (Bohnanza)",
    players: "3-7",
    playtime: "45",
    difficulty: "중간",
    image: "public/game-image/main/11-Bohnanza.jpeg",
    description:
      "콩을 심고 거래하며 수확하여 가장 많은 금화를 모으는 전략 카드 게임입니다.",
  },
  {
    id: 12,
    name: "러브레터 (Love Letter)",
    players: "2-4",
    playtime: "20",
    difficulty: "쉬움",
    image: "public/game-image/main/12-Love.Letter.jpeg",
    description:
      "왕궁에서 공주의 마음을 얻기 위해 편지를 전달하는 짧고 간단한 카드 게임입니다.",
  },
  {
    id: 13,
    name: "도블 (Dobble / Spot It!)",
    players: "2-8",
    playtime: "15",
    difficulty: "쉬움",
    image: "public/game-image/main/13-Dobble.jpeg",
    description:
      "빠른 관찰력과 반사 신경이 요구되는 카드 게임으로, 카드들 사이에서 공통된 심볼을 찾아내는 게임입니다.",
  },
  {
    id: 14,
    name: "딕싯 (Dixit)",
    players: "3-6",
    playtime: "30",
    difficulty: "쉬움",
    image: "public/game-image/main/14-Dixit.jpeg",
    description:
      "상상력과 창의력을 발휘하여 아름다운 일러스트 카드로 이야기를 만들어가는 게임입니다.",
  },
  {
    id: 15,
    name: "테라포밍 마스 (Terraforming Mars)",
    players: "1-5",
    playtime: "120",
    difficulty: "어려움",
    image: "public/game-image/main/15-Terraforming-Mars.jpeg",
    description:
      "화성을 개척하고 환경을 변화시켜 인간이 살 수 있는 행성으로 만드는 전략 게임입니다.",
  },
  {
    id: 16,
    name: "킹도미노 (Kingdomino)",
    players: "2-4",
    playtime: "15-20",
    difficulty: "쉬움",
    image: "public/game-image/main/16-Kingdomino.jpeg",
    description:
      "도미노 형태의 타일을 draft하여 자기 왕국을 채우며 점수를 쌓는 가벼운 전략 게임입니다.",
  },
];

export default GAME_LIST;
