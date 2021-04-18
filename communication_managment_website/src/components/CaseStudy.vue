<template>
    <div class="case-study">
        <h1 class="heading">Case Studies</h1>
        <div class="card-wrap">
             <image  class="image-section" src="@src/airbnb.png" />
            <div class="content-section">
            <div class="content-head">AirBnb - Reducing Customer Churn</div>
            <div class="paragraph">Every PM aims to minimise their customer churn, but how do you do it? Read this case study on AirBnB, and how it reduces churn through personalisation. Use this case study to enhance your understanding of user psychology, and design principles.</div>
            <div class="bottom-wrap">
                <button class='btn-bottom'>Late Stage</button>
                <a href="/"/>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'CaseStudy'
    }
</script>

<style lang="scss" scoped>

.case-study{
    display: flex;
    flex-direction: column;
    align-items: center;

    .heading{
        color: #FFFFFF;
        font-weight: bold;
        font-size: 48px;
    }

    .card-wrap{
        background: #1D2129;
        width: 900px;
        min-height: 272px;
        padding: 16px 16px;

            .image-section{
                width: 240px;
                max-height: 240px;
                background: #FFFFFF;
                border-radius: 2px;
            }

            .content-section{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 30px 100px 11px 20px;

                .content-head{
                    width: 404px;
                    color: #FFFFFF;
                    font-weight: bold;
                    font-size: 21px;
                }

                .paragraph{
                    font-size: 16px;
                    color: #FFFFFF;
                    width: 400px;
                }
            }
    }


}

</style> 