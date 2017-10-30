<template>
    <div class="login1">

        <ziksang-count-down :start='start' @countDown ='start=false' @click.native='sendCode'></ziksang-count-down>

    </div>
</template>
<script>

import ZiksangCountDown from './ZiksangCountDown'

    export default {
        name:'login1',
        components: {
          ZiksangCountDown
        },
        data () {
            return {
                start : false
            }
        },
        methods : {
            sendCode (value) {

                //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
                this.start = true
            }
        }
    }
</script>
