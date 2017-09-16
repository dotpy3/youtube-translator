# youtube-translator
A stupid YouTube song translator as a Chrome extension, created at Stupid Hackathon Amsterdam 2017.

Created by:
+ Char Tedesco
+ Erwin Rossen
+ Eric Gourlaouen

## How to install

+ Download the repository on your disk
+ Go to `chrome://extensions`
+ Check the **Developer Mode** option
+ Click on the **Load unpacked extension** button, select `youtube-translator` directory
+ Go to any YouTube video that has subtitles
+ ???
+ Profit!

## How it works

The extension works on any YouTube video that has a transcript, in a selection of languages (Korean, Japanese, Chinese, French, Dutch, Spanish, English). If it finds a transcript, it translates it to the language of your browser, and starts Text-to-Speech at the right timing. It takes a little time to load up, but ensures hilarity.

It doesn't exactly work every time, but you can try it on some videos, like [this K-pop video](https://www.youtube.com/watch?v=0rtV5esQT6I), [Despacito](https://www.youtube.com/watch?v=kJQP7kiw5Fk), or [this Tupac video](https://www.youtube.com/watch?v=WQ_AF28S4Oo). Sometimes, it fails because it doesn't find any transcript - sometimes, it fails because the translation API refuses to translate (we're using a free key),
