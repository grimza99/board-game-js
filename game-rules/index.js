import { CATAN } from "./1-catan.js";
import { TICKET_TO_RIDE } from "./2-ticket-to-ride.js";
import { RUMMIKUB } from "./3-rummikub.js";
import { HALLI_GALLI } from "./4-halli-galli.js";

export const GAME_DETAIL_MAP = new Map();

GAME_DETAIL_MAP.set(1, CATAN); //카탄의 개척자들(Catan)
GAME_DETAIL_MAP.set(2, TICKET_TO_RIDE); //티켓 투 라이드(Ticket to Ride)
GAME_DETAIL_MAP.set(3, RUMMIKUB); //루미큐브(Rummikub)
GAME_DETAIL_MAP.set(4, HALLI_GALLI); //할리갈리(Halli Galli)
