function uploadImage(){
    var file = document.getElementById('attendance-image-uploader').files[0];
    if(file){
      var formData = new FormData();
      formData.append('file', file);
      fetch('http://localhost:8000/update_attendance', {
               method: 'POST',
               body: formData,
             })
             .then(response => {
               console.log(response);
             })
             .catch(error => {
               console.error(error);
             });
    }
}


