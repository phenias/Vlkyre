// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const anime = require(`anime-actions`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
name: `kick`,
description: `Use this command to kick people from a group by tagging them  *${ᴋᴇɪ}kick @<person-to-kick>*  or replying to them  *${ᴋᴇɪ}kick*`,
𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}kick <tag> or <reply to person's text>`,
async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
console.log(
"🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
return Mizuki_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
𝓜𝖎𝖟𝖚ӄ𝖎,
`@${ꜱᴇɴᴅᴇʀeceived}, *❌ 𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!*


┌────⭓ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧     
│🌶️𝐆𝐫𝐨𝐮𝐩𝐬: _Admins & Devs!_
│🌽𝐏𝐫𝐢𝐯𝐚𝐭𝐞 _Everyone_
└───────⭓`
).catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
return Mizuki_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
𝓜𝖎𝖟𝖚ӄ𝖎,
`@${ꜱᴇɴᴅᴇʀeceived}, *❌ʜᴏᴡ ᴄᴀɴ ɪ ᴜꜱᴇ ᴀᴅᴍɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ ᴡʜᴇɴ ɪ ᴀᴍ ɴᴏᴛ ᴀᴅᴍɪɴ?*

💡𝐅𝐢𝐱: _Make Me Admin First_`
).catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`command only applicable in a group chat.`,
MessageType.text,
{ quoted: chat }
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
let owner = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId.split(`-`)[0];
if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
let PersonToRemove =
chat.message.extendedTextMessage.contextInfo.participant;
if (PersonToRemove === owner + `@s.whatsapp.net`) {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`*` + owner + ` is the owner of the group*`,
MessageType.text,
{ quoted: chat }
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (PersonToRemove === 𝓜𝖎𝖟𝖚ӄ𝖎.owner) {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`*ʀᴇQᴜᴇꜱᴛ ʀᴇᴊᴇᴄᴛᴇᴅ.* 😤
ᴡʜʏ ᴡᴏᴜʟᴅ ʏᴏᴜ ᴜꜱᴇ ᴍʏ ᴘᴏᴡᴇʀꜱ ᴛᴏ ᴋɪᴄᴋ ᴍʏꜱᴇʟꜰ ꜰʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ?!`,
MessageType.text,
{ quoted: chat }
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
var isMember = async (chatId, groupMembers) => {
var isMember = false;
if (!(chatId === undefined)) {
for (const index in groupMembers) {
if (chatId == groupMembers[index].jid.split(`@`)[0]) {
isMember = true;
}
}
return isMember;
} else {
return isMember;
}
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (!isMember) {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`*ᴘᴇʀꜱᴏɴ ɪꜱ ɴᴏᴛ ɪɴ ᴛʜᴇ ɢʀᴏᴜᴘ*`,
MessageType.text,
{ quoted: chat }
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (PersonToRemove) {
if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && 𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
var Receiver =
chat.message.extendedTextMessage.contextInfo.participant;
var personreceived = Receiver.substring(0, Receiver.length - 15);

await ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
{
url: await anime.kick(),
},
MessageType.image,
{
quoted: chat,
mimetype: Mimetype.jpeg || Mimetype.png,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
caption: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(4)}s_\n📅ᴅᴀᴛᴇ: _${Clock}_

@${ꜱᴇɴᴅᴇʀeceived} ᴋɪᴄᴋᴇᴅ @${personreceived} ᴏᴜᴛᴛᴀ ᴛʜᴇ ɢʀᴏᴜᴘ!`,
}
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

await ӄʀǟӄɨռʐ
.groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [PersonToRemove])
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} else {
await ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
{
url: await anime.kick(),
},
MessageType.image,
{
quoted: chat,
mimetype: Mimetype.jpeg || Mimetype.png,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
caption: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(4)}s_\n📅ᴅᴀᴛᴇ: _${Clock}_

@${ꜱᴇɴᴅᴇʀeceived} ᴋɪᴄᴋᴇᴅ ᴛʜᴀᴛ ᴘᴇʀꜱᴏɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ!`,
}
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

await ӄʀǟӄɨռʐ
.groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [PersonToRemove])
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
}
}

return;
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (!arg[0]) {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
MessageType.text,
{ quoted: chat }
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (arg[0][0] == `@`) {
const number = arg[0].substring(1);
if (isNaN(number)) {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
MessageType.text,
{ quoted: chat }
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (number + `@s.whatsapp.net` === 𝓜𝖎𝖟𝖚ӄ𝖎.owner) {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`*ʀᴇQᴜᴇꜱᴛ ʀᴇᴊᴇᴄᴛᴇᴅ.* 😤
ᴡʜʏ ᴡᴏᴜʟᴅ ʏᴏᴜ ᴜꜱᴇ ᴍʏ ᴘᴏᴡᴇʀꜱ ᴛᴏ ᴋɪᴄᴋ ᴍʏꜱᴇʟꜰ ꜰʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ?!`,
MessageType.text,
{ quoted: chat }
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (!(number === owner)) {
if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && 𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
var Receiver =
chat.message.extendedTextMessage.contextInfo.participant;
var personreceived = Receiver.substring(0, Receiver.length - 15);
await ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
{
url: await anime.kick(),
},
MessageType.video,
{
quoted: chat,
mimetype: "video/gif",
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
caption: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(4)}s_\n📅ᴅᴀᴛᴇ: _${Clock}_

@${ꜱᴇɴᴅᴇʀeceived} ᴋɪᴄᴋᴇᴅ @${personreceived} ᴏᴜᴛᴛᴀ ᴛʜᴇ ɢʀᴏᴜᴘ!`,
}
)
.then(
await ӄʀǟӄɨռʐ.groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [
number + `@s.whatsapp.net`,
])
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} else {
await ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
{
url: await anime.kick(),
},
MessageType.image,
{
quoted: chat,
mimetype: Mimetype.jpeg || Mimetype.png,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
caption: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(4)}s_\n📅ᴅᴀᴛᴇ: _${Clock}_

@${ꜱᴇɴᴅᴇʀeceived}, ᴋɪᴄᴋᴇᴅ ᴛʜᴀᴛ ᴘᴇʀꜱᴏɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ!`,
}
)
.then(
await ӄʀǟӄɨռʐ.groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [
number + `@s.whatsapp.net`,
])
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} else {
await ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`*` + owner + ` ɪꜱ ᴛʜᴇ ᴏᴡɴᴇʀ ᴏꜰ ᴛʜᴇ ɢʀᴏᴜᴘ*`,
MessageType.text,
{ quoted: chat }
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

return;
}
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
await ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
MessageType.text,
{ quoted: chat }
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
} catch (ℓαвєяяσя) {
await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
console.log(
"⬡==========================⬡    🍁 " +
ℓαвєяяσя +
"🍁    ⬡==========================⬡"
);
}
},
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
