import settings from "../settings"
import constants from "../utils/constants"
import { bingoCheck } from "../utils/onbingo";

const PREFIX = constants.PREFIX

// Maxwell skipper

register("chat", (e) => {
    if(!settings.maxwell || !bingoCheck()) return
    ChatLib.say("/selectnpcoption thaumaturgist x_2");
    ChatLib.chat(PREFIX+"&aSkipped dialogue!");
}).setCriteria("Select an option: [Ok, then what?] ");

register("chat", (e) => {
    if(!settings.maxwell || !bingoCheck()) return
    ChatLib.say("/selectnpcoption thaumaturgist x_5");
    ChatLib.chat(PREFIX+"&aSkipped dialogue!");
}).setCriteria("Select an option: [Magical power?] ");

register("chat", (e) => {
    if(!settings.maxwell || !bingoCheck()) return
    ChatLib.say("/selectnpcoption thaumaturgist x_7");
    ChatLib.chat(PREFIX+"&aSkipped dialogue!");
}).setCriteria("Select an option: [That's amazing!] ");

// Sam skipper

register("chat", (e) => {
    if(!settings.sam || !bingoCheck()) return
    ChatLib.say("/selectnpcoption sam_assistant yes");
    ChatLib.chat(PREFIX+"&aSkipped dialogue!");
}).setCriteria("Help her out? [YES] [NO] ");

register("chat", (e) => {
    if(!settings.sam || !bingoCheck()) return
    ChatLib.say("/selectnpcoption sam yes");
    ChatLib.chat(PREFIX+"&aSkipped dialogue!");
}).setCriteria("Collect Wheat for Sam?\n[That's a great idea] [I'd rather not] ");

register("chat", (e) => {
    if(!settings.sam || !bingoCheck()) return
    ChatLib.say("/selectnpcoption sam_composter yes");
    ChatLib.chat(PREFIX+"&aSkipped dialogue!");
}).setCriteria("Sell leftover Wheat? \n [Good call!] [I'd rather keep it for myself] ");

// Pesthunter Phillip skipper

register("chat", (e) => {
    if(!settings.pesthunter_phillip || !bingoCheck()) return
    ChatLib.say("/selectnpcoption pesthunter_phillip x_2");
    ChatLib.chat(PREFIX+"&aSkipped dialogue!");
}).setCriteria("Select an option: [What's a pest?] ");

// Lone Adventurer skipper

register("chat", (e) => {
    if(!settings.lone_adventurer || !bingoCheck()) return
    ChatLib.say("/selectnpcoption lone_adventurer yes");
    ChatLib.say("/selectnpcoption lone_adventurer_2 yes");
    ChatLib.chat(PREFIX+"&aSkipped dialogue!");
}).setCriteria("Select an option: [YES] [NO] ");


