function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")
  
    imageInput.addEventListener("change", function(){
      const reader = new FileReader()
  
      reader.addEventListener("load", ()=>{
        const uploadImage = reader.result
  
        changeMemePicture(uploadImage)
        
        // document.querySelector("#display-image").style
        // .backgroundImage = `url(${uploadImage})`
  
      })
  
      reader.readAsDataURL(this.files[0])
  
    })
  
  }
  
  async function mapImageList(){
    const memesObject = [
      {
        "name": "KAT 1",
        "path": "../pictures/kat1.jpg"
      },
      {
        "name": "KAT 2",
        "path": "../pictures/kat2.jpg"
      },
      {
        "name": "CHLOE MEME",
        "path": "../pictures/chloe.jpg"
      },
      {
        "name": "KAT 3",
        "path": "../pictures/kat3.jpg"
      },
      {
        "name": "KAT 4",
        "path": "../pictures/kat4.jpg"
      },
      {
        "name": "KAT 5",
        "path": "../pictures/kat5.jpg"
      },
      {
        "name": "KAT 6",
        "path": "../pictures/kat6.jpg"
      },
      {
        "name": "KAT 7",
        "path": "../pictures/kat7.jpg"
      },
      {
        "name": "KAT 8",
        "path": "../pictures/kat8.jpg"
      },
      {
        "name": "KAT 9",
        "path": "../pictures/kat9.jpg"
      },
      {
        "name": "KAT 10",
        "path": "../pictures/kat10.jpg"
      },
      {
        "name": "KAT 11",
        "path": "../pictures/kat11.jpg"
      },
      {
        "name": "KAT 12",
        "path": "../pictures/kat12.jpg"
      },
      {
        "name": "KAT 13",
        "path": "../pictures/kat13.jpg"
      },
      {
        "name": "KAT 14",
        "path": "../pictures/kat14.jpg"
      },
      {
        "name": "KAT 15",
        "path": "../pictures/kat15.jpg"
      },
      {
        "name": "KAT 16",
        "path": "../pictures/kat16.jpg"
      },
      {
        "name": "KAT 17",
        "path": "../pictures/kat17.jpg"
      },
      {
        "name": "KAT 18",
        "path": "../pictures/kat18.jpg"
      },
      {
        "name": "KAT 19",
        "path": "../pictures/kat19.jpg"
      },
      {
        "name": "KAT 20",
        "path": "../pictures/kat20.jpg"
      },
      {
        "name": "KAT 21",
        "path": "../pictures/kat21.jpg"
      },
      {
        "name": "KAT 22",
        "path": "../pictures/kat22.jpg"
      },
  
    ]
  
    return memesObject
  
  }
  
  async function createGallery(imageList){
    const memeSelector = document.querySelector("#memes-list")
  
    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
  }
  
  
  async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
  }
  
  
  async function main(){
    const memesImageList = await mapImageList()
    
    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[1].path)
    
  }
  
  main()