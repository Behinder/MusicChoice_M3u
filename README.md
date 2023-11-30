# MusicChoice M3U playlist generator for DirecTV

Playlist generator of MusicChoice channels for using with VLC or Channels DVR.This is beta
version. 

TODO:
[ ] Capturing correct network url requests
[ ] Find another URL for TVE authorisation simulating mobile device
[ ] Rewrite using non-vulnerable dependencies

Limitations:
- All links are valid only for ~4 hours
- No Artist/Track display information

Requirements:
- NodeJS
- Google Chrome installed
- written for MacOS but should work also for Linux (change path to Chrome accordingly)

Usage:

Directv credentials needs to be stored in .env file in same directory as app.js.
```
npm install
```
to install and `node app.js` to run.
