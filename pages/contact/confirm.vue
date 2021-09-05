<template>
  <div>
    <p v-if="isInvalid">
      内容が入力されていません。
    </p>
    <template v-else>
      <p>下記の内容で送信します。</p>

      <dl>
        <dt>お名前</dt>
        <dd>{{values.yourName}}</dd>
        <dt>メールアドレス</dt>
        <dd>{{values.email}}</dd>
        <dt>ご用件</dt>
        <dd>{{values.subject}}</dd>
        <dt>お問い合わせ内容</dt>
        <dd>{{values.body}}</dd>
      </dl>

      <div>
        <BaseButton
          text="送信する"
          :action="send"
          modifier="primary"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    values: {},
    isInvalid: true,
  }),
  mounted() {
    this.values = this.$store.state.contact.values
    this.isInvalid = this.$store.state.contact.isInvalid
  },
  methods: {
    send() {
      console.dir(this.values)
    }
  }
}
</script>
