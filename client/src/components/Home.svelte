<script>
    import { userName, propPrice } from "../store";
    import axios from 'axios';

    // async function getSomthing() {
    //     const res = await axios.get('http://localhost:8000/user/xian0310567/account');
    //     console.log(res.data.userId)
    // }

    // getSomthing();
</script>

<!-- body -->
<header>
    <img id="logo" src="images/logo-kasa.svg" alt="logoForKasa" />
    <div id="information">
        <img
            src="images/alert.png" alt= "" width="25px"
            on:click={() => (document.location.href = "#/alarm/")}
        />
        <img src="images/user.png" alt="" width="23px" />
    </div>
</header>

<div id="invest" class="ib_wrap">
    <h3 class="subTitle">{$userName} 님의 투자</h3>
    <!-- redirect svelte에서 지원하는게 있을텐데 아직 찾지 못함 -->
    <div id="propBox" on:click={() => (document.location.href = "#/deposit/")}>
        <span>예치금</span>
        <span
            >{$propPrice}원
            <img
                src="images/right-arrow.png"
                alt="예치금 바로가기"
                width="10px"
            /></span
        >
    </div>
</div>

<div class="ib_wrap" on:click={() => (document.location.href = "#/build/")}>
    <h3>거래 가능한 빌딩</h3>
    <div class="buildi">
        <h4>대림동 하이원</h4>
        <span id="bd_price">5,290</span>
        <div class="triangle" />
        <span id="bd_vola">40 (+0.76%)</span>
        <img src="images/right-arrow.png" alt="예치금 바로가기" width="12px" />
    </div>
</div>

<!-- body end -->
<style>
    /* header */
    header {
        box-sizing: border-box;
    }
    #logo {
        margin: 10px;
    }
    #information {
        float: right;
        margin: 10px;
        opacity: 0.8;
    }
    #information img:nth-child(2) {
        margin-left: 10px;
    }

    /* invest */
    .ib_wrap {
        padding: 0 10px;
        /* box-sizing : border-box; */
    }
    .subTitle {
        font-weight: bold;
        margin-bottom: 15px;
    }
    #propBox {
        box-shadow: 0px 0px 5px #d5d5d5;
        border-radius: 5px;
        padding: 14px;
    }
    #propBox span {
        opacity: 0.7;
        font-size: 14px;
        font-weight: bold;
    }

    #propBox span:nth-child(2) {
        float: right;
        opacity: 1;
    }

    /* building */
    .buildi {
        box-shadow: 0px 0px 5px #d5d5d5;
        border-radius: 5px;
        padding: 12px;
        position: relative;
    }
    .buildi h4 {
        font-weight: bold;
        font-size: 13px;
        margin: 0;
    }
    .buildi #bd_price {
        display: block;
        font-weight: bold;
        color: #f04e4e;
    }
    .triangle {
        display: inline-block;
        border-bottom: 13px solid #f04e4e;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
    }
    .buildi #bd_vola {
        font-size: 12px;
        font-weight: bold;
        color: #f04e4e;
    }
    .buildi img {
        position: absolute;
        right: 15px;
        bottom: 45%;
    }
</style>
