/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFGSFFwblFWODRhQVoyRFBWQVdVT0VCaGloSjR1c1VFd3B3R01Ic2gwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHdVTlg5QVBZaFZZL0Y0by9KeGdwZERvQXRzSml3Tm9ndEUvNlBkU3RFcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPR2t6bHV4OHFzMk92Q2M3V0JRNWF5SE1QZGFvNGtjckRuZkZvd2xDZ1Z3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnNEE3UDJvM3Y2NmlZRDVCNWplb3V3cGxFaWRhUVNtdjhtOFZNNVZ3STI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVOWGt5SUh0cHU4cjBhRnVXZnR2amtCa2JLQm5Cakx2S0owQVM3NS9CblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpaUFpXL0ROcS90VTFpdzZvYjhuM3B1R2crTzZrMG9IRFBqVUk3ZmRxekE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0hWNld0S3hmVk9zZDZPM0lHWndwdEdoTU9UQ1Vwbk1Ua216aDNHNThuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHJiaGI1RUlRTzZtVXN2VFIyWXZhWGZOa2dNUGpjTGszY0pmVXNQS2JqOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFVmgvWDYwejZLTStzZnJYanpGQjZWR0JTL1ZJZS80dzdaWG0wVzgzMFhzdUNDTnQxWUFUTzEydzFHUVRTbWNmUkJLTkJIdkVyU21vcXluTCtjTGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiI1dDlXSThOems5QS9MK1UvY0plYmJPL3ZEOGxteVpiZ01hL0loQk4zTE13PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZN1dSU1h1a1NxaUt5TVFRN3lxWVZnIiwicGhvbmVJZCI6ImViMmI0ZDg3LWE1MWItNDMxOS04YzcxLTZiZTM0NTNmMWNlMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTWczMFU5SGpJOFF0Sm4wOStmbWdSNVYvdzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWxsMml1SWJxRnJWdmZjcU01YWZic3QwdUxVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhCOFdMNTZFIiwibWUiOnsiaWQiOiIyMzQ4MTQ1OTY1MjQ4OjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09yN3A3a0lFUHlLL0xvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFIZXF1VkQrdENURFJJTVo3cWtNNnhtQndHRU5VT2FIMUk1NDJaS3I3VHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InowMnhOakgwaU1QdHpKNnN1YlRTTmI5MXR3S2M1ZDlzdnpGb08xSlNIMXJtZ3dZMkJEY0prUzB1OWVXUXgzbkluWWNncEUveEMwZ2F1YWdvMHRrQmpnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBU1RkbHpORnE2Qm9DdjRFVm5nbFRyV3NjTjlvWmh6VEhoczIrRHBKTXRqZWt2UCtSbHo0dis0RHA4bWU3b2w1UnFEY0dBb3RVVkdDbkJFREZCeHJnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDU5NjUyNDg6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhaDNxcmxRL3JRa3cwU0RHZTZwRE9zWmdjQmhEVkRtaDlTT2VObVNxKzA4In19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQyODA1ODd9'; // your session id here

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
