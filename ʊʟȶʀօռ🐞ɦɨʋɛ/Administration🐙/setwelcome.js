// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType } = require(`@adiwajshing/baileys`);
const Greetings = require(`../../ʊʟȶʀօռ/wlcmr`);
const ℓιєηт = require("../../ʊʟȶʀօռ/catch");
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `setwelcome`,
  description: `Welcome new members to the group with a custom message.`,
  ƈʏɮօʀɢʍօʀɛ: `
New members of a group chat will be welcomed with a message. It can be an image, video, gif with caption or just a text message.
Use this module to either set, update or delete the existing message.
The welcome option can be disabled but saved using the   *${UltronSitreper.ULTRONIX}welcome  off*  module. In order to delete the existing message, use  *${UltronSitreper.ULTRONIX}welcome  delete*${UltronSitreper.ULTRONIX}  Do note, the welcome option is still enabled after you use the delete option.`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    try {
      if (!ʊʟȶʀօռ.isGroup) {
        υℓтяσηℓιєηт
          .sendMessage(
            ʊʟȶʀօռ.chatId,
            `This module is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
          });
        return;
      }
      var Msg = await Greetings.getMessage(ʊʟȶʀօռ.chatId, `welcome`);
      if (Arc.length == 0) {
        var enabled = await Greetings.checkSettings(ʊʟȶʀօռ.chatId, `welcome`);
        try {
          if (enabled === false || enabled === undefined) {
            υℓтяσηℓιєηт
              .sendMessage(
                ʊʟȶʀօռ.chatId,
                `Set a welcome message first.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
              });
            return;
          } else if (enabled === `OFF`) {
            υℓтяσηℓιєηт
              .sendMessage(
                ʊʟȶʀօռ.chatId,
                `Greetings are enabled: False \nCurrently greeting new members with:`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
              });
            υℓтяσηℓιєηт
              .sendMessage(ʊʟȶʀօռ.chatId, Msg.message, MessageType.text)
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
              });
            return;
          }

          υℓтяσηℓιєηт
            .sendMessage(
              ʊʟȶʀօռ.chatId,
              `Greetings are enabled: True \nCurrently greeting new members with:`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
            });
          υℓтяσηℓιєηт
            .sendMessage(ʊʟȶʀօռ.chatId, Msg.message, MessageType.text)
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
            });
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      } else {
        try {
          if (Arc[0] === `OFF` || Arc[0] === `off` || Arc[0] === `Off`) {
            switched = `OFF`;
            await Greetings.changeSettings(ʊʟȶʀօռ.chatId, switched);
            υℓтяσηℓιєηт
              .sendMessage(
                ʊʟȶʀօռ.chatId,
                `Welcome message has been disabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
              });
            return;
          }
          if (Arc[0] === `ON` || Arc[0] === `on` || Arc[0] === `On`) {
            switched = `ON`;
            await Greetings.changeSettings(ʊʟȶʀօռ.chatId, switched);
            υℓтяσηℓιєηт
              .sendMessage(
                ʊʟȶʀօռ.chatId,
                `Welcome message has been enabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
              });
            return;
          }
          if (Arc[0] === `delete`) {
            var Msg = await Greetings.deleteMessage(ʊʟȶʀօռ.chatId, `welcome`);
            if (Msg === false || Msg === undefined) {
              υℓтяσηℓιєηт
                .sendMessage(
                  ʊʟȶʀօռ.chatId,
                  `Set a welcome message first.`,
                  MessageType.text
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
                });
              return;
            }

            await υℓтяσηℓιєηт
              .sendMessage(
                ʊʟȶʀօռ.chatId,
                `Welcome message deleted.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
              });
            return;
          }
          text = ʊʟȶʀօռ.body.replace(
            ʊʟȶʀօռ.body[0] + ʊʟȶʀօռ.moduleName + ` `,
            ``
          );
          if (Msg === false || Msg === undefined) {
            await Greetings.setWelcome(ʊʟȶʀօռ.chatId, text);
            await υℓтяσηℓιєηт
              .sendMessage(
                ʊʟȶʀօռ.chatId,
                `Welcome message updated and enabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
              });
            return;
          } else {
            await Greetings.deleteMessage(ʊʟȶʀօռ.chatId, `welcome`);
            await Greetings.setWelcome(ʊʟȶʀօռ.chatId, text);
            await υℓтяσηℓιєηт
              .sendMessage(
                ʊʟȶʀօռ.chatId,
                `Welcome message updated and enabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
              });
            return;
          }
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      }
    } catch (cᴇʀʀᴏʀ) {
      υℓтяσηℓιєηт.sendMessage(
        ʊʟȶʀօռ.chatId,
        `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
      return;
    }
  },
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
