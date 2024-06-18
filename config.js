const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://cosey71082:cosey71082@cluster0.pw14c9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/knightsqua/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/C6C6lZEgD5V69bVFW3ugHU";
global.website=process.env.GURL || "https://chat.whatsapp.com/C6C6lZEgD5V69bVFW3ugHU" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://wallpapers.com/images/hd/graceful-demon-nezuko-bm82b36v6p2d46ub.webp" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347017498108" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347017498108";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://wallpapers.com/images/hd/graceful-demon-nezuko-bm82b36v6p2d46ub.webp" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_40_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MixcbiAgICAgICAgNTksXG4gICAgICAgIDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICA3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIweUNyU1ZoVlE0Y0x6UmE1ZkVJT2FmNDhrTCtZWGZRL0ZkRnZnQTdIeWt3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjY3MDY0MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg3Q0ZEODY3REYzMUQyNjY1RDRBODQyMzI3QzY1QTQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODY3MTIwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjY3MDY0MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdBOEEwOEVBMjNBNDVERkNEQjZFQUQxRDRDMjcyMjMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODY3MTIwNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJYXVUb2Z1UFI0dWJCMEFtTDZkYmhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY0NDM1YTE4LWQxNjUtNDRmZi05MjFlLWE0MDQ1ZDY5OTYyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAzNixcbiAgICAgIDM3LFxuICAgICAgMTYwLFxuICAgICAgNzUsXG4gICAgICAxODAsXG4gICAgICAxMTMsXG4gICAgICAxODksXG4gICAgICAxMjgsXG4gICAgICA2NyxcbiAgICAgIDE1MyxcbiAgICAgIDEyMSxcbiAgICAgIDcwLFxuICAgICAgMTcwLFxuICAgICAgNTAsXG4gICAgICAyMTAsXG4gICAgICAxNDQsXG4gICAgICAxNyxcbiAgICAgIDU5LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDc4LFxuICAgICAgMjEzLFxuICAgICAgMTMxLFxuICAgICAgMjE4LFxuICAgICAgOTcsXG4gICAgICAxOTcsXG4gICAgICAxNzUsXG4gICAgICAyMTksXG4gICAgICAyMixcbiAgICAgIDEwNSxcbiAgICAgIDExMSxcbiAgICAgIDEwMSxcbiAgICAgIDE1MyxcbiAgICAgIDIyMyxcbiAgICAgIDEyNSxcbiAgICAgIDc5LFxuICAgICAgMTEyLFxuICAgICAgNTMsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzOUdFMzFRSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyNjcwNjQyOTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDUzNDY0NzQ4MTk3Mjg6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZq08J2atfCdmq3wnZCU8J2QivCdmq8g8J2QgvCdmq7wnZqr8J2atFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIbjlhVUhFTjJ1dzdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT0l0YjRZSnd1SXA3SmxvbDNQalhuYk9nWDZ3Vk1Mdm9XeUYwTS9Qd1BUbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZRGUzZnlENmlDTTJzaGpPRnBEMWVqNWRXQ2F2QXZmdStnZS9ET3FkaUhkZVhiNTV1NUh5WUF5N0h4Sm1LenMycGVhRklFb1V5VnBHVTFnR3o5M2REZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZYVY1RktGSkwxSENOWUptZGlJVno4N0UrVUdpRVlqNXlwemwwN1AxZTIwNDg5SDNmSk5mQ2JCVzBsWjFtcVpWc2lCMEZ2VVIzd1lDSzVROEZTdjBCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDI2NzA2NDI5OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODY3MTIwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY5RlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjlGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVy90bjgzbUlKN3RObE9xaXkxTUIwVkQ2N3JzdzZScUZrY1NqYnRKM0Z5ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTU4NTcyOTc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg2NzEyMDQ4MDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Sam" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Nezuko-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Sammy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
