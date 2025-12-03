import { CATAN } from "./1-catan.js";
import { TICKET_TO_RIDE } from "./2-ticket-to-ride.js";
import { RUMMIKUB } from "./3-rummikub.js";
import { HALLI_GALLI } from "./4-halli-galli.js";
import { SPLENDOR } from "./5-splendor.js";
import { AZUL } from "./6-Azul.js";
import { SKULL } from "./7-skull.js";
import { PANDEMIC } from "./8-pandemic.js";

export const GAME_DETAIL_MAP = new Map();

GAME_DETAIL_MAP.set(1, CATAN); //카탄의 개척자들(Catan)
GAME_DETAIL_MAP.set(2, TICKET_TO_RIDE); //티켓 투 라이드(Ticket to Ride)
GAME_DETAIL_MAP.set(3, RUMMIKUB); //루미큐브(Rummikub)
GAME_DETAIL_MAP.set(4, HALLI_GALLI); //할리갈리(Halli Galli)
GAME_DETAIL_MAP.set(5, SPLENDOR); //스플렌더(Splendor)
GAME_DETAIL_MAP.set(6, AZUL); //아줄
GAME_DETAIL_MAP.set(7, SKULL); //스컬
GAME_DETAIL_MAP.set(8, PANDEMIC); //팬데믹
