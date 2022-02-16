<script>
    import { userName, propPrice } from "../store";
</script>


<!-- body -->
<header>
    <img id="logo" src="images/logo-kasa.svg" alt="logoForKasa">
    <div id="information">
        <img src="images/alert.png" alt="" width="25px">
        <img src="images/user.png" alt="" width="23px">
    </div>
</header>

<div id="invest">
    <h3 class="subTitle">{$userName} 님의 투자</h3>
    <div id="propBox">
        <span>예치금</span>
        <span>{$propPrice}원 <img src="images/right-arrow.png" alt="예치금 바로가기" width = "10px"></span>
    </div>
</div>


<!-- body end -->

<style>

    /* header */
    header {
        box-sizing : border-box;
    }
    #logo {
        margin : 10px;
    }
    #information {
        float : right;
        margin : 10px;
        opacity : 0.8;
    }
    #information img:nth-child(2) {
        margin-left : 10px;
    }

    /* invest */
    #invest {
        padding : 0 10px;
        /* box-sizing : border-box; */
    }
    .subTitle {
        font-weight : bold;
        margin-bottom : 15px;
    }
    #propBox {
        box-shadow : 0px 0px 5px #d5d5d5;
        padding : 14px;
    }
    #propBox span {
        opacity : 0.7;
        font-size : 14px;
        font-weight : bold;
    }

    #propBox span:nth-child(2) {
        float : right;
        opacity : 1;
    }
</style>