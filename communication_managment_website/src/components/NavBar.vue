<template>
    <div class="NavBar">
        <router-link to="/" class="logo-text">Learn PM With Me</router-link> 
        <div class="link-wrap">
            <router-link to="/resources" class="route-link">Resources</router-link> 
            <router-link to="/case-studies" class="route-link">CaseStudies</router-link>
            <form @submit.prevent="subscribeEmail">
            <input type="email" v-model="email" placeholder="Your email"/>
            <button type="submit">Subscribe</button>
            </form>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data(){
            return{
                email: ''
            }
        },
        methods:{
            subscribeEmail() {
                console.log(this.email)
            }
        }
    }
</script>

<style lang="scss" scoped>

.NavBar{
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 12px 0;

    .logo-text{
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
    }

    .link-wrap{
        display: flex;
        justify-content: space-between;
        width: 50%;
        align-items: center;
    }

    .route-link{
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
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