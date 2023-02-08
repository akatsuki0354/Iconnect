function message(){
    const LN = document.getElementById("LN")
    const FN = document.getElementById("FN");
    const MN = document.getElementById("MN");
    const POB = document.getElementById("POB");
    const DOB = document.getElementById("DOB");
    const CN = document.getElementById("CN");
    const SN = document.getElementById("STN");
    const GS = document.getElementById("GS");
    const Address = document.getElementById("Address");
    const LRN = document.getElementById("LRN");
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if( FN.value ===  ''|  LN.value === '' | MN.value === ''| POB.value === ''| DOB.value === ''| CN.value === ''|  SN.value === '' |  GS.value === '' | Address.value|  LRN.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            LN.value = '';
            FN.value = '';
            MN.value = '';
            POB.value = '';
            DOB.value = '';
            CN.value = '';
            SN.value = '';
            GS.value = '';
            Address.value = '';
            LRN.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}