$(document).ready(function () {

    let obj = {
        mutualFund: [{
            title: "mutualFund and title1",
            view: 500
        }, {
            title: "mutualFund and title2",
            view: 142
        }, {
            title: "mutualFund and title3",
            view: 4502
        }, {
            title: "mutualFund and title4",
            view: 25446
        }, {
            title: "mutualFund and title5",
            view: 250
        }, {
            title: "mutualFund and title6",
            view: 246
        }, {
            title: "mutualFund and title7",
            view: 2545
        }],

        equities: [{
            title: "equities and title1",
            view: 500
        },{
            title: "equities and title2",
            view: 142
        }, {
            title: "equities and title3",
            view: 4502
        }, {
            title: "equities and title4",
            view: 25446
        }, {
            title: "equities and title5",
            view: 250
        }, {
            title: "equities and title6",
            view: 246
        }, {
            title: "equities and title7",
            view: 2545
        }],
        realEstate: [{
            title: "realEstate and title1",
            view: 500
        }, {
            title: "realEstate and title2",
            view: 142
        }, {
            title: "realEstate and title3",
            view: 4502
        }, {
            title: "realEstate and title4",
            view: 25446
        }, {
            title: "realEstate and title5",
            view: 250
        }, {
            title: "realEstate and title6",
            view: 246
        }, {
            title: "realEstate and title7",
            view: 2545
        }],
        Stoks: [{
            title: "Stoks and title1",
            view: 500
        }, {
            title: "Stoks and title2",
            view: 142
        }, {
            title: "Stoks and title3",
            view: 4502
        }, {
            title: "Stoks and title4",
            view: 25446
        }, {
            title: "Stoks and title5",
            view: 250
        }, {
            title: "Stoks and title6",
            view: 246
        }, {
            title: "Stoks and title7",
            view: 2545
        }],
        Lnsurance: [{
            title: "Lnsurance and title1",
            view: 500
        }, {
            title: "Lnsurance and title2",
            view: 142
        }, {
            title: "Lnsurance and title3",
            view: 4502
        }, {
            title: "Lnsurance and title4",
            view: 25446
        }, {
            title: "Lnsurance and title5",
            view: 250
        }, {
            title: "Lnsurance and title6",
            view: 246
        }, {
            title: "Lnsurance and title7",
            view: 2545
        }]
    }

    console.log()
    $("#filterBox > .filter").click(function () {
        $(".filter").removeClass("filterSelect");
        $(this).addClass("filterSelect");
        var val = $(this).attr("value")
        
        var objKey = Object.entries(obj)[val][1]
        console.log(objKey)

        for(var i = 0 ; i < objKey.length; i++){
            $(".box:nth-child(" + (i+1) + ")  .desGrid  h3").text(objKey[i].title)
            $(".box:nth-child(" + (i+1) + ")  .desGrid  .view").text(objKey[i].view)
        } 
    })

})