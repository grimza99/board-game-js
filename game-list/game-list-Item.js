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
  {
    id: 17,
    name: "위너스 서클 (Winner's Circle)",
    players: "2-6",
    playtime: "30-45",
    difficulty: "중간",
    image: "public/game-image/main/17-winners-circle.jpeg",
    description:
      "말 7마리의 능력치를 바탕으로 배팅하고, 경주 결과에 따라 점수를 획득하는 심리·예측 게임입니다.",
  },
  {
    id: 18,
    name: "도미니언 (Dominion)",
    players: "2-4",
    playtime: "30",
    difficulty: "중간",
    image: "public/game-image/main/18-dominion.jpeg",
    description:
      "덱 빌딩 카드 게임의 원조로, 다양한 카드를 조합해 자신의 덱을 강화하고 승점을 획득하는 전략 게임입니다.",
  },
  {
    id: 19,
    name: "사이쓰 (Scythe)",
    players: "1-5",
    playtime: "120",
    difficulty: "어려움",
    image: "public/game-image/main/19-Scythe.jpeg",
    description:
      "매우 어려운 게임으로, 대체 역사 배경의 전략 게임입니다. 자원 관리, 영역 확장, 전투 등을 통해 자신의 세력을 키워나가는 게임입니다.",
  },
  {
    id: 20,
    name: "퀵스 (Qwixx)",
    players: "2-5",
    playtime: "15",
    difficulty: "쉬움",
    image: "public/game-image/main/20-Qwixx.jpeg",
    description:
      "주사위를 굴려 숫자 칸을 채우며 점수를 얻는 간단하고 빠른 주사위 게임입니다.",
  },
  {
    id: 21,
    name: "디크립토 (Decrypto)",
    players: "4-8",
    playtime: "45",
    difficulty: "어려움",
    image: "public/game-image/main/21-decrypto.jpeg",
    description:
      "두 팀이 서로의 암호 단어를 유추하고 가짜 신호를 섞어 속이는 고급 단어 추리 게임입니다.",
  },
  {
    id: 22,
    name: "센추리: 향신료의 길 (Century: Spice Road)",
    players: "2-5",
    playtime: "40",
    difficulty: "중간",
    image: "public/game-image/main/22-Century-Spice-Road.jpeg",
    description:
      "향신료 큐브를 거래·업그레이드·교환하며 물건 카드를 구매하는 엔진 빌딩 게임입니다.",
  },
  {
    id: 23,
    name: "레지스탕스 아발론 (The Resistance Avalon)",
    players: "5-10",
    playtime: "30",
    difficulty: "중간",
    image: "public/game-image/main/23-Resistance-Avalon.jpeg",
    description:
      "선과 악으로 나뉘어 임무를 수행하는 정체 은폐 심리게임. 마피아의 전략 버전 게임입니다.",
  },
  {
    id: 24,
    name: "스플렌더 듀얼 (Splendor Duel)",
    players: "2",
    playtime: "30",
    difficulty: "중간",
    image: "public/game-image/main/24-Splendor-Duel.jpeg",
    description:
      "스플렌더의 2인 전용 버전으로, 보석을 수집하고 카드를 구매하여 최고의 상인이 되는 전략 게임입니다.",
  },
];

export default GAME_LIST;
