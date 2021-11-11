---
title: Publishing Recorded Sessions
sidebar_position: 3
---

# Publishing Recorded Sessions

## Uploading to YouTube

You should have been given access to add videos to the [Valor Esports Coaching Sessions](https://www.youtube.com/channel/UCgeuWCs4UnAkUFeE5j15EHA) YouTube channel. More information will be added to this section soon.

## Naming scheme

`session_[game]_[coach]_[datetime]`

**Scroll down** for more information on the [`[game]`](#game), [`[coach]`](#coach), and [`[datetime]`](#datetime) elements.

### Game

`[game]` should be **lower-case** and one of the following:

- `rocket_league`
- `cs_go`
- `league_of_legends`
- `valorant`

### Coach

`[coach]` should be **lower-case** and is your in-game name. For example, if your in-game name is Johnny then `[coach]` should be `johnny`.

### Datetime

`[datetime]` should be an [ISO 8601 datetime representation](https://en.wikipedia.org/wiki/ISO_8601), similar to the following: `2021-11-11T01:30:00+00:00`.

The date format is `yyyy-mm-dd`, then followed by a `T` (for _time_), then followed by the time of the session in `hh:mm:ss` format (eg. 11:00 am being `11:00:00`), finally followed by the UTC time offset (eg. `+10:00` for `UTC+10`, or `-10:00` for `UTC-10`). For a list of UTC time offsets, see [this Wikipedia article](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets).
