# TapSwitch

Keeps one card as your phone's NFC default — so doors just work — and switches to
Google Wallet the moment you open it, then switches straight back.

Built for Oppo / OnePlus / ColorOS phones, which don't do this on their own.

**[Download the latest release](https://github.com/jugal1990/tapswitch-releases/releases/latest)**

## What it does

Your phone can only present one NFC card at a time. If your building's access card is
the default, tapping to pay doesn't work; if Google Wallet is the default, your door
doesn't open. Android has no "use the payment app when it's open" behaviour on these
phones, so you end up changing the setting by hand several times a day.

TapSwitch does it for you, by watching which app is on screen.

Prefer it the other way round? Reverse mode makes Google Wallet the default and lets
your access card take over only while its own app is open.

## Free for 14 days

TapSwitch runs fully for 14 days. After that it puts your **access card** back as the
NFC default and stops switching — your doors keep working exactly as they did before
you installed it. Only the automation stops.

To keep it, tap **Get the full version** in the app. Your device ID is filled in for
you; send the message and you'll get back a link that unlocks it in one tap. The code
is tied to your phone, never expires, and survives reinstalls.

## Setup

Setup needs a computer **once**, about a minute, because ColorOS blocks the permission
TapSwitch needs from being granted on the phone alone. Download
`TapSwitch-Setup.zip` from the release, then:

1. On the phone: Settings → About device → tap **Version** → tap **Build number** seven
   times.
2. Settings → Additional settings → Developer options → turn on **USB debugging**.
3. Plug the phone into the computer.
4. Run `Install-TapSwitch-Mac.command` or `Install-TapSwitch-Windows.bat`.
5. Tap **Allow** when the phone asks about USB debugging.

After that the app runs on its own. Updates never need the computer again.

## Updates

The app tells you under **About** when a newer version exists. If you'd rather it
happened automatically, point [Obtainium](https://github.com/ImranR98/Obtainium) at
this repository and it will track new releases for you.

## What's in this repository

Built APKs and release notes only — the source is private. `latest.json` is what the
in-app update check reads.
