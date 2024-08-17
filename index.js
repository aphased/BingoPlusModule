import "./utils/firstInstall"
import "./utils/BingoApi"
import "./utils/dataManager"

import "./render/registerGui"

// Commands
import { bingoPlusCommand } from "./commands/bingoPlusCommand"
import "./commands/centuryCakeIsland"
import "./commands/bingoParty"
import "./commands/ratWaypoints"
//import "./commands/bingoGuides"

// Features
import "./features/bingo/accurateBingoPlaytime"
import "./features/bingo/achievements"
import "./features/bingo/bakerBlocker"
import "./features/bingo/bingoCardDisplay"
import "./features/bingo/bingoTimerDisplay"
import "./features/bingo/chickenHeadTimer"
import "./features/bingo/communityGoalDisplay"
//import "./features/bingo/dreadlordPickup"
import "./features/bingo/hideCompletedBingoGoals"

//import "./features/party/bingoPartyCommandConverter"
import "./features/party/chatBlockers"

import "./features/chat/oringoCost"

import "./features/splasher/splasherDisplay"
import "./features/splasher/potionUtils"
import "./features/splasher/hubSelector"

import "./features/world/rats"
import "./features/world/puzzlerSolver"
import "./features/world/windCompass"



/* TODO
 * - reminder to do bingo stuff like cakes, experiments, fetchur, puzzler, bednom
 * - hotm tree unlock reminders
 * - king talisman helper!
 * - fetchur/puzzler solvers?? so many mods have this xD
 * - community goal display stuff
 *      make it pinnable
 *      show total bingo points you're getting from current tiers and stuff
 * - custom bingo achievements
 * - trapper display
 * - splash display
 * - splasher features
 *      add overlay for currently hovering potion
 * - dreadlord sword drop warning (bingohelper module checks entities, but i dont think it's practical bc telekinesis)
 * - brewing stand name display
 * - broken bingo goal helper
 */


/*
    1.3.0 changelog
- rewrite hub selector display
- add setting to copy hub details if a splash potion is present
- remove no potion warning feature

    1.2.1 changelog
- added a setting to only show the splasher display during a bingo event
- added blocker for the red discord text in party chat
- readded /rats command (doc fixed)
- changed settings colour scheme
- fix incorrect bingo card detection when using /show
- fix bingo card display not respecting hide completed bingo goals

    1.2.0 changelog
- migrate to amaterasu
- fixed bingo detection while visiting players
- temporarily disable /rats command (it broke)

    1.1.3 changelog
- added potion abbreviations
- removed dialogue skipper
- moved chicken head timer to 'other'
- fix unwanted gui movement

    1.1.2 changelog
- added accurate bingo playtime
- added gone with the wind compass display
- changed puzzler solver to be on by default
- moved rat waypoints and puzzler solver to 'other'
- fixed long decimals when scaling display elements
- optimised splasher display

    1.1.1 changelog 
- added automatic achievement sending in party and guild
- added disclaimer to leecher display
- added puzzler solver
- changed rat waypoint colours
- optimised community goal display

*/
