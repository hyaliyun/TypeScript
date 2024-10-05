<script setup lang="ts">
</script>

<template>
<div class="googlecontainer">
    <h1>找到适合您的计划，每个计划都包括</h1>
    <div class="icongrid">
    <div class="iconitem">
      <a href="https://www.252x.com" title="Docs"><img class="icons" src="./Three/docs.svg" alt="docs icons"></a>
      <span class="iconname">Docs</span>
    </div>
    <div class="iconitem">
      <a href="https://www.543x.com" title="sheets"><img class="icons" src="./Three/sheets.svg" alt="sheets icons"></a>
      <span class="iconname">Sheets</span>
    </div>
    <div class="iconitem">
      <a href="https://b.543x.com" title="slides"><img class="icons" src="./Three/slides.svg" alt="slides icons"></a>
      <span class="iconname">slides</span>
    </div>
        <div class="iconitem">
      <a href="https://c.543x.com" title="forms"><img class="icons" src="./Three/forms.svg" alt="forms icons"></a>
      <span class="iconname">forms</span>
    </div>
            <div class="iconitem">
      <a href="https://d.543x.com" title="keep"><img class="icons" src="./Three/keep.svg" alt="keep icons"></a>
      <span class="iconname">keep</span>
    </div>
            <div class="iconitem">
      <a href="https://e.543x.com" title="sites"><img class="icons" src="./Three/sites.svg" alt="sites icons"></a>
      <span class="iconname">sites</span>
    </div>
            <div class="iconitem">
      <a href="https://f.543x.com" title="drive"><img class="icons" src="./Three/drive.svg" alt="drive icons"></a>
      <span class="iconname">drive</span>
    </div>
            <div class="iconitem">
      <a href="https://www.434x.com" title="gmail"><img class="icons" src="./Three/gmail.svg" alt="gmail icons"></a>
      <span class="iconname">gmail</span>
    </div>
            <div class="iconitem">
      <a href="https://www.z2.pw" title="meet"><img class="icons" src="./Three/meet.svg" alt="meet icons"></a>
      <span class="iconname">meet</span>
    </div>
            <div class="iconitem">
      <a href="https://a.434x.com" title="calendar"><img class="icons" src="./Three/calendar.svg" alt="calendar icons"></a>
      <span class="iconname">calendar</span>
    </div>
            <div class="iconitem">
      <a href="https://b.434x.com" title="Chat_icon@1x"><img class="icons" src="./Three/Chat_icon@1x.svg" alt="Chat_icon@1x icons"></a>
      <span class="iconname">Chat</span>
    </div>
            <div class="iconitem">
      <a href="https://c.434x.com" title="docusaurus_keytar"><img class="icons" src="./Three/docusaurus_keytar.svg" alt="docusaurus_keytar icons"></a>
      <span class="iconname">jup</span>
    </div>
            <div class="iconitem">
      <a href="https://e.252x.com" title="docusaurus"><img class="icons" src="./Three/docusaurus.svg" alt="docusaurus icons"></a>
      <span class="iconname">Business</span>
    </div>
            <div class="iconitem">
      <a href="https://f.252x.com" title="GoogleMaps"><img class="icons" src="./Three/GoogleMaps.svg" alt="GoogleMaps icons"></a>
      <span class="iconname">GoogleMaps</span>
    </div>
</div>
</div>
</template>


<style>
.googlecontainer {
    max-width: 1400px;
    margin: 0 auto;
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
h1 {
    color: #202124;
    text-align: center;
    margin-bottom: 1rem;
}
.icongrid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    margin-top: 2rem;
}
.iconitem {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
}
.icons {
    width: 48px;
    height: 48px;
    margin-bottom: 0.5rem;
}
.iconname {
    font-size: 0.8rem;
    color: #5f6368;
    text-align: center;
}

@media (max-width: 768px) {
    .icongrid {
        justify-content: flex-start;
    }
    .iconitem {
        width: calc(33.333% - 1rem);
    }
}

@media (max-width: 480px) {
    .iconitem {
        width: calc(50% - 1rem);
    }
}

</style>

