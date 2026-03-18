module.exports = {
  // ─── Créateur — NE PAS MODIFIER ───────────
  creatorName: "DEV SHADOW 🌸 TECH 🌸",
  creatorNumber: "221766297256",
  creatorGithub: "https://github.com/guthubc-collab/AIGER-XMD",
  botName: "SHADOW-TECH",

  // ─── Déployeur — depuis .env ──────────────
  phoneNumber: process.env.PHONE_NUMBER,
  ownerNumber: process.env.OWNER_NUMBER?.split(":")[0],
  prefix: process.env.PREFIX || ".",
  mode: process.env.MODE || "public",
  menuImage: process.env.MENU_IMAGE,
  menuAudio: process.env.MENU_AUDIO,

  // ─── Liens fixes — NE PAS MODIFIER ────────
 // groupLink: "https://chat.whatsapp.com/BlQ6XlJDLnt1tUjPtfKHwY?mode=hqctcli?mode=gi_t",
  channelLink: "https://whatsapp.com/channel/0029VbBx6Qr3GJOpmxcy6Y1x",

  // ✅ Messages stylés pour groupe et chaîne !
  groupMessage:
    `╔══════════════════════════════╗\n` +
    `║   👥 *REJOINS LE GROUPE !*    ║\n` +
    `╚══════════════════════════════╝\n\n` +
    `❝ _Les grands ne restent pas_\n` +
    `_dans l'ombre... Rejoins-moi !_ ❞\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `🤖 *SHADOW-TECH Community*\n\n` +
    `☝️ _Rejoins le groupe pour :_\n` +
    `├ 📚 Maîtriser toutes les fonctionnalités\n` +
    `├ 🆕 Être le premier informé des nouveautés\n` +
    `├ 🛠️ Obtenir de l'aide en cas de problème\n` +
    `└ 👥 Rejoindre une communauté de passionnés\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `👉 *Clique et rejoins-nous !*\n`,

  channelMessage:
    `╔══════════════════════════════╗\n` +
    `║  📢 *SUIS LA CHAÎNE !*        ║\n` +
    `╚══════════════════════════════╝\n\n` +
    `❝ _Ceux qui suivent SHADOW-TECH_\n` +
    `_ne ratent jamais rien..._ ❞ 🌸\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `📢 *SHADOW-TECH — Canal Officiel*\n\n` +
    `🍀 _Suis la chaîne pour :_\n` +
    `├ 🆕 Nouvelles bots disponibles\n` +
    `├ 🔧 Mises à jour importantes\n` +
    `├ 💡 Astuces et conseils exclusifs\n` +
    `└ 🌸 Contenu exclusif du créateur\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `👉 *Abonne-toi maintenant !*\n`,

  // ─── Photos menu aléatoires ───────────────
  menuImages: [
    "https://files.catbox.moe/ye1edv.jpg",
    "https://files.catbox.moe/m9cxhw.jpg",
    "https://files.catbox.moe/arai9m.jpg",
    "https://files.catbox.moe/wcakpu.jpg",
    "https://files.catbox.moe/mqoz03.jpg",
  ],

  // ─── Photo kickall mystérieuse ────────────
  kickallImage: "https://files.catbox.moe/m9cxhw.jpg",
};
