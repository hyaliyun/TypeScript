<template>
  <div class="divider"></div>
  <div class="join-container">
    <h2>Grow your business with Vue</h2>
    <p>
      Generate leads for new projects, boost your credibility to your
      clients, and support the long term sustainability of TypeScript and its
      ecosystem.
    </p>
    <a
      class="join"
      href="https://github.com/hyaliyun/TypeScript/discussions/2"
      target="_blank"
      >Become a partner</a
    >
  </div>
</template>

<style scoped>
.divider {
  width: 100px;
  margin: 0px auto;
  border-top: 1px solid var(--vt-c-divider-light);
}

.join-container {
  max-width: 688px;
  padding: 28px 28px 96px;
  text-align: center;
  margin: 0 auto;
}

.lead {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 18px;
}

h2 {
  font-weight: 600;
  letter-spacing: -0.5px;
  font-size: 34px;
  line-height: 1.2;
  margin: 0.5em 0 1em;
}

p {
  color: var(--vt-c-text-2);
}

.join {
  margin-top: 2em;
  display: inline-block;
  text-align: center;
  background-color: var(--vt-c-bg-mute);
  color: var(--vt-c-text-code);
  padding: 12px 24px;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.5s, color 0.5s;
}

.join:hover {
  background-color: var(--vt-c-gray-light-4);
}

.dark .join:hover {
  background-color: var(--vt-c-gray-dark-3);
}
</style>
