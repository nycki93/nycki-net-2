---
title: Phposting
date: 2024-09-13
tags:
  - my-blog
---

Wow, posting on my phone kinda sucks. My current workflow:

- pull the blog source files into **termux** on android with `git pull`

- run `sshd` in termux so I can access its files as if they were on the network

- use **cx file explorer** to view the network drive, upload images, and write a text file (YOU ARE HERE)

{% image "./screenshot.png", "screenshot of this post in a text editor" %}

- go back to termux and push the updated files

- log into my server with **connectbot** and `npm run build` to compile the markdown into html with **eleventy**

- check in **firefox** to make sure it looks correct

this is fine for longer posts like this one but it does make "chosting" somewhat time consuming. Anyone have suggestions for some sort of build automation tool?
