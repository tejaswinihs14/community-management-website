<template>
  <div class="home-wrap">
    <div class="hero-wrap">
      <p class="headline">Learn Product Management With Me</p>
      <p class="subtitle">Curated roadmap and resources to help get started and upskill in Product Management - for free!</p>
    </div>
    <div class="resources-wrap">
      <ResourceCard class="resource-card" v-for="resource in $store.state.resources.slice(0,3)" :key="resource" :ResouceObj="resource" />
    </div>
    <div class="btn-wrap">
        <button class="btn-browse">Browse All Resources</button>
    </div>
     <OverView />
     <Subscribe />
     <CaseStudy v-for="eachCase in 3" :key="eachCase"/> 
  </div>
</template>

<script>
import ResourceCard from '../components/ResourceCard.vue';
import OverView from '../components/OverView.vue'
import Subscribe from '../components/Subscribe.vue';
import CaseStudy from '../components/CaseStudy.vue';

export default {
  name: "Home",
  components: {
    ResourceCard,
    OverView,
    Subscribe,
    CaseStudy
  },
  created(){
   console.log(this.$store.state.resources) 
  }
};
</script>

<style lang="scss" scoped>

.home-wrap{
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  .hero-wrap{
    padding: 90px 400px 0px 400px;
    
    .headline{
      max-width: 600px;
      font-weight: bold;
      font-size: 48px;
      color: #FFF;
      text-align: center;
      margin: 0 0 20px 0;
    }

    .subtitle{
      font-size: 16px;
      text-align: center;
      color: #89909B;
      margin: unset;
      }
  }

  .resources-wrap{
    display: flex;
    margin: 50px auto 40px auto;

    .resource-card{
      margin-right: 30px;
    }
  }

  .btn-wrap{
        margin: 0px 596px 100px 596px;

        .btn-browse{
            font-weight: 500;
            font-size: 16px;
            color: #FFFFFF;
            padding: 12px 32px;
            border-radius: 4px;
            background: linear-gradient(90deg, #8462FF 0%, #7392FF 100%);
        }
    }

}

</style>