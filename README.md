<p align="center">
  <img src="assets/social-preview.png" width="760" alt="TapSwitch - your default card, until you open the other one.">
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/jugal1990/tapswitch-releases?style=flat-square&color=2ECC71" alt="Release">
  <img src="https://img.shields.io/github/downloads/jugal1990/tapswitch-releases/total?style=flat-square&color=4C8DFF" alt="Downloads">
  <img src="https://img.shields.io/badge/Android-12%2B-3DDC84?style=flat-square&logo=android&logoColor=white" alt="Android 12+">
  <img src="https://img.shields.io/badge/built%20for-Oppo%20%C2%B7%20ColorOS-262626?style=flat-square" alt="Built for ColorOS">
  <img src="https://img.shields.io/badge/14%20days%20free%2C%20then%20US%244.99-4C8DFF?style=flat-square" alt="14 days free, then US$4.99 once">
</p>

<h3 align="center">
  <a href="https://jugal1990.github.io/tapswitch-releases/">Download and set up &rarr;</a>
</h3>

<p align="center">
  One file, 6.5&nbsp;MB &middot; no computer &middot; no account &middot; nothing to open again
</p>

***

## The problem

Your phone can present **one** NFC card at a time. Set your building's access card as the
default and tap-to-pay stops working. Set Google Wallet as the default and your door stops
opening.

## What TapSwitch does

You pick which of your two cards rests in the phone's NFC slot. TapSwitch holds it there all
day, and hands the slot to the other card the moment that card's app comes to the front.
Leave that app and the slot goes straight back.

Rest on your **access card** and doors behave exactly as they always did, with Google Wallet
borrowing the slot while you pay. Rest on **Google Wallet** and tap-to-pay is always armed,
with your access card taking the slot only while its own app is on screen. Both directions
work the same way.

If your screen times out while the borrowing app is open, TapSwitch keeps that card ready for
about a minute, so waking the phone at the till still works.

You never open TapSwitch after setup.

***

## Install

Download **`TapSwitch.apk`** from the
[download page](https://jugal1990.github.io/tapswitch-releases/), open it, and setup starts on
its own.

**No computer, no cable, no scripts.** Android hides the switch TapSwitch needs behind
Developer options, so the app walks you through turning that on, names the exact row to tap in
your phone maker's own words, and turns everything back off behind you. It takes about eight
taps.

The [download page](https://jugal1990.github.io/tapswitch-releases/#file) also lists the file's
size, version and SHA-256, so you can check the download before you install it. TapSwitch is
not on the Play Store, so nothing has checked it for you.

***

## Price

Free for 14 days, then **US$4.99, paid once**. Not a subscription, and there is no account to
make.

The countdown starts when the app is actually working, not when you download it. Tap **Get the
full version**, the checkout opens carrying your device ID, and your unlock code is on screen
the moment the payment clears, with a copy by email.

| | |
| --- | --- |
| **Tied to your phone** | A code works on one handset and nowhere else |
| **Never expires** | No subscription, no renewal, no account |
| **Survives a reinstall** | Uninstall the app or clear its data, your unlock returns |
| **No server** | Your unlock is verified on the phone, never checked online |

**No refunds.** The 14 days are free and nothing is held back in them, so you find out whether
TapSwitch works on your phone before you pay rather than after. When the trial ends, TapSwitch
puts your **access card** back as the NFC default and stops switching, so your doors keep
working exactly as they did before you installed it.

Your code is shown again any time under **About**. A factory reset gives the phone a new
identity, so that does need a fresh code: send the receipt and you get one.

***

## Updates

Install over the top. Your settings, permissions and unlock are all kept, and no computer is
involved.

TapSwitch looks for a newer version once a day and puts a quiet notice in your notification
shade. No sound, no vibration, no banner across your screen, because an app that promises you
never have to open it should not shout. Tap the notice and it tells you what changed and hands
you the file. The same thing sits under **About** whenever you want to look.

If you would rather a tool did it, point [Obtainium](https://github.com/ImranR98/Obtainium) at
this repository and it will track releases for you.

***

## Before you download

Honest about what it does not do:
**[What it does not do](https://jugal1990.github.io/tapswitch-releases/#limits)**, on the
download page. The short version is that an access card needs the screen on, the borrowing card
needs its own app in front, TapSwitch runs in the main profile only, and Oppo ColorOS is the
only thing it has been tested on.

Something not working? **About**, then **Report a problem**, writes a diagnostic log into the
message for you.

***

## What's in this repository

Built releases only. The app's source is private.

| File | What it is |
| --- | --- |
| `TapSwitch.apk` | The app itself, on every release. The only file attached on purpose; GitHub adds the two source zips by itself, and they hold this page, not the app. |
| `latest.json` | The version manifest the in-app update check reads. |
| `index.html`, `assets/` | The download page, served by GitHub Pages. |
| `u/` | The page an unlock link lands on. |

TapSwitch is not affiliated with Google or Oppo.
