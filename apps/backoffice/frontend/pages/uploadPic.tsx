const UploadPic = () =>{
  return(
    <form action="/upload" method="post" encType="multipart/form-data">
      <input type="file" name="image" id="file" /> <br/>
      <input type="submit" value="Upload pic" />
    </form>
  )
}

export default UploadPic