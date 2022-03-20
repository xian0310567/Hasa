<header>
    <img id="backArrow" src="images/left-arrow.png" alt="" width="20px;"
        on:click={() => (document.location.href = "/")}/>
    <h1>알림</h1>
</header>

<body>
    <div id= "alarmHistory">
        <h2>'대림동 하이원' 매각 확정 안내</h2>
        <span>'대림동 하이원'이 하이원 코퍼레이션에 매각 확정됨에 따라 첨부문서와 같이 안내드립니다.</span>
        <h4>2022.03.20</h4>
    </div>
</body>

<style>
    header {
        text-align: center;
        height: 30px;
        margin-bottom: 10px;
    }
    #backArrow {
        float: left;
        margin : 0px;
        margin-left : 7px;
        margin-top: 10px;
    }

    #alarmHistory {
        border-bottom: 1px solid #b4b4b4;

    }

    #alarmHistory h2 {
        font-size: 18px;
        margin-bottom: 5px;
    }

    #alarmHistory h4 {
        margin-top: 5px;
        color: #b4b4b4;
    }

    h1 {
        display: inline-block;
        font-size: 20px;
        margin: 0;
        margin-top: 7px;
        margin-left : -30px;

    }

</style>