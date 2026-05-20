# Instagram Follow Back Checker

A small browser script that compares the accounts you follow with the accounts that follow you back on Instagram.

By [dongt10](https://github.com/dongt10).

## What it does

- Loads your Instagram follower and following lists from the currently signed-in browser tab.
- De-duplicates usernames across paginated responses.
- Prints the accounts you follow that do not follow you back.
- Runs locally in your browser session.

It does not follow, unfollow, message, post, or change your Instagram account.

## Quick Start

1. Open Instagram in a desktop browser and sign in.
2. Go to your profile page.
3. Open DevTools Console:
   - macOS: `Command + Option + J`
   - Windows/Linux: `Ctrl + Shift + J`
4. Paste the script from [src/check-follow-back.js](src/check-follow-back.js).
5. Press Enter.

The page will be replaced with a plain text report.

Refresh the page to return to Instagram.

## Bookmarklet

If you prefer a bookmarklet, use the one-line version in [bookmarklet.js](bookmarklet.js).

Create a new bookmark, paste the contents of `bookmarklet.js` into the URL field, then click that bookmark while you are on your Instagram profile page.

## Notes

Instagram may show profile counts that differ slightly from the loaded list counts because of stale counts, unavailable accounts, or pagination quirks. The script prints both the profile counts and the loaded unique counts so you can see that difference.

## Safety

Only run browser-console scripts you trust. This script is intentionally plain JavaScript with no dependencies so it can be inspected before running.

## License

MIT
