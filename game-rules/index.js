import { CATAN } from "./1-catan.js";
import { CODE_NAMES } from "./10-Codenames.js";
import { BOHNANAZA } from "./11-Bohnanza.js";
import { LOVE_LETTER } from "./12-Love.Letter.js";
import { DOBBLE } from "./13-Dobble.js";
import { DIXIT } from "./14-Dixit.js";
import { TERRAFORMING_MARS } from "./15-Terraforming-Mars.js";
import { KINGDOMINO } from "./16-Kingdomino.js";
import { TICKET_TO_RIDE } from "./2-ticket-to-ride.js";
import { RUMMIKUB } from "./3-rummikub.js";
import { HALLI_GALLI } from "./4-halli-galli.js";
import { SPLENDOR } from "./5-splendor.js";
import { AZUL } from "./6-Azul.js";
import { SKULL } from "./7-skull.js";
import { PANDEMIC } from "./8-pandemic.js";
import { LAS_VEGAS } from "./9-Las.Vegas.js";
import { WINNERS_CIRCLE } from "./17-winners-circle.js";
export const GAME_DETAIL_MAP = new Map();

GAME_DETAIL_MAP.set(1, CATAN); //카탄의 개척자들(Catan)
GAME_DETAIL_MAP.set(2, TICKET_TO_RIDE); //티켓 투 라이드(Ticket to Ride)
GAME_DETAIL_MAP.set(3, RUMMIKUB); //루미큐브(Rummikub)
GAME_DETAIL_MAP.set(4, HALLI_GALLI); //할리갈리(Halli Galli)
GAME_DETAIL_MAP.set(5, SPLENDOR); //스플렌더(Splendor)
GAME_DETAIL_MAP.set(6, AZUL); //아줄
GAME_DETAIL_MAP.set(7, SKULL); //스컬
GAME_DETAIL_MAP.set(8, PANDEMIC); //팬데믹
GAME_DETAIL_MAP.set(9, LAS_VEGAS); //라스베가스(Las Vegas)
GAME_DETAIL_MAP.set(10, CODE_NAMES); //코드네임(Codenames)
GAME_DETAIL_MAP.set(11, BOHNANAZA); //보난자(Bohnanza)
GAME_DETAIL_MAP.set(12, LOVE_LETTER); //러브레터(Love Letter)
GAME_DETAIL_MAP.set(13, DOBBLE); //도블
GAME_DETAIL_MAP.set(14, DIXIT); //딕싯
GAME_DETAIL_MAP.set(15, TERRAFORMING_MARS); //테라포밍 마스(Terraforming Mars)
GAME_DETAIL_MAP.set(16, KINGDOMINO); //킹도미노(Kingdomino)
GAME_DETAIL_MAP.set(17, WINNERS_CIRCLE); //위너스 서클(Winner's Circle)
