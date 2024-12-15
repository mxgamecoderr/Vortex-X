/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEd6eG5xQjlydzNmT2RiMWNTQ3NiQTRaV29OVkVFUXZFYlRWbVgvK2NWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFBtS3VGUEhaTklTQmtIOFhCUWZ5VXNEd3kvZlhyT0hxZHh6bmVnR0dWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QVFnREJFd2VqVjlVSmhhOS94UEhpV2NkTlM1YmsxN295SmNBemZwMVdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtNm9nVzdnemhaVXB3WmxLU1Zlb3dQNlc4bG40MXNxK3VkeEpNVnVEa25nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEcU81bndPRlNxaTQxTjV1RWVwLzlWeExKR2hKbEhSQW5kMjJQN1NNRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhMTXRyMGFDV3dyK3JybTJFMFR2cEZEdXFJbnZ0bzArSXZKZi8zOTFTeEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0M5MEdvMVNtenh3R29nWm15dDVMQXNGT3RKMjYralRLa0Yva0diT1UzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzlQand3QWEyL1I0Sk4rbjdoSUk0SG9XbzV3YlFka01uRXQ2bVRaZ3NrYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikdrc0M4c1lOR1AwQ29CODBqSFA0UkFURnFjams0VUJWZ1pRVGhSNU5udm91UXdQVHVDck9BRXhzTjliVlJZNkYwcFh5b0RXbHFGS3NyVTU2RnpLNEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6Inl3MlllbHlhUTRWK3FQbTdlT2tTZHRqNktXOWRYSmhOVkNHMHpDakhvbEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAyMTUwNjAzNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NjFFOTM4MTVCRDNGMzQ3OTNBMjQ3QzAwMEQ2Q0MzNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0MjAzNDA1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDIxNTA2MDM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEyNDE3OTNERDQ4QTA2QzIwRkI4MDdEQkRFMjNENzkwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQyMDM0MDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldKV2lXdjd0VHNtdmd4bHBOTGpNU0EiLCJwaG9uZUlkIjoiMGI3ZDQ1YWMtNzUyYi00ZDFlLTk0NDMtYmJkN2VlMTJkZGI0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVxeHVJb1VZc3JjYnI4YVhBYWNUSVNodENLbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmYUlrNURtNzZ2Uy8vbDZrQ0xVajlVN2kyQ2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR1hZTUpCTE4iLCJtZSI6eyJpZCI6IjIzNDkwMjE1MDYwMzY6NTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVk9SVEVYIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQL0FpdHdIRVBpdjk3b0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmN2JJTHNLcExVYnBhUm1OaTZYVkVpaVFBbTdNUlZtTHY2bkszWDVRVUVNPSIsImFjY291bnRTaWduYXR1cmUiOiJSQzBoM2Q4NHFldWxGMHpXTzBEMEZEQVhna3RlU0dkd2Zib1R3SnlTQmNlZXlHNVFkWnJ6a05DVS9MZW9EOU96TzVSUG1DSlM3UXUxRjhLeXUrZzRCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZDZ5N3UyZW56c0s1V082WnpheHJiUTY1SStBSTkvd0x5eEQ5TjJRNHA3aXFrU3dBVGg5dktHMU8zUDhBaytoVzVqMDBMZFpLZ05HRlc0TEJBVHllQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDIxNTA2MDM2OjUyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlgrMnlDN0NxUzFHNldrWmpZdWwxUklva0FKdXpFVlppNytweXQxK1VGQkQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQyMDMzOTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3ljIn0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "234";
const author = process.env.STICKER_AUTHOR || 'mxgamecoder';
const packname = process.env.PACKNAME || 'Vortex-X';
const dev = process.env.DEV || '2349021506036';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'Vortex-X';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
