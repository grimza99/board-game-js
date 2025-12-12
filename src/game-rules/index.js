import * as G1 from './game-rules-1/index.js';
import * as G2 from './game-rules-2/index.js';
import * as G3 from './game-rules-3/index.js';
import * as G4 from './game-rules-4/index.js';
export const GAME_DETAIL_MAP = new Map();

GAME_DETAIL_MAP.set(1, G1.CATAN); //카탄의 개척자들(Catan)
GAME_DETAIL_MAP.set(2, G1.TICKET_TO_RIDE); //티켓 투 라이드(Ticket to Ride)
GAME_DETAIL_MAP.set(3, G1.RUMMIKUB); //루미큐브(Rummikub)
GAME_DETAIL_MAP.set(4, G1.HALLI_GALLI); //할리갈리(Halli Galli)
GAME_DETAIL_MAP.set(5, G1.SPLENDOR); //스플렌더(Splendor)
GAME_DETAIL_MAP.set(6, G1.AZUL); //아줄
GAME_DETAIL_MAP.set(7, G1.SKULL); //스컬
GAME_DETAIL_MAP.set(8, G1.PANDEMIC); //팬데믹
GAME_DETAIL_MAP.set(9, G1.LAS_VEGAS); //라스베가스(Las Vegas)
GAME_DETAIL_MAP.set(10, G1.CODE_NAMES); //코드네임(Codenames)
GAME_DETAIL_MAP.set(11, G1.BOHNANZA); //보난자(Bohnanza)
GAME_DETAIL_MAP.set(12, G1.LOVE_LETTER); //러브레터(Love Letter)
GAME_DETAIL_MAP.set(13, G1.DOBBLE); //도블
GAME_DETAIL_MAP.set(14, G1.DIXIT); //딕싯
GAME_DETAIL_MAP.set(15, G1.TERRAFORMING_MARS); //테라포밍 마스(Terraforming Mars)
GAME_DETAIL_MAP.set(16, G1.KINGDOMINO); //킹도미노(Kingdomino)
GAME_DETAIL_MAP.set(17, G1.WINNERS_CIRCLE); //위너스 서클(Winner's Circle)
GAME_DETAIL_MAP.set(18, G1.DOMINION); //도미니언(Dominion)
GAME_DETAIL_MAP.set(19, G1.SCYTHE); //사이쓰(Scythe)
GAME_DETAIL_MAP.set(20, G1.QWIXX); //퀵스(Qwixx)

GAME_DETAIL_MAP.set(21, G2.DECRYPTO); //디크립토(Decrypto)
GAME_DETAIL_MAP.set(22, G2.CENTURY_SPICE_ROAD); //센추리: 향신료의 길(Century: Spice Road)
GAME_DETAIL_MAP.set(23, G2.RESISTANCE_AVALON); //레지스탕스 아발론(The Resistance Avalon)
GAME_DETAIL_MAP.set(24, G2.SPLENDOR_DUEL); //스플렌더 듀얼(Splendor Duel)
GAME_DETAIL_MAP.set(25, G2.GLOOM_HAVEN); //글룸헤이븐(Gloomhaven)
GAME_DETAIL_MAP.set(26, G2.THROUGH_THE_AGES); //쓰루 디 에이지스(Through the Ages)
GAME_DETAIL_MAP.set(27, G2.GAIA_PROJECT); //가이아 프로젝트(Gaia Project)
GAME_DETAIL_MAP.set(28, G2.BARRAGE); //버라지(Barrage)
GAME_DETAIL_MAP.set(29, G2._7_WONDERS_DUEL); //7 원더스 대결(7 Wonders Duel)
GAME_DETAIL_MAP.set(30, G2.THE_CASTLES_OF_BURGUNDY); //버건디의 성들(The Castles of Burgundy)
GAME_DETAIL_MAP.set(31, G2.PUERTO_RICO); //푸에르토리코(Puerto Rico)
GAME_DETAIL_MAP.set(32, G2.KANBAN_EV); //칸반 EV(Kanban EV)
GAME_DETAIL_MAP.set(33, G2.TWILIGHT_STRUGGLE); //트와일라잇 스트러글(Twilight Struggle)
GAME_DETAIL_MAP.set(34, G2.ARK_NOVA); //아크노바
GAME_DETAIL_MAP.set(35, G2.ROOT); //루트(Root)
GAME_DETAIL_MAP.set(36, G2.WINGSPAN); //윙스팬(Wingspan)
GAME_DETAIL_MAP.set(37, G2.EVER_DELL); //에버델(Everdell)
GAME_DETAIL_MAP.set(38, G2.BRASS_BIRMINGHAM); //브래스: 버밍엄(Brass: Birmingham
GAME_DETAIL_MAP.set(39, G2.GREAT_WESTERN_TRAIL); //그레이트 웨스턴 트레일(Great Western Trail)
GAME_DETAIL_MAP.set(40, G2.SPIRIT_ISLAND); //스피릿 아일랜드(Spirit Island)

GAME_DETAIL_MAP.set(41, G3.AGRICOLA); //아그리콜라(Agricola)
GAME_DETAIL_MAP.set(42, G3.CONCORDIA); //콘코디아(Concordia)
GAME_DETAIL_MAP.set(43, G3.THE_CREW_MISSION_DEEP_SEA); //더 크루: 딥 시 미션(The Crew: Mission Deep Sea)
GAME_DETAIL_MAP.set(44, G3.CLANK); //클랭크(Clank)
GAME_DETAIL_MAP.set(45, G3.LOST_RUINS_OF_ARNAK); //로스트 루인 오브 아르낙(Lost Ruins of Arnak)
GAME_DETAIL_MAP.set(46, G3.CASCADIA); //캐스케이디아(Cascadia)
GAME_DETAIL_MAP.set(47, G3.HEAT_PEDAL_TO_THE_METAL); //히트: 페달 투 더 메탈(Heat: Pedal to the Metal)
GAME_DETAIL_MAP.set(48, G3.THE_ISLE_OF_CATS); //더 아일 오브 캣츠(The Isle of Cats)
GAME_DETAIL_MAP.set(49, G3.VITICULTURE); //비티컬처(Viticulture)
GAME_DETAIL_MAP.set(50, G3.POWER_GRID); //파워 그리드(Power Grid)
GAME_DETAIL_MAP.set(51, G3.HADRIANS_WALL); //해드리안스 월(Hadrian's Wall)
GAME_DETAIL_MAP.set(52, G3.PALADINS_OF_THE_WEST); //팔라딘 오브 더 웨스트 킹덤(Paladins of the West Kingdom)
GAME_DETAIL_MAP.set(53, G3.LISBOA); //리스보아(Lisboa)
GAME_DETAIL_MAP.set(54, G3.MARACAIBO); //마라카이보(Maracaibo)
GAME_DETAIL_MAP.set(55, G3.SKY_TEAM); //스카이팀
GAME_DETAIL_MAP.set(56, G3.SUSHI_GO_PARTY); //스시고파티
GAME_DETAIL_MAP.set(57, G3.CARCASSONNE); //카르카손
GAME_DETAIL_MAP.set(58, G3.STONE_AGE); //스톤에이지
GAME_DETAIL_MAP.set(59, G3.RAIL_ROAD_INK); //레일로드잉크
GAME_DETAIL_MAP.set(60, G3.SUMMONER_WARS); //서머너 워즈

GAME_DETAIL_MAP.set(61, G4.PATCHWORK); //패치워크
GAME_DETAIL_MAP.set(62, G4.A_FEAST_FOR_ODIN); //오딘을위하여
GAME_DETAIL_MAP.set(63, G4.BLOOD_RAGE); //블러드 레이지
GAME_DETAIL_MAP.set(64, G4.TRANJAN); //트라야누스
