<template>
    <div class="overview">
        <h1 class="headline">Overview</h1>
        <div class="para-wrap">
            <p class="paragraph">Will I become a Product Manager if I read just this?  -
            Short answer: No.<br><br>

            Long answer: We believe as a PM it’s important to know the basics and frameworks that’ll help, but it’s equally important or even more to get your hands dirty. This is our attempt to put together the best content online in a structured format to help you while you look to transition or while you’re on the job but want to look for an inspiration.<br><br>

            What is this all about?<br><br>

            Well, this started off from a post we wrote last year on the best APM/ RPM programs and our mailbox was flooded with ‘how do I transition’ - ‘can you help me a mock’ - ‘can you review my resume’ we did try our best, but here’s an attempt to open it up.<br><br>

            In our opinion, there’s tons of very useful information from the very best in this field and this first version is about putting together all those articles and videos we saved up to a larger audience in a format we thought might be useful. Feel free to share resources you find useful - happy to add them in with a due credit on the upcoming ‘contributors’ page
            </p>

        </div>
        <h2 class='bottomline'>We’ve divided into a structure that you might find useful:</h2>
        <div class="content-wrap">
            <div class="structure-1">
                <h3 class="title">The Absolute Basics</h3>
                <p class="description">To help understand what Product Management is all about and whether it is for you.</p>
            </div>
            <div class="structure-1">
                <h3 class="title">The Core</h3>
                <p class="description">Once you decide (or if you’re already on your PM journey) - here’s a set that really kicks into the what, why, and most importantly the how.</p>
            </div>
            <div class="structure-1">
                <h3 class="title">The Practice</h3>
                <p class="description">Best practices anyone? Learn from the best on the do’s and dont’s and dig deeper into the ‘how’ of Product Management.</p>
            </div>
             <div class="structure-1">
                <h3 class="title">The Add-ons</h3>
                <p class="description">And at this stage you’re either set or really bored. Your mission if you choose to accept it, would now be to complete the add-ons which will show you how to become the best one.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'OverView'
    }

</script>

<style lang="scss" scoped>

.overview{
    display: flex;
    flex-direction: column;

    .headline{
        font-weight: bold;
        font-size: 48px;
        color: #FFFFFF;
        text-align: center;
        margin: 100px 612px 20px 612px;
    }
    .para-wrap{
         width:680px;
         margin: 0px 380px;

        .paragraph{
            font-size: 16px;
            color: #ABB8CC;
            width: 100%;
        }

    }
    .bottomline{
        margin: 80px auto 45px auto;
        text-align: center;
        width: 713px;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 26px;
    }

    .content-wrap{
        display: flex;
        margin: 0px 150px;

            .structure-1{
                margin: 5px 10px;
                width: 240px;

                 .title{
                     margin-bottom: 8px;
                     color: #FFFFFF;
                     font-size: 21px;
                     font-weight: bold;
                 }

                 .description{
                     font-size: 14px;
                     color:#2A2D37;
                 }
            }
    }

}

</style>