---
layout: layouts/base.njk
title: stickers
---
# {{ title }}

Click to copy a link to your clipboard!

<img class='sticker' src='/a/klay-blep.webp' alt='klay-blep, by djuan' title='klay-blep, by djuan'>
<img class='sticker' src='/a/klay-plead.webp' alt='klay-plead, by djuan' title='klay-plead, by djuan'>
<img class='sticker' src='/a/klay-think.webp' alt='klay-think, by djuan' title='klay-think, by djuan'>
<img class='sticker' src='/a/klay-happy.webp' alt='klay-happy, by mikifluffs' title='klay-happy, by mikifluffs'>
<img class='sticker' src='/a/klay-pet.webp' alt='klay-pet, by mikifluffs' title='klay-pet, by mikifluffs'>
<img class='sticker' src='/a/klay-point.webp' alt='klay-point, by mikifluffs' title='klay-point, by mikifluffs'>
<img class='sticker' src='/a/klay-shrug.webp' alt='klay-shrug, by mikifluffs' title='klay-shrug, by mikifluffs'>
<img class='sticker' src='/a/klay-jojo.webp' alt='klay-jojo, by queen ty' title='klay-jojo, by queen ty'>

<script>

// sticker click script by nycki 2024
const elements = document.getElementsByClassName('sticker');
for (const el of elements) {
    el.onclick = async (ev) => {
        ev.preventDefault();
        const prevFilter = el.style['filter'];
        el.style['filter'] = 'invert(1)';
        setTimeout(() => el.style['filter'] = prevFilter, 50);
        await navigator.clipboard.writeText(el.src);
    }
} 

</script>
