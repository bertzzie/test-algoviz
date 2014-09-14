(function () {
    "use strict";
    var av, code, arr;
    var BubbleSort = function () {
        var i, j, vari, varj;

        av.umsg("Inisialisasi variabel");
        code.setCurrentLine(2);
        av.step();

        vari = av.variable(i, {name: "i", label: "Nilai i:"})
        varj = av.variable(j, {name: "j", label: "Nilai j:"});
        vari.show();
        varj.show();

        for (i = 0; i < arr.size(); i++) {
            vari.value(i);

            av.umsg("Perulangan luar: pembaharuan nilai i");
            code.setCurrentLine(4);
            av.step();

            av.umsg("Perulangan dalam: pembaharuan nilai j");
            code.setCurrentLine(5);
            av.step();

            for (j = i + 1; j < arr.size(); j++) {
                varj.value(j);

                av.umsg("Bandingkan nilai arr[i] dan arr[j]");
                code.setCurrentLine(6);
                arr.highlight([i, j]);
                av.step();

                if (arr.value(i) < arr.value(j)) {
                    av.umsg("Tukar nilai arr[i] dan arr[j]");
                    code.setCurrentLine(9);
                    code.highlight([7,8,9]);

                    arr.swap(i, j);
                    
                    av.step();
                }


                code.unhighlight([7,8,9]);
                av.umsg("Kembali ke perulangan dalam");
                code.setCurrentLine(5);
                arr.unhighlight();
                av.step();
            }

            av.umsg("Kembali ke perulangan luar");
            code.setCurrentLine(10);
            av.step();
        }

        arr.unhighlight(true);
        code.setCurrentLine(11);
        av.step();
    };

    //var Run = function () {
        av   = new JSAV("container", {title: "Bubble Sort"}),
        code = av.code({url: "http://bertzzie.github.io/test-algoviz/code/2-bubble-sort.js"}),
        arr  = av.ds.array([10, 7, 3, 6, 4, 8, 5, 9], {indexed: true, layout: "bar"});

        av.umsg("Starting bubble sort");
        av.displayInit();
        BubbleSort();
        av.recorded();
    //};

    //var btnRun = document.querySelector("#run");
    //btnRun.addEventListener("click", Run);
})();
