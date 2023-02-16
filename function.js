let count=0;
        function inc(){
            let h1Tag=document.querySelector('h1')
            count=count+1;
            h1Tag.innerText=count
        }
        function rst(){
            let h1Tag=document.querySelector('h1')
            count=0
            h1Tag.innerText=count
        }
        function dec(){
            let h1Tag=document.querySelector('h1')
            count=count-1;
            h1Tag.innerText=count
        }