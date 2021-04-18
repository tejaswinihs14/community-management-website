<template>
    <div class="subscribe-wrap">
        <h2 class="title-heading">Subscribe to our Newsletter</h2>
        <p class="desc-content">Join over 34,000+ aspiring PMs, get curated roadmap and resources to help get started and upskill - for free!</p>
        <form @submit.prevent="subscribeEmail">
        <input type="email" v-model="email" placeholder="Your email"/>
        <button type="submit">Subscribe</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'subscribe'
    }
</script>

<style lang='scss' scoped>
 
 .subscribe-wrap{
        width: 1440px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 60px;

        .title-heading{
            color: #fff;
            font-weight: bold;
            max-width: 406px;
            font-size: 30px;
            margin: 60px auto 12px auto;
        }

        .desc-content{
            font-size: 16px;
            color:  #ABB8CC;
            max-width: 625px;
            margin-bottom: 30px;
        }

        input[type=email]{
        background: #1D2129;
        border: 1px solid #414755;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px;
        margin-right: 12px;
    }

    button[type=submit]{
        background: linear-gradient(90deg, #8462FF 0%, #7392FF 100%);
        border-radius: 4px;
        padding: 9px 30px;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
    }

    }

</style>