<template>
  <div>

    <dl>
      <dt>お名前</dt>
      <dd>
        <input
          name="yourName"
          type="text"
          aria-label="お名前"
          v-model="$v.values.yourName.$model"
        >
        <BaseAlert
          v-if="$v.values.yourName.$error"
          message="お名前は必ずご入力ください。"
          modifier="error"
        />
      </dd>
      <dt>メールアドレス</dt>
      <dd>
        <input
          name="email"
          type="email"
          aria-label="メールアドレス"
          v-model="$v.values.email.$model"
        >
        <BaseAlert
          v-if="$v.values.email.$error && !$v.values.email.required"
          message="メールアドレスは必ずご入力ください。"
          modifier="error"
        />
        <BaseAlert
          v-if="$v.values.email.$error && !$v.values.email.email"
          message="不完全なメールアドレスです。"
          modifier="error"
        />
      </dd>
      <dt>ご用件</dt>
      <dd>
        <label>
          <input
            name="subject"
            type="radio"
            aria-label="案件のご相談"
            value="案件のご相談"
            v-model="$v.values.subject.$model"
          >
          案件のご相談</label>
        <label>
          <input
            name="subject"
            type="radio"
            aria-label="ご意見・ご質問"
            value="ご意見・ご質問"
            v-model="$v.values.subject.$model"
          >
          ご意見・ご質問</label>
        <label>
          <input
            name="subject"
            type="radio"
            aria-label="その他のお問い合わせ"
            value="その他のお問い合わせ"
            v-model="$v.values.subject.$model"
          >
          その他のお問い合わせ</label>
        <BaseAlert
          v-if="$v.values.subject.$error"
          message="ご用件を選択してください。"
          modifier="error"
        />
      </dd>
      <dt>本文
      </dt>
      <dd>
        <textarea
          name="text"
          aria-label="本文"
          cols="40"
          rows="10"
          v-model="$v.values.body.$model"
        >
        </textarea>
        <div>
          現在の字数
          <span
            :class="{
              over: !$v.values.body.maxLength || !$v.values.body.minLength
            }">{{bodyCount}}</span>
          /
          最大
          {{$v.values.body.$params.maxLength.max}}
        </div>
        <BaseAlert
          v-if="$v.values.body.$error && !$v.values.body.required"
          message="本文をご入力ください。"
          modifier="error"
        />
        <BaseAlert
          v-if="$v.values.body.$error && !$v.values.body.minLength"
          message="本文は最低でも10文字必要です。"
          modifier="error"
        />
        <BaseAlert
          v-if="$v.values.body.$error && !$v.values.body.maxLength"
          message="本文の最大文字数は400字です。"
          modifier="error"
        />
      </dd>
    </dl>

    <div>
      <label><input
        type="checkbox"
        aria-label="同意"
        v-model="isAgreed"> プライバシーポリシーを確認し理解しました。</label>
    </div>

    <div v-if="isAbleToSend">
      <BaseButton
        text="送信内容を確認する"
        :action="toConfirm"
        modifier="primary"
      />
    </div>

  </div>
</template>

<script>
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    values: {
      yourName: '',
      email: '',
      subject: '',
      body: '',
    },
    isAgreed: false,
  }),
  created() {
    // 初期値としてストアに格納されている値を設定
    this.values = Object.assign({}, this.values, this.$store.state.contact.values)
  },
  computed: {
    isAbleToSend() {
      return this.isAgreed
    },
    bodyCount() {
      return this.values.body.length
    }
  },
  validations: {
    values: {
      yourName: {
        required,
      },
      email: {
        required,
        email,
      },
      subject: {
        required,
      },
      body: {
        required,
        maxLength: maxLength(400),
        minLength: minLength(10),
      },
    },
  },
  methods: {
    storeValue() {
      this.$store.commit('contact/setValues', this.values)
      this.$store.commit('contact/setInvalid', this.$v.$invalid)
    },
    toConfirm() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.error()
      } else {
        this.storeValue(this.values)
        this.$router.push('./confirm/')
      }
    },
    error() {
      console.error(this.values)
    }
  },
}
</script>

<style lang="scss" scoped>
.over {
  color: #c00;
}
</style>
