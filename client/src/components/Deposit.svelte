<script>
    import { propPrice } from "../store";
</script>

<header>
    <img id="backArrow" src="images/left-arrow.png" alt="" width=20px;
        on:click={()=>document.location.href='/'}>
</header>

<div id="deposit">
    <h5>예치금</h5>
    <h2>{$propPrice} 원</h2>
    <div id="tradeBox">
        <button>입금</button>
        <button>출금</button>
    </div>
</div>

<div id="depoHistory">
    <h5>거래내역</h5>
    <div id="historyBlock">
        <div id="name">
            <h6>예치금</h6>
            <span>출금 2월 21일 12:01</span>
        </div>
        <div id="price">
            <h6>-12,707 원</h6>
            <span>0원</span>
        </div>
    </div>
</div>

<style>
    #backArrow {
        margin : 10px;
        margin-left : 7px;
    }
    #deposit {
        padding : 10px;
        margin-top : 5px;
    }
    #deposit h2, #deposit h5 {
        margin : 0;
        margin-bottom : 5px;
    }
    #tradeBox {
        margin-top : 20px;
        text-align : center;
    }
    #tradeBox button {
        width : 47%;
        height : 40px;
        margin : 0 2px;
    }
    #depoHistory {
        padding : 10px;
    }
    #historyBlock {
        height : 60px;
        border-bottom : 1px solid #c5c5c5;
        /* border : 1px solid; */
    }
    #historyBlock #name, #price {
        float : left;
        width : 50%;
    }
    #historyBlock h6 {
        margin : 5px;
        font-size : 15px;
        font-weight : bold;
    }
    #historyBlock span {
        margin : 5px;
        font-size : 11px;
        font-weight : bold;
        color : #919191;
        display : block;
    }
    #historyBlock #price * {
        text-align : right;
    }
</style>