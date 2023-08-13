<template>
  <div class="container">
    <div class="contact">
      <h2 class="contact__title">Мои контакты</h2>
      <div class="contact__box">
        <div class="contact__right">
          <p class="contact__right-title">Связаться со мной</p>
          <div class="contact__right-btns">
              <a href="tel:+998977098286">
            <button class="contact__right-btn">
                <fa :icon="['fas', 'phone']" class="contact__right-icon" />
                <span>Phone </span>
            </button>
              </a>
              <a href="https://t.me/Shovokhobova">
            <button class="contact__right-btn">
              <fa :icon="['fab', 'telegram']" class="contact__right-icon" />
              <span> Telegram</span>
            </button>
            </a>
            <button class="contact__right-btn">
              <fa :icon="['fab', 'instagram']" class="contact__right-icon" />
              <span> Instagram</span>
            </button>
              <a href="mailto:munirashovokhobova@gmail.com">
            <button class="contact__right-btn">
                <fa :icon="['fas', 'envelope']" class="contact__right-icon" />
                <span> Mail</span>
            </button>
              </a>
          </div>
        </div>
        <div class="contact__left">
          <img src="../assets/images/calling.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>