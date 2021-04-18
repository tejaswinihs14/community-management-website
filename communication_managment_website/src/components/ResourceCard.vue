<template>
    <div class="card-wrapper">
        <div class="top-section">
            <div class="tags-wrap">
                <div class="tag">The Basics</div>
                <div class="tag">{{ResouceObj.type}}</div>
            </div>
            <p class="title">
                {{ResouceObj.title}}
            </p>
        </div>
        <div class="bottom-section">
            <p class="desc">{{ResouceObj.desc}}</p>
            <div class="bottom-tag">
                <div class="btn-tag">{{ResouceObj.author}}</div>
                <div class="btn-tag">Learn More</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ResourceCard',
        props:['ResouceObj']
    }
</script>

<style lang="scss" scoped>

.card-wrapper{
    width: 360px;
    min-height: 480px;

    .top-section{
        background: linear-gradient(119.48deg, #AA32E4 0%, #4A02FF 97.91%);
        border-radius: 2px;
        padding: 30px;
        display: flex;
        flex-direction: column ;
        justify-content: space-between;

        .tags-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .tag{
                color: #2A2D37;
                background-color: #fff;
                border-radius: 2px;
                padding: 6px 18px;
            }
        }
        .title{
            font-weight: bold;
            font-size: 21px;
            color: #FFFFFF;
            margin: 106px 0 0 0;
        }

    }

    .bottom-section{
        background: #2A2D37;
        padding: 30px;

        .desc{
            font-size: 16px;
            color: #fff;
            margin-bottom: 67px;

        }
        .bottom-tag{
             display: flex;
             justify-content: space-between;

            .btn-tag{
                color: #ABB8CC;
                font-size: 14px;
            }
        }
    }

}


</style>