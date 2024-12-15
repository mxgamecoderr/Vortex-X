/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFFQW4yZGlyenIxNnBMQzZpeFRhcGZmTWoyd2VmVHM5Ym5rN2l1dnNWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWtvL2Q4NUk3Qm5TcVZYVHFnKzd2VldmOVNXUktiK3lzZm5ZeXdaSDRRWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQ0ZZbzRFM01oeEpsbVhXalJYY1VFcG5tQjBNWGVBNEQzRXBUemVLUEYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqM3BwbTIzK09TdHppRk1HUzNFVnZIMGx1cmwwTFowUjNiK1R0aE9DbmpVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMdjVtMFZwYnJoS0FzM1EwOENaN3NpZzV5RGw4UDhNYmx0VVpUbDZoRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZtQmRvMUk3SVUybmk4SHdkK21vblU4MFZLSzhWNS8wTEZFeS91Z0x1M0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0x1ZXZxYXY2REc5bHhFblltZ0FDWFR6QkdxdG9uMUdLcWx2bjFxU0pWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEpOSG5OUmV6bXFJU2hhWUJBSWNZdjVyZDRhUUJ1dnNwbmFrcEpRQUlWST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlTa3BGZ29wVWozSkQ2c0hHc2hIcmVFQlFEVkYrZC9QWXl4czUrbnF3d2Fjbmt3djJPTHc4TjZ3Z0F1SmJYNjlyU2hHSGd2aFA5c1dnMDdUMGhLWEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6IjVsREFPVjJ6ZjBucWxGVkpTR2kxN3cxdlkwZUNXS3FaejNoblJQN25ZczQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJJVkVObWdoU0tDR0hwYnVacGJKdnciLCJwaG9uZUlkIjoiZWNkOWJhMmYtODNkZi00MWQwLWFiMmMtZjliNGNmODMwZTE4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5tT3hGWmllNEk1OWFiTFc2VDNnM25udC9oaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwd3dPUDVJMVlVeGFxYnNZSHdla0U2cm5pdUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkI5TlJKWUQiLCJtZSI6eyJpZCI6IjIzNDkwMjE1MDYwMzY6NTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvQWl0d0hFTDZQL0xvR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImY3YklMc0twTFVicGFSbU5pNlhWRWlpUUFtN01SVm1MdjZuSzNYNVFVRU09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNaYy9OTkFkbW9lTWZyU3FLaTd1ejZtS2NBNjMxUkE3d1Rqb05UL2FPeUJTRnF1ZHhFU29XOTQwN2hPUkZKMzd6b040aWhvc0RwUStMbTdGNDN3Y0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5T1pPQXFseUlwb0RTZ00yUUF6b0d1bmR1eVJIOGFQbHJ6eTNndWVZUjA4dEkxOGFwNmRydTlrN0Q2WWMrTDRtYlE5WU55ODB4N1g2TnZ1cVVEcE1Bdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMjE1MDYwMzY6NTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWCsyeUM3Q3FTMUc2V2taall1bDFSSW9rQUp1ekVWWmk3K3B5dDErVUZCRCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDI4MTE2NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDeWMifQ=='; // your session id here

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
const autoview = process.env.AUTOVIEW_STATUS || 'false';
const autolike = process.env.AUTOLIKE_STATUS || 'false';
const autoread = process.env.AUTOREAD || 'false';
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
