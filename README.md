<p align="center">
  <img src="assets/logo.svg" width="140" alt="TapSwitch">
</p>

<h1 align="center">TapSwitch</h1>

<p align="center"><em>Your door card, until you open Wallet.</em></p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/jugal1990/tapswitch-releases?style=flat-square&color=2ECC71" alt="Release">
  <img src="https://img.shields.io/github/downloads/jugal1990/tapswitch-releases/total?style=flat-square&color=4C8DFF" alt="Downloads">
  <img src="https://img.shields.io/badge/Android-12%2B-3DDC84?style=flat-square&logo=android&logoColor=white" alt="Android 12+">
  <img src="https://img.shields.io/badge/built%20for-Oppo%20%C2%B7%20OnePlus%20%C2%B7%20ColorOS-262626?style=flat-square" alt="Built for ColorOS">
  <img src="https://img.shields.io/badge/trial-14%20days%2C%20free-4C8DFF?style=flat-square" alt="14-day trial">
</p>

<p align="center">
  No settings to change · No app to open · Works with the screen off
</p>

***

## The problem

Your phone can present **one** NFC card at a time.

Set your building's access card as the default and tap-to-pay stops working. Set Google
Wallet as the default and your door stops opening. Android has no "use the payment app
while it's open" behaviour on these phones, so you end up in
*Settings → Connection & sharing → NFC → Contactless payment* several times a day.

## What TapSwitch does

Holds your **access card** as the phone's NFC default, and hands over to **Google Wallet**
the moment you open it — then hands straight back when you leave.

You never open TapSwitch. You never change a setting. Doors work, paying works.

Prefer it the other way round? **Reverse mode** makes Google Wallet the permanent default
and lets the access card take over only while its own app is on screen.

***

## Install

**[Download the latest release](https://github.com/jugal1990/tapswitch-releases/releases/latest)** — take `TapSwitch-Setup.zip`.

Setup needs a computer **once**, for about a minute. ColorOS blocks the permission
TapSwitch needs from being granted on the phone alone, so a small installer grants it over
USB. After that the app runs on its own and updates never need a computer again.

| Step | Where | What |
| --- | --- | --- |
| 1 | Phone | Settings → About device → **Version** → tap **Build number** seven times |
| 2 | Phone | Settings → Additional settings → Developer options → turn on **USB debugging** |
| 3 | Both | Plug the phone into the computer |
| 4 | Computer | Run `Install-TapSwitch-Mac.command` or `Install-TapSwitch-Windows.bat` |
| 5 | Phone | Tap **Allow** on the USB debugging prompt |

The app opens with four green checks. Make sure the switch at the top is on. That's it.

> The installer downloads Google's official `platform-tools` the first time if you don't
> already have it. Nothing else leaves your computer.

***

## Free for 14 days

TapSwitch works fully for 14 days. The clock starts the first time it's actually
running — not when you download it — so there's no rush between the two.

When the trial ends, TapSwitch puts your **access card back** as the NFC default and stops
switching. Nothing breaks: your doors work exactly as they did before you installed it. The
only thing that stops is the automation.

To keep it, tap **Get the full version** in the app. Your device ID is filled in for you;
send the message and you'll get a link back that unlocks it in one tap.

| | |
| --- | --- |
| **Tied to your phone** | A code works on one handset and nowhere else |
| **Never expires** | No subscription, no renewal, no account |
| **Survives a reinstall** | Wipe the app or reset it — your unlock comes back |
| **Works offline** | Nothing is checked with a server, ever |

Your code is shown again any time under **About**, so you can keep it somewhere safe.

***

## Updates

Install over the top. Your settings, permissions and unlock are all kept, and no computer
is involved.

The app tells you under **About** when a newer version exists. If you'd rather it happened
by itself, point [Obtainium](https://github.com/ImranR98/Obtainium) at this repository and
it will track releases for you.

***

## Good to know

- **Reverse mode and doors.** In reverse, the access card is only the default while its app
  is open, so doors need the screen on.
- **Something not working?** **About → Report a problem** attaches a diagnostic log, so a
  bug report doesn't have to start with twenty questions.
- **Built for ColorOS.** Oppo and OnePlus phones on Android 12 or newer. Other Android
  phones may work but are untested.

***

## What's in this repository

Built releases only — the app's source is private. `latest.json` is the version manifest the
in-app update check reads.
