

        let sout, j, i;
        i = j = 1;
        sout = "<table border='1'  width='1000'  cellspacing='0'  cellpadding='0'  >";
        while(i <=10){
            sout = sout + "<tr>";
            while (j<=10){
                sout =  sout + "<td>" + j + " * " + i + " = " + i * j  + "<td/>";
                j++;
            }
            sout = sout + "</tr>";
            j = 1;
            i++;
        }
        sout = sout + "<table/>";
        document.write(sout);