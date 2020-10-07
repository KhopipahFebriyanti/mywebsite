alert('Selamat datang di Web Saya...')

//kita buat sebuah fungsi yang akan memunculkan modal
const showModal = () => {

    //kita ambil elemen yang akan ditampilkan
    let modal = document.querySelector('.modalMenu')

    //kita atur style dari elemen tersebut
    //jadkan dia terlihat
    modal.style.display = 'flex'
}

//kita buat fungsi untuk hide elemen
const hideModal = () => {
    //kita ambil elemen yang akan ditampilkan
    let modal = document.querySelector('.modalMenu')

    //kita atur style dari elemen tersebut
    //jadikan dia terlihat
    modal.style.display = 'none'
}