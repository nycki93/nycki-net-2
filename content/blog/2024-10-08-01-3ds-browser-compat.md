---
title: 3DS Browser Compat
date: 2024-10-08
tags:
  - blog
  - 3ds
---

This site is now compatible with [Internet Browser for the New Nintendo 3DS](https://www.3dbrew.org/wiki/Internet_Browser)! Here's how I did it.

## Disable HTTPS Redirect for 3DS Agent String

The 3DS isn't able to use HTTPS for most certificates, and there isn't currently a hack to circumvent this. So, if the user claims to be a 3DS, this site will fall back on HTTP. Otherwise, it will redirect to HTTPS. Here's how I set up the redirect exception:

```httpd
BrowserMatch "New Nintendo 3DS" allow_http=true
RewriteEngine on
RewriteCond %{ENV:allow_http} "!=true"
RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
```

Yes, I could have used `%{HTTP_USER_AGENT}` directly in the [RewriteCond](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritecond), but setting a variable makes it easier to add more exceptions later, if I have some other ancient device that I want to make an exception for.

## Use CSS2 And Below

The 3DS browser [officially](https://en-americas-support.nintendo.com/app/answers/detail/a_id/13802/~/nintendo-3ds-internet-browser-specs) supports CSS 1, 2, and "some" of 3. My experience is that, if a feature is exclusive to CSS3, you should assume it doesn't work. In particular, there are no pseudo-elements like `:root`, no advanced selectors like `:not()`, and _no variables_, so I can't do `var(--border-color)` or anything like that.

Right now I'm content to just let those rules fail, since they seem to be failing gracefully... but later I'll want to make an alternate stylesheet specifically for the 3DS browser.

If this helped, you, leave a comment or email me! I appreciate the feedback :)
