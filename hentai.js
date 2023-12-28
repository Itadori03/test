
const {suhail-md } = require("...Lord-itadori01\commands");
const axios = require('axios');


suhail-md({
  nomCom: "hwaifu",
  categorie: "Hentai",
  reaction: "🙄"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/nsfw/waifu'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    sh.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Erreur lors de la récupération des données : ' +error);
  }
});


  /////////////// hneko //////////
suhail-md({
  nomCom: "trap",
  categorie: "Hentai",
  reaction: "🙄"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/nsfw/big boobs'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    sh.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});

suhail-md({
  nomCom: "hneko",
  categorie: "Hentai",
  reaction: "🙄"
},
async (origineMessage, sh, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/nsfw/neko'//apiWaifu("neko"); // Remplace avec ton lien réel

  try { for (let i = 0 ;i < 5 ; i++) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

     sh.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});


suhail-md({
  nomCom: "blowjob",
  categorie: "Hentai",
  reaction: "🙄"
},
async (origineMessage, sh, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/nsfw/blowjob'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    sh.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});






